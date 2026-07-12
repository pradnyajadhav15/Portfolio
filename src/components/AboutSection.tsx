'use client';

import { useEffect, useRef } from 'react';

const educationData = [
  {
    year: '2022–2026',
    title: 'B.Tech, Computer Science and Engineering (Pursuing)',
    description:
      'Bharat-Ratna Indira Gandhi College of Engineering, Solapur — 7.81 CGPA',
  },
  {
    year: '2020–2022',
    title: 'HSC (XII)',
    description: 'A.D. Joshi Junior College, Solapur — 83.67%',
  },
  {
    year: '2019–2020',
    title: 'SSC (X)',
    description: "S.R. Girls' High School Sevasadan, Solapur — 86.60%",
  },
];

const projects = [
  {
    name: 'WanderLust',
    desc: 'Travel and hotel booking platform with secure authentication, search filters, CRUD operations, and reviews.',
  },
  {
    name: 'KisaanConnect',
    desc: 'A farmer-to-consumer marketplace that removes middlemen, with AI-powered farming tools and multilingual functionality.',
  },
  {
    name: 'Mango Farm',
    desc: 'A modern, multi-language website for Mango Farm.',
  },
  {
    name: 'Ganapati Project',
    desc: 'A full-featured, multilingual e-commerce platform.',
  },
];

const skills = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'AWS',
  'Socket.io',
];

export default function AboutSection() {
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

          const timerId = window.setTimeout(() => reveal(element), delay);
          timerIds.push(timerId);

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
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div className="blob-accent pointer-events-none absolute -right-20 -top-12 h-64 w-64 opacity-40 sm:right-0 sm:top-0 sm:h-96 sm:w-96" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-item mb-4" data-delay="0">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary sm:tracking-[0.4em]">
            Introduction
          </span>
        </div>

        <div className="mb-16 grid items-start gap-10 md:gap-12 lg:mb-24 lg:grid-cols-2 lg:gap-16">
          <div className="reveal-item space-y-5 sm:space-y-6" data-delay="100">
            <h2
              id="about-heading"
              className="font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl"
            >
              About Me
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Final-year B.Tech CSE student (DBATU, 2026) and MERN Stack
              Developer who loves turning ideas into working products — building
              full-stack apps with React.js, Node.js, Express.js, and MongoDB.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              Beyond MERN, I&apos;ve explored Cloud, Data Science,
              Cybersecurity, and Project Management through virtual programs
              with Tata Group, TCS, AWS APAC, and JPMorgan Chase. I&apos;ve
              also led technical events and delivered a 2-day web development
              workshop for 40+ students.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Looking for:</strong>{' '}
              Internship or new-grad roles in Full-Stack, Backend, or Cloud
              Engineering. Open to collaborations and conversations — let&apos;s
              build something impactful.
            </p>

            <ul
              aria-label="Core skills"
              className="flex flex-wrap gap-2.5 pt-2 sm:gap-3"
            >
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:px-4 sm:text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal-item space-y-3 sm:space-y-4" data-delay="200">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Featured Projects
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              {projects.map((project) => (
                <li
                  key={project.name}
                  className="rounded-2xl border border-border bg-card p-4 motion-safe:transition-all motion-safe:duration-300 hover:border-primary/30 hover:shadow-md sm:p-5"
                >
                  <h4 className="mb-1 font-display font-semibold text-foreground">
                    {project.name}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div
            className="reveal-item mb-8 flex items-center gap-3 sm:mb-10"
            data-delay="0"
          >
            <GradCapIcon className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
            <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
              Education
            </h2>
          </div>

          <div className="timeline-line relative space-y-8 pl-10 sm:space-y-10 sm:pl-12">
            {educationData.map((entry, index) => (
              <article
                key={entry.year}
                className="reveal-item relative"
                data-delay={index * 150}
              >
                <div className="absolute -left-9 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary shadow-md shadow-primary/30 sm:-left-11 sm:h-9 sm:w-9">
                  <GradCapIcon className="h-4 w-4 text-primary-foreground" />
                </div>

                <div className="rounded-2xl border border-border bg-card p-4 shadow-sm motion-safe:transition-all motion-safe:duration-300 hover:border-primary/30 hover:shadow-md sm:p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-wider text-primary">
                      {entry.year}
                    </span>

                    <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                      {entry.title}
                    </h3>
                  </div>

                  <p className="leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GradCapIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    </svg>
  );
}