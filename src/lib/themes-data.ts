export type Theme = {
  id: string;
  category: "Wedding" | "Birthday" | "Babyshower";
  subtheme: string;
  displayName: string;
  description: string;
  image: string;
  capacity: {
    min: number;
    max: number;
  };
  venueType: string;
  decoration: string[];
  startingPrice: number;
  colorPalette: {
    name: string;
    colors: string[]; // hex values
  };
  lightingStyle: string;
  floralLevel: "Minimal" | "Accentual" | "Lush" | "Immersive";
};

export const themes: Theme[] = [
  // --- WEDDINGS ---
  {
    id: "royal-grandeur",
    category: "Wedding",
    subtheme: "Grand",
    displayName: "Royal Grandeur",
    description: "A highly opulent palette with majestic candelabras, warm gold spotlights, and elevated editorial scale.",
    image: "/images/themes/royal_grandeur.png",
    capacity: { min: 200, max: 500 },
    venueType: "Opulent Ballrooms & Historic Mansions",
    decoration: [
      "24k gold-plated candelabras",
      "Cascading white orchids & roses",
      "Velvet drapery & table dressings",
      "Gilded charger plates"
    ],
    startingPrice: 18000,
    colorPalette: {
      name: "Royal Gold & Ivory",
      colors: ["#d3a542", "#fbf7f1", "#18120d"]
    },
    lightingStyle: "Warm spotlighting, dramatic projections, and flickering candle glows.",
    floralLevel: "Immersive"
  },
  {
    id: "modern-minimalist",
    category: "Wedding",
    subtheme: "Minimal",
    displayName: "Modern Minimalist",
    description: "Sleek contemporary design with clean architectural lines, structured greens, and refined gallery lighting.",
    image: "/images/themes/modern_minimalist.png",
    capacity: { min: 50, max: 150 },
    venueType: "Modern Art Galleries & Industrial Lofts",
    decoration: [
      "Geometric wooden & steel frames",
      "Monochromatic botanical installations",
      "Frosted glass & acrylic seating",
      "Sleek linen-free ceramic tables"
    ],
    startingPrice: 9000,
    colorPalette: {
      name: "Sage & Frosted Glass",
      colors: ["#8fa89b", "#e3e7e5", "#ffffff"]
    },
    lightingStyle: "Cool-toned flood lights, neon accents, and clean edge-lit LEDs.",
    floralLevel: "Minimal"
  },
  {
    id: "celestial-extra",
    category: "Wedding",
    subtheme: "Extra",
    displayName: "Celestial Extra",
    description: "An over-the-top design featuring immersive starlight projections, glowing glass spheres, and cascading installations.",
    image: "/images/themes/celestial_extra.png",
    capacity: { min: 150, max: 350 },
    venueType: "Luxury Glass Marquees & Botanical Domes",
    decoration: [
      "Hanging celestial crystal installations",
      "Deep indigo & starry floor wrap",
      "Twinkling fairy light canopies",
      "Custom constellation seating charts"
    ],
    startingPrice: 25000,
    colorPalette: {
      name: "Midnight Indigo & Starlight Gold",
      colors: ["#0b132b", "#d3a542", "#cbd5e1"]
    },
    lightingStyle: "Immersive starlight galaxy projections, glowing fiber-optics, and blue uplighting.",
    floralLevel: "Lush"
  },

  // --- BIRTHDAYS ---
  {
    id: "barbie-dreamworld",
    category: "Birthday",
    subtheme: "Barbie Style",
    displayName: "Barbie Dreamworld",
    description: "Vibrant hot pinks, retro-chic photo spots, custom Barbie box props, and playful retro-chic styling.",
    image: "/images/themes/barbie_dreamworld.png",
    capacity: { min: 40, max: 120 },
    venueType: "Posh Garden Pavilions & Private Mansions",
    decoration: [
      "Life-sized vintage Barbie box photo booth",
      "Multi-toned pink balloon garlands",
      "Retro heart-shaped sunglasses wall",
      "Pink velvet couches & neon lettering"
    ],
    startingPrice: 6500,
    colorPalette: {
      name: "Hot Pink & Pastel Glow",
      colors: ["#db2777", "#f472b6", "#fdf2f8"]
    },
    lightingStyle: "Vibrant pink neon signs, disco ball reflections, and soft pink wash lights.",
    floralLevel: "Accentual"
  },
  {
    id: "spiderman-adventure",
    category: "Birthday",
    subtheme: "Spiderman",
    displayName: "Spiderman Adventure",
    description: "Web canopies, comic-style cityscape backdrops, glowing neon beams, and action-packed activity spots.",
    image: "/images/themes/spiderman_adventure.png",
    capacity: { min: 30, max: 80 },
    venueType: "Adventure Parks & Luxury Event Rooms",
    decoration: [
      "Custom laser-cut cityscape skyline",
      "Interactive suspension 'web crawl' grid",
      "Oversized comic bubble centerpieces",
      "Spider-web ceiling canopy"
    ],
    startingPrice: 5800,
    colorPalette: {
      name: "Crimson Web & Cyber Blue",
      colors: ["#dc2626", "#2563eb", "#1e293b"]
    },
    lightingStyle: "Glowing laser lines, blue and red strobe patterns, and custom bat-signal style lighting.",
    floralLevel: "Minimal"
  },
  {
    id: "cartoon-wonderland",
    category: "Birthday",
    subtheme: "Cartoon",
    displayName: "Cartoon Wonderland",
    description: "Playful oversized shapes, colorful balloon clouds, and giant character cutouts that spark imagination.",
    image: "/images/themes/cartoon_wonderland.png",
    capacity: { min: 50, max: 150 },
    venueType: "Luxury Kids Playhouses & Banquet Halls",
    decoration: [
      "Giant 3D whimsical cartoon character figures",
      "Rainbow balloon archways",
      "Oversized candy & star props",
      "Custom cartoon-font table settings"
    ],
    startingPrice: 6000,
    colorPalette: {
      name: "Playful Primary Rainbow",
      colors: ["#eab308", "#ef4444", "#3b82f6"]
    },
    lightingStyle: "Bright, cheery ambient wash with shifting colorful spotlights.",
    floralLevel: "Accentual"
  },

  // --- BABY SHOWERS ---
  {
    id: "boho-safari",
    category: "Babyshower",
    subtheme: "Boho Safari",
    displayName: "Boho Safari",
    description: "Rustic terracotta, soft pampas grass installations, and golden animal details for a chic bohemian nursery feel.",
    image: "/images/themes/boho_safari.png",
    capacity: { min: 30, max: 70 },
    venueType: "Rustic Greenhouses & Sunlit Orangeries",
    decoration: [
      "Pampas grass arrangements & macrame backdrops",
      "Golden safari animal figurines",
      "Terracotta pots & rattan wicker furniture",
      "Earthy linen table runners"
    ],
    startingPrice: 5000,
    colorPalette: {
      name: "Earthy Terracotta & Cream",
      colors: ["#c2410c", "#d97706", "#fef3c7"]
    },
    lightingStyle: "Soft warm string lights, woven straw pendant fixtures, and golden hour sunlight.",
    floralLevel: "Lush"
  },
  {
    id: "celestial-dream",
    category: "Babyshower",
    subtheme: "Celestial Dream",
    displayName: "Celestial Dream",
    description: "Floating dream clouds, golden stars, glowing moons, and soft pastels for an ethereal welcoming experience.",
    image: "/images/themes/celestial_dream.png",
    capacity: { min: 25, max: 60 },
    venueType: "Luxury Penthouse Suites & Rooftops",
    decoration: [
      "3D suspended fluff clouds with warm inner LEDs",
      "Giant golden crescent moon photo swing",
      "Dangling star pendants",
      "Velvet cloud-shaped lounge seats"
    ],
    startingPrice: 7000,
    colorPalette: {
      name: "Soft Lavender & Gold Dust",
      colors: ["#a78bfa", "#f59e0b", "#f3e8ff"]
    },
    lightingStyle: "Nebula cloud projection, soft hidden LED glows, and starry twinkle lights.",
    floralLevel: "Accentual"
  },
  {
    id: "botanical-forest",
    category: "Babyshower",
    subtheme: "Botanical Forest",
    displayName: "Botanical Forest",
    description: "Lush mosses, ferns, delicate yellow wildflowers, and natural wood accents creating an enchanting forest escape.",
    image: "/images/themes/botanical_forest.png",
    capacity: { min: 40, max: 90 },
    venueType: "Vintage Glasshouses & Secret Gardens",
    decoration: [
      "Living moss runners & fern table dividers",
      "Dangling lightbulb forest canopy",
      "Raw wooden slab tables",
      "Delicate yellow rose & botanical arches"
    ],
    startingPrice: 5500,
    colorPalette: {
      name: "Forest Fern & Daffodil Yellow",
      colors: ["#15803d", "#facc15", "#ecfdf5"]
    },
    lightingStyle: "Natural glasshouse sunlight, amber Edison bulbs, and fairy lights wrapped in ivy.",
    floralLevel: "Immersive"
  }
];
