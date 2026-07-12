'use client';

import { useEffect, useRef } from 'react';

const skills = [
  {
    title: 'Frontend Development',
    icon: 'frontend',
    description:
      'Building responsive, accessible user interfaces with React.js and modern CSS frameworks. I focus on clean component architecture and smooth user experiences across devices.',
    tags: ['React.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    icon: 'backend',
    description:
      'Designing and building RESTful APIs, authentication systems, and database schemas with Node.js, Express.js, and MongoDB — with a focus on security, scalability, and clean code.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT Auth'],
  },
  {
    title: 'Cloud & Tools',
    icon: 'cloud',
    description:
      'Hands-on experience with AWS Solutions Architecture, Git version control, and real-time systems using Socket.io, gained through virtual programs with AWS APAC, Tata Group, and JPMorgan Chase.',
    tags: ['AWS', 'Git/GitHub', 'Socket.io', 'REST APIs'],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = Array.from(
      sectionRef.current?.querySelectorAll<HTMLElement>('.reveal-item') ?? []
    );

    if (!items.length) return;

    const reveal = (element: HTMLElement) => {
      element.classList.remove('pre-reveal');
      element.classList.add('revealed');
    };

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      items.forEach(reveal);
      return;
    }

    items.forEach((item) => item.classList.add('pre-reveal'));

    const timerIds: number[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          const delay = Number(element.dataset.delay ?? 0);

          timerIds.push(window.setTimeout(() => reveal(element), delay));
          observer.unobserve(element);
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      timerIds.forEach((timerId) => window.clearTimeout(timerId));
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      aria-labelledby="skills-heading"
      className="relative scroll-mt-24 overflow-hidden bg-secondary py-16 sm:py-20 lg:py-28"
    >
      <div className="blob-primary pointer-events-none absolute -left-20 top-0 h-56 w-56 -translate-x-1/2 opacity-20 sm:h-80 sm:w-80" />
      <div className="blob-accent pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 translate-x-1/4 opacity-30 sm:h-64 sm:w-64" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header
          className="reveal-item mb-10 text-center sm:mb-14 lg:mb-16"
          data-delay="0"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <PaperclipIcon className="h-5 w-5 text-primary opacity-60" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary sm:tracking-[0.4em]">
              What I Do
            </span>
            <SparkleIcon className="h-5 w-5 text-primary opacity-60" />
          </div>

          <h2
            id="skills-heading"
            className="font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl"
          >
            Personal Skills
          </h2>
        </header>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {skills.map((skill, index) => (
            <article
              key={skill.title}
              className="reveal-item card-hover"
              data-delay={index * 150}
            >
              <div className="h-full rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6 lg:p-8">
                <div className="mb-5 flex items-start justify-between sm:mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 sm:h-16 sm:w-16">
                    {skill.icon === 'frontend' && (
                      <FrontendIcon className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
                    )}
                    {skill.icon === 'backend' && (
                      <BackendIcon className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
                    )}
                    {skill.icon === 'cloud' && (
                      <CloudIcon className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
                    )}
                  </div>

                  <SparkleIcon className="sparkle-spin h-5 w-5 text-accent sm:h-6 sm:w-6" />
                </div>

                <h3 className="mb-3 font-display text-xl font-semibold text-foreground sm:mb-4 sm:text-2xl">
                  {skill.title}
                </h3>

                <p className="mb-5 leading-relaxed text-muted-foreground sm:mb-6">
                  {skill.description}
                </p>

                <ul
                  className="flex flex-wrap gap-2"
                  aria-label={`${skill.title} technologies`}
                >
                  {skill.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary sm:px-3"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div
          className="reveal-item mt-10 flex justify-center sm:mt-14 lg:mt-16"
          data-delay="300"
        >
          <CodeMockup />
        </div>
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

function FrontendIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
      />
    </svg>
  );
}

function BackendIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z"
      />
    </svg>
  );
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
      />
    </svg>
  );
}

function CodeMockup() {
  return (
    <div
      aria-hidden="true"
      className="relative h-40 w-64 sm:h-[170px] sm:w-[280px]"
    >
      <div className="absolute inset-0 overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
        <div className="flex h-8 items-center justify-between bg-primary/10 px-4">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-primary/40" />
            <div className="h-2.5 w-2.5 rounded-full bg-primary/30" />
            <div className="h-2.5 w-2.5 rounded-full bg-primary/20" />
          </div>
          <div className="h-1.5 w-20 rounded-full bg-primary/20" />
        </div>

        <div className="space-y-2 p-4 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="text-primary">const</span>
            <div className="h-2 w-2/5 rounded-full bg-muted" />
          </div>
          <div className="flex items-center gap-2 pl-4">
            <div className="h-2 w-3/5 rounded-full bg-muted/70" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">app.get</span>
            <div className="h-2 w-1/3 rounded-full bg-muted" />
          </div>
          <div className="flex items-center gap-2 pl-4">
            <div className="h-2 w-2/5 rounded-full bg-muted/70" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">export</span>
            <div className="h-2 w-1/4 rounded-full bg-muted" />
          </div>
        </div>
      </div>

      <div className="float-gentle absolute -right-2 -top-2 sm:-right-3 sm:-top-3">
        <SparkleIcon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
      </div>

      <div className="float-gentle-delayed absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3">
        <SparkleIcon className="h-4 w-4 text-accent sm:h-5 sm:w-5" />
      </div>
    </div>
  );
}