"use client";

import { useEffect, useRef } from "react";

type BackgroundVideoProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

export function BackgroundVideo({
  src,
  poster,
  label,
  className = "absolute inset-0 h-full w-full object-cover",
}: BackgroundVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      video.pause();
      return;
    }

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("x5-playsinline", "true");

    const tryPlay = () => {
      void video.play().catch(() => {});
    };

    tryPlay();

    const onGesture = () => tryPlay();
    const onVisibility = () => {
      if (document.visibilityState === "visible" && video.paused) tryPlay();
    };

    document.addEventListener("touchstart", onGesture, { once: true, passive: true });
    document.addEventListener("click", onGesture, { once: true });
    document.addEventListener("visibilitychange", onVisibility);
    video.addEventListener("canplay", tryPlay);

    return () => {
      document.removeEventListener("touchstart", onGesture);
      document.removeEventListener("click", onGesture);
      document.removeEventListener("visibilitychange", onVisibility);
      video.removeEventListener("canplay", tryPlay);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      // The clips are short, so buffering the whole file avoids a stall at the loop point.
      preload="auto"
      poster={poster}
      aria-label={label}
      disableRemotePlayback
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
