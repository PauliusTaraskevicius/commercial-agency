"use client";

import { useEffect, useRef, useState } from "react";

interface LandingVideoProps {
  src?: string;
  bgColor?: string;
}

export const LandingVideo = ({ src, bgColor = "#000" }: LandingVideoProps) => {
  const [active, setActive] = useState(0);
  const refs = [useRef<HTMLVideoElement | null>(null), useRef<HTMLVideoElement | null>(null)];
  const [initialized, setInitialized] = useState(false);

  // Initialize first video only once
  useEffect(() => {
    if (initialized || !src) return;
    
    const v = refs[0].current;
    if (v) {
      v.src = src;
      v.load();
      v.play().catch(() => {});
      setInitialized(true);
    }
  }, [src, initialized]);

  // Handle video changes (skip initial load)
  useEffect(() => {
    if (!src || !initialized) return;

    const inactive = 1 - active;
    const nextVideo = refs[inactive].current;
    const currentVideo = refs[active].current;

    if (!nextVideo || !currentVideo) return;

    // Check if src is already playing
    if (currentVideo.src.endsWith(src)) return;

    nextVideo.src = src;
    nextVideo.preload = "metadata";
    nextVideo.load();

    const onCanPlay = () => {
      nextVideo.play().catch(() => {});
      if (nextVideo.style) nextVideo.style.opacity = "1";
      if (currentVideo.style) currentVideo.style.opacity = "0";

      const swapTimeout = window.setTimeout(() => {
        currentVideo.pause();
        currentVideo.src = "";
        currentVideo.load();
        setActive(inactive);
      }, 350);

      return () => clearTimeout(swapTimeout);
    };

    nextVideo.addEventListener("canplay", onCanPlay, { once: true });

    return () => {
      nextVideo.removeEventListener("canplay", onCanPlay);
    };
  }, [src, active, initialized]);

  const commonAttrs = {
    loop: true,
    muted: true,
    playsInline: true,
    preload: "metadata" as const,
    className:
      "absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ease-in-out",
  };

  return (
    <div
      className="fixed inset-0 -z-10 h-screen w-screen"
      style={{ backgroundColor: bgColor }}
    >
      <video
        ref={refs[0]}
        {...commonAttrs}
        style={{ opacity: active === 0 ? 1 : 0, backgroundColor: bgColor }}
      />

      <video
        ref={refs[1]}
        {...commonAttrs}
        style={{ opacity: active === 1 ? 1 : 0, backgroundColor: bgColor }}
      />
    </div>
  );
};