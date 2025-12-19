import { useState } from 'react';

function Reveal({ children, delay = 0 }) {
  return (
    <div style={{ animation: `fadeInUp 0.8s ease-out ${delay}s forwards`, opacity: 0 }}>
      {children}
    </div>
  );
}

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  
  const testimonials = [
    {
      text: "Agency felt like an extension of our team. Their design instincts and speed were exactly what we needed to launch on time — and with style.",
      name: "Sarah Coleman",
      role: "CEO at NovaTech",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
      rating: 5
    },
    {
      text: "From the first call to the final handoff, everything was seamless. The UI/UX work was some of the best we've seen.",
      name: "Daniel Reyes",
      role: "Product Manager at Clarity CRM",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
      rating: 5
    },
    {
      text: "We came to Agency with a rough idea, and they turned it into a beautiful, functional MVP in weeks. Highly recommended.",
      name: "Rachel Lin",
      role: "Co-Founder at Driftly",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
      rating: 5
    },
    {
      text: "Their process is clear, communication is fast, and the results speak for themselves. We saw a 40% boost in engagement post-launch.",
      name: "Jason Ford",
      role: "Marketing Lead at BrightChain",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
      rating: 5
    }
  ];

  // Double the testimonials array for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .scroll-container {
          animation: scroll 40s linear infinite;
        }
        
        .scroll-container.paused {
          animation-play-state: paused;
        }
      `}</style>
      
      <section style={styles.section}>
        {/* Animated background pattern */}
        <div style={styles.backgroundPattern}></div>
        
        <div style={styles.container}>
          {/* Header */}
          <Reveal>
            <div style={styles.header}>
              <div style={styles.badge}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: "8px" }}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Testimonials
              </div>
              <h2 style={styles.title}>
                <span style={styles.titleItalic}>Hear from the Clients</span>
                <br />
                We've Partnered With
              </h2>
            </div>
          </Reveal>

          {/* Continuous Scrolling Testimonials */}
          <div style={styles.scrollWrapper}>
            <div 
              className={`scroll-container ${isPaused ? 'paused' : ''}`}
              style={styles.scrollContainer}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  style={styles.card}
                >
                  {/* Star Rating */}
                  <div style={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill={i < testimonial.rating ? "#FFD700" : "none"}
                        stroke={i < testimonial.rating ? "#FFD700" : "#444"}
                        strokeWidth="1.5"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote style={styles.quote}>
                    "{testimonial.text}"
                  </blockquote>
                  <div style={styles.author}>
                    <img src={testimonial.avatar} alt={testimonial.name} style={styles.avatar} />
                    <div>
                      <div style={styles.name}>{testimonial.name}</div>
                      <div style={styles.role}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  section: {
    padding: "120px 0",
    background: "#000",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden"
  },
  backgroundPattern: {
    position: "absolute",
    inset: 0,
    background: `
      radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 40%)
    `,
    backgroundSize: "100% 100%",
    pointerEvents: "none"
  },
  container: {
    width: "100%",
    position: "relative",
    zIndex: 1
  },
  header: {
    textAlign: "center",
    marginBottom: "80px",
    padding: "0 6vw"
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    padding: "12px 24px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    borderRadius: "30px",
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "32px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    color: "#ccc"
  },
  title: {
    fontSize: "clamp(36px, 5vw, 64px)",
    fontWeight: "400",
    margin: 0,
    lineHeight: "1.2",
    letterSpacing: "-0.02em"
  },
  titleItalic: {
    fontStyle: "italic",
    fontWeight: "300",
    color: "#ddd"
  },
  scrollWrapper: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
  },
  scrollContainer: {
    display: "flex",
    gap: "32px",
    width: "fit-content",
    paddingLeft: "32px"
  },
  card: {
    background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
    backdropFilter: "blur(20px)",
    borderRadius: "24px",
    padding: "40px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    minWidth: "450px",
    maxWidth: "450px",
    flexShrink: 0,
    transition: "all 0.3s ease",
    cursor: "pointer",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)"
  },
  rating: {
    display: "flex",
    gap: "4px",
    marginBottom: "20px"
  },
  quote: {
    fontSize: "17px",
    lineHeight: "1.7",
    color: "#d0d0d0",
    margin: "0 0 28px 0",
    fontWeight: "400",
    letterSpacing: "0.01em",
    minHeight: "120px"
  },
  author: {
    display: "flex",
    alignItems: "center",
    gap: "16px"
  },
  avatar: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    flexShrink: 0
  },
  name: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    marginBottom: "4px",
    letterSpacing: "-0.01em"
  },
  role: {
    fontSize: "14px",
    color: "#888",
    fontWeight: "400"
  }
};