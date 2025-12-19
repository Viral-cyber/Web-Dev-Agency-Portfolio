import { useEffect } from "react"

export default function Footer() {
  useEffect(() => {
    if (document.getElementById("agency-footer-style")) return

    const style = document.createElement("style")
    style.id = "agency-footer-style"
    style.innerHTML = `
      .agency-footer {
        background: #050505; /* Slightly lighter than pure black for depth */
        color: #fff;
        padding: 100px 6vw 60px;
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
        border-top: 1px solid rgba(255,255,255,0.1);
      }

      .agency-footer-top {
        display: flex;
        flex-direction: column;
        margin-bottom: 80px;
      }

      .agency-footer-logo {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 24px;
        letter-spacing: -0.02em;
      }

      .agency-footer-desc {
        font-size: 18px;
        color: rgba(255,255,255,0.5);
        max-width: 400px;
        line-height: 1.6;
      }

      .agency-footer-grid {
        display: grid;
        grid-template-columns: 1.5fr 1fr 1fr 1fr;
        gap: 60px;
        border-top: 1px solid rgba(255,255,255,0.1);
        padding-top: 80px;
      }

      .agency-footer h6 {
        font-size: 11px;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.4);
        margin-bottom: 32px;
        font-weight: 600;
      }

      .agency-footer p,
      .agency-footer a {
        display: block;
        font-size: 15px;
        line-height: 1.8;
        color: rgba(255,255,255,0.7);
        text-decoration: none;
        margin-bottom: 12px;
        transition: all 0.2s ease;
      }

      .agency-footer a:hover {
        color: #fff;
        transform: translateX(4px);
      }

      .agency-footer .muted {
        color: rgba(255,255,255,0.5);
      }

      /* BOTTOM BAR */
      .agency-footer-bottom {
        margin-top: 100px;
        padding-top: 32px;
        border-top: 1px solid rgba(255,255,255,0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
        color: rgba(255,255,255,0.3);
      }

      .footer-legal {
        display: flex;
        gap: 24px;
      }
      
      .footer-legal a {
        margin-bottom: 0;
        font-size: 13px;
        color: rgba(255,255,255,0.3);
      }

      .footer-legal a:hover {
        color: #fff;
        transform: none;
      }

      @media (max-width: 1024px) {
        .agency-footer-grid {
          grid-template-columns: 1fr 1fr; /* 2x2 grid */
          gap: 60px;
        }
      }

      @media (max-width: 600px) {
        .agency-footer-grid {
          grid-template-columns: 1fr;
          gap: 48px;
        }

        .agency-footer-bottom {
          flex-direction: column;
          gap: 20px;
          align-items: flex-start;
        }

        .footer-legal {
          flex-direction: column;
          gap: 12px;
        }
      }
    `
    document.head.appendChild(style)
  }, [])

  return (
    <footer className="agency-footer">
      
      {/* 1. TOP SECTION: BRAND IDENTITY */}
      <div className="agency-footer-top">
        <div className="agency-footer-logo">Vornix.</div>
        <p className="agency-footer-desc">
          A digital product agency crafting experiences that combine design, technology, and strategy for forward-thinking brands.
        </p>
      </div>

      {/* 2. MAIN GRID */}
      <div className="agency-footer-grid">

        {/* COL 1: LOCATION & CONTACT */}
        <div>
          <h6>Office</h6>
          <p className="muted">
            1234 Market Street, Suite 500<br />
            San Francisco, CA 94103
          </p>
          <p style={{ marginTop: '24px' }}>
            <a href="mailto:hello@vornix.com" style={{color: '#fff', marginBottom: 4}}>hello@vornix.com</a>
            <span className="muted">+1 (415) 555-0132</span>
          </p>
        </div>

        {/* COL 2: SERVICES */}
        <div>
          <h6>Services</h6>
          <a href="/services/web-design">Web Design</a>
          <a href="/services/development">Development</a>
          <a href="/services/seo">SEO & Marketing</a>
          <a href="/services/ecommerce">E-commerce</a>
          <a href="/services/branding">Branding</a>
        </div>

        {/* COL 3: COMPANY */}
        <div>
          <h6>Company</h6>
          <a href="/about">About Us</a>
          <a href="/projects">Our Work</a>
          <a href="/process">Process</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </div>

        {/* COL 4: SOCIALS */}
        <div>
          <h6>Connect</h6>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Email</a>
        </div>

      </div>

      {/* 3. BOTTOM BAR */}
      <div className="agency-footer-bottom">
        <span>© {new Date().getFullYear()} Vornix Inc. All rights reserved.</span>
        
        <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/sitemap">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}