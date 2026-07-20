import { GenericPage } from "@/components/generic-page";
import { StoryCard } from "@/components/story-card";
import { stories } from "@/lib/site-data";

export default function ClientStoriesPage() {
  return (
    <GenericPage title="Client Stories" intro="Discover how we transformed our clients’ special moments into unforgettable celebrations through editorial precision and artistic vision.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {stories.map((story) => (
          <StoryCard
            key={story.slug}
            href={`/client-stories/${story.slug}`}
            image={story.image}
            client={story.client}
            eventType={story.eventType}
            description={story.description}
          />
        ))}
      </div>
    </GenericPage>
  );
}
