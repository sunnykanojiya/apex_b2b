import "./ProductivitySection.css";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const tools = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3 12.79a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 1.94 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14.05 2a9 9 0 0 1 8 7.94" />
        <path d="M14.05 6A5 5 0 0 1 18 10" />
      </svg>
    ),
    title: "Outbound Prospecting",
    description:
      "Launch multi-channel outbound campaigns using email, LinkedIn, and calls with AI-assisted personalization so your team can reach more prospects with better relevance.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
    title: "Lead Generation",
    description:
      "Build structured prospecting systems using AI signals, data enrichment, and smart targeting to identify high-intent accounts and create consistent pipeline.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
        <path d="M15 15h-3" />
        <path d="M15 12h-3" />
      </svg>
    ),
    title: "Pipeline & RevOps",
    description:
      "Create structured pipeline management workflows inside the CRM with automated tracking, deal stage visibility, and activity systems that help managers monitor performance.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M5 12H2l10-10 10 10h-3" />
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
        <path d="M10 22v-6h4v6" />
      </svg>
    ),
    title: "Inbound Automation",
    description:
      "Design workflows that capture inbound leads, qualify them automatically, and route them to the right sales rep so your team responds faster and converts more opportunities.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: "CRM Management",
    description:
      "Set up clean CRM workflows that automate activity logging, lead updates, and task tracking so your sales team spends less time on manual admin work.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "AI Sales Intelligence",
    description:
      "Use AI tools to prepare for meetings, analyze sales conversations, research accounts, and generate insights that help your team handle objections and close deals faster.",
  },
];

export default function ProductivitySection() {
  return (
      <section className="productivity-section" id="productivity">
          <div className="container">
              <SectionHeader
                  tag="Sales Systems Your Team Builds"
                  title={
                      <>
                          AI Sales Systems Your Team{" "}
                          <span className="gradient-text">Will Build</span>
                      </>
                  }
                  subtitle="Practical AI systems that improve every step of the sales process."
              />

              <div className="productivity__grid">
                  {tools.map((tool, i) => (
                      <div key={tool.title} className="productivity__grid-item">
                          <Reveal
                              delay={i * 80}
                              className="productivity__reveal"
                          >
                              <div className="productivity__card">
                                  <div className="productivity__icon">
                                      {tool.icon}
                                  </div>
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
