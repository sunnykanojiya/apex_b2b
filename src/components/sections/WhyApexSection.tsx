"use client";

import "./WhyApexSection.css";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const DESCRIPTION_PREVIEW_LIMIT = 145;

const reasons = [
  {
    num: "01",
    title: "Proven Consulting Experience",
    description:
      "We have helped 20+ companies implement AI powered sales workflows and structured outreach systems that improve pipeline visibility and revenue growth.",
  },
  {
    num: "02",
    title: "Real Sales Operators",
    description:
      "Our mentors have built and scaled sales systems with companies like Citibank, HDFC, MaxLife, and Tata Group, and through startups and consulting engagements across multiple industries. We teach from real operating experience, not theory or slides.",
  },
  {
    num: "03",
    title: "AI-First Sales Framework",
    description:
      "We teach how modern sales teams combine AI tools, automation workflows, and structured outreach systems to create predictable pipeline without adding headcount.",
  },
  {
    num: "04",
    title: "Hands-On Implementation",
    description:
      "Your team builds real sales systems during the program. Each session results in a working workflow or deliverable that can be implemented directly inside your company.",
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
                <ReasonCard item={item} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}

function ReasonCard({ item }: { item: (typeof reasons)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const canExpand = item.description.length > DESCRIPTION_PREVIEW_LIMIT;

  const textToShow = expanded || !canExpand
    ? item.description
    : `${item.description.slice(0, DESCRIPTION_PREVIEW_LIMIT).trimEnd()}...`;

  return (
    <div className="why__card">
      <div className="why__num">{item.num}</div>
      <h3>{item.title}</h3>
      <p className="why__desc">{textToShow}</p>
      {canExpand && (
        <button
          type="button"
          className="why__read-more"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}
