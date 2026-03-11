import {
  TrendingUp,
  Cloud,
  Brain,
  BarChart3,
  Globe,
  Monitor,
  Zap,
  Navigation,
  BatteryCharging,
  Code2,
  Wrench,
  Cpu,
  Award,
} from "lucide-react";

export const NAV_ITEMS = ["About", "Experience", "Projects", "Skills", "Contact"];

export const EXPERIENCES = [
  {
    title: "Quantitative Analyst",
    org: "Maroon Fund",
    orgDetail: "Texas A&M Scholars of Finance",
    period: "Jan 2025 — Present",
    description:
      "Building ML-powered trading systems for a student-led investment fund managing $70K in university capital. Designing models that predict optimal trade signals and allocation engines that manage portfolio risk.",
    highlights: [
      {
        label: "Dip Detection",
        detail:
          "XGBoost model predicting entry/exit from historical data + technical indicators",
      },
      {
        label: "Data Pipeline",
        detail:
          "Automated LSEG ingestion → feature generation → multi-epoch training → signal visualization",
      },
      {
        label: "Portfolio Engine",
        detail:
          "Allocation system using momentum, volatility, volume & valuation signals for target weights",
      },
    ],
    Icon: TrendingUp,
  },
  {
    title: "Cloud Engineering Intern",
    org: "Cloudtop Office",
    orgDetail: null,
    period: "Summer 2024",
    description:
      "Built server infrastructure from the ground up — monitoring dashboards, storage systems, and tooling that gave the team real-time visibility into their entire cloud environment.",
    highlights: [
      {
        label: "Monitoring",
        detail:
          "Access + Site24x7 dashboard tracking runtime, CPU, disk, memory & licenses",
      },
      {
        label: "Storage",
        detail:
          "NAS arrays in RAID 5 for backup redundancy and secure local data storage",
      },
    ],
    Icon: Cloud,
  },
];

export const PROJECTS = [
  {
    title: "Dip Detection ML Model",
    description:
      "XGBoost model predicting optimal stock entry and exit points. Automated pipeline from LSEG data ingestion through signal visualization.",
    tags: ["Python", "XGBoost", "pandas", "scikit-learn"],
    featured: true,
    github: "https://github.com/danielarackal7",
    link: null,
    label: "Maroon Fund · Quant",
    Icon: Brain,
  },
  {
    title: "Portfolio Allocation System",
    description:
      "Intelligent allocation engine buying dips in calibrated increments using momentum, volatility, and valuation signals.",
    tags: ["Python", "NumPy", "Optimization"],
    featured: true,
    github: "https://github.com/danielarackal7",
    link: null,
    label: "Maroon Fund · Quant",
    Icon: BarChart3,
  },
  {
    title: "Scholars of Finance Website",
    description:
      "Designed and developed tamusof.org — the public site for Texas A&M's Scholars of Finance, Maroon Fund, and team pages.",
    tags: ["HTML", "CSS", "JavaScript", "Design"],
    featured: true,
    github: null,
    link: "https://www.tamusof.org",
    label: "Scholars of Finance",
    Icon: Globe,
  },
  {
    title: "Cloud Server Dashboard",
    description:
      "End-to-end monitoring for Cloudtop Office — server runtime, app usage, and storage.",
    tags: ["SQL", "Python", "PowerShell"],
    featured: false,
    github: null,
    link: null,
    label: null,
    Icon: Monitor,
  },
  {
    title: "Adaptive Brake Light",
    description:
      "Arduino-powered brake light displaying real-time braking intensity with 3D-printed housing.",
    tags: ["C++", "Arduino", "3D Printing"],
    featured: false,
    github: null,
    link: null,
    label: null,
    Icon: Zap,
  },
  {
    title: "Drone Project",
    description:
      "Collaborative autonomous drone with Python control, sensors, and flight path programming.",
    tags: ["Python", "Hardware"],
    featured: false,
    github: "https://github.com/danielarackal7/Drone-Project-2024",
    link: null,
    label: null,
    Icon: Navigation,
  },
  {
    title: "EVHome",
    description:
      "Business plan and web platform for home EV charging with cost estimation algorithm.",
    tags: ["HTML", "JavaScript"],
    featured: false,
    github: null,
    link: null,
    label: null,
    Icon: BatteryCharging,
  },
];

export const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "C++", "SQL", "HTML/CSS", "PowerShell"],
    Icon: Code2,
  },
  {
    category: "Frameworks & Tools",
    items: [
      "pandas",
      "NumPy",
      "scikit-learn",
      "XGBoost",
      "Git",
      "Vercel",
      "Site24x7",
    ],
    Icon: Wrench,
  },
  {
    category: "Systems & Platforms",
    items: [
      "Microsoft Office",
      "G-Suite",
      "Autodesk CAD",
      "MS Access",
      "RAID/NAS",
      "3D Printing",
    ],
    Icon: Cpu,
  },
  {
    category: "Certifications",
    items: [
      "Apple Atlas",
      "Dell Pro Support",
      "MyEducator Excel",
      "MyEducator Access",
    ],
    Icon: Award,
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/danielarackal7",
  linkedin: "https://www.linkedin.com/in/daniel-arackal-888024247/",
  email: "danielarackal@gmail.com",
};
