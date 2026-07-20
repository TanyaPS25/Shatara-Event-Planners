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
      {eyebrow ? (
        <p className="text-label-md tracking-[0.18em] text-primary-container">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-3 font-display text-headline-lg text-on-surface`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-body-md text-on-surface-variant leading-relaxed ${center ? "mx-auto" : ""}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}