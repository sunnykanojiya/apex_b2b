import "./ProductivitySection.css";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const tools = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "AI Assisted Sales Emails",
    description:
      "Generate personalized email responses and follow-ups using AI, tailored to each prospect's context and intent signals.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Meeting Intelligence",
    description:
      "Use AI to record meetings, create automated summaries, and suggest next actions to keep deals moving forward.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Conversation Analysis",
    description:
      "AI analyzes sales calls in real time and suggests objection handling strategies to improve close rates consistently.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
    title: "Account Intelligence",
    description:
      "Generate deep account insights before meetings and detect cross-sell opportunities automatically using AI research.",
  },
];

export default function ProductivitySection() {
  return (
    <section className="productivity-section" id="productivity">
      <div className="container">
        <SectionHeader
          tag="Sales Productivity Systems"
          title={<>AI Tools Your Team <span className="gradient-text">Uses Daily</span></>}
          subtitle="Practical AI systems that improve every step of the sales process."
        />

        <div className="productivity__grid">
          {tools.map((tool, i) => (
            <div key={tool.title} className="productivity__grid-item">
              <Reveal delay={i * 80} className="productivity__reveal">
                <div className="productivity__card">
                  <div className="productivity__icon">{tool.icon}</div>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}
