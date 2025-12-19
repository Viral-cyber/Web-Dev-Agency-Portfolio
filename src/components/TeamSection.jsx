import { useState } from 'react';

// Simple Reveal component for animation
function Reveal({ children, delay = 0 }) {
  return (
    <div style={{ animation: `fadeInUp 0.8s ease-out ${delay}s forwards`, opacity: 0 }}>
      {children}
    </div>
  );
}

function TeamBioCard({ member, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        ...styles.card,
        transform: isHovered ? 'translateY(-12px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.cardInner}>
        <span style={styles.category}>{member.category}</span>
        
        <div style={styles.imageContainer}>
          <img 
            src={member.image} 
            alt={member.name}
            style={{
              ...styles.image,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          
          {/* Social overlay on hover */}
          <div style={{
            ...styles.socialOverlay,
            opacity: isHovered ? 1 : 0,
          }}>
            <div style={styles.socialLinks}>
              {member.socials.map((social, i) => (
                <a 
                  key={i}
                  href={social.url}
                  style={styles.socialIcon}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div style={styles.info}>
          <h3 style={styles.name}>{member.name}</h3>
          <p style={styles.role}>{member.role}</p>
          
          {/* Bio text that slides in on hover */}
          <div style={{
            ...styles.bioContainer,
            maxHeight: isHovered ? '200px' : '0',
            opacity: isHovered ? 1 : 0,
          }}>
            <p style={styles.bio}>{member.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Avery James",
      role: "Founder & Product Lead",
      category: "Leadership",
      bio: "Passionate about building products that make a difference. 10+ years of experience in tech leadership and product strategy.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      socials: [
        { name: "LinkedIn", icon: "in", url: "#" },
        { name: "Twitter", icon: "𝕏", url: "#" },
        { name: "Email", icon: "✉", url: "#" }
      ]
    },
    {
      name: "Ryan Adams",
      role: "Growth & Marketing Lead",
      category: "Marketing",
      bio: "Driving growth through data-driven marketing strategies. Expert in digital marketing, SEO, and brand development.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
      socials: [
        { name: "LinkedIn", icon: "in", url: "#" },
        { name: "Twitter", icon: "𝕏", url: "#" },
        { name: "Instagram", icon: "📷", url: "#" }
      ]
    },
    {
      name: "Isabella Moretti",
      role: "Creative Director",
      category: "Design",
      bio: "Award-winning designer transforming complex problems into elegant visual solutions. Minimalist at heart.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
      socials: [
        { name: "Dribbble", icon: "🏀", url: "#" },
        { name: "Behance", icon: "Bd", url: "#" },
        { name: "Instagram", icon: "📷", url: "#" }
      ]
    },
    {
      name: "Ethan Chen",
      role: "Lead Frontend Developer",
      category: "Engineering",
      bio: "Crafting beautiful and performant web experiences. Specialized in React, TypeScript, and modern web technologies.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
      socials: [
        { name: "LinkedIn", icon: "in", url: "#" },
        { name: "GitHub", icon: "⌘", url: "#" },
        { name: "Portfolio", icon: "🌐", url: "#" }
      ]
    }
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      <section style={styles.section}>
        <Reveal>
          <div style={styles.header}>
            <span style={styles.label}>(06) Team</span>
            <h2 style={styles.title}>
              Meet Our <span style={styles.titleItalic}>Minds.</span>
            </h2>
          </div>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div style={styles.grid}>
            {teamMembers.map((member, i) => (
              <TeamBioCard key={i} member={member} index={i} />
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}

const styles = {
  section: {
    padding: "120px 6vw",
    background: "#000",
    color: "#fff",
    borderTop: "1px solid #27272a",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  header: {
    marginBottom: "80px",
    textAlign: "left"
  },
  label: {
    color: "#71717a",
    textTransform: "uppercase",
    fontSize: "12px",
    letterSpacing: "2px",
    marginBottom: "16px",
    display: "block",
    fontWeight: "600",
    fontFamily: "monospace"
  },
  title: {
    fontSize: "clamp(36px, 5vw, 72px)",
    fontWeight: "400",
    letterSpacing: "-0.02em",
    margin: 0
  },
  titleItalic: {
    fontStyle: "italic",
    fontWeight: "300",
    color: "#71717a"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // Adjusted to fit 4 better
    gap: "32px",
    maxWidth: "1600px",
    margin: "0 auto",
    width: "100%"
  },
  card: {
    background: "#0a0a0a",
    borderRadius: "24px",
    padding: "24px",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    position: "relative",
    overflow: "hidden"
  },
  cardInner: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  category: {
    display: "inline-block",
    padding: "8px 16px",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "100px",
    fontSize: "11px",
    marginBottom: "20px",
    fontWeight: "600",
    letterSpacing: "1px",
    textTransform: "uppercase",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    alignSelf: "flex-start",
    color: "#a1a1aa"
  },
  imageContainer: {
    width: "100%",
    aspectRatio: "3/4",
    borderRadius: "16px",
    overflow: "hidden",
    marginBottom: "24px",
    background: "#1a1a1a",
    position: "relative"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
  },
  socialOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: "24px",
    transition: "opacity 0.4s ease",
  },
  socialLinks: {
    display: "flex",
    gap: "12px",
  },
  socialIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    transition: "all 0.3s ease",
  },
  info: {
    textAlign: "left",
    marginTop: "auto"
  },
  name: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "4px",
    color: "#fff",
    letterSpacing: "-0.01em"
  },
  role: {
    fontSize: "14px",
    color: "#71717a",
    fontWeight: "500",
    margin: 0,
  },
  bioContainer: {
    overflow: "hidden",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    marginTop: "4px"
  },
  bio: {
    fontSize: "13px",
    lineHeight: "1.6",
    color: "#a1a1aa",
    margin: 0,
    paddingTop: "12px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    marginTop: "12px"
  }
};