"use client";

import "./FAQSection.css";
import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    question: "1. What exactly is included in the program?",
    answer: [
      "The program includes structured online modules where your team learns how to use AI across sales activities, automate pre-sales work, and build efficient workflows.",
      "Along with the course, your team completes practical assignments to implement everything in real scenarios.",
      "You also get consulting sessions where your team can get help in applying systems and solving implementation challenges. The number of sessions depends on your team size.",
    ],
  },
  {
    question: "2. How is this different from just buying an online course?",
    answer: [
      "Most courses focus on knowledge.\nThis program focuses on output.",
      "By the end, your team builds a working sales system for your company, including workflows, automation, and structured processes that can be used immediately.",
    ],
  },
  {
    question: "3. What is the cost?",
    answer: [
      "The program is priced at <strong>₹5,000 + GST per employee</strong>.\nThis includes full course access along with consulting sessions.",
    ],
  },
  {
    question: "4. How much time does the team need to commit?",
    answer: [
      "The program is designed to fit into your team's existing schedule.",
      "It is self-paced, and your team can learn alongside their daily work.\nAssignments ensure that learning converts into real implementation without taking them completely off their core responsibilities.",
    ],
  },
  {
    question: "5. Our team already uses some AI tools. Is this still relevant?",
    answer: [
      "Yes.",
      "Using tools and having a structured system are very different.\nMost teams use a few tools but lack consistency and clear workflows.",
      "This program helps your team build a unified system and stay aligned with how modern sales teams operate.",
    ],
  },
  {
    question: "6. What kind of results can we expect?",
    answer: [
      "Teams typically see:",
      { type: "list", items: ["Reduced time spent on manual work", "More consistent outreach", "Better use of tools", "Stronger and more predictable pipeline"] },
      "The exact impact depends on your current setup, which is why consulting support is included.",
    ],
  },
  {
    question: "7. Who are the trainers?",
    answer: [
      "The faculty bring <strong>40+ years of combined B2B sales experience</strong>, with backgrounds from IIT and ISB.",
      "They have worked with companies like Tata Group and Citibank and have helped multiple companies build and implement sales systems using AI.",
    ],
  },
  {
    question: "8. Is this training customised for our business?",
    answer: [
      "The curriculum is structured, but implementation is specific to your company.",
      "Through consulting sessions, your team applies the systems directly to your product, market, and sales process.",
    ],
  },
  {
    question: "9. What if we are not satisfied with the program?",
    answer: [
      "Corporate enrollments come with a <strong>14-day refund window</strong>.",
      "If you are not satisfied with the results, you can request a refund within this period.",
    ],
  },
  {
    question: "10. How do we get started and how long does it take to see results?",
    answer: [
      "Getting started is simple. You can purchase the program directly from the website and enroll your team.",
      "Each user gets access to the course, and our team coordinates with your SPOC for sessions and support.",
      "Your team starts seeing improvements as they implement the systems during the program itself.",
    ],
  },
];

type AnswerItem = string | { type: string; items: string[] };

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <SectionHeader
          tag="Have Questions?"
          title={<>Frequently Asked <span className="gradient-text">Questions</span></>}
          subtitle="Everything you need to know about the program."
        />

        <div className="faq__list">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className={`faq__item ${openIndex === i ? "faq__item--open" : ""}`}>
                <button
                  className="faq__question"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span>{faq.question}</span>
                  <span className="faq__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div className="faq__answer">
                  <div className="faq__answer-inner">
                    {faq.answer.map((item: AnswerItem, j: number) => {
                      if (typeof item === "object" && item.type === "list") {
                        return (
                          <ul key={j}>
                            {item.items.map((li: string, k: number) => (
                              <li key={k}>{li}</li>
                            ))}
                          </ul>
                        );
                      }
                      return <p key={j} dangerouslySetInnerHTML={{ __html: item as string }} />;
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
