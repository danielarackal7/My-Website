"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection, useScrolled } from "@/lib/hooks";
import { NAV_ITEMS } from "@/lib/data";
import Image from "next/image";

export default function Navbar() {
  const active = useActiveSection(
    NAV_ITEMS.map((n) => n.toLowerCase())
  );
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  const goTo = (item: string) => {
    setMobileOpen(false);
    document
      .getElementById(item.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled ? "rgba(251,251,253,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled
          ? "0.5px solid var(--border-light)"
          : "0.5px solid transparent",
      }}
    >
      <div className="max-w-[1080px] mx-auto px-6 h-[52px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/da-logo.png"
            alt="DA"
            width={30}
            height={30}
            className="rounded-[7px]"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.toLowerCase();
            return (
              <button
                key={item}
                onClick={() => goTo(item)}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all duration-250 cursor-pointer border-none ${
                  isActive
                    ? "bg-accent-soft text-accent font-medium"
                    : "bg-transparent text-t-tertiary hover:text-t-secondary hover:bg-black/[0.03]"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center bg-transparent border-none text-t-primary cursor-pointer p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} strokeWidth={1.6} /> : <Menu size={18} strokeWidth={1.6} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="overflow-hidden transition-all duration-400"
        style={{
          maxHeight: mobileOpen ? 320 : 0,
          background: "rgba(251,251,253,0.96)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="px-6 pt-1 pb-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => goTo(item)}
              className={`block w-full text-left py-3.5 bg-transparent border-none border-b cursor-pointer text-[15px] ${
                active === item.toLowerCase()
                  ? "text-accent"
                  : "text-t-secondary"
              }`}
              style={{ borderBottom: "0.5px solid var(--border-light)" }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
