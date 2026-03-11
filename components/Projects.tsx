"use client";

import { Github, ExternalLink, Link as LinkIcon, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { PROJECTS } from "@/lib/data";

function FeaturedCard({
  project,
  delay,
}: {
  project: (typeof PROJECTS)[0];
  delay: number;
}) {
  const IconComponent = project.Icon;
  return (
    <Reveal delay={delay} className="h-full">
      <div className="bg-white rounded-[22px] p-8 shadow-card border border-border-light/50 transition-all duration-400 hover:shadow-card-hover hover:-translate-y-1.5 h-full flex flex-col cursor-default">
        <div className="flex items-center gap-3 mb-[18px]">
          <div className="w-11 h-11 rounded-xl bg-accent-soft text-accent flex items-center justify-center shrink-0">
            <IconComponent size={22} strokeWidth={1.5} />
          </div>
          {project.label && (
            <span className="text-[11px] font-semibold text-accent uppercase tracking-wide">
              {project.label}
            </span>
          )}
        </div>
        <h3 className="font-display text-xl font-semibold text-t-primary mb-2">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-t-secondary mb-5 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-[18px]">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium text-t-tertiary bg-bg-alt px-2.5 py-1 rounded-[7px]"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium text-accent no-underline inline-flex items-center gap-1.5 transition-all duration-200 hover:gap-2"
            >
              <Github size={14} /> GitHub <ArrowUpRight size={11} />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium text-accent no-underline inline-flex items-center gap-1.5 transition-all duration-200 hover:gap-2"
            >
              <LinkIcon size={13} /> Live Site <ArrowUpRight size={11} />
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

function OtherProject({
  project,
  delay,
}: {
  project: (typeof PROJECTS)[0];
  delay: number;
}) {
  const IconComponent = project.Icon;
  return (
    <Reveal delay={delay}>
      <div className="flex items-center gap-3.5 p-4 rounded-[14px] transition-all duration-300 hover:bg-white hover:shadow-card cursor-default">
        <div className="w-9 h-9 rounded-[10px] bg-bg-alt text-t-tertiary flex items-center justify-center shrink-0">
          <IconComponent size={18} strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-[15px] font-semibold text-t-primary mb-0.5 flex items-center gap-2">
            {project.title}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-t-tertiary hover:text-accent transition-colors duration-200"
              >
                <ExternalLink size={13} />
              </a>
            )}
          </h4>
          <p className="text-[13px] text-t-tertiary leading-snug">
            {project.description}
          </p>
        </div>
        <div className="flex gap-1 shrink-0 max-sm:hidden">
          {project.tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className="text-[10px] font-medium text-t-tertiary bg-bg-alt px-2 py-0.5 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const other = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-[120px] px-6 max-w-[1080px] mx-auto">
      <Reveal>
        <SectionHeader eyebrow="Projects" title="Things I've built." />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {featured.map((p, i) => (
          <FeaturedCard key={p.title} project={p} delay={i * 0.1} />
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="text-[13px] font-semibold text-t-tertiary uppercase tracking-wider mb-2 pl-1">
          More Projects
        </p>
      </Reveal>
      <div className="flex flex-col gap-0.5">
        {other.map((p, i) => (
          <OtherProject key={p.title} project={p} delay={0.15 + i * 0.06} />
        ))}
      </div>
    </section>
  );
}
