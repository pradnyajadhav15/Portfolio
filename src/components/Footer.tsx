import React from 'react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground py-20 px-6">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 blob-primary opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 blob-accent opacity-15 translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
        {/* Sparkle decoration */}
        <div className="flex justify-center gap-3 mb-2">
          <SparkleIcon className="w-5 h-5 text-accent opacity-70" />
          <SparkleIcon className="w-7 h-7 text-primary" />
          <SparkleIcon className="w-5 h-5 text-accent opacity-70" />
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground leading-tight">
          Thank You
        </h2>
        <p className="text-sm text-white/60 tracking-widest uppercase font-medium">
          for visiting my portfolio
        </p>

        <div className="flex justify-center gap-5 pt-4">
          <a
            href="https://www.instagram.com/pradnya_j24"
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>

          <a
            href="https://github.com/pradnyajadhav15"
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all"
            aria-label="GitHub"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/pradnya-jadhav-173199348/"
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
            </svg>
          </a>

          <a
            href="mailto:jadhavpradnya558@gmail.com"
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all"
            aria-label="Email"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>

        <p className="text-white/30 text-sm pt-4">
          &copy; 2026 Pradnya Jadhav &middot; <a href="#" className="hover:text-white/60 transition-colors">Privacy</a> &middot; <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
        </p>
      </div>
    </footer>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
    </svg>
  );
}

