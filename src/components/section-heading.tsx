type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"}>
      {eyebrow ? <p className="text-[0.72rem] uppercase tracking-[0.36em] text-gold-500">{eyebrow}</p> : null}
      <h2 className="mt-3 font-display text-4xl leading-tight text-[var(--ink)] sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-[var(--muted)]">{description}</p> : null}
    </div>
  );
}