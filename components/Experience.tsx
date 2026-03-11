"use client";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { EXPERIENCES } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-[120px] px-6 bg-bg-alt">
      <div className="max-w-[880px] mx-auto">
        <Reveal>
          <SectionHeader eyebrow="Experience" title="What I've been up to." />
        </Reveal>

        <div className="flex flex-col gap-6">
          {EXPERIENCES.map((exp, i) => {
            const IconComponent = exp.Icon;
            return (
              <Reveal key={i} delay={i * 0.12}>
                <div className="bg-white rounded-[22px] overflow-hidden shadow-card border border-border-light/50 transition-all duration-400 hover:shadow-card-hover hover:-translate-y-1">
                  <div className="p-9 max-sm:p-5">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-5 flex-wrap">
                      <div className="w-[52px] h-[52px] rounded-[14px] bg-accent-soft text-accent flex items-center justify-center shrink-0">
                        <IconComponent size={22} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                          <h3 className="font-display text-[22px] font-semibold text-t-primary">
                            {exp.title}
                          </h3>
                          <span className="text-xs font-medium text-t-tertiary bg-bg-alt px-3 py-1 rounded-pill">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-[15px] text-accent font-medium mt-0.5">
                          {exp.org}
                          {exp.orgDetail && (
                            <span className="text-t-tertiary font-normal">
                              {" "}
                              · {exp.orgDetail}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[16px] leading-relaxed text-t-secondary mb-6">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-col gap-2">
                      {exp.highlights.map((h, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-3 p-3 rounded-xl bg-bg-alt transition-colors duration-250 hover:bg-accent-soft"
                        >
                          <span className="text-[11px] font-semibold text-accent bg-[rgba(0,113,227,0.08)] px-2.5 py-0.5 rounded-md whitespace-nowrap mt-0.5 tracking-wide">
                            {h.label}
                          </span>
                          <span className="text-sm text-t-secondary leading-snug">
                            {h.detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
