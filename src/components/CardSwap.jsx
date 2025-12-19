import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef, useCallback } from 'react';
import gsap from 'gsap';
import './CardSwap.css';

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div ref={ref} {...rest} className={`card ${customClass ?? ''} ${rest.className ?? ''}`.trim()} />
));
Card.displayName = 'Card';

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children
}) => {
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);
  const isAnimating = useRef(false); // Prevents spam-clicking

  // --- SWAP LOGIC ---
  const swap = useCallback(() => {
    if (order.current.length < 2 || isAnimating.current) return;
    isAnimating.current = true;

    const [front, ...rest] = order.current;
    const elFront = refs[front].current;
    
    // Kill existing animations on these elements to prevent conflicts
    gsap.killTweensOf(elFront);
    rest.forEach(idx => gsap.killTweensOf(refs[idx].current));

    const tl = gsap.timeline({
        onComplete: () => { isAnimating.current = false; }
    });
    tlRef.current = tl;

    // 1. Drop Front Card
    tl.to(elFront, {
      y: '+=500',
      duration: config.durDrop,
      ease: config.ease
    });

    // 2. Move Others Forward
    tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
    rest.forEach((idx, i) => {
      const el = refs[idx].current;
      const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
      tl.set(el, { zIndex: slot.zIndex }, 'promote');
      tl.to(
        el,
        {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          duration: config.durMove,
          ease: config.ease
        },
        `promote+=${i * 0.15}`
      );
    });

    // 3. Return Front Card to Back
    const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
    tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
    
    tl.call(() => {
        gsap.set(elFront, { zIndex: backSlot.zIndex });
    }, undefined, 'return');
    
    tl.to(elFront, {
        x: backSlot.x,
        y: backSlot.y,
        z: backSlot.z,
        duration: config.durReturn,
        ease: config.ease
    }, 'return');

    // Update Order ref
    order.current = [...rest, front];
  }, [cardDistance, verticalDistance, config, refs]);

  // --- MANUAL CLICK HANDLER ---
  const handleManualSwap = useCallback((e) => {
    // Stop the auto-timer so it doesn't double-swap
    clearInterval(intervalRef.current);
    // Perform swap
    swap();
    // Restart timer (optional, if you want it to resume auto-play)
    intervalRef.current = window.setInterval(swap, delay);
  }, [swap, delay]);


  // --- INITIAL SETUP ---
  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));

    // Start Auto-Play
    intervalRef.current = window.setInterval(swap, delay);

    // Hover Pause Logic
    if (pauseOnHover) {
      const node = container.current;
      const pause = () => {
        // Don't actually pause the timeline (stops mid-air), just stop the interval
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
      return () => {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
        clearInterval(intervalRef.current);
      };
    }
    
    return () => clearInterval(intervalRef.current);
  }, [swap, delay, pauseOnHover, refs, skewAmount, cardDistance, verticalDistance]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, cursor: 'pointer', ...child.props.style }, // Added cursor pointer
          onClick: (e) => {
            child.props.onClick?.(e);
            onCardClick?.(i);
            handleManualSwap(e); // Trigger swap on click
          }
        })
      : child
  );

  return (
    <div ref={container} className="card-swap-container" style={{ width, height }}>
      {rendered}
    </div>
  );
};

export default CardSwap;