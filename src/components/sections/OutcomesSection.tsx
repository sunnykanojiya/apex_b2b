import "./OutcomesSection.css";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const outcomes = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="M11 8v6M8 11h6" />
      </svg>
    ),
    title: "Faster Lead Generation",
    description:
      "Build AI powered prospecting systems that identify high intent buyers and generate qualified leads automatically.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 5.09 5.1l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
      </svg>
    ),
    title: "Automated Outreach Systems",
    description:
      "Launch structured multi-channel outreach using email, LinkedIn, and AI assisted personalization at scale.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4M7 8h2M7 12h10M13 8h4" />
      </svg>
    ),
    title: "CRM and Pipeline Automation",
    description:
      "Automate CRM updates, follow-ups, and pipeline tracking to reduce manual work for your entire sales team.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: "Higher Sales Productivity",
    description:
      "Reduce time spent on admin work so your team can focus on conversations and closing deals that matter.",
  },
];

export default function OutcomesSection() {
  return (
    <section className="outcomes-section" id="outcomes">
      <div className="container">
        <SectionHeader
          tag="Key Outcomes"
          title={<>What Your Team <span className="gradient-text">Achieves</span></>}
          subtitle="Four core capabilities that transform how your sales team operates."
        />

        <div className="outcomes__grid">
          {outcomes.map((item, i) => (
            <div key={item.title} className="outcomes__grid-item">
              <Reveal delay={i * 80} className="outcomes__reveal">
                <div className="outcomes__card">
                  <div className="outcomes__icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}
