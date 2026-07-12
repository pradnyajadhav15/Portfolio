'use client';

import { useEffect, useRef } from 'react';

const roles = [
  {
    title: 'Virtual Experience Programs',
    icon: 'brush',
    description:
      'Completed job simulation programs with Tata Group, TCS, AWS APAC, and JPMorgan Chase — gaining hands-on exposure to Cloud Solutions Architecture, Data Science, Cybersecurity, and Project Management workflows used in industry.',
    skills: ['AWS', 'Data Science', 'Cybersecurity', 'Project Management'],
  },
  {
    title: 'Full-Stack Development',
    icon: 'play',
    description:
      'Built and shipped four full-stack applications end to end — from database schema design through REST API development to responsive React front ends — covering authentication, real-time features, and dashboards.',
    skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
  },
  {
    title: 'Technical Leadership',
    icon: 'star',
    description:
      'Led technical events and delivered a 2-day web development workshop for 40+ students, sharpening communication, mentoring, and leadership skills while helping peers get started with web development.',
    skills: ['Mentoring', 'Public Speaking', 'Event Leadership'],
  },
];

export default function WorkExperienceSection() {
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
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      timerIds.forEach((timerId) => window.clearTimeout(timerId));
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      aria-labelledby="experience-heading"
      className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div className="dot-grid-bg pointer-events-none absolute inset-0 opacity-30" />
      <div className="blob-accent pointer-events-none absolute -bottom-16 left-1/2 h-48 w-[320px] -translate-x-1/2 opacity-20 sm:h-64 sm:w-[600px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header
          className="reveal-item mb-10 text-center sm:mb-14 lg:mb-16"
          data-delay="0"
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.25em] text-primary sm:tracking-[0.4em]">
            My Journey
          </span>

          <h2
            id="experience-heading"
            className="font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl"
          >
            Work Experience
          </h2>
        </header>

        <div className="relative">
          <div className="absolute left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] top-[72px] hidden h-0.5 bg-gradient-to-r from-primary/30 via-accent/50 to-primary/30 lg:block" />

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {roles.map((role, index) => (
              <article
                key={role.title}
                className="reveal-item flex flex-col"
                data-delay={index * 150}
              >
                <div className="relative z-10 mb-0 hidden justify-center lg:flex">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-primary shadow-lg shadow-primary/30">
                    <RoleIcon name={role.icon} />
                  </div>
                </div>

                <div className="card-hover mt-0 flex h-full flex-1 flex-col rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6 lg:-mt-4 lg:p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 lg:hidden">
                    <RoleIconLarge name={role.icon} />
                  </div>

                  <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                    {role.title}
                  </h3>

                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {role.description}
                  </p>

                  <ul
                    className="mt-auto flex flex-wrap gap-2"
                    aria-label={`${role.title} skills`}
                  >
                    {role.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground sm:px-3"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RoleIcon({ name }: { name: string }) {
  if (name === 'brush') {
    return (
      <svg
        aria-hidden="true"
        className="h-4 w-4 text-primary-foreground"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    );
  }

  if (name === 'play') {
    return (
      <svg
        aria-hidden="true"
        className="h-4 w-4 text-primary-foreground"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 text-primary-foreground"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
    </svg>
  );
}

function RoleIconLarge({ name }: { name: string }) {
  if (name === 'brush') {
    return (
      <svg
        aria-hidden="true"
        className="h-6 w-6 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    );
  }

  if (name === 'play') {
    return (
      <svg
        aria-hidden="true"
        className="h-6 w-6 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 text-primary"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}