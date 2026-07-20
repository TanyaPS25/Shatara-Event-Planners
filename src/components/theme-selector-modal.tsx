"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Theme, themes } from "@/lib/themes-data";

type ThemeSelectorModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (theme: Theme) => void;
  currentlySelectedId: string | null;
  slotName: "A" | "B";
};

export function ThemeSelectorModal({
  isOpen,
  onClose,
  onSelect,
  currentlySelectedId,
  slotName,
}: ThemeSelectorModalProps) {
  const [activeCategory, setActiveCategory] = useState<"All" | "Wedding" | "Birthday" | "Babyshower">("All");

  if (!isOpen) return null;

  const filteredThemes = activeCategory === "All"
    ? themes
    : themes.filter((t) => t.category === activeCategory);

  const categories: Array<"All" | "Wedding" | "Birthday" | "Babyshower"> = [
    "All",
    "Wedding",
    "Birthday",
    "Babyshower",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 flex h-full max-h-[85vh] w-full max-w-4xl flex-col rounded-3xl border border-white/12 bg-[var(--page-soft)] shadow-2xl overflow-hidden transition-all duration-300">
        
        {/* Header */}
        <div className="border-b border-black/5 p-6 sm:px-8 flex items-center justify-between">
          <div>
            <h3 className="font-display text-2xl tracking-wide text-[var(--ink)]">
              Choose Theme for <span className="text-gold-500 font-semibold">Theme {slotName}</span>
            </h3>
            <p className="text-xs text-[var(--muted)] mt-1">
              Select an exquisite celebration theme to run the comparative match.
            </p>
          </div>
          <button
            onClick={onClose}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white shadow-sm transition hover:border-gold-500 hover:bg-gold-50"
            aria-label="Close modal"
          >
            <svg
              className="h-5 w-5 text-[var(--muted)] transition group-hover:text-gold-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Categories Tab Selector */}
        <div className="bg-white/40 border-b border-black/5 px-6 sm:px-8 py-4 flex gap-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                activeCategory === cat
                  ? "bg-gold-500 text-white shadow-md shadow-gold-500/20"
                  : "bg-white border border-black/5 text-[var(--muted)] hover:border-gold-400 hover:text-[var(--ink)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-gradient-to-b from-white/30 to-white/10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredThemes.map((theme) => {
              const isSelected = theme.id === currentlySelectedId;
              return (
                <div
                  key={theme.id}
                  onClick={() => {
                    onSelect(theme);
                    onClose();
                  }}
                  className={`group relative flex flex-col justify-between rounded-2xl border bg-white p-4 cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    isSelected
                      ? "border-gold-500 ring-2 ring-gold-500/20"
                      : "border-black/5 hover:border-gold-300"
                  }`}
                >
                  <div>
                    {/* Visual Card Image */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-stone-100">
                      <Image
                        src={theme.image}
                        alt={theme.displayName}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute bottom-2 left-2 rounded-full bg-white/90 backdrop-blur-md px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider text-gold-600">
                        {theme.category} • {theme.subtheme}
                      </span>
                    </div>

                    {/* Metadata */}
                    <h4 className="mt-4 font-display text-lg tracking-wide text-[var(--ink)] group-hover:text-gold-600 transition">
                      {theme.displayName}
                    </h4>
                    <p className="mt-1 text-xs text-[var(--muted)] leading-relaxed line-clamp-2">
                      {theme.description}
                    </p>
                  </div>

                  {/* Highlights & Footer Selection button */}
                  <div className="mt-4 pt-3 border-t border-black/5">
                    <div className="flex items-center justify-between text-[0.68rem] text-[var(--muted)] mb-3">
                      <span>Cap: <strong className="text-[var(--ink)]">{theme.capacity.min}-{theme.capacity.max}</strong></span>
                      <span>Price: <strong className="text-[var(--ink)]">${theme.startingPrice.toLocaleString()}</strong></span>
                    </div>
                    <button
                      className={`w-full rounded-xl py-2.5 text-center text-xs font-semibold uppercase tracking-wider transition ${
                        isSelected
                          ? "bg-gold-600 text-white"
                          : "bg-stone-100 text-[var(--ink)] group-hover:bg-gold-500 group-hover:text-white"
                      }`}
                    >
                      {isSelected ? "Currently Selected" : "Select Theme"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
