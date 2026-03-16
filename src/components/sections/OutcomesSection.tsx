import "./OutcomesSection.css";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const outcomes = [
  {
    stat: "70%",
    title: "Manual Prospecting Reduced",
    description:
      "Less time spent on research and list building using AI driven prospecting workflows.",
  },
  {
    stat: "3×",
    title: "More Qualified Opportunities",
    description:
      "Better targeting and AI assisted outreach improves response quality and meeting rates.",
  },
  {
    stat: "60%",
    title: "Faster Lead Research",
    description:
      "AI tools reduce the time needed to research accounts and prepare for outreach.",
  },
  {
    stat: "2×",
    title: "Outreach Productivity",
    description:
      "Sales reps contact more relevant prospects through structured multi-channel workflows.",
  },
  {
    stat: "50%",
    title: "Admin Work Reduced",
    description:
      "CRM automation and workflow systems reduce time spent on manual data entry.",
  },
  {
    stat: "Better",
    title: "Sales Conversations",
    description:
      "AI assisted meeting preparation and objection handling improves conversation quality.",
  },
  {
    stat: "Consistent",
    title: "Pipeline Generation",
    description:
      "Teams build repeatable outbound systems that generate predictable pipeline.",
  },
  {
    stat: "Higher",
    title: "Sales Team Efficiency",
    description:
      "Sales teams spend more time speaking with prospects and less time on repetitive work.",
  },
];

export default function OutcomesSection() {
  return (
      <section className="outcomes-section" id="outcomes">
          <div className="container">
              <SectionHeader
                  tag="Program Results"
                  title={
                      <>
                          Impact Your Sales Team Can{" "}
                          <span className="gradient-text">Expect</span>
                      </>
                  }
                  subtitle="These outcomes reflect the operational improvements teams achieve after implementing AI supported sales workflows during the program."
              />

              <div className="outcomes__grid">
                  {outcomes.map((item, i) => (
                      <div key={item.title} className="outcomes__grid-item">
                          <Reveal delay={i * 80} className="outcomes__reveal">
                              <div className="outcomes__card">
                                  <div className="outcomes__stat">{item.stat}</div>
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
