import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'

export default function Services() {
  const [activeService, setActiveService] = useState(null)
  const revealRef = useRef(null)
  const servicesRef = useRef(null)

  // Service Data
  const services = [
    {
      id: '01',
      title: 'Brand Identity',
      tags: ['Strategy', 'Logo Design', 'Visual Systems'],
      color: '#FF4D4D', // Red glow
      img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop' 
    },
    {
      id: '02',
      title: 'UI/UX Design',
      tags: ['Web Design', 'Mobile Apps', 'Prototyping'],
      color: '#4D79FF', // Blue glow
      img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2536&auto=format&fit=crop'
    },
    {
      id: '03',
      title: 'Development',
      tags: ['Frontend', 'Backend', 'CMS', 'Three.js'],
      color: '#4DFFB8', // Green glow
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop'
    },
    {
      id: '04',
      title: 'Digital Marketing',
      tags: ['SEO', 'Content', 'Social Media'],
      color: '#FFD14D', // Yellow glow
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop'
    }
  ]

  useEffect(() => {
    // 1. Inject Styles
    if (!document.getElementById('vornix-services-style')) {
      const style = document.createElement('style')
      style.id = 'vornix-services-style'
      style.innerHTML = `
        .services-section {
          position: relative;
          background: #050505;
          padding: 120px 5vw;
          color: #fff;
          font-family: 'Inter', sans-serif;
          overflow: hidden; /* Hide overflow for floating image */
        }

        .sec-header {
          margin-bottom: 80px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 40px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .sec-title {
          font-size: clamp(40px, 5vw, 80px);
          font-weight: 300;
          letter-spacing: -0.03em;
          line-height: 1;
        }

        .sec-desc {
          max-width: 300px;
          font-size: 14px;
          color: rgba(255,255,255,0.5);
          text-align: right;
        }

        /* LIST STYLES */
        .service-list {
          display: flex;
          flex-direction: column;
        }

        .service-item {
          position: relative;
          padding: 40px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 2; /* Above image */
        }

        .service-item:hover {
          padding-left: 20px; /* Slight shift */
          border-color: rgba(255,255,255,0.4);
        }

        .svc-left {
          display: flex;
          align-items: baseline;
          gap: 40px;
        }

        .svc-id {
          font-size: 14px;
          color: rgba(255,255,255,0.3);
          font-family: monospace;
        }

        .svc-name {
          font-size: clamp(32px, 4vw, 60px);
          font-weight: 500;
          letter-spacing: -0.02em;
          transition: color 0.3s;
        }

        .service-item:hover .svc-name {
          color: #fff; /* Ensure bright white on hover */
        }

        .svc-tags {
          display: flex;
          gap: 12px;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }

        .service-item:hover .svc-tags {
          opacity: 1;
          transform: translateX(0);
        }

        .tag {
          font-size: 12px;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 4px 12px;
          border-radius: 99px;
          text-transform: uppercase;
        }

        .svc-icon {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.3s ease;
          color: #fff;
        }

        .service-item:hover .svc-icon {
          opacity: 1;
          transform: scale(1);
        }

        /* FLOATING REVEAL IMAGE */
        .hover-reveal {
          position: fixed;
          top: 0;
          left: 0;
          width: 320px;
          height: 420px;
          pointer-events: none;
          z-index: 1; /* Behind text but visible */
          opacity: 0;
          transform: scale(0.8);
          overflow: hidden;
          border-radius: 8px;
        }

        .reveal-inner {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .reveal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.2); /* Zoom effect */
          transition: transform 0.5s ease;
        }
        
        /* Mobile Hide */
        @media (max-width: 768px) {
          .hover-reveal { display: none; }
          .sec-header { flex-direction: column; align-items: flex-start; gap: 20px; }
          .sec-desc { text-align: left; }
          .svc-tags { display: none; }
        }
      `
      document.head.appendChild(style)
    }

    // 2. Cursor Follow Logic (GSAP)
    const reveal = revealRef.current
    const xMove = gsap.quickTo(reveal, "x", { duration: 0.5, ease: "power3" })
    const yMove = gsap.quickTo(reveal, "y", { duration: 0.5, ease: "power3" })

    const moveReveal = (e) => {
      // Center image on cursor
      xMove(e.clientX - 160) 
      yMove(e.clientY - 210)
    }

    window.addEventListener('mousemove', moveReveal)

    return () => {
      window.removeEventListener('mousemove', moveReveal)
    }
  }, [])

  // Handle Hover interactions
  const handleMouseEnter = (idx) => {
    setActiveService(idx)
    // Show image
    gsap.to(revealRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: 'power2.out'
    })
    // Zoom inner image
    gsap.to(`.reveal-img-${idx}`, {
      scale: 1,
      duration: 0.4
    })
  }

  const handleMouseLeave = () => {
    setActiveService(null)
    // Hide image
    gsap.to(revealRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3
    })
  }

  return (
    <section className="services-section">
      
      {/* 1. Header */}
      <div className="sec-header">
        <h2 className="sec-title">Our Expertise</h2>
        <p className="sec-desc">
          We combine strategy, design, and technology to build brands that matter in culture.
        </p>
      </div>

      {/* 2. Service List */}
      <div className="service-list" ref={servicesRef}>
        {services.map((s, index) => (
          <div 
            key={s.id} 
            className="service-item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{ 
              borderColor: activeService === index ? s.color : 'rgba(255,255,255,0.1)' 
            }}
          >
            <div className="svc-left">
              <span className="svc-id">{s.id}</span>
              <h3 className="svc-name">{s.title}</h3>
            </div>
            
            <div className="svc-tags">
              {s.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            <ArrowUpRight className="svc-icon" size={32} />
          </div>
        ))}
      </div>

      {/* 3. Floating Image Container */}
      <div className="hover-reveal" ref={revealRef}>
        <div className="reveal-inner">
          {/* Render all images, toggle visibility based on active hover */}
          {services.map((s, index) => (
            <img 
              key={s.id}
              src={s.img} 
              alt={s.title}
              className={`reveal-img reveal-img-${index}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: activeService === index ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>

    </section>
  )
}