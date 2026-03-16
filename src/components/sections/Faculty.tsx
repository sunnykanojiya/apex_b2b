"use client";

import { useState } from "react";
import "./Faculty.css";
import Reveal from "@/components/ui/Reveal";

const faculty = [
  {
    name: "Shashikant Burnwal",
    subheading: "B.Tech, IIT Kharagpur | MBA, ISB Hyderabad",
    credential: `Over 15 years, Shashikant has worked with Tata Group, founded two tech startups, Trillbit and Hubcredo, and built their businesses worth millions of dollars from the ground up. In the last 5 years, he has helped 27+ companies build their sales and growth systems through consulting and hands-on sales training. He doesn't teach sales theory. He teaches the exact system he used to take companies from cold outreach to closed deals. At Apex, he brings that entire playbook into the classroom, now infused with AI-first tools and strategies built for how business actually works today.`,
    image: "/shashikant_burnwal.jpg",
    objectPosition: "center 5%",
    linkedin: "https://www.linkedin.com/in/shashikantburnwal/",
    insta: "https://www.instagram.com/shashikant_burnwal/?hl=en",
    youtube: "https://youtube.com/@shashikant.burnwal?si=n3n9FuVGVgrjd_31",
  },
  {
    name: "Anurag Bhatnagar",
    subheading: "30+ Years Experience | Citibank, HDFC, MaxLife | Founder, ShiftAltCap",
    credential: `Anurag has spent three decades at the highest levels of corporate finance and business. As founder of a wealthTech company, he understands both the corporate world you're entering and what it takes to build something from scratch. He gives you the insider perspective and real tips to excel in your career.`,
    image: "/anurag_bhatnagar.jpg",
    objectPosition: "center 20%",
    linkedin: "https://www.linkedin.com/in/leobhatnagar/ ",
  },
  {
    name: "Ian Jason Creado",
    subheading: "10+ Years in B2B Sales and Marketing",
    credential: `Ian has consulted 20+ companies across India and the US on sales growth, and built a 6-figure dollar income independently through Upwork. He knows what it takes to sell, what clients actually look for, and how to position yourself to win in a competitive market. He teaches from real deals, not textbooks.`,
    image: "/ian_jason_creado.jpg",
    objectPosition: "center 10%",
    linkedin: "https://www.linkedin.com/in/ian-jason-creado-365a3119b/",
  },
];

const FacultyCard = ({ member }: { member: (typeof faculty)[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="faculty-card">
      <div className="faculty-card__image-container">
        <img 
          src={member.image} 
          alt={member.name} 
          className="faculty-card__image" 
          style={{ objectPosition: member.objectPosition }}
        />
      </div>
      <div className="faculty-card__content">
        <h3 className="faculty-card__name">{member.name}</h3>
        <p className="faculty-card__subheading">{member.subheading}</p>
        <div className={`faculty-card__credential-wrapper ${isExpanded ? "expanded" : ""}`}>
          <p className="faculty-card__credential">{member.credential}</p>
        </div>
        <button 
          className="faculty-card__see-more" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "See less" : "See more"}
        </button>
        <div className="faculty-card__socials">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="faculty-card__link">
              <img src="/linkedin.webp" alt="LinkedIn" className="faculty-card__social-icon" />
            </a>
          )}
          {"insta" in member && member.insta && (
            <a href={member.insta} target="_blank" rel="noopener noreferrer" className="faculty-card__link">
              <img src="/instagram.svg" alt="Instagram" className="faculty-card__social-icon" />
            </a>
          )}
          {"youtube" in member && member.youtube && (
            <a href={member.youtube} target="_blank" rel="noopener noreferrer" className="faculty-card__link">
              <img src="/YouTube.png" alt="YouTube" className="faculty-card__social-icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Faculty() {
  return (
    <section className="faculty-section" id="faculty">
      <div className="container">
        <Reveal>
          <h2 className="faculty-section__heading">
            Our Trainers from <span className="highlight">IIT, ISB, ICAI</span>
          </h2>
        </Reveal>
        <div className="faculty__grid">
          {faculty.map((member, i) => (
            <div key={member.name} className="faculty__grid-item">
              <Reveal delay={i * 100} className="faculty__reveal">
                <FacultyCard member={member} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
