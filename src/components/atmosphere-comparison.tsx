"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

type AtmosphereComparisonProps = {
  imageA: string;
  imageB: string;
  nameA: string;
  nameB: string;
};

export function AtmosphereComparison({ imageA, imageB, nameA, nameB }: AtmosphereComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const [containerWidth, setContainerWidth] = useState<number | string>("100%");

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => handleMouseMove(e);
    const touchMoveHandler = (e: TouchEvent) => handleTouchMove(e);
    const mouseUpHandler = () => handleMouseUp();

    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mouseup", mouseUpHandler);
    window.addEventListener("touchmove", touchMoveHandler);
    window.addEventListener("touchend", mouseUpHandler);

    if (containerRef.current) {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
      window.removeEventListener("touchmove", touchMoveHandler);
      window.removeEventListener("touchend", mouseUpHandler);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    if (containerRef.current) {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    }
    if ("touches" in e) {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    } else {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="relative w-full">
      <div className="text-center mb-6">
        <h3 className="font-display text-3xl tracking-wide text-[var(--ink)]">Visual Atmosphere</h3>
        <p className="text-sm text-[var(--muted)] mt-1">
          Drag the center handle side-by-side to visually compare the moods and decorations.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative h-[450px] w-full select-none overflow-hidden rounded-[2rem] border border-black/8 shadow-xl bg-stone-200 cursor-ew-resize"
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        {/* Right Image (Theme B) */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src={imageB}
            alt={nameB}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-black/15" />
          {/* Label Right */}
          <div className="absolute bottom-6 right-6 rounded-full bg-stone-900/75 backdrop-blur-md px-5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white shadow-lg">
            {nameB}
          </div>
        </div>

        {/* Left Image Wrapper (Theme A) with clipping/width */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 h-[450px]" style={{ width: containerWidth }}>
            <Image
              src={imageA}
              alt={nameA}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>
          {/* Label Left */}
          <div className="absolute bottom-6 left-6 rounded-full bg-white/80 backdrop-blur-md px-5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-gold-600 shadow-lg whitespace-nowrap">
            {nameA}
          </div>
        </div>

        {/* Divider Line */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white/70 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Drag Handle Button */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white bg-white/90 text-gold-600 shadow-lg hover:scale-105 active:scale-95 transition-all">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M8 9l-4 4 4 4m8 0l4-4-4-4"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
