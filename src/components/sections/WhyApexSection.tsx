import "./WhyApexSection.css";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const reasons = [
  {
    num: "01",
    title: "Real Sales Operators",
    description:
      "Our mentors have built sales systems for startups and enterprise companies. We teach from real experience, not theory or slides.",
  },
  {
    num: "02",
    title: "AI First Sales Framework",
    description:
      "We teach how modern sales teams combine automation, AI, and structured outreach to create systems that scale without adding headcount.",
  },
  {
    num: "03",
    title: "Hands-On Implementation",
    description:
      "Your team builds real systems during the program, every session results in a working deliverable, not just knowledge.",
  },
  {
    num: "04",
    title: "Proven Consulting Experience",
    description:
      "We have helped 20+ companies implement AI powered sales workflows with measurable improvements in pipeline and revenue.",
  },
];

export default function WhyApexSection() {
  return (
    <section className="why-section" id="why-apex">
      <div className="container">
        <SectionHeader
          tag="Why Companies Work With Apex"
          title={<>We Have <span className="gradient-text">Been There</span></>}
          subtitle="Our team has built and run actual sales systems, not consulted from the sidelines."
        />

        <div className="why__grid">
          {reasons.map((item, i) => (
            <div key={item.num} className="why__grid-item">
              <Reveal delay={i * 80} className="why__reveal">
                <div className="why__card">
                  <div className="why__num">{item.num}</div>
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
