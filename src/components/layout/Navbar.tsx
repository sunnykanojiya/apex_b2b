"use client";
import "./Navbar.css";


import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
    { label: "Curriculum", href: "/#systems" },
    { label: "Outcomes", href: "/#outcomes" },
    { label: "Why Apex", href: "/#why-apex" },
    { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="navbar__inner container">
                {/* Logo */}
                <Link href="/" className="navbar__logo">
                    <img
                        src="/logo.png"
                        alt="Apex Logo"
                        className="navbar__logo-img"
                    />
                </Link>

                {/* Desktop links */}
                <ul className="navbar__links" role="list">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.href} className="navbar__link">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a href="https://calendly.com/business-theapexschoolofbusiness/30min" className="navbar__cta btn btn-primary">
                    Book a Call
                </a>

                {/* Hamburger */}
                <button
                    className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="navbar__mobile-link"
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="/#consultation"
                    className="btn btn-primary"
                    onClick={() => setMenuOpen(false)}
                >
                    Book a Call
                </a>
            </div>
        </nav>
    );
}
