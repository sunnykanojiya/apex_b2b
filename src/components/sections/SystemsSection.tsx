"use client";
import "./SystemsSection.css";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const blocks = [
    {
        num: "01",
        title: "Customer Intelligence & ICP Targeting",
        description:
            "Define the right buyers before outreach begins. Your team learns how to identify high-value companies and decision makers using structured ICP frameworks and AI assisted research.",
        deliverables: [
            "Ideal Customer Profile framework",
            "Customer segmentation model",
            "AI assisted customer research prompts",
            "Target account identification process",
        ],
    },
    {
        num: "02",
        title: "AI Driven Prospecting & Lead Generation",
        description:
            "Build structured prospecting systems using firmographic, technographic, and intent signals. Your team learns how to generate qualified prospect lists quickly and consistently.",
        deliverables: [
            "Automated prospect list building system",
            "Buying signal identification framework",
            "Lead enrichment workflow",
            "Prospect qualification filters",
        ],
    },
    {
        num: "03",
        title: "AI Powered Email Outreach Infrastructure",
        description:
            "Set up scalable outbound email campaigns that reach inboxes and generate real conversations. Your team builds the entire outreach infrastructure from domain setup to performance tracking.",
        deliverables: [
            "Email outreach infrastructure setup",
            "Campaign frameworks and messaging templates",
            "AI assisted email personalization prompts",
            "Campaign performance tracking dashboards",
        ],
    },
    {
        num: "04",
        title: "LinkedIn Prospecting & Automation",
        description:
            "Build structured LinkedIn outreach workflows that combine human messaging with safe automation. Your team learns how to reach decision makers with relevant and personalized communication.",
        deliverables: [
            "LinkedIn outreach messaging frameworks",
            "AI assisted message personalization prompts",
            "LinkedIn automation workflows",
            "Outreach tracking process",
        ],
    },
    {
        num: "05",
        title: "Sales Conversation Systems & Cold Outreach",
        description:
            "Improve sales conversations using structured call frameworks and AI preparation tools. Your team learns how to handle objections, guide conversations, and move prospects forward.",
        deliverables: [
            "Sales call structure framework",
            "Objection handling playbooks",
            "AI assisted call preparation prompts",
            "Call review and improvement process",
        ],
    },
    {
        num: "06",
        title: "Multi-Channel Outreach Engine",
        description:
            "Combine email, LinkedIn, and calls into one structured revenue generation system. Your team builds a repeatable outreach engine that runs consistently across the sales team.",
        deliverables: [
            "Multi-channel campaign architecture",
            "Daily outreach execution framework",
            "Process documentation and SOPs",
            "Outreach tracking dashboards",
        ],
    },
    {
        num: "07",
        title: "Sales Automation & Workflow Design",
        description:
            "Design automation systems that remove manual work from the sales process. Your team learns how to automate lead generation, follow-ups, and outreach workflows using modern no-code tools.",
        deliverables: [
            "Automated lead routing workflows",
            "AI assisted message generation",
            "Sales automation workflows using tools like n8n",
            "System integration between tools",
        ],
    },
    {
        num: "08",
        title: "Sales Performance & Deal Execution",
        description:
            "Improve how your team handles conversations, follow-ups, and account growth. Use AI insights to improve communication and increase conversion rates across every stage.",
        deliverables: [
            "Sales performance tracking systems",
            "Deal review frameworks",
            "Customer conversation improvement prompts",
            "Account management playbooks",
        ],
    },
    {
        num: "09",
        title: "Sales Workflow Optimization & AI Integration",
        description:
            "Implement AI across the entire sales workflow. Your team learns how to optimize outreach, pipeline visibility, and sales productivity using AI systems built for modern B2B teams.",
        deliverables: [
            "AI assisted CRM workflows",
            "Pipeline monitoring dashboards",
            "AI driven performance insights",
            "Sales workflow optimization framework",
        ],
    },
];

function BlockCard({
    block,
    index,
}: {
    block: (typeof blocks)[0];
    index: number;
}) {
    const [open, setOpen] = useState(false);

    return (
        <Reveal delay={index * 60}>
            <div className={`block-card ${open ? "block-card--open" : ""}`}>
                <button
                    className="block-card__header"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls={`block-content-${block.num}`}
                >
                    <span className="block-card__number">{block.num}</span>
                    <h3 className="block-card__title">{block.title}</h3>
                    <span className="block-card__chevron" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </span>
                </button>

                <div
                    id={`block-content-${block.num}`}
                    className="block-card__body"
                    role="region"
                >
                    <p className="block-card__desc">{block.description}</p>
                    <div className="block-card__deliverables">
                        <h4>What your team builds</h4>
                        <ul role="list">
                            {block.deliverables.map((d) => (
                                <li key={d}>
                                    <span
                                        className="block-card__check"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </span>
                                    {d}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Reveal>
    );
}

export default function SystemsSection() {
    return (
        <section className="systems-section" id="systems">
            <div className="container">
                <SectionHeader
                    tag="Program Curriculum"
                    title={
                        <>
                            End-to-End AI Sales Systems Your Team{" "}
                            <span className="gradient-text">Will Build</span>
                        </>
                    }
                    subtitle={
                        <>
                            <p className="systems-header__lead">
                                A structured rollout designed to move your sales
                                team from scattered effort to repeatable
                                pipeline systems with clear weekly execution.
                            </p>
                            <div
                                className="systems-header__highlights"
                                role="list"
                                aria-label="Program highlights"
                            >
                                <span
                                    role="listitem"
                                    className="systems-header__chip"
                                >
                                    Easy to follow
                                </span>
                                <span
                                    role="listitem"
                                    className="systems-header__chip"
                                >
                                    Practical to implement
                                </span>
                                <span
                                    role="listitem"
                                    className="systems-header__chip"
                                >
                                    Built for real sales teams
                                </span>
                            </div>
                        </>
                    }
                />

                <div className="systems__grid">
                    {blocks.map((block, i) => (
                        <BlockCard key={block.num} block={block} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
