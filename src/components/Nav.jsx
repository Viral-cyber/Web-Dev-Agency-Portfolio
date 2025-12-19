import { useState, useEffect } from 'react'
import {
  Home,
  Bell,
  Settings,
  HelpCircle,
  User,
} from 'lucide-react'

export default function Navbar() {
  const navItems = [
    { label: 'Home', icon: Home },
    { label: 'Alerts', icon: Bell },
    { label: 'Settings', icon: Settings },
    { label: 'Help', icon: HelpCircle },
    { label: 'Profile', icon: User },
  ]

  const [active, setActive] = useState('Home')

  useEffect(() => {
    if (document.getElementById('vornix-navbar-style')) return

    const style = document.createElement('style')
    style.id = 'vornix-navbar-style'
    style.innerHTML = `
      .header-container {
        position: fixed;
        top: 24px;
        left: 0;
        width: 100%;
        padding: 0 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;
        pointer-events: none;
        font-family: Inter, system-ui, sans-serif;
      }

      .brand-wrapper {
        pointer-events: auto;
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      .brand-logo {
        height: 30px;
        width: auto;
      }

      .nav-island {
        pointer-events: auto;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.85);
        backdrop-filter: blur(16px);
        padding: 6px 8px;
        border-radius: 999px;
        display: flex;
        gap: 6px;
        border: 1px solid rgba(255,255,255,0.12);
        box-shadow: 0 10px 40px rgba(0,0,0,0.4);
      }

      .nav-item {
        display: flex;
        align-items: center;
        gap: 10px;
        height: 40px;
        padding: 0 14px;
        border-radius: 999px;
        cursor: pointer;
        color: rgba(255,255,255,0.6);
        font-size: 13px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        max-width: 40px;
        transition: all 0.4s cubic-bezier(.4,0,.2,1);
      }

      .nav-item span {
        opacity: 0;
        transform: translateX(-10px);
        transition: all 0.3s ease;
      }

      .nav-item svg { width: 18px; height: 18px; flex-shrink: 0; }

      .nav-item:hover, .nav-item.active {
        background: #fff;
        color: #000;
        max-width: 140px;
      }

      .nav-item:hover span, .nav-item.active span {
        opacity: 1;
        transform: translateX(0);
      }

      .cta-button {
        pointer-events: auto;
        padding: 12px 24px;
        border-radius: 999px; /* CURVED PILL SHAPE */
        background: #fff;
        color: #000;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 1px solid rgba(0,0,0,0.1);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }

      .cta-button:hover {
        background: #000;
        color: #fff;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
      }

      @media (max-width: 768px) {
        .header-container { padding: 0 20px; top: 16px; }
        .brand-logo { height: 24px; }
        .cta-button { padding: 10px 16px; font-size: 13px; }
        .nav-island { scale: 0.9; bottom: 30px; top: auto; position: fixed; }
      }
    `
    document.head.appendChild(style)
  }, [])

  return (
    <div className="header-container">
      <div className="brand-wrapper">
        <img src="image_1.png" alt="agency logo" className="brand-logo" />
      </div>

      <nav className="nav-island">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.label}
              className={`nav-item ${active === item.label ? 'active' : ''}`}
              onClick={() => setActive(item.label)}
            >
              <Icon />
              <span>{item.label}</span>
            </div>
          )
        })}
      </nav>

      <button className="cta-button">
        Get in touch
      </button>
    </div>
  )
}