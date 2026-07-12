'use client';

import { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const roles = ['Freelancer', 'Full-Stack Engineer', 'B.Tech CSE'];

const stats = [
  { value: '4+', label: 'Projects' },
  { value: '4', label: 'Virtual Programs' },
  { value: '40+', label: 'Students Mentored' },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = Array.from(
      heroRef.current?.querySelectorAll<HTMLElement>('.hero-word') ?? []
    );

    if (!items.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const timerIds: number[] = [];

    items.forEach((element, index) => {
      element.style.opacity = '0';

      const timerId = window.setTimeout(() => {
        element.classList.add('animate-word-appear');
        element.style.opacity = '';
      }, 200 + index * 120);

      timerIds.push(timerId);
    });

    return () => {
      timerIds.forEach((timerId) => window.clearTimeout(timerId));

      items.forEach((element) => {
        element.style.opacity = '';
        element.classList.remove('animate-word-appear');
      });
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-[100dvh] scroll-mt-20 items-center overflow-hidden pt-16 sm:pt-20"
    >
      <div className="blob-primary pointer-events-none absolute -right-20 -top-16 h-72 w-72 sm:-right-10 sm:-top-10 sm:h-[500px] sm:w-[500px]" />
      <div className="blob-accent pointer-events-none absolute -bottom-16 -left-20 h-64 w-64 sm:bottom-[10%] sm:-left-10 sm:h-[400px] sm:w-[400px]" />
      <div className="dot-grid-bg pointer-events-none absolute inset-0 opacity-50" />
      <div className="grain-overlay pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 py-10 sm:gap-12 sm:py-12 lg:min-h-[calc(100dvh-5rem)] lg:grid-cols-2 lg:gap-16 lg:py-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="hero-word inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-2 sm:px-4">
              <span className="h-2 w-2 rounded-full bg-primary motion-safe:animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:tracking-widest">
                Creative Portfolio
              </span>
            </div>

            <div className="space-y-2">
              <p className="hero-word font-display text-base font-medium text-muted-foreground sm:text-lg">
                Hello, I&apos;m
              </p>

              <h1 className="hero-word font-display text-[clamp(4rem,15vw,8rem)] font-bold leading-[0.88] text-foreground">
                Pradnya
                <br />
                <span className="font-light italic text-primary">Jadhav.</span>
              </h1>
            </div>

            <ul className="hero-word flex flex-wrap gap-2">
              {roles.map((role) => (
                <li
                  key={role}
                  className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground sm:px-4 sm:text-sm"
                >
                  {role}
                </li>
              ))}
            </ul>

            <p className="hero-word max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Final-year B.Tech Computer Science student building full-stack web
              applications with React.js, Node.js, Express.js, and MongoDB —
              turning ideas into working products.
            </p>

            <div className="hero-word flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#portfolio"
                className="w-full rounded-full bg-primary px-6 py-3.5 text-center text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto sm:px-8 sm:py-4"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="w-full rounded-full border border-border bg-secondary px-6 py-3.5 text-center text-base font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto sm:px-8 sm:py-4"
              >
                Get In Touch
              </a>
            </div>

            <dl className="hero-word grid max-w-md grid-cols-3 gap-2 pt-2 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="min-w-0 text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-xl font-bold text-foreground sm:text-2xl">
                    {stat.value}
                  </dd>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground sm:text-xs sm:tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-primary/20 bg-primary/20 sm:translate-x-4 sm:translate-y-4 sm:rounded-[2.5rem]" />
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-[2rem] border border-accent/20 bg-accent/20 sm:translate-x-2 sm:translate-y-2 sm:rounded-[2.5rem]" />

              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-border bg-secondary shadow-2xl shadow-primary/10 sm:rounded-[2.5rem]">
                <AppImage
                  src="/assets/images/profile-photo.jpg"
                  alt="Pradnya Jadhav"
                  fill
                  priority
                  sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) 380px, 420px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/50 bg-card/90 p-3 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:p-4">
                  <p className="font-display text-base font-semibold text-foreground sm:text-lg">
                    Pradnya Jadhav
                  </p>
                  <p className="text-sm text-muted-foreground">Freelancer</p>
                </div>
              </div>

              <div className="float-gentle absolute -left-3 -top-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card shadow-md sm:-left-6 sm:-top-6 sm:h-16 sm:w-16">
                <SparkleIcon className="h-6 w-6 text-primary sm:h-8 sm:w-8" />
              </div>

              <div className="float-gentle-delayed absolute -bottom-3 -right-3 flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 sm:-bottom-4 sm:-right-4 sm:h-14 sm:w-14">
                <PaperclipIcon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              </div>

              <div className="float-gentle absolute top-1/3 hidden h-12 w-12 -right-8 items-center justify-center rounded-xl border border-accent/30 bg-accent/20 lg:flex">
                <StarIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 opacity-50 lg:flex">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
    </svg>
  );
}

function PaperclipIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}