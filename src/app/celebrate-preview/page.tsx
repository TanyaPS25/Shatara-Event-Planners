"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GenericPage } from "@/components/generic-page";
import { Theme, themes } from "@/lib/themes-data";

export default function CelebratePreviewPage() {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(themes[0]); // Default Royal Grandeur
  const [previewMode, setPreviewMode] = useState<"upload" | "camera">("upload");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(false);
  const [isProcessingAI, setIsProcessingAI] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Toggle Camera Feed
  useEffect(() => {
    if (previewMode === "camera") {
      setCameraError(false);
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } })
        .then((stream) => {
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play().catch(() => {});
          }
          setIsCameraActive(true);
        })
        .catch((err) => {
          console.error("Camera access error:", err);
          setIsCameraActive(false);
          setCameraError(true);
        });
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [previewMode]);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };

  // Handle Photo Upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleThemeChange = (theme: Theme) => {
    setIsProcessingAI(true);
    setSelectedTheme(theme);
    setTimeout(() => {
      setIsProcessingAI(false);
    }, 700);
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <GenericPage
      title="Celebrate Preview™"
      intro="Simulate your dream event. Upload your venue photo or launch your live camera stream, then choose a theme to overlay."
    >
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] items-start mb-12 animate-fade-in">
        
        {/* Left Column: Visualizer Window */}
        <div className="rounded-[2rem] border border-black/8 bg-white p-4 shadow-md overflow-hidden">
          
          {/* Header Controls */}
          <div className="flex flex-wrap gap-2 items-center justify-between border-b border-black/5 pb-4 mb-4">
            <div className="flex gap-2">
              <button
                onClick={() => setPreviewMode("upload")}
                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  previewMode === "upload"
                    ? "bg-gold-500 text-white shadow-sm"
                    : "bg-stone-100 text-[var(--muted)] hover:bg-stone-200"
                }`}
              >
                Upload Venue Photo
              </button>
              <button
                onClick={() => setPreviewMode("camera")}
                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  previewMode === "camera"
                    ? "bg-gold-500 text-white shadow-sm"
                    : "bg-stone-100 text-[var(--muted)] hover:bg-stone-200"
                }`}
              >
                Live Camera
              </button>
            </div>

            {/* Upload Replace trigger if in Upload mode and image exists */}
            {previewMode === "upload" && uploadedImage && (
              <button
                onClick={triggerFileSelect}
                className="rounded-full border border-gold-500 px-4 py-1.5 text-[0.62rem] font-bold uppercase tracking-wider text-gold-600 hover:bg-gold-50 transition"
              >
                Replace Photo
              </button>
            )}
          </div>

          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handlePhotoUpload}
            accept="image/*"
            className="hidden"
          />

          {/* Visual Workspace Canvas */}
          <div className="relative h-[480px] w-full bg-stone-900 rounded-[1.5rem] overflow-hidden flex items-center justify-center border border-black/5 shadow-inner">
            
            {/* 1. UPLOADED PHOTO PREVIEW */}
            {previewMode === "upload" && (
              <div className="absolute inset-0 h-full w-full flex items-center justify-center">
                {uploadedImage ? (
                  <>
                    <Image
                      src={uploadedImage}
                      alt="Uploaded venue background"
                      fill
                      className="object-cover brightness-95"
                    />
                    
                    {/* Blended Theme Decoration overlay */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        isProcessingAI ? "opacity-0" : "opacity-75"
                      }`}
                    >
                      <Image
                        src={selectedTheme.image}
                        alt={selectedTheme.displayName}
                        fill
                        className="object-cover mix-blend-screen"
                        sizes="100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  </>
                ) : (
                  <div
                    onClick={triggerFileSelect}
                    className="flex flex-col items-center justify-center p-8 text-center cursor-pointer group text-stone-400 hover:text-gold-500 transition-colors"
                  >
                    <span className="text-6xl font-light mb-4 group-hover:scale-110 transition-transform text-gold-500">+</span>
                    <p className="font-display text-2xl font-medium">Upload Venue Photo</p>
                    <p className="text-xs text-stone-500 mt-2 max-w-xs leading-relaxed">
                      Click to upload a clear image of your blank venue, hall, or room to overlay decorations.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* 2. CAMERA PREVIEW */}
            {previewMode === "camera" && (
              <div className="absolute inset-0 h-full w-full bg-black">
                {isCameraActive ? (
                  <video
                    ref={videoRef}
                    playsInline
                    muted
                    className="h-full w-full object-cover scale-x-[-1] brightness-90"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white bg-stone-900">
                    <span className="text-5xl font-light text-gold-500 animate-pulse mb-3">+</span>
                    {cameraError ? (
                      <div>
                        <p className="font-semibold text-sm text-red-400">Camera Permission Blocked or Missing</p>
                        <p className="text-xs text-stone-400 mt-1 max-w-xs mx-auto">
                          Please enable device camera permission in your browser settings to run AR overlays, or switch back to Upload mode.
                        </p>
                      </div>
                    ) : (
                      <p className="text-xs text-stone-400">Initialising device video stream feed...</p>
                    )}
                  </div>
                )}

                {/* Overlay onto active camera stream */}
                {isCameraActive && (
                  <div
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      isProcessingAI ? "opacity-0" : "opacity-60"
                    }`}
                  >
                    <Image
                      src={selectedTheme.image}
                      alt={selectedTheme.displayName}
                      fill
                      className="object-cover mix-blend-screen"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                )}
              </div>
            )}

            {/* AI HUD Overlay */}
            {isProcessingAI && (
              <div className="absolute inset-0 z-20 bg-stone-900/60 backdrop-blur-sm flex flex-col items-center justify-center text-white">
                <span className="text-3xl animate-spin mb-3">✦</span>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400">Generating AI Layout...</p>
                <p className="text-[0.62rem] text-stone-300 mt-1">Overlaying spatial geometry lighting</p>
              </div>
            )}

            {/* Canvas HUD overlays */}
            {(previewMode === "camera" || (previewMode === "upload" && uploadedImage)) && (
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                <div className="bg-stone-950/85 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 text-white">
                  <span className="text-[0.58rem] font-bold uppercase tracking-wider text-gold-400 block">Applied Overlay</span>
                  <p className="text-sm font-semibold">{selectedTheme.displayName}</p>
                </div>
                <div className="bg-stone-950/85 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 text-white text-right">
                  <span className="text-[0.58rem] font-bold uppercase tracking-wider text-amber-400 block">AR Canvas</span>
                  <p className="text-xs font-semibold">{previewMode === "camera" ? "Live Stream" : "Uploaded Photo"}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Themes Selector list */}
        <div className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-sm flex flex-col">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-600 block mb-4">Themes Catalog</span>
          
          <div className="space-y-4 max-h-[440px] overflow-y-auto pr-1">
            {themes.map((theme) => {
              const isApplied = theme.id === selectedTheme.id;
              return (
                <div
                  key={theme.id}
                  onClick={() => handleThemeChange(theme)}
                  className={`group flex gap-3 p-3 rounded-xl border cursor-pointer transition ${
                    isApplied
                      ? "border-gold-500 bg-gold-50/20"
                      : "border-black/5 bg-stone-50/50 hover:border-gold-300 hover:bg-white"
                  }`}
                >
                  <div className="relative h-12 w-16 overflow-hidden rounded-lg bg-stone-200 shrink-0">
                    <Image
                      src={theme.image}
                      alt={theme.displayName}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-1">
                      <p className="text-xs font-bold text-[var(--ink)] truncate group-hover:text-gold-600 transition">
                        {theme.displayName}
                      </p>
                      <span className="text-[0.58rem] font-semibold text-gold-600 whitespace-nowrap">
                        ${theme.startingPrice.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-[0.58rem] font-bold uppercase text-[var(--muted)] tracking-wider mt-0.5 block">
                      {theme.category} • {theme.subtheme}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Book / Action */}
          <div className="mt-6 pt-4 border-t border-black/5 flex flex-col gap-2">
            <Link
              href={{
                pathname: "/enquire",
                query: { selectedTheme: selectedTheme.displayName },
              }}
              className="w-full text-center rounded-full bg-gold-500 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-gold-400 transition shadow-md shadow-gold-500/10"
            >
              Book {selectedTheme.displayName}
            </Link>
            <Link
              href="/celebration-match"
              className="w-full text-center rounded-full border border-black/10 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)] hover:text-gold-600 transition"
            >
              Compare Themes
            </Link>
          </div>
        </div>

      </div>
    </GenericPage>
  );
}
