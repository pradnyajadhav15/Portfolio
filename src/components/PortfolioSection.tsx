'use client';

import { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Project {
  id: number;
  client: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    client: 'MERN Stack',
    title: 'WanderLust',
    description:
      'A full-stack travel platform where travelers explore destinations, book stays, and connect with hosts — built with Node.js, Express, MongoDB, and EJS. Features real-time AI assistance, payment integration, and an interactive map experience.',
    image: '/assets/images/no_image.png',
    imageAlt: 'WanderLust travel and hotel booking platform screenshot',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Auth'],
  },
  {
    id: 2,
    client: 'MERN Stack',
    title: 'KisaanConnect',
    description:
      'A farmer-to-consumer marketplace that removes middlemen with AI-powered farming tools. KisaanConnect lets farmers list produce directly to consumers, includes crop-health analysis, a farming Q&A assistant, an AI listing-description writer, and NGO support connections.',
    image: '/assets/images/no_image.png',
    imageAlt: 'KisaanConnect farmer-to-consumer marketplace screenshot',
    tags: ['React.js', 'Express.js', 'JWT', 'Dashboards'],
  },
  {
    id: 3,
    client: 'React + Vite',
    title: 'Mango Farm',
    description:
      'A modern multilingual website for Mango Farm in Akkalkot, Solapur, built with React, Vite, and Tailwind CSS. It includes a real-time collaboration tool for farm management and seamless language switching.',
    image: '/assets/images/no_image.png',
    imageAlt: 'Mango Farm website screenshot',
    tags: ['Vite', 'React.js', 'Tailwind CSS', 'Multilingual'],
  },
  {
    id: 4,
    client: 'MERN Stack',
    title: 'Ganapati Project',
    description:
      'A multilingual e-commerce platform for R. Ramesh Arts Studio, a family-rooted Ganpati idol business in Solapur. Customers can browse, pay online or through COD/UPI, and pre-book, while the owner manages operations through a custom dashboard.',
    image: '/assets/images/no_image.png',
    imageAlt: 'Ganapati Project e-commerce platform screenshot',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Multilingual'],
  },
];

export default function PortfolioSection() {
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
      id="portfolio"
      ref={sectionRef}
      aria-labelledby="portfolio-heading"
      className="relative scroll-mt-24 overflow-hidden bg-secondary py-16 sm:py-20 lg:py-28"
    >
      <div className="blob-primary pointer-events-none absolute -right-20 -top-20 h-64 w-64 translate-x-1/3 -translate-y-1/3 opacity-15 sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header
          className="reveal-item mb-10 flex flex-col items-center sm:mb-14 lg:mb-16"
          data-delay="0"
        >
          <div className="mb-4 flex items-center gap-3">
            <SparkleIcon className="h-6 w-6 text-primary" />
            <PaperclipIcon className="h-5 w-5 text-muted-foreground" />
            <SparkleIcon className="h-5 w-5 text-accent" />
          </div>

          <div className="relative">
            <div className="absolute -top-5 left-1/2 flex -translate-x-1/2 gap-6 sm:-top-6 sm:gap-8">
              <div className="h-5 w-px bg-primary/40 sm:h-6" />
              <div className="h-5 w-px bg-primary/40 sm:h-6" />
            </div>

            <h2
              id="portfolio-heading"
              className="rounded-2xl border-2 border-primary/80 bg-primary px-5 py-3 text-center font-display text-base font-semibold tracking-wide text-primary-foreground shadow-lg shadow-primary/20 sm:px-10 sm:text-xl"
            >
              Portfolio Projects
            </h2>
          </div>

          <p className="mt-6 max-w-md text-center leading-relaxed text-muted-foreground">
            A selection of full-stack projects showcasing React.js, Node.js,
            and MongoDB in action.
          </p>
        </header>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="reveal-item card-hover"
              data-delay={index * 100}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-[16/9] overflow-hidden">
        <AppImage
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1024px) calc(50vw - 2rem), 576px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

        <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
          <span className="rounded-full border border-border/50 bg-card/90 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm sm:px-4 sm:text-sm">
            {project.client}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="mb-2 font-display text-lg font-semibold text-foreground sm:text-xl">
          {project.title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
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