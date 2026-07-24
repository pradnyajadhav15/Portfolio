'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface GalleryImage {
  src: string;
  label: string;
}

interface GalleryModalProps {
  images: GalleryImage[];
  projectTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function GalleryModal({ images, projectTitle, isOpen, onClose }: GalleryModalProps) {
  const [index, setIndex] = useState(0);

  const goNext = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
  const goPrev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    setIndex(0);
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, goNext, goPrev, onClose]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} gallery`}
    >
      <div
        className="relative w-full max-w-3xl bg-card rounded-3xl p-4 sm:p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <p className="font-display text-foreground text-base sm:text-lg font-semibold">
            {projectTitle} — {images[index].label}
          </p>
          <button
            onClick={onClose}
            aria-label="Close gallery"
            className="w-9 h-9 rounded-full bg-muted hover:bg-border text-foreground flex items-center justify-center text-lg shrink-0"
          >
            ×
          </button>
        </div>

        <div className="relative flex items-center justify-center bg-secondary rounded-2xl overflow-hidden" style={{ minHeight: '300px', maxHeight: '60vh' }}>
          <button
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-2 z-10 w-9 h-9 rounded-full bg-card/90 hover:bg-card text-foreground flex items-center justify-center shadow-md"
          >
            ‹
          </button>

          <img
            src={images[index].src}
            alt={images[index].label}
            className="max-w-full max-h-[60vh] object-contain"
          />

          <button
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-2 z-10 w-9 h-9 rounded-full bg-card/90 hover:bg-card text-foreground flex items-center justify-center shadow-md"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setIndex(i)}
              className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                i === index ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-border'
              }`}
            >
              {img.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}