"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-36 pb-20 text-center max-w-[1080px] mx-auto relative">
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.p
          variants={fadeUp}
          className="text-[16px] font-medium text-accent mb-5 tracking-wide"
        >
          Industrial Engineering · Computer Science
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-display text-[clamp(48px,10vw,84px)] font-semibold text-t-primary leading-[1.04] mb-5"
          style={{ letterSpacing: "-0.035em" }}
        >
          Daniel Arackal
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-[clamp(17px,2.2vw,21px)] text-t-secondary leading-relaxed max-w-[560px] mx-auto mb-11"
        >
          Junior at Texas A&M building quantitative models, cloud
          infrastructure, and software that turns complex problems into
          elegant solutions.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex gap-2.5 items-center flex-wrap justify-center"
        >
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-6 py-3 rounded-pill no-underline transition-all duration-300 hover:bg-accent-hover hover:scale-[1.04] hover:shadow-[0_4px_20px_rgba(0,113,227,0.25)]"
          >
            <Mail size={17} strokeWidth={1.8} /> Get in Touch
          </a>

          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-t-primary text-sm font-medium px-6 py-3 rounded-pill no-underline border border-border-main bg-white transition-all duration-300 hover:border-accent hover:text-accent hover:scale-[1.03]"
          >
            <Github size={17} /> GitHub
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-t-primary text-sm font-medium px-6 py-3 rounded-pill no-underline border border-border-main bg-white transition-all duration-300 hover:border-accent hover:text-accent hover:scale-[1.03]"
          >
            <Linkedin size={17} /> LinkedIn
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-9 text-t-tertiary"
        style={{ animation: "float 2.5s ease-in-out infinite" }}
      >
        <ChevronDown size={18} strokeWidth={1.8} />
      </motion.div>
    </section>
  );
}
