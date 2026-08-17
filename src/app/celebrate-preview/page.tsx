"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GenericPage } from "@/components/generic-page";
import { Theme, themes } from "@/lib/themes-data";
import { supabase } from "@/lib/supabase";

export default function CelebratePreviewPage() {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(themes[0]);
  const [previewMode, setPreviewMode] = useState<"upload" | "camera">("upload");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(false);
  const [isProcessingAI, setIsProcessingAI] = useState(false);

  // Storage & Authentication state
  const [userId, setUserId] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch current user ID on mount
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUserId(user.id);
      }
    });
  }, []);

  // Cleanup object URL on unmount or new upload
  useEffect(() => {
    return () => {
      if (uploadedImage && uploadedImage.startsWith("blob:")) {
        URL.revokeObjectURL(uploadedImage);
      }
    };
  }, [uploadedImage]);

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

  // Handle Photo Upload with Validation and Supabase Storage
  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadError(null);
    setUploadSuccess(false);

    // 1. Validation: Image file types only
    if (!file.type.startsWith("image/")) {
      setUploadError("Please select a valid image file (JPEG, PNG, WEBP, etc.).");
      return;
    }

    // 2. Validation: Maximum file size 5 MB
    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      setUploadError("File size exceeds the 5 MB limit.");
      return;
    }

    // 3. Instant local preview
    if (uploadedImage && uploadedImage.startsWith("blob:")) {
      URL.revokeObjectURL(uploadedImage);
    }
    const objectUrl = URL.createObjectURL(file);
    setUploadedImage(objectUrl);

    // 4. Upload to Supabase Storage bucket 'venues'
    setIsUploading(true);
    const userFolder = userId || "guest";
    const timestamp = Date.now();
    const cleanFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const filePath = `${userFolder}/${timestamp}-${cleanFileName}`;

    const { error } = await supabase.storage.from("venues").upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

    setIsUploading(false);

    if (error) {
      console.error("Supabase Storage Upload Error:", error);
      setUploadError(`Upload failed: ${error.message}`);
    } else {
      setUploadSuccess(true);
      // Optional: Get public URL
      const { data: publicUrlData } = supabase.storage.from("venues").getPublicUrl(filePath);
      if (publicUrlData?.publicUrl) {
        setUploadedImage(publicUrlData.publicUrl);
      }
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <GenericPage
      title="Celebrate Preview™"
      intro="Upload your space or use your camera to instantly visualize your dream celebration with AI."
      actions={[{ label: "Launch AI Experience", href: "/enquire" }, { label: "View Inventory", href: "/portfolio", variant: "secondary" }]}
    >
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handlePhotoUpload}
        accept="image/*"
        className="hidden"
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        {/* Upload Your Venue Card */}
        <div
          onClick={triggerFileSelect}
          className="rounded-[1.5rem] border border-dashed border-gold-300 bg-white p-8 text-center shadow-[0_12px_30px_rgba(30,20,10,0.05)] cursor-pointer hover:border-gold-500 transition duration-300 relative overflow-hidden"
        >
          {uploadedImage ? (
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
              <Image
                src={uploadedImage}
                alt="Venue Preview"
                fill
                className="object-cover"
              />
              {isUploading && (
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
                  <div className="w-8 h-8 border-4 border-gold-400 border-t-transparent rounded-full animate-spin mb-2" />
                  <span className="text-xs uppercase tracking-widest font-semibold">Uploading to Supabase...</span>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="mx-auto w-12 h-12 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 text-xl mb-4">
                ✦
              </div>
              <p className="font-display text-3xl">Upload Your Venue</p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Drag and drop images of your current space (JPG, PNG, max 5MB)
              </p>
            </>
          )}

          {isUploading && !uploadedImage && (
            <div className="mt-4 text-xs font-semibold text-gold-600 uppercase tracking-widest flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
              Uploading to Storage...
            </div>
          )}

          {uploadError && (
            <div className="mt-4 rounded-lg bg-rose-50 border border-rose-200 p-3 text-xs text-rose-700 font-medium">
              {uploadError}
            </div>
          )}

          {uploadSuccess && (
            <div className="mt-4 rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-800 font-medium">
              ✓ Venue uploaded successfully to Supabase Storage!
            </div>
          )}
        </div>

        {/* Live Camera Preview Card */}
        <div
          onClick={() => setPreviewMode(previewMode === "camera" ? "upload" : "camera")}
          className="rounded-[1.5rem] border border-dashed border-gold-300 bg-white p-8 text-center shadow-[0_12px_30px_rgba(30,20,10,0.05)] cursor-pointer hover:border-gold-500 transition duration-300"
        >
          <div className="mx-auto w-12 h-12 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 text-xl mb-4">
            📷
          </div>
          <p className="font-display text-3xl">Live Camera Preview</p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Open your camera for instant AR decoration
          </p>
          {previewMode === "camera" && (
            <div className="mt-4 relative w-full h-48 rounded-xl overflow-hidden bg-black">
              {cameraError ? (
                <div className="absolute inset-0 flex items-center justify-center text-white text-xs p-4 text-center">
                  Camera permission denied or camera not available.
                </div>
              ) : (
                <video ref={videoRef} className="w-full h-full object-cover" playsInline muted />
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 flex justify-center gap-3">
        <Link href="/celebration-match" className="rounded-full border border-gold-500 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold-600">
          Compare Multiple Themes
        </Link>
        <Link href="/enquire" className="rounded-full bg-gold-500 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white">
          Book This Theme
        </Link>
      </div>
    </GenericPage>
  );
}
