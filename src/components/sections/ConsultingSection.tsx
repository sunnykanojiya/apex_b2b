import "./ConsultingSection.css";
import Reveal from "@/components/ui/Reveal";

const consultingItems = [
  "Automate your sales workflow",
  "Improve your lead generation system",
  "Optimize outreach campaigns",
  "Solve real pipeline problems",
  "Build custom automation for your GTM strategy",
];

export default function ConsultingSection() {
  return (
    <section className="consulting-section" id="consulting">
      <div className="container">
        <Reveal>
          <div className="consulting__card">
            <div className="consulting__badge">Included with Every Program</div>

            <h2 className="consulting__heading">
              Dedicated{" "}
              <span className="gradient-text">Consulting Support</span>
            </h2>

            <p className="consulting__desc">
              Each corporate program also includes consulting support. Your team
              receives{" "}
              <strong>one dedicated consulting session </strong>{" "}
              where we help apply the systems directly to your business.
            </p>

            <div className="consulting__items">
              {consultingItems.map((item) => (
                <div key={item} className="consulting__item">
                  <span className="consulting__dot" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>

            <p className="consulting__note">
              Additional consulting sessions can be added depending on the scope.
            </p>

            <a href="#consultation" className="btn btn-primary">
              <span>Book a Corporate Consultation</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>


    </section>
  );
}
