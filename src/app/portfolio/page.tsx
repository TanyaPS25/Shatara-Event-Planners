"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─── Types ─── */
type EventItem = {
  title: string;
  shortDate: string;
  dateText: string;
  client: string;
  venue: string;
  theme: string;
  description: string;
  tags: string[];
  image: string;
  thumb1: string;
  thumb2: string;
};

type MonthData = {
  slug: string;
  month: string;
  abbr: string;
  countLabel: string;
  image: string;
  events: EventItem[];
};

type YearData = {
  year: number;
  heroImage: string;
  tagline: string;
  months: MonthData[];
};

/* ─── Data ─── */
const ALL_YEARS: YearData[] = [
  {
    year: 2026,
    heroImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=80",
    tagline: "An extraordinary year of bespoke celebrations.",
    months: [
      {
        slug: "jan", month: "January", abbr: "JAN", countLabel: "2 Events",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80",
        events: [
          { title: "Winter Wonderland Gala", shortDate: "10 Jan", dateText: "10 January 2026", client: "Priya & Family", venue: "Taj Palace, New Delhi", theme: "Frozen Ivory & Silver", description: "An immersive winter celebration styled with custom ice sculptures, frosted glass panels, white floral runners, and cold spark arrays for a magical indoor forest feel hosting 400 elite guests.", tags: ["DECORATIONS", "LIGHTING", "ENTERTAINMENT"], image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80" },
          { title: "Strategic Partner Summit", shortDate: "24 Jan", dateText: "24 January 2026", client: "TechVest Ventures", venue: "The Oberoi, Mumbai", theme: "Platinum & Deep Teal", description: "An editorial corporate dinner designed with structural floral pillars, custom brass panels, and atmospheric uplighting tailored to the partner network of 200 delegates.", tags: ["CORPORATE", "PRODUCTION"], image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80" },
        ],
      },
      {
        slug: "feb", month: "February", abbr: "FEB", countLabel: "1 Event",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=80",
        events: [
          { title: "Secret Garden Soiree", shortDate: "14 Feb", dateText: "14 February 2026", client: "Rahul & Sneha", venue: "Private Villa, Alibaug", theme: "Pastel Rose & Sage", description: "An intimate botanical celebration featuring a canopy of 10,000 hanging pastel roses and sage foliage, customized lighting design, and a curated culinary experience for 80 guests.", tags: ["BOTANICAL", "CATERING", "STYLING"], image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80" },
        ],
      },
      {
        slug: "mar", month: "March", abbr: "MAR", countLabel: "3 Events",
        image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=400&q=80",
        events: [
          { title: "Shatara Grand Reception", shortDate: "15 Mar", dateText: "15 March 2026", client: "Divya M.", venue: "Le Meridien, Coimbatore", theme: "Royal Gold & White", description: "A luxurious wedding reception designed with elegant floral décor, bespoke lighting installations, and a refined ivory-and-gold color palette. We transformed the grand ballroom into a celestial garden space for over 500 elite guests.", tags: ["DECORATIONS", "CATERING"], image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=400&q=80" },
          { title: "Spring Sakura Luncheon", shortDate: "22 Mar", dateText: "22 March 2026", client: "Meena S.", venue: "The Leela, Bangalore", theme: "Pastel Sage & Pink", description: "A delicate baby shower styled with cherry blossom installations, customized floral arches, and an artisanal confectionary station for high tea attended by 120 guests.", tags: ["FLORAL", "STYLING", "CONFECTIONARY"], image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=80" },
          { title: "Editorial Jewelry Launch", shortDate: "29 Mar", dateText: "29 March 2026", client: "Zoya Atelier", venue: "Taj West End, Bangalore", theme: "Champagne Gold & Charcoal", description: "An ultra-premium brand launch styled as an art gallery exhibition, utilizing high contrast lighting and suspended glass display panels for 300 press and VIP attendees.", tags: ["PRODUCTION", "LIGHTING"], image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80" },
        ],
      },
      {
        slug: "apr", month: "April", abbr: "APR", countLabel: "4 Events",
        image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=400&q=80",
        events: [
          { title: "Sunset Beach Mandap", shortDate: "05 Apr", dateText: "05 April 2026", client: "Ananya & Kabir", venue: "W Goa", theme: "Terracotta & Pampas Grass", description: "A stunning beachside wedding mandap constructed from local sandstones, dried pampas grass, and copper metallic frames, set against a sunset ocean backdrop for 350 guests.", tags: ["WEDDING", "BOTANICAL"], image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" },
          { title: "Celestial Anniversary Gala", shortDate: "12 Apr", dateText: "12 April 2026", client: "Asteria Tech Group", venue: "Ritz Carlton, Pune", theme: "Indigo & Burnished Brass", description: "An upscale celebration under a ceiling of fiber-optic star installations, complete with interactive light projections and symphonic orchestra.", tags: ["PRODUCTION", "LIGHTING"], image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80" },
          { title: "Spring Garden Reception", shortDate: "19 Apr", dateText: "19 April 2026", client: "Rohan & Riya", venue: "ITC Grand Chola, Chennai", theme: "White & Pastel Sage", description: "A grand reception featuring flower tunnels, custom stage design, and ambient warm lighting setup for 800 guests in lush garden atrium.", tags: ["WEDDING", "DECORATIONS"], image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=400&q=80" },
          { title: "Modernist Rooftop Dinner", shortDate: "26 Apr", dateText: "26 April 2026", client: "Aditya & Kiara", venue: "Four Seasons, Mumbai", theme: "Silver & Glass", description: "A high-end intimate dinner under the stars featuring clear acrylic furniture, mirror tabletops, and minimal modern floral arrangements for 60 guests.", tags: ["STYLING", "CATERING"], image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80" },
        ],
      },
      {
        slug: "may", month: "May", abbr: "MAY", countLabel: "2 Events",
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80",
        events: [
          { title: "Summer Heritage Wedding", shortDate: "03 May", dateText: "03 May 2026", client: "Karan & Nandita", venue: "Samode Palace, Jaipur", theme: "Heritage Rust & Gold", description: "A regal palace wedding across three courtyards with traditional Rajasthani folk artists, hand-painted thematic elements, and 600 guests under a canopy of marigold chandeliers.", tags: ["WEDDING", "HERITAGE"], image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=400&q=80" },
          { title: "Luxury Brand Symposium", shortDate: "18 May", dateText: "18 May 2026", client: "Maison Luxe India", venue: "Taj Connemara, Chennai", theme: "Blush & Matte Black", description: "A curated retail and brand experience featuring live demonstrations, styled editorial corners, and a cocktail mixer for 250 luxury industry leaders.", tags: ["CORPORATE", "BRAND"], image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=80" },
        ],
      },
      {
        slug: "jun", month: "June", abbr: "JUN", countLabel: "1 Event",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
        events: [
          { title: "Monsoon Mehendi Ceremony", shortDate: "20 Jun", dateText: "20 June 2026", client: "Trisha & Dev", venue: "Private Farmhouse, Lonavala", theme: "Emerald & Saffron", description: "An open-air monsoon celebration draped in emerald silks, saffron marigolds, and traditional tribal art installations. A live Sufi singer performed as rain fell on the pavilion edge for 300 guests.", tags: ["MEHENDI", "TRADITIONAL"], image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80" },
        ],
      },
      {
        slug: "jul", month: "July", abbr: "JUL", countLabel: "2 Events",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
        events: [
          { title: "Midnight Sangeet Soiree", shortDate: "11 Jul", dateText: "11 July 2026", client: "Arjun & Pooja", venue: "The St. Regis, Mumbai", theme: "Midnight Blue & Gold", description: "A dramatic midnight sangeet with LED dance floors, live band performances, fog machines, and custom celebrity appearances for 700 guests.", tags: ["SANGEET", "ENTERTAINMENT"], image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80" },
          { title: "Global CSR Summit", shortDate: "25 Jul", dateText: "25 July 2026", client: "GreenSphere Foundation", venue: "Hyatt Regency, Hyderabad", theme: "Forest Green & Linen", description: "A sustainability-themed corporate gathering with zero-waste installations, upcycled decor, organic catering, and a curated speaker series for 400 delegates.", tags: ["CORPORATE", "SUSTAINABILITY"], image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=80" },
        ],
      },
      {
        slug: "aug", month: "August", abbr: "AUG", countLabel: "3 Events",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
        events: [
          { title: "Independence Day Gala", shortDate: "14 Aug", dateText: "14 August 2026", client: "National Pride Corp.", venue: "India Habitat Centre, Delhi", theme: "Tricolor & White", description: "A patriotic corporate gala featuring live cultural performances, a 3D light projection on the main facade, and a curated menu of regional cuisines for 500 attendees.", tags: ["CORPORATE", "CULTURAL"], image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80" },
          { title: "Moonlit Pool Reception", shortDate: "22 Aug", dateText: "22 August 2026", client: "Vikram & Isha", venue: "Amritara Private Luxury, Udaipur", theme: "Ivory & Moonlight Silver", description: "An ethereal poolside wedding reception with floating floral arrangements, mirrored tableaux, and a live string quartet performing under moonlight for 200 guests.", tags: ["WEDDING", "LUXURY"], image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=400&q=80" },
          { title: "Children's Gala Fundraiser", shortDate: "30 Aug", dateText: "30 August 2026", client: "Little Stars NGO", venue: "Taj Vivanta, Kolkata", theme: "Rainbow & Pastel", description: "A vibrant fundraising gala featuring artisan craft workshops, storytelling theatre, balloon art installations, and a charity auction raising ₹45 lakhs.", tags: ["FUNDRAISER", "STYLING"], image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=80" },
        ],
      },
      {
        slug: "sep", month: "September", abbr: "SEP", countLabel: "2 Events",
        image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=400&q=80",
        events: [
          { title: "Sarah's Birthday Celebration", shortDate: "12 Sep", dateText: "12 September 2026", client: "Sarah K.", venue: "The Grand Ballroom, Heritage Manor", theme: "Champagne & Blush Rose", description: "An exquisite birthday milestone celebration featuring custom floral ceiling installations, a signature perfume bar, bespoke cake artistry, and personalized gifting suites for 300 guests.", tags: ["BIRTHDAY", "LUXURY", "STYLING"], image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80" },
          { title: "Autumn Harvest Dinner", shortDate: "27 Sep", dateText: "27 September 2026", client: "Mehra Family", venue: "Siolim House, Goa", theme: "Autumn Rust & Copper", description: "A family harvest dinner inspired by European countryside aesthetics with copper chargers, dried hydrangea centrepieces, candlelit walkways, and a live jazz duo.", tags: ["PRIVATE DINING", "STYLING"], image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80" },
        ],
      },
      {
        slug: "oct", month: "October", abbr: "OCT", countLabel: "4 Events",
        image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=400&q=80",
        events: [
          { title: "Diwali Grand Soiree", shortDate: "10 Oct", dateText: "10 October 2026", client: "Kapoor Group", venue: "Umaid Bhawan, Jodhpur", theme: "Gold & Deep Maroon", description: "A lavish Diwali celebration with 5,000 handcrafted diyas, a fireworks display over the palace facade, and live Hindustani classical performances for 1,000 guests.", tags: ["FESTIVE", "CULTURAL"], image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=400&q=80" },
          { title: "Tech Innovation Summit", shortDate: "16 Oct", dateText: "16 October 2026", client: "FutureLab India", venue: "HICC, Hyderabad", theme: "Neon & Brushed Steel", description: "A cutting-edge corporate summit featuring holographic keynote displays, AI-powered networking pods, and curated mentor sessions for 800 tech leaders.", tags: ["CORPORATE", "TECHNOLOGY"], image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80" },
          { title: "Royal Engagement Ceremony", shortDate: "23 Oct", dateText: "23 October 2026", client: "Birla & Singhania Families", venue: "Falaknuma Palace, Hyderabad", theme: "Royal Burgundy & Pearl", description: "An opulent engagement ceremony with hand-embroidered floral mandaps, live Ghazal singers, and pearl-draped tablescape for 500 distinguished guests.", tags: ["WEDDING", "LUXURY"], image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=80" },
          { title: "Fashion Showcase Evening", shortDate: "31 Oct", dateText: "31 October 2026", client: "Anamika Khanna Studio", venue: "Mehboob Studios, Mumbai", theme: "Noir & Ivory", description: "An editorial fashion showcase across three curated sets with professional lighting rigs, backstage photography walls, and a cocktail finale.", tags: ["FASHION", "PRODUCTION"], image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=400&q=80" },
        ],
      },
      {
        slug: "nov", month: "November", abbr: "NOV", countLabel: "3 Events",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
        events: [
          { title: "Winter Wedding Extravaganza", shortDate: "07 Nov", dateText: "07 November 2026", client: "Nair & Krishnamurthy", venue: "ITC Grand Bharat, Gurugram", theme: "Winter White & Emerald", description: "A grand three-day wedding affair with curated regional cuisine, heritage handcraft workshops, and 1,200 guests across a sprawling lawn estate.", tags: ["WEDDING", "MULTI-DAY"], image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" },
          { title: "Gallery Art Opening", shortDate: "18 Nov", dateText: "18 November 2026", client: "Kiran Nadar Museum", venue: "DLF Emporio, New Delhi", theme: "Minimalist White & Chrome", description: "A high-art opening night for 20 emerging Indian artists, featuring immersive installation art, curated guided tours, and an auction dinner.", tags: ["ART", "CURATION"], image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=400&q=80" },
          { title: "Thanksgiving Corporate Gala", shortDate: "26 Nov", dateText: "26 November 2026", client: "Global Finance Partners", venue: "The Westin, Chennai", theme: "Warm Amber & Walnut", description: "An annual corporate celebration bringing together 600 employees across Asia Pacific with awards, live entertainment, and a multi-course fine dining experience.", tags: ["CORPORATE", "AWARDS"], image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80" },
        ],
      },
      {
        slug: "dec", month: "December", abbr: "DEC", countLabel: "2 Events",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
        events: [
          { title: "New Year's Eve Grand Ball", shortDate: "31 Dec", dateText: "31 December 2026", client: "Shatara Prestige Members", venue: "The Ritz-Carlton, Bangalore", theme: "Gold & Midnight Black", description: "Shatara's signature New Year celebration — a sold-out grand ball with a champagne tower, celebrity DJ performances, a gala dinner, and a fireworks finale welcoming 2027.", tags: ["GALA", "LUXURY", "ENTERTAINMENT"], image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80" },
          { title: "Christmas Charity Dinner", shortDate: "24 Dec", dateText: "24 December 2026", client: "Hope Foundation", venue: "Hyatt Place, Pune", theme: "Crimson & Pine Green", description: "A charity dinner raising ₹60 lakhs for underprivileged children, styled with Nordic Christmas aesthetics, live choral performances, and an artisan gift market.", tags: ["CHARITY", "FESTIVE"], image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=80" },
        ],
      },
    ],
  },
  {
    year: 2025,
    heroImage: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1800&q=80",
    tagline: "A year of refined elegance and curated memories.",
    months: [
      { slug: "jan", month: "January", abbr: "JAN", countLabel: "1 Event", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80", events: [{ title: "Luxury New Year Brunch", shortDate: "01 Jan", dateText: "01 January 2025", client: "Shatara Members", venue: "The Taj, Mumbai", theme: "Pearl White & Gold", description: "An exclusive New Year brunch celebrating 2025's arrival with champagne towers, artisan cheese stations, and live jazz for 150 members.", tags: ["LUXURY", "BRUNCH"], image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=400&q=80" }] },
      { slug: "feb", month: "February", abbr: "FEB", countLabel: "2 Events", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=80", events: [{ title: "Valentine's Luxury Dinner", shortDate: "14 Feb", dateText: "14 February 2025", client: "Private Clients", venue: "Leela Palace, Delhi", theme: "Rose Gold & Ivory", description: "An intimate Valentine's dining experience for 20 couples with private chef tables, floral tunnels, and customised keepsakes.", tags: ["LUXURY", "DINING"], image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=400&q=80" }, { title: "Brand Launch Cocktail", shortDate: "28 Feb", dateText: "28 February 2025", client: "Arora Jewels", venue: "JW Marriott, Chandigarh", theme: "Blush & Champagne", description: "A jewellery brand cocktail launch with mirror display cubes, ambient DJ, and press photography for 300 guests.", tags: ["BRAND", "LAUNCH"], image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80" }] },
      { slug: "mar", month: "March", abbr: "MAR", countLabel: "2 Events", image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=400&q=80", events: [{ title: "Spring Holi Carnival", shortDate: "15 Mar", dateText: "15 March 2025", client: "Mehta Clan", venue: "Private Farmhouse, Pune", theme: "Vibrant Multicolour", description: "A luxury Holi celebration with organic colour stations, a DJ arena, gourmet food trucks, and a fashion-forward dress code for 400 guests.", tags: ["FESTIVE", "CULTURAL"], image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=400&q=80" }, { title: "Architecture Gala Awards", shortDate: "28 Mar", dateText: "28 March 2025", client: "IIA India Chapter", venue: "NCPA, Mumbai", theme: "Concrete & Gold", description: "An architectural excellence awards evening with minimalist brutalist decor, projection-mapped walls, and a gourmet sit-down dinner for 500.", tags: ["AWARDS", "CORPORATE"], image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80" }] },
      { slug: "apr", month: "April", abbr: "APR", countLabel: "1 Event", image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=400&q=80", events: [{ title: "Bougainvillea Wedding", shortDate: "19 Apr", dateText: "19 April 2025", client: "Sharma & Rao Families", venue: "Alila Fort Bishangarh, Rajasthan", theme: "Magenta & Cream", description: "A heritage fort wedding with bougainvillea-draped archways, hand-painted warli art, and classical Bharatanatyam performances for 700 guests.", tags: ["WEDDING", "HERITAGE"], image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" }] },
      { slug: "may", month: "May", abbr: "MAY", countLabel: "0 Events", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80", events: [] },
      { slug: "jun", month: "June", abbr: "JUN", countLabel: "1 Event", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80", events: [{ title: "Nuptials at Nizamuddin", shortDate: "21 Jun", dateText: "21 June 2025", client: "Ali & Fatima", venue: "Taj Mahal Hotel, Delhi", theme: "Teal & Silver", description: "A fusion Indo-Islamic wedding ceremony with a live Qawwali performance, geometric silver decorations, and a seven-course culinary journey for 400 guests.", tags: ["WEDDING", "FUSION"], image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80" }] },
      { slug: "jul", month: "July", abbr: "JUL", countLabel: "0 Events", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80", events: [] },
      { slug: "aug", month: "August", abbr: "AUG", countLabel: "2 Events", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80", events: [{ title: "Independence Gala 2025", shortDate: "15 Aug", dateText: "15 August 2025", client: "MG Motors India", venue: "Jawahar Lal Nehru Stadium, Delhi", theme: "Saffron, White & Green", description: "A patriotic-themed product launch gala with a live drone light show, folk dance ensemble, and exclusive media preview for 1,500 guests.", tags: ["CORPORATE", "LAUNCH"], image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=400&q=80" }, { title: "Desert Night Wedding", shortDate: "29 Aug", dateText: "29 August 2025", client: "Gupta & Dalmia", venue: "Serai Camp, Jaisalmer", theme: "Ochre & Star Silver", description: "A romantic desert wedding under a canopy of 3,000 lanterns, with a camel procession, traditional folk musicians, and fusion cuisine under the stars.", tags: ["WEDDING", "DESTINATION"], image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80" }] },
      { slug: "sep", month: "September", abbr: "SEP", countLabel: "1 Event", image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=400&q=80", events: [{ title: "Founders' Circle Retreat", shortDate: "20 Sep", dateText: "20 September 2025", client: "Nexus Ventures", venue: "COMO Shambhala, Bali", theme: "Tropical Ivory & Palm", description: "An exclusive international founders' retreat blending wellness programming, strategy sessions, and luxury hospitality across a three-day Balinese escape for 40 CEOs.", tags: ["CORPORATE", "RETREAT"], image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" }] },
      { slug: "oct", month: "October", abbr: "OCT", countLabel: "3 Events", image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=400&q=80", events: [{ title: "Navratri Grand Dandiya", shortDate: "05 Oct", dateText: "05 October 2025", client: "Patel Community Trust", venue: "GMDC Grounds, Ahmedabad", theme: "Vibrant Embroidery & Mirror", description: "Gujarat's most extravagant Navratri celebration with LED-lit garba arenas, 5,000 participants, and a live sitar-electronic fusion performance.", tags: ["CULTURAL", "FESTIVE"], image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80" }, { title: "Palace Wedding — Jaipur", shortDate: "18 Oct", dateText: "18 October 2025", client: "Poddar & Saraf Families", venue: "Rambagh Palace, Jaipur", theme: "Rajasthani Gold & Ruby", description: "A multi-day Rajasthani royal wedding with elephant processions, traditional ghoomar dance, and a palace fireworks finale for 800 guests.", tags: ["WEDDING", "ROYAL"], image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80" }, { title: "Diwali Corporate Celebration", shortDate: "29 Oct", dateText: "29 October 2025", client: "HDFC Securities", venue: "Sofitel, Mumbai BKC", theme: "Marigold & Deep Burgundy", description: "An elite corporate Diwali celebration featuring customised mithai gifting, a live comedy act, and a formal awards ceremony for 700 staff.", tags: ["CORPORATE", "FESTIVE"], image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80" }] },
      { slug: "nov", month: "November", abbr: "NOV", countLabel: "2 Events", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80", events: [{ title: "Anniversary Black Tie Gala", shortDate: "08 Nov", dateText: "08 November 2025", client: "Shatara Luxury Events", venue: "Conrad, Bangalore", theme: "Black Tie & Gold", description: "Shatara's annual stakeholder gala marking 13 years of luxury event excellence, featuring a champagne tower, live opera, and a curated retrospective display.", tags: ["GALA", "ANNIVERSARY"], image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=400&q=80" }, { title: "Boutique Fashion Week After-Party", shortDate: "22 Nov", dateText: "22 November 2025", client: "FDCI", venue: "Qutub Club, Delhi", theme: "Celestial Black & Crystal", description: "An exclusive fashion week finale after-party featuring celebrity guests, a crystal-draped bar, and DJ Nucleya headlining for 500 guests.", tags: ["FASHION", "ENTERTAINMENT"], image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80" }] },
      { slug: "dec", month: "December", abbr: "DEC", countLabel: "1 Event", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80", events: [{ title: "New Year Countdown Gala 2026", shortDate: "31 Dec", dateText: "31 December 2025", client: "Shatara Prestige Members", venue: "Taj Lands End, Mumbai", theme: "Champagne & Stardust", description: "The most anticipated event of 2025 — a black tie countdown gala with a 7-course dinner, celebrity DJ, champagne fountain, and fireworks over the Arabian Sea.", tags: ["GALA", "NYE"], image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80" }] },
    ],
  },
  {
    year: 2027,
    heroImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=80",
    tagline: "The future of celebration — coming soon.",
    months: [
      { slug: "jan", month: "January", abbr: "JAN", countLabel: "Upcoming", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80", events: [{ title: "New Year Grand Kickoff", shortDate: "01 Jan", dateText: "01 January 2027", client: "Shatara Members", venue: "TBA — Exclusive Venue", theme: "Pristine White & Gold", description: "Kick off 2027 with Shatara's most ambitious celebration yet — a multi-city simultaneous gala planned across Mumbai, Delhi, and Bangalore for 2,000 members.", tags: ["GALA", "UPCOMING"], image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80", thumb1: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=400&q=80", thumb2: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80" }] },
      ...Array.from({ length: 11 }, (_, i) => {
        const months = ["February","March","April","May","June","July","August","September","October","November","December"];
        const abbrs = ["FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
        const imgs = ["https://images.unsplash.com/photo-1490750967868-88aa4486c946","https://images.unsplash.com/photo-1469371670807-013ccf25f16a","https://images.unsplash.com/photo-1469371670807-013ccf25f16a","https://images.unsplash.com/photo-1464349095431-e9a21285b5f3","https://images.unsplash.com/photo-1524504388940-b1c1722653e1","https://images.unsplash.com/photo-1492684223066-81342ee5ff30","https://images.unsplash.com/photo-1514525253161-7a46d19cd819","https://images.unsplash.com/photo-1478147427282-58a87a120781","https://images.unsplash.com/photo-1527529482837-4698179dc6ce","https://images.unsplash.com/photo-1501386761578-eac5c94b800a","https://images.unsplash.com/photo-1519225421980-715cb0215aed"];
        return { slug: abbrs[i].toLowerCase(), month: months[i], abbr: abbrs[i], countLabel: "Upcoming", image: `${imgs[i]}?auto=format&fit=crop&w=400&q=80`, events: [] };
      }),
    ],
  },
];

/* ─── Component ─── */
export default function PortfolioPage() {
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedMonthSlug, setSelectedMonthSlug] = useState("mar");
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);

  const yearData = ALL_YEARS.find(y => y.year === selectedYear) || ALL_YEARS[0];
  const selectedMonth = yearData.months.find(m => m.slug === selectedMonthSlug) || yearData.months[2];
  const selectedEvent = selectedMonth.events[selectedEventIndex];

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setSelectedMonthSlug(ALL_YEARS.find(y => y.year === year)?.months[0].slug || "jan");
    setSelectedEventIndex(0);
  };

  const handleMonthSelect = (slug: string) => {
    setSelectedMonthSlug(slug);
    setSelectedEventIndex(0);
  };

  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero Banner ── */}
      <div className="relative h-[55vh] w-full overflow-hidden">
        <Image src={yearData.heroImage} alt={`${selectedYear} events`} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-label-md tracking-[0.28em] text-primary-container uppercase mb-4">Shatara Portfolio</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white drop-shadow-lg">Event Calendar</h1>
          <p className="mt-4 max-w-xl text-body-md text-white/80">{yearData.tagline}</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-[20px] lg:px-[80px] py-16 space-y-14">

        {/* ── Year Selector ── */}
        <div>
          <p className="text-center text-label-md tracking-[0.2em] text-on-surface-variant mb-8">SELECT YEAR</p>
          <div className="flex flex-wrap justify-center gap-6">
            {ALL_YEARS.map(y => (
              <button
                key={y.year}
                onClick={() => handleYearChange(y.year)}
                className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500
                  ${selectedYear === y.year
                    ? 'ring-2 ring-primary-container shadow-[0_0_40px_rgba(200,155,60,0.45),0_0_0_2px_rgba(200,155,60,0.6)]'
                    : 'hover:shadow-[0_0_30px_rgba(200,155,60,0.35),0_0_0_1px_rgba(200,155,60,0.4)] hover:ring-1 hover:ring-primary-container/50'
                  }`}
              >
                <div className="relative h-36 w-56">
                  <Image src={y.heroImage} alt={`${y.year}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    selectedYear === y.year
                      ? 'bg-gradient-to-t from-black/70 via-black/20 to-transparent'
                      : 'bg-gradient-to-t from-black/75 via-black/40 to-black/10 group-hover:from-black/50 group-hover:via-black/10 group-hover:to-transparent'
                  }`} />
                  {/* Gold shimmer on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, transparent 30%, rgba(200,155,60,0.12) 50%, transparent 70%)' }} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                    <span className={`font-display text-4xl font-bold drop-shadow-lg transition-all duration-300 ${
                      selectedYear === y.year ? 'text-primary-container shatara-glow' : 'text-white group-hover:text-primary-container'
                    }`}>{y.year}</span>
                    <span className="text-[10px] tracking-[0.22em] text-white/70 uppercase">
                      {y.months.reduce((s, m) => s + m.events.length, 0)} Events
                    </span>
                  </div>
                  {selectedYear === y.year && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-container shadow-[0_0_8px_rgba(200,155,60,0.8)]" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Month Grid (all 12) ── */}
        <div>
          <p className="text-center text-label-md tracking-[0.2em] text-on-surface-variant mb-8">SELECT MONTH</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
            {yearData.months.map((m) => {
              const isActive = m.slug === selectedMonthSlug;
              return (
                <button
                  key={m.slug}
                  onClick={() => handleMonthSelect(m.slug)}
                  className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-400
                    ${isActive
                      ? 'ring-2 ring-primary-container shadow-[0_0_24px_rgba(200,155,60,0.5),0_0_0_2px_rgba(200,155,60,0.5)]'
                      : 'hover:shadow-[0_0_20px_rgba(200,155,60,0.35),0_0_0_1px_rgba(200,155,60,0.35)] hover:ring-1 hover:ring-primary-container/50'
                    }`}
                >
                  {/* Image area */}
                  <div className="relative h-24 w-full">
                    <Image
                      src={m.image}
                      alt={m.month}
                      fill
                      className="object-cover transition-transform duration-600 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className={`absolute inset-0 transition-all duration-400 ${
                      isActive
                        ? 'bg-gradient-to-t from-black/60 via-black/20 to-transparent'
                        : 'bg-black/55 group-hover:bg-black/30'
                    }`} />
                    {/* Gold shimmer sweep on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: 'linear-gradient(120deg, transparent 25%, rgba(200,155,60,0.18) 50%, transparent 75%)' }}
                    />
                    {/* Month label */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                      <span className={`text-[11px] font-bold tracking-[0.15em] transition-all duration-300 drop-shadow ${
                        isActive ? 'text-primary-container' : 'text-white group-hover:text-primary-container'
                      }`}>{m.abbr}</span>
                      {m.events.length > 0 && (
                        <span className="bg-primary-container text-on-primary-container text-[7px] font-bold px-1.5 py-0.5 rounded-sm leading-none shadow">
                          {m.events.length}
                        </span>
                      )}
                    </div>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-container shadow-[0_0_6px_rgba(200,155,60,0.8)]" />
                    )}
                  </div>
                  {/* Label bar */}
                  <div className={`text-[9px] font-semibold py-1.5 text-center tracking-wide transition-colors duration-300 ${
                    isActive
                      ? 'bg-primary-container text-on-primary-container'
                      : 'bg-surface-container text-on-surface-variant group-hover:bg-primary-container/20 group-hover:text-primary-container'
                  }`}>
                    {m.abbr}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Month Header with big image ── */}
        <div className="relative overflow-hidden rounded-lg h-48 md:h-64">
          <Image src={selectedMonth.image} alt={selectedMonth.month} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8">
            <p className="text-label-md tracking-[0.2em] text-primary-container">{selectedYear}</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mt-1">{selectedMonth.month}</h2>
            <p className="mt-2 text-body-md text-white/75">{selectedMonth.countLabel} · Portfolio Highlights</p>
          </div>
        </div>

        {/* ── Event Date Selector ── */}
        {selectedMonth.events.length > 0 ? (
          <>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-label-md tracking-[0.1em] text-on-surface-variant">Select Event:</span>
              {selectedMonth.events.map((event, idx) => {
                const isSel = selectedEventIndex === idx;
                return (
                  <button
                    key={event.title}
                    onClick={() => setSelectedEventIndex(idx)}
                    className={`rounded-md px-4 py-2 text-btn font-semibold cursor-pointer transition ${isSel ? "bg-primary-container text-on-primary-container shadow-sm" : "border border-outline-variant/30 hover:border-primary-container text-on-surface-variant bg-surface-container-lowest"}`}
                  >
                    {event.shortDate} — {event.title}
                  </button>
                );
              })}
            </div>

            {/* ── Event Showcase ── */}
            {selectedEvent && (
              <div className="border border-outline-variant/20 rounded-lg bg-surface-container-lowest overflow-hidden shadow-sm">

                {/* Top wide image */}
                <div className="relative h-64 md:h-80 w-full">
                  <Image src={selectedEvent.image} alt={selectedEvent.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-label-md tracking-[0.2em] text-primary-container">Featured Event</p>
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-white mt-1">{selectedEvent.title}</h3>
                    <p className="text-body-md text-white/80 mt-1 italic">{selectedEvent.dateText}</p>
                  </div>
                  {/* Play button */}
                  <div className="absolute top-6 right-6">
                    <div className="h-14 w-14 rounded-full bg-primary-container/90 flex items-center justify-center text-on-primary-container text-xl shadow-lg hover:scale-110 transition cursor-pointer">▶</div>
                    <p className="text-[9px] text-white/70 text-center mt-1 tracking-wider">HIGHLIGHT REEL</p>
                  </div>
                </div>

                <div className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr]">
                  {/* Left: details */}
                  <div>
                    <div className="grid grid-cols-2 gap-4">
                      {[["DATE", selectedEvent.dateText], ["CLIENT", selectedEvent.client], ["VENUE", selectedEvent.venue], ["THEME", selectedEvent.theme]].map(([label, val]) => (
                        <div key={label} className="rounded-md border border-outline-variant/15 bg-surface-container-low p-4 shadow-sm">
                          <span className="text-[9px] uppercase tracking-[0.18em] text-primary-container font-bold">{label}</span>
                          <span className="block text-body-md font-semibold text-on-surface mt-1.5 leading-snug">{val}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 text-body-md text-on-surface-variant leading-relaxed">{selectedEvent.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-outline-variant/10">
                      {selectedEvent.tags.map(tag => (
                        <span key={tag} className="rounded-full bg-surface-container px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Right: thumbnails */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {[selectedEvent.thumb1, selectedEvent.thumb2].map((thumb, i) => (
                        <div key={i} className="relative h-36 rounded-md overflow-hidden border border-outline-variant/15 shadow-sm">
                          <Image src={thumb} alt={`Preview ${i + 1}`} fill className="object-cover hover:scale-105 transition duration-500" />
                        </div>
                      ))}
                    </div>
                    <div className="relative h-36 w-full rounded-md overflow-hidden border border-outline-variant/15">
                      <Image src={selectedEvent.image} alt="Gallery" fill className="object-cover opacity-70" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm tracking-wider bg-black/40 px-4 py-2 rounded-md">View Full Gallery</span>
                      </div>
                    </div>
                    <Link href="/enquire" className="block w-full text-center rounded-md bg-primary-container py-3 text-btn font-semibold text-on-primary-container hover:bg-[#b88c2f] transition">
                      Book a Similar Event →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 rounded-lg border border-dashed border-outline-variant/30 bg-surface-container-lowest">
            <div className="relative h-24 w-24 rounded-full overflow-hidden mx-auto mb-6 opacity-40">
              <Image src={selectedMonth.image} alt="No events" fill className="object-cover" />
            </div>
            <p className="font-display text-2xl text-on-surface-variant">No events in {selectedMonth.month} {selectedYear}</p>
            <p className="mt-2 text-body-md text-on-surface-variant/60">Check back soon, or explore another month.</p>
            <Link href="/enquire" className="mt-6 inline-block rounded-md bg-primary-container px-8 py-3 text-btn font-semibold text-on-primary-container hover:bg-[#b88c2f] transition">
              Plan an Event This Month
            </Link>
          </div>
        )}

        {/* ── Mini Gallery Strip ── */}
        <div>
          <p className="text-label-md tracking-[0.2em] text-on-surface-variant mb-6">GALLERY HIGHLIGHTS — {selectedYear}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {yearData.months.flatMap(m => m.events.slice(0, 1)).slice(0, 12).map((ev, i) => (
              <div key={i} className="relative h-28 rounded-md overflow-hidden border border-outline-variant/15 group cursor-pointer">
                <Image src={ev.thumb1} alt={ev.title} fill className="object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <p className="text-[8px] text-white/90 font-semibold line-clamp-1">{ev.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="relative overflow-hidden rounded-lg text-center py-16 px-8">
          <Image src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80" alt="CTA Background" fill className="object-cover opacity-30" />
          <div className="relative z-10">
            <p className="text-label-md tracking-[0.2em] text-primary-container">READY TO CELEBRATE?</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface mt-3">Write Your Own Chapter</h2>
            <p className="mt-4 max-w-lg mx-auto text-body-md text-on-surface-variant">Every extraordinary event begins with a single conversation. Let us craft your story.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/enquire" className="rounded-md bg-primary-container px-8 py-3.5 text-btn font-semibold text-on-primary-container hover:bg-[#b88c2f] shadow-[0_4px_20px_rgba(200,155,60,0.2)] transition">
                Start Your Journey
              </Link>
              <Link href="/contact" className="rounded-md border border-outline-variant/40 px-8 py-3.5 text-btn text-on-surface-variant hover:border-primary-container transition">
                Talk to Concierge
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
