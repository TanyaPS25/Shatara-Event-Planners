"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { GenericPage } from "@/components/generic-page";

const BACKEND = "http://localhost:5000";

type Theme = {
  id: string;
  name: string;
  category: string;
  colorTint: string;
  emoji: string;
};

type PreviewResult = {
  previewUrl: string;
  themeName: string;
  colorTint: string;
};

const CATEGORIES = ["All", "Wedding", "Birthday", "Babyshower", "Corporate", "Festival"];

export default function EventPalacePage() {
  const [themes, setThemes]           = useState<Theme[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const [selectedFile, setSelectedFile]   = useState<File | null>(null);
  const [previewLocal, setPreviewLocal]   = useState<string>("");
  const [result, setResult]               = useState<PreviewResult | null>(null);
  const [isProcessing, setIsProcessing]   = useState(false);
  const [backendError, setBackendError]   = useState(false);
  const [isDragging, setIsDragging]       = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Load theme list from backend ────────────────────────
  useEffect(() => {
    fetch(`${BACKEND}/api/themes`)
      .then(r => r.json())
      .then(data => {
        setThemes(data);
        if (data.length > 0) setSelectedTheme(data[0]);
      })
      .catch(() => setBackendError(true));
  }, []);

  const filtered = activeCategory === "All"
    ? themes
    : themes.filter(t => t.category === activeCategory);

  // ── File handling ────────────────────────────────────────
  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    setSelectedFile(file);
    setPreviewLocal(URL.createObjectURL(file));
    setResult(null);
  }, []);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) handleFile(e.target.files[0]);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
  };

  // ── Generate composited preview ──────────────────────────
  const generatePreview = async () => {
    if (!selectedFile || !selectedTheme) return;
    setIsProcessing(true);
    setBackendError(false);

    try {
      const fd = new FormData();
      fd.append("venueImage", selectedFile);
      fd.append("themeId", selectedTheme.id);

      const res = await fetch(`${BACKEND}/api/preview/upload`, { method: "POST", body: fd });
      if (!res.ok) throw new Error("Backend error");
      const data = await res.json();

      setResult({
        previewUrl: `${BACKEND}${data.previewUrl}?t=${Date.now()}`,
        themeName: data.themeName,
        colorTint: data.colorTint
      });
    } catch {
      setBackendError(true);
    } finally {
      setIsProcessing(false);
    }
  };

  const reset = () => {
    setSelectedFile(null);
    setPreviewLocal("");
    setResult(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <GenericPage
      title="Event Palace Preview"
      intro="Upload your venue photo, choose a decor theme, and instantly see the composited result."
    >
      <div className="flex flex-col gap-8">

        {/* ── TOP: Upload + Preview Canvas ─────────────────── */}
        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">

          {/* LEFT: Viewport */}
          <div
            className="relative rounded-2xl overflow-hidden border border-outline-variant/20 bg-stone-950 shadow-xl"
            style={{ minHeight: 460 }}
          >
            {result ? (
              /* Result */
              <div className="relative w-full h-full" style={{ minHeight: 460 }}>
                <img src={result.previewUrl} alt="Composited" className="w-full rounded-2xl" />
                {/* Badges */}
                <div className="absolute top-4 left-4 bg-stone-950/90 backdrop-blur border border-white/10 rounded-xl px-4 py-2.5">
                  <p className="text-[0.55rem] uppercase tracking-[0.22em] text-primary-container font-bold">Theme Applied</p>
                  <p className="text-sm font-bold text-white mt-0.5">{result.themeName}</p>
                </div>
                <div
                  className="absolute top-4 right-4 h-8 w-8 rounded-full border-2 border-white/30 shadow"
                  style={{ backgroundColor: result.colorTint }}
                />
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <a
                    href={result.previewUrl}
                    download="event-palace-preview.jpg"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary-container text-black text-xs font-bold px-4 py-2 rounded-full shadow-[0_4px_16px_rgba(200,155,60,0.4)] hover:bg-[#b88c2f] transition"
                  >
                    ↓ Download
                  </a>
                  <button
                    onClick={reset}
                    className="bg-stone-800/90 text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/10 hover:bg-stone-700 transition"
                  >
                    ← New Photo
                  </button>
                </div>
              </div>

            ) : isProcessing ? (
              /* Processing */
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ minHeight: 460 }}>
                {previewLocal && (
                  <img src={previewLocal} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                )}
                <div className="relative z-10">
                  <div className="text-5xl animate-spin mb-5">✦</div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-container">Applying Theme...</p>
                  <p className="text-xs text-stone-400 mt-2">
                    Compositing <span className="text-white font-semibold">{selectedTheme?.name}</span> onto your venue
                  </p>
                </div>
              </div>

            ) : previewLocal ? (
              /* Uploaded, waiting for apply */
              <div className="relative w-full h-full" style={{ minHeight: 460 }}>
                <img src={previewLocal} alt="Your venue" className="w-full rounded-2xl" style={{ display: "block" }} />
                {selectedTheme && (
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ backgroundColor: selectedTheme.colorTint, opacity: 0.08 }}
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={generatePreview}
                    className="bg-primary-container text-black font-bold px-8 py-4 rounded-2xl shadow-[0_8px_32px_rgba(200,155,60,0.5)] hover:bg-[#b88c2f] transition text-sm uppercase tracking-wider"
                  >
                    {selectedTheme?.emoji} Apply {selectedTheme?.name}
                  </button>
                </div>
                <button
                  onClick={reset}
                  className="absolute top-4 right-4 bg-stone-900/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 hover:bg-stone-800 transition"
                >✕</button>
              </div>

            ) : (
              /* Drop zone */
              <div
                onClick={() => fileInputRef.current?.click()}
                onDrop={onDrop}
                onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                className={`absolute inset-0 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 rounded-2xl ${
                  isDragging ? "bg-primary-container/10 border-2 border-primary-container border-dashed" : "hover:bg-stone-900"
                }`}
              >
                <div className={`flex h-20 w-20 items-center justify-center rounded-full border-2 mb-6 transition-all duration-300 ${
                  isDragging ? "border-primary-container bg-primary-container/10" : "border-white/20 bg-white/5"
                }`}>
                  <svg className="h-8 w-8 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                </div>
                <p className="font-display text-xl font-semibold text-white">Upload Your Venue Photo</p>
                <p className="text-sm text-stone-400 mt-2">Drag & drop or click to browse</p>
                <p className="text-xs text-stone-600 mt-1">JPG, PNG, WEBP — up to 20MB</p>
                <div className="mt-8 rounded-xl bg-primary-container px-8 py-3.5 text-sm font-bold text-black uppercase tracking-wider shadow-[0_4px_20px_rgba(200,155,60,0.3)] pointer-events-none">
                  Browse Photo
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Selected Theme Card + Apply button */}
          <div className="flex flex-col gap-4">
            {selectedTheme ? (
              <div
                className="rounded-2xl border border-outline-variant/20 p-6 text-center"
                style={{ background: `linear-gradient(135deg, ${selectedTheme.colorTint}22, transparent)` }}
              >
                <div
                  className="mx-auto h-16 w-16 rounded-full flex items-center justify-center text-3xl mb-4 shadow-lg"
                  style={{ backgroundColor: selectedTheme.colorTint }}
                >
                  {selectedTheme.emoji}
                </div>
                <p className="text-[0.6rem] uppercase tracking-[0.25em] text-primary-container font-bold">{selectedTheme.category}</p>
                <p className="font-display text-xl font-bold text-on-surface mt-1">{selectedTheme.name}</p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: selectedTheme.colorTint }} />
                  <span className="text-[10px] text-on-surface-variant font-mono">{selectedTheme.colorTint}</span>
                </div>

                {selectedFile && !result && (
                  <button
                    onClick={generatePreview}
                    disabled={isProcessing}
                    className="mt-5 w-full rounded-xl bg-primary-container py-3.5 text-sm font-bold text-black uppercase tracking-wider shadow-[0_4px_20px_rgba(200,155,60,0.4)] hover:bg-[#b88c2f] transition disabled:opacity-50"
                  >
                    {isProcessing ? "Processing..." : `Apply Theme →`}
                  </button>
                )}

                {!selectedFile && (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="mt-5 w-full rounded-xl border border-primary-container/50 py-3.5 text-sm font-bold text-primary-container uppercase tracking-wider hover:bg-primary-container/10 transition"
                  >
                    ↑ Upload Venue Photo
                  </button>
                )}
              </div>
            ) : (
              <div className="rounded-2xl border border-outline-variant/20 p-6 text-center text-on-surface-variant text-sm">
                Loading themes...
              </div>
            )}

            {backendError && (
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-xs text-red-400">
                <p className="font-semibold mb-1">Backend offline (port 5000)</p>
                <code className="block bg-stone-900 text-stone-300 p-2 rounded text-[10px] mt-1">
                  cd backend &amp;&amp; node server.js
                </code>
              </div>
            )}

            {/* How it works */}
            <div className="rounded-xl border border-outline-variant/10 bg-stone-50 p-4 text-[11px] text-stone-500 leading-relaxed space-y-1.5">
              <p className="font-bold text-[9px] uppercase tracking-wider text-stone-400 mb-2">How It Works</p>
              <p>📤 Upload a venue, hall, or room photo</p>
              <p>🎨 Pick any decor theme below</p>
              <p>⚙️ Express + sharp composites arch, drapes, tables & lighting onto your image server-side</p>
              <p>💾 Download the finished preview</p>
            </div>
          </div>
        </div>

        {/* ── BOTTOM: Full Theme Gallery ────────────────────── */}
        <div>
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary-container text-black shadow-[0_4px_16px_rgba(200,155,60,0.35)]"
                    : "border border-outline-variant/20 text-on-surface-variant hover:border-primary-container/40 hover:text-on-surface"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 opacity-60">({themes.filter(t => t.category === cat).length})</span>
                )}
              </button>
            ))}
          </div>

          {/* Theme Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {filtered.map(theme => {
              const isSelected = selectedTheme?.id === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => { setSelectedTheme(theme); setResult(null); }}
                  className={`group relative rounded-2xl border p-4 text-left transition-all duration-300 ${
                    isSelected
                      ? "border-primary-container shadow-[0_0_24px_rgba(200,155,60,0.3)]"
                      : "border-outline-variant/15 hover:border-primary-container/40 hover:shadow-[0_0_16px_rgba(200,155,60,0.15)]"
                  }`}
                  style={{
                    background: isSelected
                      ? `linear-gradient(135deg, ${theme.colorTint}22, transparent)`
                      : undefined
                  }}
                >
                  {/* Color swatch */}
                  <div
                    className="h-10 w-10 rounded-xl mb-3 flex items-center justify-center text-lg shadow-sm transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: theme.colorTint }}
                  >
                    {theme.emoji}
                  </div>

                  <p className="text-[0.6rem] uppercase tracking-[0.18em] text-on-surface-variant mb-0.5">{theme.category}</p>
                  <p className="text-xs font-bold text-on-surface leading-tight">{theme.name}</p>

                  {isSelected && (
                    <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-primary-container flex items-center justify-center">
                      <span className="text-black text-[10px] font-bold">✓</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onFileChange}
        />
      </div>
    </GenericPage>
  );
}
