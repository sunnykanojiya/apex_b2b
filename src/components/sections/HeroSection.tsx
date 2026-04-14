"use client";

import "./HeroSection.css";
import Reveal from "@/components/ui/Reveal";

export default function HeroSection() {
  const tags = [
    "12 Hrs learning modules",
    "Live training sessions",
    "Hands - on system building",
    "Real workflow implementation",
    "Lifetime access to learning resources"
  ];
  return (
    <section className="hero" id="home">
      {/* Decorative background */}
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__left">
          <Reveal delay={0}>
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              The Training Program Modern Revenue Teams Are Built On
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="hero__headline">
              AI Powered Sales System Training for {" "}
              <span className="gradient-text">Modern B2B Teams</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="hero__subheadline">
              This program trains your team to build structured outbound and inbound systems using AI tools, automation workflows, and modern sales infrastructure.
            </p>
          </Reveal>

          {/* <Reveal delay={300}>
            <p className="hero__description">
              Your sales team learns the exact workflows modern B2B companies use
              to run prospecting, outreach, CRM management, and pipeline tracking
              using AI tools and automation systems.
              <br />
              <br />
              This is not theory. During the program your team builds real systems
              for your company&apos;s product, market, and customers.
            </p>
          </Reveal> */}

          <Reveal delay={400}>
            <div className="hero__ctas">
              <a href="/preview-form" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <span>Preview the Program</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="https://calendly.com/business-theapexschoolofbusiness/30min" className="btn btn-secondary">
                <span>Book a Call</span>
              </a>
            </div>
          </Reveal>

        </div>

        <div className="hero__right">
          <Reveal delay={300} className="hero__video-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zGA0Wy0Ro34?si=H79znfLdD4CCjSzr" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </Reveal>
        </div>
      </div >

      <div className="container hero__stats-container">
        <Reveal delay={500}>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">12 hours learning modules</span>
              {/* <span className="hero__stat-label">Hands-On Implementation</span> */}
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">5 hours live training sessions</span>
              {/* <span className="hero__stat-label">Companies Trained</span> */}
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num" >Hands-on system building</span>
              {/* <span className="hero__stat-label">Per Employee</span> */}
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num" >Real workflow implementation</span>
              {/* <span className="hero__stat-label">Built for Your Pipeline</span> */}
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num" >Lifetime access to learning resources</span>
              {/* <span className="hero__stat-label">Built for Your Pipeline</span> */}
            </div>
          </div>
        </Reveal>
      </div>
    </section >
  );
}
