import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GenericPage } from "@/components/generic-page";
import { stories } from "@/lib/site-data";

type Params = {
  params: Promise<{ slug: string }>;
};

export default async function StoryDetailPage({ params }: Params) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <GenericPage
      title={story.client}
      intro={story.description}
      actions={[{ label: "View More Stories", href: "/client-stories" }, { label: "Contact Our Planners", href: "/enquire", variant: "secondary" }]}
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-6 ambient-shadow-gold">
          <div className="relative min-h-[32rem] overflow-hidden rounded-md">
            <Image src={story.image} alt={story.client} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
        <div className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-8 ambient-shadow-gold flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-4">
              <p className="text-label-md tracking-[0.16em] text-primary-container font-semibold">{story.eventType}</p>
              <div className="text-primary-container text-sm">{"★".repeat(story.rating) + "☆".repeat(5 - story.rating)}</div>
            </div>
            <h3 className="mt-4 font-display text-3xl font-semibold text-on-surface">Client Review</h3>
            <p className="mt-5 text-body-md text-on-surface-variant leading-relaxed whitespace-pre-wrap">
              {story.longReview}
            </p>
          </div>
          <Link href="/client-stories" className="mt-8 text-label-md tracking-[0.1em] text-primary-container hover:text-primary transition inline-block">
            ← Back to stories
          </Link>
        </div>
      </div>
    </GenericPage>
  );
}
