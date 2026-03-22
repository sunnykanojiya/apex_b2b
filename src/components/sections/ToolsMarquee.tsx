"use client";

import "./ToolsMarquee.css";
import Reveal from "@/components/ui/Reveal";

const tools = [
  { name: "n8n", logo: "/n8n.png" },
  { name: "Gamma", logo: "/Gamma.jpg" },
  { name: "Hubspot", logo: "/Hubspot.jpg" },
  { name: "OpenAI", logo: "/GPT.jpg" },
  { name: "Apollo", logo: "/Apollo.jpg" },
  { name: "Aimfox", logo: "/Aimfox.jpg" },
  { name: "Instantly", logo: "/Instantly.png" },
];

export default function ToolsMarquee() {
  const doubled = [...tools, ...tools];

  return (
    <section className="tools-marquee-section">
      <div className="container">
        <Reveal delay={0}>
          <div className="section-tag">Tools</div>
          <h2 className="tools-marquee__heading">
            Tools You <span className="gradient-text">Master in This Program</span>
          </h2>
        </Reveal>

        <div className="tools-marquee__wrapper">
          <div className="tools-marquee__track">
            {doubled.map((tool, i) => (
              <div key={`${tool.name}-${i}`} className="tools-marquee__card">
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  className="tools-marquee__icon"
                />
                <span className="tools-marquee__name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
