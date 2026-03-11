"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { SOCIAL_LINKS } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-[120px] pb-[140px] px-6 max-w-[660px] mx-auto text-center"
    >
      <Reveal>
        <SectionHeader eyebrow="Contact" title="Let's connect." />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="text-[17px] leading-relaxed text-t-secondary max-w-[440px] mx-auto mb-10">
          Open to new opportunities, interesting projects, or quant &
          engineering collaborations.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="flex justify-center gap-2.5 flex-wrap">
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-7 py-3.5 rounded-pill no-underline transition-all duration-300 hover:bg-accent-hover hover:scale-[1.04] hover:shadow-[0_4px_20px_rgba(0,113,227,0.25)]"
          >
            <Mail size={17} strokeWidth={1.8} /> Say Hello
          </a>

          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-t-primary text-sm font-medium px-7 py-3.5 rounded-pill no-underline border border-border-main bg-white transition-all duration-300 hover:border-accent hover:text-accent hover:scale-[1.03]"
          >
            <Github size={17} /> GitHub
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-t-primary text-sm font-medium px-7 py-3.5 rounded-pill no-underline border border-border-main bg-white transition-all duration-300 hover:border-accent hover:text-accent hover:scale-[1.03]"
          >
            <Linkedin size={17} /> LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}
