'use client';

import { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import GalleryModal from '@/components/ui/GalleryModal';

interface GalleryImage {
  src: string;
  label: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  techStack: string[];
  keyFeatures: string[];
  liveLink?: string;
  githubLink?: string;
  gallery?: GalleryImage[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'WanderLust',
    category: 'Full-Stack Hotel Booking Platform',
    description: 'A full-stack travel and hotel booking platform where users can explore destinations, view detailed property listings, securely authenticate, manage bookings, and interact with an AI-powered travel assistant.',
    image: '/assets/images/projects/wanderlust/home.png',
    imageAlt: 'WanderLust travel and hotel booking platform home page',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    keyFeatures: ['Authentication', 'Hotel Listings', 'Booking System', 'Responsive'],
    liveLink: 'https://wanderlust-luk5.onrender.com/',
    githubLink: 'https://github.com/pradnyajadhav15/wanderlust',
    gallery: [
      { src: '/assets/images/projects/wanderlust/home.png', label: 'Home' },
      { src: '/assets/images/projects/wanderlust/listings.png', label: 'Listings' },
      { src: '/assets/images/projects/wanderlust/hotel-details.png', label: 'Details' },
    ],
  },
  {
    id: 2,
    title: 'KisaanConnect',
    category: 'MERN Stack Marketplace',
    description: 'A farmer-to-consumer marketplace that removes middlemen with AI-powered farming tools, letting farmers list produce directly to consumers.',
    image: '/assets/images/no_image.png',
    imageAlt: 'KisaanConnect farmer-to-consumer marketplace screenshot',
    techStack: ['React.js', 'Express.js', 'MongoDB', 'JWT'],
    keyFeatures: ['Direct Listings', 'Crop Health AI', 'Farming Q&A', 'NGO Connections'],
    liveLink: '',
    githubLink: '',
  },
  {
    id: 3,
    title: 'Mango Farm',
    category: 'React + Vite Website',
    description: 'A modern multilingual website for Mango Farm in Akkalkot, Solapur, with a real-time collaboration tool for farm management.',
    image: '/assets/images/projects/mango-farm/home.png',
    imageAlt: 'Mango Farm website screenshot',
    techStack: ['Vite', 'React.js', 'Tailwind CSS'],
    keyFeatures: ['Multilingual', 'Real-Time Collaboration', 'Responsive UI'],
    liveLink: 'https://mango-farm.netlify.app/',
    githubLink: 'https://github.com/pradnyajadhav15/Mango-Farm',
    gallery: [
      { src: '/assets/images/projects/mango-farm/home.png', label: 'Home' },
      { src: '/assets/images/projects/mango-farm/farm-activities.png', label: 'Activities' },
      { src: '/assets/images/projects/mango-farm/mangoes.png', label: 'Available Mangoes' },
      { src: '/assets/images/projects/mango-farm/photo-gallery.png', label: 'Photo Gallery' }
    ],
  },
  {
    id: 4,
    title: 'Ganapati Project',
    category: 'MERN Stack E-Commerce',
    description: 'A multilingual e-commerce platform for R. Ramesh Arts Studio, a family-rooted Ganpati idol business in Solapur.',
    image: '/assets/images/no_image.png',
    imageAlt: 'Ganapati Project e-commerce platform screenshot',
    techStack: ['React.js', 'Node.js', 'MongoDB'],
    keyFeatures: ['Online + COD/UPI Payment', 'Pre-Booking', 'Owner Dashboard', 'Multilingual'],
    liveLink: '',
    githubLink: '',
  },
];

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);

  useEffect(() => {
    const items = Array.from(
      sectionRef.current?.querySelectorAll<HTMLElement>('.reveal-item') ?? []
    );
    if (!items.length) return;

    const reveal = (element: HTMLElement) => {
      element.classList.remove('pre-reveal');
      element.classList.add('revealed');
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
    <section id="portfolio" ref={sectionRef} aria-labelledby="portfolio-heading" className="relative scroll-mt-24 overflow-hidden bg-secondary py-16 sm:py-20 lg:py-28">
      <div className="blob-primary pointer-events-none absolute -right-20 -top-20 h-64 w-64 translate-x-1/3 -translate-y-1/3 opacity-15 sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="reveal-item mb-10 flex flex-col items-center sm:mb-14 lg:mb-16" data-delay="0">
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
            <h2 id="portfolio-heading" className="rounded-2xl border-2 border-primary/80 bg-primary px-5 py-3 text-center font-display text-base font-semibold tracking-wide text-primary-foreground shadow-lg shadow-primary/20 sm:px-10 sm:text-xl">
              Portfolio Projects
            </h2>
          </div>
          <p className="mt-6 max-w-md text-center leading-relaxed text-muted-foreground">
            A selection of full-stack projects showcasing React.js, Node.js, and MongoDB in action.
          </p>
        </header>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={project.id} className="reveal-item" data-delay={index * 100}>
              <ProjectCard project={project} onViewGallery={() => setGalleryProject(project)} />
            </div>
          ))}
        </div>
      </div>

      <GalleryModal
        images={galleryProject?.gallery ?? []}
        projectTitle={galleryProject?.title ?? ''}
        isOpen={!!galleryProject}
        onClose={() => setGalleryProject(null)}
      />
    </section>
  );
}



function ProjectCard({ project, onViewGallery }: { project: Project; onViewGallery: () => void }) {
  return (
    <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col">
      <div className="relative aspect-[16/6] overflow-hidden bg-secondary">
        <AppImage
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1024px) calc(50vw - 2rem), 576px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-3">
          <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
            {project.title}
          </h3>
          <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary whitespace-nowrap">
            {project.category}
          </span>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5" aria-label={`${project.title} tech stack`}>
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-md bg-muted px-2 py-1 text-[11px] font-medium text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.keyFeatures.map((feature) => (
            <span key={feature} className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">
              <span className="text-primary">✓</span>{feature}
            </span>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-3 gap-2 pt-1">
          {project.liveLink ? (
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="rounded-xl bg-primary px-3 py-2.5 text-center text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
              Live Demo
            </a>
          ) : <span />}
          {project.githubLink ? (
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="rounded-xl border border-border px-3 py-2.5 text-center text-xs font-semibold text-foreground hover:bg-muted transition-colors">
              GitHub
            </a>
          ) : <span />}
          {project.gallery && project.gallery.length > 0 ? (
            <button onClick={onViewGallery} className="rounded-xl border border-primary/40 px-3 py-2.5 text-center text-xs font-semibold text-primary hover:bg-primary/10 transition-colors">
              Gallery
            </button>
          ) : <span />}
        </div>
      </div>
    </article>
  );
}









function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
    </svg>
  );
}

function PaperclipIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}
