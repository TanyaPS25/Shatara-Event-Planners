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
        <div className="rounded-[1.5rem] border border-black/8 bg-white p-8 shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
          <div className="relative min-h-[32rem] overflow-hidden rounded-[1.25rem]">
            <Image src={story.image} alt={story.client} fill className="object-cover" />
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-black/8 bg-white p-8 shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
          <p className="text-[0.72rem] uppercase tracking-[0.36em] text-gold-500">{story.eventType}</p>
          <h3 className="mt-4 font-display text-4xl">A detailed celebration story</h3>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            This page expands the selected client story with the same clean, editorial layout used throughout the site. It keeps the visual language consistent while providing a real destination for every Read More action.
          </p>
          <Link href="/client-stories" className="mt-8 inline-flex text-sm font-medium text-gold-500">
            Back to stories
          </Link>
        </div>
      </div>
    </GenericPage>
  );
}
