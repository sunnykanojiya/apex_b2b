"use client";

import { type ReactNode, useEffect, useRef } from "react";

interface SectionHeaderProps {
  tag: string;
  title: ReactNode;
  subtitle?: ReactNode;
  centered?: boolean;
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`section-header reveal ${centered ? "text-center" : "text-left"}`}
    >
      <div className="section-tag">{tag}</div>
      <h2>{title}</h2>
      {subtitle && <div className="section-subtitle">{subtitle}</div>}
    </div>
  );
}
