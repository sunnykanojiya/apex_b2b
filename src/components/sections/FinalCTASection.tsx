import "./FinalCTASection.css";
import Reveal from "@/components/ui/Reveal";

export default function FinalCTASection() {
  return (
    <section className="final-cta" id="consultation">
      <div className="final-cta__bg" aria-hidden="true" />
      <div className="final-cta__glow" aria-hidden="true" />
      <div className="container">
        <Reveal className="final-cta__content">
          <div className="section-tag">Get Started</div>
          <h2 className="final-cta__heading">
            Your sales team does not need{" "}
            <span className="gradient-text">more tools.</span>
          </h2>
          <h2 className="final-cta__heading">
            They need a{" "}
            <span className="gradient-text">better system.</span>
          </h2>
          <p className="final-cta__sub">
            Train your team to build an AI powered sales engine that generates
            pipeline consistently.
          </p>
          <a href="https://calendly.com/business-theapexschoolofbusiness/30min" className="btn btn-primary btn-large" id="final-cta-btn">
            <span>Schedule a Strategy Call</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="final-cta__note">No commitment required. We&apos;ll outline the program for your team.</p>
        </Reveal>
      </div>


    </section>
  );
}
