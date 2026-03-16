import "./ProgramSection.css";
import Reveal from "@/components/ui/Reveal";

const includes = [
  "Live training sessions",
  "Recorded learning modules",
  "Hands-on system building",
  "Real workflow implementation",
  "Lifetime access to learning resources",
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function ProgramSection() {
  return (
    <section className="program-section" id="program">
      <div className="container">
        <div className="program__layout">
          <Reveal className="program__left">
            <div className="section-tag">Sales Systems Your Team Builds</div>
            <h2 className="program__heading">
              AI Powered Sales Systems for{" "}
              <span className="gradient-text">Modern B2B Teams</span>
            </h2>
            <p className="program__desc">
              This program trains your team to build structured outbound and inbound
              systems using AI tools, automation workflows, and modern sales
              infrastructure.
            </p>
            <p className="program__desc">
              Your team learns how to identify the right buyers, reach them at scale,
              manage pipeline intelligently, and automate repetitive sales tasks.
            </p>
            <a href="#consultation" className="btn btn-primary">
              <span>Start Training Your Team</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Reveal>

          <Reveal className="program__right" delay={150}>
            <div className="program__card">
              <h4 className="program__card-title">What the Program Includes</h4>
              <ul className="program__includes" role="list">
                {includes.map((item) => (
                  <li key={item} className="program__include-item">
                    <span className="program__include-icon">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      
    </section>
  );
}
