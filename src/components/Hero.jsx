import { useEffect, useRef } from 'react'
import { Facebook, Instagram, Dribbble, Linkedin } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const logoTrackRef = useRef(null)

  useEffect(() => {
    // 1. INJECT STYLES
    if (!document.getElementById('vornix-hero-style')) {
      const style = document.createElement('style')
      style.id = 'vornix-hero-style'
      style.innerHTML = `
        /* BASE & LAYOUT */
        .hero { position: relative; min-height: 100vh; background: #050505; color: #fff; overflow: hidden; font-family: 'Inter', system-ui, sans-serif; display: flex; justify-content: center; align-items: center; }
        .hero-brand-bg { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: clamp(100px, 20vw, 400px); font-weight: 800; letter-spacing: -0.04em; color: rgba(255,255,255,0.03); z-index: 0; pointer-events: none; white-space: nowrap; }
        
        /* SPLINE */
        .hero-spline { position: absolute; inset: 0; z-index: 1; pointer-events: auto; }
        .hero-spline iframe { width: 100%; height: 100%; border: none; }
        
        /* GRID LAYOUT */
        .hero-content { position: relative; z-index: 10; width: 100%; height: 100vh; padding: 120px 5vw 40px; display: grid; grid-template-columns: 1fr 1fr; pointer-events: none; }
        .col-left, .col-right { display: flex; flex-direction: column; justify-content: center; pointer-events: none; }
        .col-left { justify-content: space-between; }
        .col-right { align-items: flex-end; text-align: right; padding-top: 10vh; }

        /* TITLE */
        .hero-title { pointer-events: auto; font-size: clamp(56px, 7vw, 120px); line-height: 0.95; font-weight: 500; letter-spacing: -0.03em; }
        
        /* IMPACT WORD - STATIC */
        .impact { 
          display: block; 
          margin-top: 10px; 
          font-style: italic; 
          background: linear-gradient(120deg, #888, #fff, #888);
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
        }

        /* WE DO & AUDIO MARKETING */
        .we-do-container { margin-bottom: 20px; pointer-events: auto; }
        .we-do-label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.5); margin-bottom: 16px; display: block; }
        .we-do-list { display: flex; flex-direction: column; gap: 8px; font-size: 15px; color: rgba(255,255,255,0.8); margin-bottom: 30px; }
        .we-do-item { display: flex; align-items: center; gap: 8px; }
        .slash { color: rgba(255,255,255,0.3); }
        
        .noisy { display: inline-block; will-change: transform, text-shadow; transition: transform 0.05s ease; } 

        /* MAGNETIC LOGOS */
        .logo-area { width: 100%; max-width: 300px; overflow: hidden; mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); pointer-events: auto; }
        .logo-track { display: flex; gap: 40px; animation: loop 20s linear infinite; padding: 20px 0; }
        .logo-track img { height: 28px; opacity: 0.5; filter: grayscale(100%) brightness(3); transition: transform 0.25s ease, opacity 0.3s; cursor: pointer; }
        .logo-track img:hover { opacity: 1; }
        @keyframes loop { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        /* GSAP TEXT REVEAL */
        .mission-text { max-width: 450px; font-size: 24px; line-height: 1.5; margin-bottom: 60px; font-weight: 500; pointer-events: auto; }
        .mission-text small { display: block; font-size: 12px; margin-bottom: 12px; color: rgba(255,255,255,0.4); }
        .mission-text span { display: inline-block; margin-right: 5px; } 

        /* CONTACT */
        .contact-section { display: flex; flex-direction: column; align-items: flex-end; gap: 20px; pointer-events: auto; }
        .contact-label { font-size: 14px; font-weight: 600; color: #fff; }
        .social-icons { display: flex; gap: 16px; }
        .social-btn { width: 40px; height: 40px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; color: #fff; transition: all 0.3s ease; cursor: pointer; }
        .social-btn:hover { background: #fff; color: #000; border-color: #fff; }
        .social-btn svg { width: 18px; height: 18px; }

        @media (max-width: 900px) {
          .hero-content { grid-template-columns: 1fr; padding-top: 100px; text-align: center; }
          .col-left { align-items: center; justify-content: flex-start; margin-bottom: 40px; }
          .col-right { align-items: center; text-align: center; justify-content: flex-start; }
          .mission-text { text-align: center; font-size: 20px; }
          .contact-section { align-items: center; }
        }
      `
      document.head.appendChild(style)
    }

    // === DELAYED ENTRY ANIMATION ===
    gsap.set(['.hero-title', '.we-do-container', '.mission-text', '.contact-section'], {
      autoAlpha: 0,
      y: 40,
      filter: 'blur(10px)'
    })

    const entryCtx = gsap.context(() => {
      gsap.to(['.hero-title', '.we-do-container', '.mission-text', '.contact-section'], {
        autoAlpha: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        delay: 2.5,
        stagger: 0.2,
        ease: 'power3.out',
        clearProps: 'filter'
      })
    })

    // === SPLINE SCROLL SYNC ===
    const iframe = document.querySelector('.hero-spline iframe')
    const onSplineScroll = () => {
      if (!iframe) return
      const scrollY = window.scrollY
      const maxScroll = window.innerHeight * 2
      const progress = Math.min(scrollY / maxScroll, 1)
      iframe.contentWindow?.postMessage({ type: 'spline-scroll', progress }, '*')
    }
    window.addEventListener('scroll', onSplineScroll)

    // === GSAP REVEAL ===
    const scrollCtx = gsap.context(() => {
      gsap.fromTo(
        '.mission-text span',
        { color: 'rgba(255,255,255,0.1)' },
        {
          color: '#ffffff',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.mission-text',
            start: 'top 80%',
            end: 'bottom 40%',
            scrub: 1,
          },
        }
      )
    })

    // === AUDIO REACTIVE ===
    let audioCtx, analyser, source, rafId
    const startAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        audioCtx = new (window.AudioContext || window.webkitAudioContext)()
        analyser = audioCtx.createAnalyser()
        analyser.fftSize = 256
        source = audioCtx.createMediaStreamSource(stream)
        source.connect(analyser)

        const data = new Uint8Array(analyser.frequencyBinCount)
        const marketingText = document.querySelector('.noisy')

        const animateAudio = () => {
          analyser.getByteFrequencyData(data)
          const avg = data.reduce((a, b) => a + b, 0) / data.length
          const intensity = Math.min(avg / 50, 1)

          if (marketingText) {
            marketingText.style.transform = `translate(${intensity * 6}px, ${-intensity * 6}px) skew(${intensity * 10}deg)`
            marketingText.style.textShadow = `${intensity * 4}px 0 red, ${-intensity * 4}px 0 cyan`
          }
          rafId = requestAnimationFrame(animateAudio)
        }
        animateAudio()
      } catch (err) {
        console.warn("Audio permission not granted or error:", err)
      }
    }
    startAudio()

    // === MAGNETIC LOGO LOOP ===
    const logos = document.querySelectorAll('.logo-track img')
    logos.forEach(logo => {
      logo.addEventListener('mousemove', (e) => {
        const rect = logo.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        logo.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px) scale(1.2)`
      })
      logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'translate(0,0) scale(1)'
      })
    })

    // CLEANUP
    return () => {
      window.removeEventListener('scroll', onSplineScroll)
      entryCtx.revert()
      scrollCtx.revert()
      if (audioCtx) audioCtx.close()
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  const missionWords = [
    "We","Build","Brands,","websites","and",
    "digital","experience","with","intension,","clarity","and","care"
  ]
  
  // Tech Stack Logos (CDN Links)
  const techStack = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",      // React
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", // TypeScript
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", // Tailwind
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",   // Node
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"       // Figma
  ];

  return (
    <section className="hero">
      <div className="hero-brand-bg">VORNIX</div>
      
      <div className="hero-spline">
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-CP8Ps97dPfIbgRhRrKko1dC6/"
          allow="autoplay; fullscreen"
          title="Robot Character"
        />
      </div>

      <div className="hero-content">
        <div className="col-left">
          <h1 className="hero-title">
            Create
            <span className="impact">Impactful</span>
          </h1>

          <div className="we-do-container">
            <span className="we-do-label">We do</span>
            <div className="we-do-list">
              <div className="we-do-item">
                Brand Identity <span className="slash">/</span> UI/UX Design
              </div>
              <div className="we-do-item">
                Development <span className="slash">/</span> <span className="noisy">Marketing</span>
              </div>
            </div>

            <div className="logo-area">
              <div className="logo-track" ref={logoTrackRef}>
                {/* Original Set */}
                {techStack.map((url, i) => (
                  <img key={`orig-${i}`} src={url} alt="tech-logo" />
                ))}
                
                {/* Duplicate Set for Loop */}
                {techStack.map((url, i) => (
                  <img key={`dup-${i}`} src={url} alt="tech-logo" />
                ))}
                
                {/* Triple Set for Smoother Infinite Loop on wide screens */}
                {techStack.map((url, i) => (
                  <img key={`trip-${i}`} src={url} alt="tech-logo" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-right">
          <div className="mission-text">
            <small>© Vornix Agency</small>
            {missionWords.map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </div>

          <div className="contact-section">
            <div className="contact-label">Contact Us</div>
            <div className="social-icons">
              <div className="social-btn"><Facebook /></div>
              <div className="social-btn"><Instagram /></div>
              <div className="social-btn"><Dribbble /></div>
              <div className="social-btn"><Linkedin /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}