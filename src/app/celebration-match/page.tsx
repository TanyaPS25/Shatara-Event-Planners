"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GenericPage } from "@/components/generic-page";
import { ThemeSelectorModal } from "@/components/theme-selector-modal";
import { AtmosphereComparison } from "@/components/atmosphere-comparison";
import { Theme, themes } from "@/lib/themes-data";

export default function CelebrationMatchPage() {
  const [themeA, setThemeA] = useState<Theme | null>(themes[0]); // Default Royal Grandeur
  const [themeB, setThemeB] = useState<Theme | null>(themes[1]); // Default Modern Minimalist
  const [guestCount, setGuestCount] = useState<number>(150);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectingSlot, setSelectingSlot] = useState<"A" | "B" | null>(null);
  const [confirmedTheme, setConfirmedTheme] = useState<Theme | null>(null);

  const openSelector = (slot: "A" | "B") => {
    setSelectingSlot(slot);
    setIsModalOpen(true);
  };

  const handleSelectTheme = (theme: Theme) => {
    if (selectingSlot === "A") {
      setThemeA(theme);
    } else if (selectingSlot === "B") {
      setThemeB(theme);
    }
  };

  const getCapacityFit = (theme: Theme, count: number) => {
    if (count >= theme.capacity.min && count <= theme.capacity.max) {
      return { status: "Excellent Fit", color: "text-emerald-700 bg-emerald-50 border-emerald-200" };
    }
    if (count < theme.capacity.min) {
      return { status: "Under Capacity", color: "text-amber-700 bg-amber-50 border-amber-200" };
    }
    return { status: "Over Capacity", color: "text-rose-700 bg-rose-50 border-rose-200" };
  };

  const getPriceTier = (price: number) => {
    if (price >= 18000) return { label: "Premium Luxury", color: "text-purple-700 bg-purple-50" };
    if (price >= 8000) return { label: "Signature Elegance", color: "text-gold-600 bg-gold-50" };
    return { label: "Bespoke Essential", color: "text-stone-600 bg-stone-50" };
  };

  const getMatchPercentage = (theme: Theme | null, count: number) => {
    if (!theme) return 0;
    if (count >= theme.capacity.min && count <= theme.capacity.max) {
      return 96;
    }
    if (count < theme.capacity.min) {
      const diff = theme.capacity.min - count;
      const penalty = Math.min(25, Math.floor((diff / theme.capacity.min) * 30));
      return 96 - penalty;
    } else {
      const diff = count - theme.capacity.max;
      const penalty = Math.min(35, Math.floor((diff / theme.capacity.max) * 40));
      return 96 - penalty;
    }
  };

  const getMatchText = (theme: Theme | null, count: number) => {
    if (!theme) return "";
    const percentage = getMatchPercentage(theme, count);
    if (percentage >= 90) {
      return `Perfect fit for ${count} guests.`;
    } else if (percentage >= 75) {
      return `Good fit. Adaptable to ${count} guests.`;
    } else {
      return `Suboptimal scale. Consider alternatives.`;
    }
  };

  const getBestBudget = () => {
    if (!themeA && !themeB) return null;
    if (!themeA) return themeB;
    if (!themeB) return themeA;
    return themeA.startingPrice <= themeB.startingPrice ? themeA : themeB;
  };

  const getMostPopular = () => {
    if (!themeA && !themeB) return null;
    if (!themeA) return themeB;
    if (!themeB) return themeA;
    
    const popRank: Record<string, number> = {
      "royal-grandeur": 10,
      "boho-safari": 9,
      "barbie-dreamworld": 8,
      "celestial-extra": 7,
      "celestial-dream": 6,
      "botanical-forest": 5,
      "modern-minimalist": 4,
      "cartoon-wonderland": 3,
      "spiderman-adventure": 2,
    };

    const rankA = popRank[themeA.id] || 0;
    const rankB = popRank[themeB.id] || 0;
    return rankA >= rankB ? themeA : themeB;
  };

  const getBestOverall = () => {
    if (!themeA && !themeB) return null;
    if (!themeA) return themeB;
    if (!themeB) return themeA;

    const pctA = getMatchPercentage(themeA, guestCount);
    const pctB = getMatchPercentage(themeB, guestCount);

    if (pctA !== pctB) {
      return pctA > pctB ? themeA : themeB;
    }
    return themeA.startingPrice >= themeB.startingPrice ? themeA : themeB;
  };

  return (
    <GenericPage
      title="Celebration Match"
      intro="Select two celebration themes and compare them side by side to find your perfect match."
    >
<<<<<<< HEAD
      {/* Confirmed Theme Display Overlay */}
      {confirmedTheme ? (
        <div className="mx-auto max-w-xl rounded-[2.5rem] border border-gold-500 bg-white p-8 md:p-10 shadow-2xl text-center relative overflow-hidden transition-all duration-500">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
          
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-50 text-gold-500 text-3xl shadow-sm mb-6">
            ✓
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
            Confirmed Choice
          </span>
          <h2 className="font-display text-4xl font-semibold text-[var(--ink)] mt-2">
            {confirmedTheme.displayName}
          </h2>
          <p className="text-xs text-[var(--muted)] mt-1 uppercase tracking-wider">
            {confirmedTheme.category} • {confirmedTheme.subtheme} Style
          </p>

          <div className="relative aspect-video w-full max-w-md mx-auto my-6 overflow-hidden rounded-xl border border-black/5">
            <Image
              src={confirmedTheme.image}
              alt={confirmedTheme.displayName}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 440px"
            />
          </div>

          {/* Structured highlights in large clear blocks */}
          <div className="grid grid-cols-3 gap-3 border-y border-black/5 py-5 my-6 max-w-md mx-auto text-left">
            <div>
              <span className="text-[0.68rem] text-[var(--muted)] uppercase tracking-wider block">Pricing</span>
              <span className="font-display text-lg font-semibold text-gold-600 mt-1 block">${confirmedTheme.startingPrice.toLocaleString()}</span>
            </div>
            <div className="border-x border-black/5 px-3">
              <span className="text-[0.68rem] text-[var(--muted)] uppercase tracking-wider block">Scale</span>
              <span className="font-semibold text-sm text-[var(--ink)] mt-1 block">{confirmedTheme.capacity.min} - {confirmedTheme.capacity.max} pax</span>
            </div>
            <div className="pl-3">
              <span className="text-[0.68rem] text-[var(--muted)] uppercase tracking-wider block">Venue</span>
              <span className="text-xs font-semibold text-[var(--ink)] mt-1 block truncate" title={confirmedTheme.venueType}>{confirmedTheme.venueType.split(" & ")[0]}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={{
                pathname: "/enquire",
                query: { confirmedTheme: confirmedTheme.displayName },
              }}
              className="rounded-full bg-gold-500 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-gold-400 shadow-md transition"
            >
              Enquire & Book
            </Link>
            <button
              onClick={() => setConfirmedTheme(null)}
              className="rounded-full border border-black/10 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)] hover:text-gold-600 transition"
            >
              Back to Compare
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Dynamic Guest Count Selector */}
          <div className="mx-auto max-w-xl rounded-2xl border border-black/5 bg-white p-6 shadow-sm mb-10 text-center">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-600 mb-1">Set Guest Count</h4>
            <p className="text-xs text-[var(--muted)] mb-4">
              Recalculates match alignment score dynamically.
            </p>
            <div className="flex items-center gap-6 justify-center">
              <input
                type="range"
                min="15"
                max="600"
                step="5"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full sm:max-w-xs accent-gold-500 cursor-pointer h-2.5 bg-stone-100 rounded-lg appearance-none"
              />
              <span className="font-display text-2xl font-semibold text-[var(--ink)] border border-black/5 rounded-full px-5 py-2 bg-stone-50 shadow-sm">
                {guestCount} Guests
              </span>
            </div>
          </div>

          {/* Theme Grid Cards */}
          <div className="relative grid gap-6 lg:grid-cols-2 mb-12">
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--page)] bg-gold-500 font-display text-base font-bold text-white shadow-md max-lg:hidden">
              VS
            </div>

            {/* Slot A */}
            {themeA ? (
              <div className="relative group overflow-hidden rounded-2xl border border-black/5 bg-white p-3 shadow-sm transition hover:shadow-md">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-stone-100">
                  <Image
                    src={themeA.image}
                    alt={themeA.displayName}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 550px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="rounded-full bg-gold-500 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                      Theme A • {themeA.category}
                    </span>
                    <p className="mt-2 font-display text-3xl font-medium text-white tracking-wide">
                      {themeA.displayName}
                    </p>
                  </div>
                  <button
                    onClick={() => openSelector("A")}
                    className="absolute top-4 right-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gold-600 hover:bg-gold-500 hover:text-white transition shadow-sm"
                  >
                    Change Theme
                  </button>
                </div>
                <div className="p-4 flex gap-2">
                  <button
                    onClick={() => setConfirmedTheme(themeA)}
                    className="flex-1 rounded-xl bg-gold-500 py-3 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-600 transition shadow-sm"
                  >
                    Confirm Theme A
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => openSelector("A")}
                className="flex flex-col items-center justify-center aspect-video rounded-2xl border-2 border-dashed border-gold-400 bg-white/50 p-6 text-center cursor-pointer transition hover:bg-white"
              >
                <p className="font-display text-2xl text-[var(--ink)]">Select Theme A</p>
              </div>
            )}

            {/* Slot B */}
            {themeB ? (
              <div className="relative group overflow-hidden rounded-2xl border border-black/5 bg-white p-3 shadow-sm transition hover:shadow-md">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-stone-100">
                  <Image
                    src={themeB.image}
                    alt={themeB.displayName}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 550px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="rounded-full bg-stone-700 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-stone-200 shadow-sm">
                      Theme B • {themeB.category}
                    </span>
                    <p className="mt-2 font-display text-3xl font-medium text-white tracking-wide">
                      {themeB.displayName}
                    </p>
                  </div>
                  <button
                    onClick={() => openSelector("B")}
                    className="absolute top-4 right-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gold-600 hover:bg-gold-500 hover:text-white transition shadow-sm"
                  >
                    Change Theme
                  </button>
                </div>
                <div className="p-3 flex gap-2">
                  <button
                    onClick={() => setConfirmedTheme(themeB)}
                    className="flex-1 rounded-xl bg-gold-500 py-3 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-600 transition shadow-sm"
                  >
                    Confirm Theme B
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => openSelector("B")}
                className="flex flex-col items-center justify-center aspect-video rounded-2xl border-2 border-dashed border-gold-400 bg-white/50 p-6 text-center cursor-pointer transition hover:bg-white"
              >
                <p className="font-display text-2xl text-[var(--ink)]">Select Theme B</p>
              </div>
            )}
          </div>

          {/* Visual comparison slider */}
          {themeA && themeB && (
            <div className="mb-16">
              <AtmosphereComparison
                imageA={themeA.image}
                imageB={themeB.image}
                nameA={themeA.displayName}
                nameB={themeB.displayName}
              />
            </div>
          )}

          {/* Side-by-side comparative parameter metrics */}
          {themeA && themeB && (
            <div className="mb-16">
              {/* Grid cards breakdown */}
              <div className="grid gap-6 md:grid-cols-3 mb-8">
                {/* Palette */}
                <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600 block mb-4">Palette</span>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="font-semibold truncate max-w-[140px] text-[var(--ink)]">{themeA.displayName}</span>
                        <span className="text-[var(--muted)] text-xs">{themeA.colorPalette.name}</span>
                      </div>
                      <div className="flex gap-1.5">
                        {themeA.colorPalette.colors.map((c, i) => (
                          <span key={i} className="h-6 w-6 rounded-full border border-black/10 shadow-sm" style={{ backgroundColor: c }} />
                        ))}
                      </div>
                    </div>
                    <div className="pt-3 border-t border-black/5">
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="font-semibold truncate max-w-[140px] text-[var(--ink)]">{themeB.displayName}</span>
                        <span className="text-[var(--muted)] text-xs">{themeB.colorPalette.name}</span>
                      </div>
                      <div className="flex gap-1.5">
                        {themeB.colorPalette.colors.map((c, i) => (
                          <span key={i} className="h-6 w-6 rounded-full border border-black/10 shadow-sm" style={{ backgroundColor: c }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lighting mood */}
                <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600 block mb-4">Lighting Mood</span>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <div>
                      <p className="font-semibold text-[var(--ink)] mb-1">{themeA.displayName}</p>
                      <p className="text-[var(--muted)]">{themeA.lightingStyle}</p>
                    </div>
                    <div className="pt-3 border-t border-black/5">
                      <p className="font-semibold text-[var(--ink)] mb-1">{themeB.displayName}</p>
                      <p className="text-[var(--muted)]">{themeB.lightingStyle}</p>
                    </div>
                  </div>
                </div>

                {/* AI matching recommendation card */}
                <div className="rounded-2xl border border-gold-400/20 bg-gradient-to-b from-amber-500/5 to-transparent p-6 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600 block mb-4">AI Fit Score</span>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="flex items-center justify-between font-semibold mb-1">
                        <span className="truncate max-w-[130px] text-[var(--ink)]">{themeA.displayName}</span>
                        <span className="text-gold-600 font-bold">{getMatchPercentage(themeA, guestCount)}%</span>
                      </div>
                      <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-gold-500 h-full rounded-full transition-all duration-500" style={{ width: `${getMatchPercentage(themeA, guestCount)}%` }} />
                      </div>
                      <p className="mt-1.5 text-xs text-[var(--muted)] leading-relaxed">{getMatchText(themeA, guestCount)}</p>
                    </div>
                    <div className="pt-3 border-t border-black/5">
                      <div className="flex items-center justify-between font-semibold mb-1">
                        <span className="truncate max-w-[130px] text-[var(--ink)]">{themeB.displayName}</span>
                        <span className="text-gold-600 font-bold">{getMatchPercentage(themeB, guestCount)}%</span>
                      </div>
                      <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-gold-500 h-full rounded-full transition-all duration-500" style={{ width: `${getMatchPercentage(themeB, guestCount)}%` }} />
                      </div>
                      <p className="mt-1.5 text-xs text-[var(--muted)] leading-relaxed">{getMatchText(themeB, guestCount)}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specs detailed table */}
              <div className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-stone-50 border-b border-black/5">
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gold-600">Feature</th>
                        <th className="px-6 py-4 text-sm font-semibold text-[var(--ink)]">{themeA.displayName}</th>
                        <th className="px-6 py-4 text-sm font-semibold text-[var(--ink)]">{themeB.displayName}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5 text-sm text-[var(--ink)]">
                      {/* Price */}
                      <tr>
                        <td className="px-6 py-4 font-semibold uppercase tracking-wider text-[var(--muted)] text-xs bg-stone-50/20">Price</td>
                        <td className="px-6 py-4">
                          <span className="font-display text-xl font-semibold text-gold-600">${themeA.startingPrice.toLocaleString()}</span>
                          <span className={`ml-3 px-2 py-0.5 rounded text-xs font-bold ${getPriceTier(themeA.startingPrice).color}`}>
                            {getPriceTier(themeA.startingPrice).label}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-display text-xl font-semibold text-gold-600">${themeB.startingPrice.toLocaleString()}</span>
                          <span className={`ml-3 px-2 py-0.5 rounded text-xs font-bold ${getPriceTier(themeB.startingPrice).color}`}>
                            {getPriceTier(themeB.startingPrice).label}
                          </span>
                        </td>
                      </tr>

                      {/* Guest Scale */}
                      <tr>
                        <td className="px-6 py-4 font-semibold uppercase tracking-wider text-[var(--muted)] text-xs bg-stone-50/20">Capacity</td>
                        <td className="px-6 py-4">
                          <span className="font-medium">{themeA.capacity.min} - {themeA.capacity.max} guests</span>
                          <span className={`ml-3 px-2.5 py-0.5 rounded text-xs font-bold border ${getCapacityFit(themeA, guestCount).color}`}>
                            {getCapacityFit(themeA, guestCount).status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-medium">{themeB.capacity.min} - {themeB.capacity.max} guests</span>
                          <span className={`ml-3 px-2.5 py-0.5 rounded text-xs font-bold border ${getCapacityFit(themeB, guestCount).color}`}>
                            {getCapacityFit(themeB, guestCount).status}
                          </span>
                        </td>
                      </tr>

                      {/* Preferred Venue type */}
                      <tr>
                        <td className="px-6 py-4 font-semibold uppercase tracking-wider text-[var(--muted)] text-xs bg-stone-50/20">Venues</td>
                        <td className="px-6 py-4 leading-relaxed font-medium">{themeA.venueType}</td>
                        <td className="px-6 py-4 leading-relaxed font-medium">{themeB.venueType}</td>
                      </tr>

                      {/* Decors Signature list */}
                      <tr>
                        <td className="px-6 py-4 font-semibold uppercase tracking-wider text-[var(--muted)] text-xs bg-stone-50/20">Key Decor</td>
                        <td className="px-6 py-4">
                          <ul className="list-disc pl-5 space-y-1 text-[var(--muted)]">
                            {themeA.decoration.slice(0, 3).map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="px-6 py-4">
                          <ul className="list-disc pl-5 space-y-1 text-[var(--muted)]">
                            {themeB.decoration.slice(0, 3).map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Quick verdicts and Confirm Action CTA */}
          {themeA && themeB && (
            <div className="rounded-2xl border border-black/8 bg-stone-100 p-8 text-center mb-10">
              <div className="grid gap-6 sm:grid-cols-3 text-center mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] block">Best Budget Choice</span>
                  <span className="font-display text-xl font-medium text-gold-600 mt-1 block">{getBestBudget()?.displayName}</span>
                  <span className="text-xs text-[var(--muted)] block mt-0.5">${getBestBudget()?.startingPrice.toLocaleString()}</span>
                </div>
                <div className="border-t sm:border-t-0 sm:border-x border-black/10 py-4 sm:py-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] block">Most Popular Trend</span>
                  <span className="font-display text-xl font-medium text-gold-600 mt-1 block">{getMostPopular()?.displayName}</span>
                  <span className="text-xs text-[var(--muted)] block mt-0.5">Highly requested</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] block">Best Capacity Fit</span>
                  <span className="font-display text-xl font-medium text-gold-600 mt-1 block">{getBestOverall()?.displayName}</span>
                  <span className="text-xs text-[var(--muted)] block mt-0.5">{getMatchPercentage(getBestOverall(), guestCount)}% match alignment</span>
                </div>
              </div>

              {/* Selection Confirmation Trigger CTAs */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                <button
                  onClick={() => setConfirmedTheme(themeA)}
                  className="rounded-full bg-gold-500 px-7 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-400 shadow-md transition"
                >
                  Confirm Theme A
                </button>
                <button
                  onClick={() => setConfirmedTheme(themeB)}
                  className="rounded-full bg-stone-900 px-7 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-stone-850 shadow-md transition"
                >
                  Confirm Theme B
                </button>
                <Link
                  href="/celebrate-preview"
                  className="rounded-full border border-gold-500 px-7 py-3 text-xs font-bold uppercase tracking-wider text-gold-600 hover:bg-gold-50 transition"
                >
                  Preview Room
                </Link>
              </div>
            </div>
          )}

          {/* Modal selector */}
          <ThemeSelectorModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSelect={handleSelectTheme}
            currentlySelectedId={selectingSlot === "A" ? themeA?.id || null : themeB?.id || null}
            slotName={selectingSlot || "A"}
          />
        </>
      )}
=======
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border-2 border-dashed border-outline-variant bg-surface-container-low p-10 text-center flex flex-col items-center justify-center min-h-[250px] cursor-pointer hover:border-primary-container transition">
          <div className="h-12 w-12 rounded-full border border-primary-container/30 flex items-center justify-center text-primary-container text-2xl mb-4 bg-surface-container-lowest">
            +
          </div>
          <p className="font-display text-2xl font-semibold text-on-surface">Select Second Theme</p>
          <p className="mt-2 text-body-md text-on-surface-variant/80">Compare another style side by side</p>
        </div>
        <div className="rounded-lg border border-primary-container bg-surface-container-lowest p-10 flex flex-col justify-center min-h-[250px] relative overflow-hidden shadow-sm">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-primary-container" />
          <p className="text-label-md tracking-[0.16em] text-primary-container">Theme A</p>
          <h3 className="mt-3 font-display text-3xl font-semibold text-on-surface">Royal Wedding</h3>
          <p className="mt-4 text-body-md text-on-surface-variant leading-relaxed">
            A high-opulence palette with candelabras, warm spotlights, and an elevated editorial mood.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          ["Color Palette", "Royal Gold / Sage / Ivory", false],
          ["Lighting Style", "Warm spotlights and fairy lights", false],
          ["AI Recommendation", "96% Match", true],
        ].map(([title, value, isMatch]) => (
          <div key={title as string} className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-6 text-center shadow-sm">
            <p className="text-label-md tracking-[0.12em] text-primary-container">{title as string}</p>
            {isMatch ? (
              <div className="mt-3">
                <span className="inline-block bg-accent-sage/35 text-accent-sage-text px-4.5 py-1.5 rounded text-sm font-bold tracking-wide">
                  {value as string}
                </span>
              </div>
            ) : (
              <p className="mt-3 font-display text-2xl font-semibold text-on-surface">{value as string}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center gap-4">
        <Link href="/enquire" className="rounded-md bg-primary-container px-7 py-3.5 text-btn font-semibold text-on-primary-container hover:bg-[#b88c2f] transition shadow-[0_4px_12px_rgba(200,155,60,0.15)]">
          Book This Theme
        </Link>
        <Link href="/portfolio" className="rounded-md border border-primary-container/40 px-7 py-3.5 text-btn font-semibold text-primary-container hover:bg-primary-container/10 transition">
          View Portfolio
        </Link>
      </div>
>>>>>>> upstream
    </GenericPage>
  );
}
