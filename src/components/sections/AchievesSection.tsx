import "./AchievesSection.css";
import Reveal from "@/components/ui/Reveal";

const achievements = [
  "A working outbound prospecting system",
  "Automated outreach workflows",
  "Structured pipeline management",
  "AI assisted communication workflows",
  "A repeatable revenue generation system",
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function AchievesSection() {
  return (
    <section className="achieves-section" id="achieves">
      <div className="achieves__bg" aria-hidden="true" />
      <div className="container">
        <div className="achieves__layout">
          <Reveal className="achieves__left">
            <div className="section-tag">After The Program</div>
            <h2 className="achieves__heading">
              After the Program Your{" "}
              <span className="gradient-text">Team Will Have</span>
            </h2>
            <p className="achieves__sub">
              Your team does not just learn about sales systems.{" "}
              <strong>They build one for your company.</strong>
            </p>
            <a href="#consultation" className="btn btn-primary achieves__cta">
              <span>Book a Consultation</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Reveal>

          <Reveal className="achieves__right" delay={150}>
            <ul className="achieves__list" role="list">
              {achievements.map((item, i) => (
                <li key={i} className="achieves__item">
                  <span className="achieves__check">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>


    </section>
  );
}
