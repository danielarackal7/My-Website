interface SectionHeaderProps {
  eyebrow: string;
  title: string;
}

export default function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="text-center mb-14">
      <p className="text-sm font-medium text-accent mb-1.5">{eyebrow}</p>
      <h2 className="font-display text-[clamp(32px,5vw,48px)] font-semibold text-t-primary tracking-tight leading-tight">
        {title}
      </h2>
    </div>
  );
}
