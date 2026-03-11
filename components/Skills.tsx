"use client";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-[120px] px-6 bg-bg-alt">
      <div className="max-w-[860px] mx-auto">
        <Reveal>
          <SectionHeader eyebrow="Skills" title="What I work with." />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILLS.map((group, i) => {
            const IconComponent = group.Icon;
            return (
              <Reveal key={group.category} delay={i * 0.08}>
                <div className="bg-white rounded-[20px] p-7 shadow-card border border-border-light/50 text-center transition-all duration-350 hover:shadow-card-hover hover:-translate-y-0.5">
                  <div className="w-11 h-11 rounded-xl bg-accent-soft text-accent flex items-center justify-center mx-auto mb-3">
                    <IconComponent size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-[13px] text-t-secondary bg-bg-alt px-4 py-[7px] rounded-pill transition-all duration-250 cursor-default hover:text-accent hover:bg-accent-soft"
                      >
                        {item}
                      </span>
                    ))}
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
