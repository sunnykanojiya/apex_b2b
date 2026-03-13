import "./ForWhoSection.css";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const audiences = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "B2B Startups",
    description:
      "Building their first scalable sales engine and need structured AI-powered systems from day one to compete effectively.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: "SaaS Companies",
    description:
      "Scaling outbound sales and looking to combine AI and automation with proven outreach frameworks that deliver pipeline.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      </svg>
    ),
    title: "Founders",
    description:
      "Who want predictable pipeline generation and are ready to build systematic outreach instead of relying on referrals.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Sales Teams",
    description:
      "Struggling with manual prospecting and wanting to adopt AI workflows that multiply their output without adding headcount.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Revenue Teams",
    description:
      "Looking to adopt AI workflows across the full funnel from prospecting to pipeline management and revenue forecasting.",
  },
];

export default function ForWhoSection() {
  return (
    <section className="for-section" id="for-who">
      <div className="container">
        <SectionHeader
          tag="Who This Program Is For"
          title={<>Built for <span className="gradient-text">B2B Revenue Teams</span></>}
          subtitle="This program is designed for companies ready to transform how their sales teams operate."
        />

        <div className="for__grid">
          {audiences.map((item, i) => (
            <div key={item.title} className="for__grid-item">
              <Reveal delay={i * 70} className="for__reveal">
                <div className="for__card">
                  <div className="for__icon">{item.icon}</div>
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
