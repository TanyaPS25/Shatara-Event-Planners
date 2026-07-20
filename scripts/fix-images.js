const fs = require('fs');

const file = 'src/app/portfolio/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const images = [
  "/images/themes/celestial_dream.png",
  "/images/themes/modern_minimalist.png",
  "/images/themes/botanical_forest.png",
  "/images/themes/sangeet_spectacle.png",
  "/images/themes/royal_grandeur.png",
  "/images/themes/wedding_hero.png",
  "/images/stories/arjun_engagement.png",
  "/images/stories/divya_reception.png",
  "/images/stories/karthik_corporate.png",
  "/images/stories/meena_babyshower.png",
  "/images/stories/priya_birthday.png",
  "/images/stories/rahul_anniversary.png",
  "/images/themes/cocktail_glam.png",
  "/images/themes/mehndi_magic.png"
];

let imgIndex = 0;

// Replace all unsplash links with local images
content = content.replace(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?auto=format&fit=crop&w=\d+&q=\d+/g, () => {
  const replacement = images[imgIndex % images.length];
  imgIndex++;
  return replacement;
});

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed all broken unsplash images in portfolio/page.tsx');
