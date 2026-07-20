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
    <section className="bg-background py-16 lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1280px] px-[20px] lg:px-[80px]">
        <SectionHeading title={title} description={intro} />
        {actions ? (
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {actions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className={
                  action.variant === "secondary"
                    ? "rounded-md border border-primary-container/40 px-6 py-3 text-btn font-semibold text-primary-container hover:bg-primary-container/10 transition"
                    : "rounded-md bg-primary-container px-6 py-3 text-btn font-semibold text-on-primary-container hover:bg-[#b88c2f] transition shadow-[0_4px_12px_rgba(200,155,60,0.15)]"
                }
              >
                {action.label}
              </Link>
            ))}
          </div>
        ) : null}
        {children ? <div className="mt-16 lg:mt-20">{children}</div> : null}
      </div>
    </section>
  );
}