"use client";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-[120px] px-6 max-w-[700px] mx-auto">
      <Reveal>
        <SectionHeader eyebrow="About" title="A little background." />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="text-[17px] leading-[1.7] text-t-secondary text-center">
          <p className="mb-5">
            I&apos;m an{" "}
            <span className="text-t-primary font-semibold">
              Data Engineering
            </span>{" "}
            major with a{" "}
            <span className="text-t-primary font-semibold">
              Computer Science
            </span>{" "}
            minor at Texas A&M University, class of 2027.
          </p>
          <p className="mb-5">
            My work lives at the intersection of{" "}
            <span className="text-accent font-semibold">
              quantitative finance
            </span>{" "}
            and{" "}
            <span className="text-accent font-semibold">
              systems engineering
            </span>
            . As a Quantitative Analyst with the{" "}
            <a
              href="https://www.tamusof.org/maroonfund"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent no-underline font-semibold hover:underline"
            >
              Maroon Fund
            </a>
            , I build ML models to predict trade signals and design portfolio
            allocation systems that balance risk and return.
          </p>
          <p>
            Previously, I interned at{" "}
            <span className="text-t-primary font-medium">Cloudtop Office</span>{" "}
            building server monitoring infrastructure and deploying storage
            systems. I&apos;m always looking for problems where engineering
            thinking and code can create{" "}
            <span className="text-t-primary font-medium">tangible impact</span>.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
