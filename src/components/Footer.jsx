import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      console.log("Submitted:", email);
      setEmail("");
    }
  };

  const socialLinks = [
    { label: "Facebook", icon: "f" },
    { label: "X", icon: "𝕏" },
    { label: "LinkedIn", icon: "in" },
    { label: "YouTube", icon: "▶" },
    { label: "TikTok", icon: "d" },
    { label: "Instagram", icon: "◎" },
  ];

  return (
    <footer className="footer">
      <div className="footer__top">
        {/* Newsletter */}
        <div className="footer__newsletter">
          <p className="footer__newsletter-title">Stay updated with Rise news</p>
          <div className="footer__email-row">
            <input
              type="email"
              className="footer__email-input"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            <button className="footer__email-btn" onClick={handleSubmit} aria-label="Submit">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="footer__socials">
            {socialLinks.map((s) => (
              <a key={s.label} href="#" className="footer__social-btn" aria-label={s.label}>
                <span>{s.icon}</span>
                <svg className="footer__social-arrow" width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 7L7 1M7 1H3M7 1V5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        <nav className="footer__nav">
          <ul className="footer__nav-col">
            {["Services", "Work", "About", "Culture", "Meet The Risers"].map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
          <ul className="footer__nav-col">
            {["Testimonials", "Blog", "Webinars", "Careers"].map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
          <ul className="footer__nav-col">
            {["Sheffield", "Manchester", "London", "New York", "Contact"].map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Giant wordmark */}
      <div className="footer__wordmark" aria-label="Rise at Seven">
        Rise at Seven<span className="footer__reg">®</span>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <span>© 2025 Rise at Seven Ltd. All rights reserved</span>
        <span className="footer__dot">•</span>
        <span>Company Number 11955187</span>
        <span className="footer__dot">•</span>
        <span>VAT Registered GB 322402945</span>
        <span className="footer__dot">•</span>
        <a href="#">Privacy Policy</a>
        <span className="footer__dot">•</span>
        <a href="#">Terms &amp; conditions</a>
        <span className="footer__credit">Website MadeByShape</span>
      </div>
    </footer>
  );
};

export default Footer;