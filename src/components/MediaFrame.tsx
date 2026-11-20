"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Terminal, Film, Image as ImageIcon, Play, Sparkles } from "lucide-react";

interface MediaFrameProps {
  type: "image" | "video";
  src: string;
  alt: string;
  placeholderLabel?: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  showPlayOverlay?: boolean;
  onPlayClick?: () => void;
}

export function MediaFrame({
  type,
  src,
  alt,
  placeholderLabel,
  className = "",
  aspectRatio = "aspect-video",
  priority = false,
  autoPlay = false,
  muted = true,
  loop = true,
  controls = false,
  showPlayOverlay = false,
  onPlayClick,
}: MediaFrameProps) {
  const [hasError, setHasError] = useState<boolean>(!src || src.trim() === "");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const fallbackLabel =
    placeholderLabel || (src ? `Drop ${src}` : "Carica risorsa multimediale");

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-paper-line bg-paper-surface/60 group ${aspectRatio} ${className}`}
      onClick={onPlayClick}
    >
      {/* Decorative technical blueprint corner markers */}
      <span className="absolute top-2 left-2 z-10 text-[10px] font-mono text-ink-secondary/40 select-none">
        +
      </span>
      <span className="absolute top-2 right-2 z-10 text-[10px] font-mono text-ink-secondary/40 select-none">
        +
      </span>
      <span className="absolute bottom-2 left-2 z-10 text-[10px] font-mono text-ink-secondary/40 select-none">
        +
      </span>
      <span className="absolute bottom-2 right-2 z-10 text-[10px] font-mono text-ink-secondary/40 select-none">
        +
      </span>

      {/* Real Media Render when no error */}
      {!hasError ? (
        type === "image" ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className={`object-cover object-top transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
          />
        ) : (
          <video
            src={src}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            controls={controls}
            playsInline
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadedData={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
          />
        )
      ) : null}

      {/* High-Craft Technical Blueprint Wireframe (Fallback) */}
      {hasError && (
        <div className="absolute inset-0 technical-grid flex flex-col items-center justify-center p-6 text-center select-none bg-paper-canvas/90">
          <div className="relative mb-3 flex items-center justify-center w-12 h-12 rounded-lg border border-paper-line bg-paper-surface shadow-xs">
            {type === "video" ? (
              <Film className="w-5 h-5 text-ink-secondary" strokeWidth={1.5} />
            ) : (
              <ImageIcon className="w-5 h-5 text-ink-secondary" strokeWidth={1.5} />
            )}
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent-cobalt/80" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 mb-2 rounded bg-paper-line/50 border border-paper-line text-[10px] font-mono uppercase tracking-wider text-ink-secondary">
            <Terminal className="w-3 h-3 text-ink-secondary" strokeWidth={1.5} />
            <span>WIREPLACEHOLDER / {type.toUpperCase()}</span>
          </div>

          <p className="text-xs font-mono text-ink-primary font-medium max-w-xs break-all leading-relaxed">
            {fallbackLabel}
          </p>

          <span className="mt-2 text-[10px] font-mono text-ink-secondary/70">
            Trascina il file in <code className="text-ink-primary font-semibold">/public</code> per visualizzare
          </span>
        </div>
      )}

      {/* Play Video Overlay Button (for preview states) */}
      {showPlayOverlay && (
        <div className="absolute inset-0 bg-ink-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center z-20 cursor-pointer">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-obsidian text-paper-canvas border border-zinc-700 shadow-lg transform group-hover:scale-105 transition-transform">
            <Play className="w-4 h-4 fill-paper-canvas" strokeWidth={1.5} />
            <span className="text-xs font-mono font-medium tracking-wide">
              Guarda Demo Video
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
