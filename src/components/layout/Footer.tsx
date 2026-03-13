import "./Footer.css";
import Link from "next/link";

const footerLinks = [
  { label: "Key Outcomes", href: "#outcomes" },
  { label: "AI Tools", href: "#productivity" },
  { label: "Curriculum", href: "#systems" },
  { label: "Who It's For", href: "#for-who" },
  { label: "Why Apex", href: "#why-apex" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__col footer__col--brand">
            <Link href="#home" className="footer__logo">
              <img src="/logo.png" alt="Apex Logo" className="footer__logo-img" />
            </Link>
            <p className="footer__tagline">
              Learn practical business skills, automation systems and execution frameworks that turn you into an industry-ready professional.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer__col">
            <h4 className="footer__col-title">QUICK LINKS</h4>
            <nav className="footer__nav">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer__nav-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Get Started Column */}
          <div className="footer__col">
            <h4 className="footer__col-title">GET STARTED</h4>
            <p className="footer__cta-text">
              Ready to launch your career in the AI driven business world?
            </p>
            <Link href="#consultation" className="footer__cta-btn">
              Enroll Now <span className="arrow">↗</span>
            </Link>
          </div>

          {/* Contact Column */}
          <div className="footer__col">
            <h4 className="footer__col-title">CONTACT</h4>
            <div className="footer__contact-items">
              <div className="footer__contact-item">
                <div className="footer__contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 5.09 5.1l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" /></svg>
                </div>
                <div className="footer__contact-content">
                  <span className="footer__contact-label">Phone</span>
                  <a href="tel:+918049765241" className="footer__contact-value">+91 8049765241</a>
                </div>
              </div>
              <div className="footer__contact-item">
                <div className="footer__contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div className="footer__contact-content">
                  <span className="footer__contact-label">Email</span>
                  <a href="mailto:support@apexschoolofbusiness.com" className="footer__contact-value">support@apexschoolofbusiness.com</a>
                </div>
              </div>
              <div className="footer__contact-item">
                <div className="footer__contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div className="footer__contact-content">
                  <span className="footer__contact-label">Address</span>
                  <p className="footer__contact-value">
                    Rainmakers Workspace, J.P Nagar, 3rd Phase, Bangalore, Karnataka India 560078
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <p>© {new Date().getFullYear()} Apex School of Business</p>
            <p className="footer__owned">Owned by Hubcredo Solutions Private Limited</p>
          </div>
          <nav className="footer__bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/refund">Refund Policy</Link>
            <Link href="/support">Support</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
