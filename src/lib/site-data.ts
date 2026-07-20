export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  accent: string;
};

export type StoryItem = {
  slug: string;
  client: string;
  eventType: string;
  description: string;
  image: string;
  rating: number;
  longReview: string;
};

export type MonthItem = {
  slug: string;
  month: string;
  count: string;
  image: string;
};

export const primaryNav: NavItem[] = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Weddings", href: "/weddings" },
  { label: "Client Stories", href: "/client-stories" },
  { label: "Contact", href: "/contact" },
  { label: "About Us", href: "/about" },
];

export const footerNav = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Press Kit", href: "/press-kit" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Careers", href: "/careers" },
];

export const serviceIntro = {
  heading: "Our Services",
  eyebrow: "CURATED EXPERIENCES",
  intro:
    "Discover a realm where bespoke event curation meets unparalleled artistry. From intimate gatherings to grand celebrations, we weave elegance into every detail.",
};

export const services: ServiceItem[] = [
  {
    slug: "artful-ambiance",
    title: "Artful Ambiance",
    eyebrow: "DESIGNING ATMOSPHERES",
    description:
      "Sculpting atmospheres that resonate with your soul, using light and texture to craft magic.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f29f5cc2ed?auto=format&fit=crop&w=1200&q=80",
    accent: "from-amber-900/60 via-black/15 to-black/75",
  },
  {
    slug: "culinary-excellence",
    title: "Culinary Excellence",
    eyebrow: "SIGNATURE MENUS",
    description:
      "A symphony of flavors tailored to the most discerning palates, presented with artistic flair.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    accent: "from-stone-900/50 via-black/20 to-black/75",
  },
  {
    slug: "floral-masterpieces",
    title: "Floral Masterpieces",
    eyebrow: "BOTANICAL STORYTELLING",
    description:
      "Bespoke botanical arrangements that breathe life into every moment.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80",
    accent: "from-emerald-950/55 via-black/20 to-black/75",
  },
  {
    slug: "exquisite-locales",
    title: "Exquisite Locales",
    eyebrow: "DESTINATION CURATION",
    description:
      "Access to the world’s most prestigious and hidden venues, from villas to private islands.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    accent: "from-sky-900/55 via-black/10 to-black/75",
  },
  {
    slug: "confectionary-art",
    title: "Confectionary Art",
    eyebrow: "SCULPTED SWEETNESS",
    description:
      "Sculptural cakes that taste as divine as they look, serving as the centerpiece of your celebration.",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
    accent: "from-amber-950/60 via-black/10 to-black/75",
  },
  {
    slug: "eternal-memories",
    title: "Eternal Memories",
    eyebrow: "CINEMATIC STORYTELLING",
    description:
      "Cinematic storytelling through the lens of world-class photography and live entertainment.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    accent: "from-zinc-900/65 via-black/20 to-black/80",
  },
];

export const stories: StoryItem[] = [
  {
    slug: "priya-r",
    client: "Priya R.",
    eventType: "Birthday Celebration",
    description:
      "Shatara turned my vision of an ethereal garden birthday into a breathtaking reality. Every detail, from the floating floral installations to the personalized table settings, was executed with meticulous care.",
    image: "/images/stories/priya_birthday.png",
    rating: 5,
    longReview:
      "Shatara turned my vision of an ethereal garden birthday into a breathtaking reality. Every detail, from the floating floral installations to the personalized table settings, was executed with meticulous care. The evening was a masterclass in ambient design, with warm glowing micro-lights hanging like stars from the trees and hand-calligraphed menus waiting at every plate. Our guests were mesmerized the second they walked in. The team handled everything from the coordination of the live acoustic trio to the catering transitions seamlessly. I was able to fully enjoy my celebration, knowing that every detail was in perfect hands.",
  },
  {
    slug: "arjun-k",
    client: "Arjun K.",
    eventType: "Engagement Ceremony",
    description:
      "The engagement was a milestone we wanted to be perfect, and Shatara delivered beyond our wildest expectations. Their ability to blend traditional elements with a modern aesthetic was phenomenal.",
    image: "/images/stories/arjun_engagement.png",
    rating: 4,
    longReview:
      "The engagement was a milestone we wanted to be perfect, and Shatara delivered beyond our wildest expectations. Their ability to blend traditional elements with a modern aesthetic was phenomenal. The floral arch was a true work of art, combining heritage blossoms with structured, contemporary arrangements that set a grand stage. While the planning phases required some fine-tuning to align all the vendors, the execution on the day of the ceremony was flawless. The team was incredibly attentive to our families and created an experience that was both sophisticated and emotionally resonant.",
  },
  {
    slug: "meena-b",
    client: "Meena B.",
    eventType: "Baby Shower",
    description:
      "The most elegant baby shower I could have imagined. Shatara curated a space that felt intimate, yet incredibly luxurious, using a palette of soft pastels and metallic accents that truly stunned our guests.",
    image: "/images/stories/meena_babyshower.png",
    rating: 5,
    longReview:
      "The most elegant baby shower I could have imagined. Shatara curated a space that felt intimate, yet incredibly luxurious, using a palette of soft pastels and metallic accents that truly stunned our guests. From the custom floral cloud suspended above the main seating area to the exquisite dessert bar featuring hand-painted botanical macarons, everything was a visual feast. The service was impeccable; the waitstaff was attentive, and the flow of the afternoon was perfectly paced. It was a beautiful, stress-free celebration of new beginnings that my family will cherish forever.",
  },
  {
    slug: "rahul-p",
    client: "Rahul P.",
    eventType: "Anniversary Celebration",
    description:
      "Celebrating 25 years required something extraordinary, and Shatara delivered exactly that. From the nostalgic photo gallery to the exquisite fine dining experience, every moment felt like a masterpiece.",
    image: "/images/stories/rahul_anniversary.png",
    rating: 5,
    longReview:
      "Celebrating 25 years required something extraordinary, and Shatara delivered exactly that. From the nostalgic photo gallery to the exquisite fine dining experience, every moment felt like a masterpiece. The team created a bespoke retrospective hallway that took our guests through a journey of our quarter-century together, leading into a candlelit dining room that rivaled a Michelin-starred restaurant. The culinary pairings were spectacular, and the live jazz quartet provided the perfect soundtrack. Their execution was flawless, and the memory of this milestone will stay with us forever.",
  },
  {
    slug: "divya-m",
    client: "Divya M.",
    eventType: "Wedding Reception",
    description:
      "The reception was the pinnacle of our wedding festivities. Shatara’s vision for a Midnight Star theme was executed with such grace and grandeur that our guests are still talking about it months later.",
    image: "/images/stories/divya_reception.png",
    rating: 4,
    longReview:
      "The reception was the pinnacle of our wedding festivities. Shatara’s vision for a Midnight Star theme was executed with such grace and grandeur that our guests are still talking about it months later. The deep blue draping, stellar lighting design, and the magnificent crescent moon dance floor backdrop made us feel as if we were dancing in the heavens. We faced a minor delay with the sound setup, but the coordination team quickly adapted and kept the reception schedule moving without our guests noticing a thing. The grandeur of the evening was unmatched.",
  },
  {
    slug: "karthik-v",
    client: "Karthik V.",
    eventType: "Corporate Event",
    description:
      "Professional execution, perfect time management, and a seamless event experience. Every aspect of our corporate summit was handled efficiently, leaving a lasting impression on our global stakeholders.",
    image: "/images/stories/karthik_corporate.png",
    rating: 5,
    longReview:
      "Professional execution, perfect time management, and a seamless event experience. Every aspect of our corporate summit was handled efficiently, leaving a lasting impression on our global stakeholders. Organizing a multi-day conference with complex AV requirements, international speakers, and VIP networking lounges is no small feat. Shatara managed the logistics, stage setup, and catering transitions with absolute precision. The feedback from our attendees has been overwhelmingly positive, highlighting the premium environment and flawless organization.",
  },
];

export const months: MonthItem[] = [
  {
    slug: "january",
    month: "January",
    count: "2 Events",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f29f5cc2ed?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "february",
    month: "February",
    count: "1 Event",
    image:
      "https://images.unsplash.com/photo-1529634417960-0f3f1f5b7c9d?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "march",
    month: "March",
    count: "5 Events",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "april",
    month: "April",
    count: "4 Events",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
  },
];