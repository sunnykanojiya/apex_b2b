"use client";

import "./TrustedBySection.css";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const companies = [
  { name: "Expedium", logo: "/Expedium.jpg", url: "https://www.expedium.net/" },
  { name: "Testriq", logo: "/testriq.jpg", url: "https://www.testriq.com/" },
  { name: "Daalchini", logo: "/daalchini.jpg", url: "https://www.daalchini.co.in/" },
  { name: "Verda", logo: "/verda.jpg", url: "https://verdahealthcare.com/" },
  { name: "Zetwerk", logo: "/zetwork.jpg", url: "https://www.zetwerk.com/" },
  { name: "Eureka24x7", logo: "/eureka.png", url: "https://www.eureka24x7.com/" },
];

export default function TrustedBySection() {
  const doubled = [...companies, ...companies];

  return (
    <section className="trusted-section" id="trusted">
      <div className="container">
        <SectionHeader
          tag="Built with real companies. Used by real sales teams."
          title={
            <>
              We&apos;ve worked with Expedium and other{" "}
              <span className="gradient-text">B2B companies</span>
            </>
          }
        />

        {/* Marquee */}
        <div className="trusted__marquee-wrapper">
          <div className="trusted__marquee-track">
            {doubled.map((company, i) => (
              <a
                key={`${company.name}-${i}`}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="trusted__logo-card"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="trusted__logo-img"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Proof Block */}
        <Reveal delay={100}>
          <div className="trusted__proof">
            <h3 className="trusted__proof-title">Proven Across Teams</h3>
            <p className="trusted__proof-text">
              We have trained <span className="font-bold text-purple-600">300+ SDRs </span>and<span className="font-bold text-purple-600"> BDRs</span> across different companies.
              <br />
              Our training is based on real sales workflows used by active teams.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
