import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

type GenericPageProps = {
  title: string;
  intro: string;
  children?: React.ReactNode;
  actions?: Array<{ label: string; href: string; variant?: "primary" | "secondary" }>;
};

export function GenericPage({ title, intro, children, actions }: GenericPageProps) {
  return (
    <section className="bg-[var(--page)] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-10">
        <SectionHeading title={title} description={intro} />
        {actions ? (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {actions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className={
                  action.variant === "secondary"
                    ? "rounded-full border border-gold-500 px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold-600 transition hover:bg-gold-50"
                    : "rounded-full bg-gold-500 px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-gold-400"
                }
              >
                {action.label}
              </Link>
            ))}
          </div>
        ) : null}
        {children ? <div className="mt-14">{children}</div> : null}
      </div>
    </section>
  );
}