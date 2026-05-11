// Navigation.jsx

import { useState, useEffect, useRef } from 'react';
import './Navigation.css';
import '../index.css';

// Random images per nav section (using Unsplash for variety)
const dropdownImages = {
  Services: [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
    'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
  ],
  Industries: [
    'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80',
    'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&q=80',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80',
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&q=80',
  ],
  International: [
    'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&q=80',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
  ],
  About: [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
  ],
};

const navLinks = [
  {
    label: 'Services',
    description: 'Core Services',
    children: [
      'Search & Growth Strategy',
      'Onsite SEO',
      'Content Experience',
      'B2B Marketing',
      'Digital PR',
      'Social Media & Campaigns',
      'Data & Insights',
      'Social SEO/Search',
    ],
  },
  {
    label: 'Industries',
    description: 'Specialized Solutions',
    children: [
      'Technology',
      'E-Commerce',
      'B2B SaaS',
      'Enterprise',
      'Startups',
    ],
  },
  {
    label: 'International',
    description: 'Global Markets',
    children: [
      'US Digital PR',
      'Spain Digital PR',
      'Germany Digital PR',
      'Netherlands Digital PR',
    ],
  },
  {
    label: 'About',
    description: 'About Rise at Seven',
    children: [
      'About Us',
      'Meet The Risers',
      'Culture',
      'Testimonials',
    ],
  },
  { label: 'Work', badge: '25' },
  { label: 'Careers' },
  { label: 'Blog & Resources' },
  { label: 'Webinar' },
];

export default function Navigation({ transparent = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownAlign, setDropdownAlign] = useState('left');
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const navItemsRef = useRef({});
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleChildHover = (label) => {
    if (!dropdownImages[label]) return;
    const images = dropdownImages[label];
    const next = Math.floor(Math.random() * images.length);
    setCurrentImageIndex((prev) => ({ ...prev, [label]: next }));
  };

  const handleMouseEnter = (label) => {
    setOpen(label);

    setTimeout(() => {
      const itemElement = navItemsRef.current[label];
      if (!itemElement) return;
      const rect = itemElement.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const margin = 16;
      const dropdownWidth = Math.min(1100, viewportWidth - margin * 2);
      const shouldAlignRight = rect.left + dropdownWidth > viewportWidth - margin;
      setDropdownAlign(shouldAlignRight ? 'right' : 'left');
    }, 0);
  };

  const handleMouseLeave = () => {
    setOpen(null);
  };

  return (
    <>
      <nav
        className={`nav ${scrolled ? 'nav--scrolled' : ''} ${transparent ? 'nav--transparent' : ''}`}
      >
        <div className="nav__backdrop" />

        <div className="nav__inner">
          <a href="/" className="nav__logo">
            Rise at Seven®
          </a>

          {/* DESKTOP LINKS */}
          <ul className="nav__links">
            {navLinks.map((link) => (
              <li
                key={link.label}
                ref={(el) => { if (el) navItemsRef.current[link.label] = el; }}
                className={`nav__item ${link.children ? 'nav__item--has-dropdown' : ''} ${open === link.label ? 'nav__item--active' : ''}`}
                onMouseEnter={() => link.children && handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" className="nav__link">
                  <span className="nav__link-text">{link.label}</span>
                  {link.badge && (
                    <span className="nav__badge">{link.badge}</span>
                  )}
                  {link.children && (
                    <span className="nav__caret">+</span>
                  )}
                </a>

                {link.children && open === link.label && (
                  <div
                    className={`nav__dropdown nav__dropdown--${dropdownAlign}`}
                    onMouseEnter={() => link.children && handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="nav__dropdown-content">
                      <div className="nav__dropdown-left">
                        <h4 className="nav__dropdown-title">{link.description}</h4>
                        <div className="nav__dropdown-grid">
                          {link.children.map((child) => (
                            <a
                              key={child}
                              href="#"
                              className="nav__dropdown-item"
                              onMouseEnter={() => handleChildHover(link.label)}
                            >
                              {child}
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="nav__dropdown-right">
                        <div className="nav__dropdown-card">
                          <div className="nav__dropdown-image">
                            {dropdownImages[link.label] ? (
                              <img
                                key={currentImageIndex[link.label]}
                                src={dropdownImages[link.label][currentImageIndex[link.label] ?? 0]}
                                alt={link.label}
                                className="nav__dropdown-img nav__dropdown-img--fade"
                              />
                            ) : (
                              <div className="nav__image-placeholder">{link.label}</div>
                            )}
                          </div>
                          <a href="#" className="nav__dropdown-cta">
                            View All {link.label} ↗
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <a href="#" className="nav__cta" style={{whiteSpace:'nowrap',display:'inline-flex',alignItems:'center',gap:'4px'}}>
            <span>Get In Touch</span><span>↗</span>
          </a>

          {/* BURGER */}
          <button
            className={`nav__burger ${mobileOpen ? 'nav__burger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="nav__mobile-overlay">
          <div className="nav__mobile-glass">
            <div className="nav__mobile-top">
              <a href="/" className="nav__mobile-logo">Rise at Seven®</a>
              <button className="nav__mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
            </div>

            <div className="nav__mobile-content">
              {navLinks.map((link) => (
                <div className="nav__mobile-group" key={link.label}>
                  <div
                    className="nav__mobile-row"
                    onClick={() => setOpen(open === link.label ? null : link.label)}
                  >
                    <a href="#" className="nav__mobile-main">{link.label}</a>
                    {link.badge && <span className="nav__badge nav__badge--mobile">{link.badge}</span>}
                    {link.children && (
                      <button className="nav__mobile-circle">
                        {open === link.label ? '−' : '+'}
                      </button>
                    )}
                  </div>

                  {link.children && open === link.label && (
                    <div className="nav__mobile-expand">
                      {link.children.map((child) => (
                        <a href="#" key={child} className="nav__mobile-expand-link">{child}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <a href="#" className="nav__mobile-bottom-cta" style={{whiteSpace:'nowrap'} }>Get In Touch ↗</a>
            
          </div>
        </div>
      )}
    </>
  );
}