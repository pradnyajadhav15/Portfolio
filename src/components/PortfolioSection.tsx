'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const projects = [
  {
    id: 1,
    client: 'MERN Stack',
    title: 'WanderLust',
    description: 'A full-stack travel platform where travelers explore destinations, book stays, and connect with hosts — built with Node.js, Express, MongoDB, and EJS. Features real-time AI assistance, payment integration, and an interactive map experience.',
    image: '/assets/images/no_image.png',
    imageAlt: 'WanderLust travel and hotel booking platform screenshot',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Auth'],
  },
  {
    id: 2,
    client: 'MERN Stack',
    title: 'KisaanConnect',
    description: 'A farmer-to-consumer marketplace that removes middlemen, with AI-powered farming tools.KisaanConnect lets farmers list their produce directly to consumers — no middlemen taking a cut. It includes AI features to help farmers (crop health analysis from a photo, a farming Q&A assistant, and an AI listing-description writer) and connects farmers to support NGOs.',
    image: '/assets/images/no_image.png',
    imageAlt: 'KisaanConnect farmer-to-consumer marketplace screenshot',
    tags: ['React.js', 'Express.js', 'JWT', 'Dashboards'],
  },
  {
    id: 3,
    client: 'MERN Stack',
    title: 'Mango-Farm',
    description: 'A modern, multi-language website for Mango Farm (Akkalkot, Solapur) built with React + Vite + Tailwind CSS. It features a real-time collaboration tool for farm management, allowing multiple users to update farm data simultaneously. The platform supports multilingual functionality, enabling users to switch between languages seamlessly.',
    image: '/assets/images/no_image.png',
    imageAlt: 'Mango-Farm screenshot',
    tags: ['Vite', 'React.js', 'Tailwind CSS', 'Multilingual'],
  },
  {
    id: 4,
    client: 'MERN Stack',
    title: 'Ganapati-Project',
    description: 'A full-featured, multilingual e-commerce platform for R. Ramesh Arts Studio, a family-rooted business (Est. 2002) handcrafting Ganpati idols in Solapur, Maharashtra. Customers can browse idols and accessories, pay online or via COD/UPI, and pre-book for the season — while the owner manages the entire business from a custom admin dashboard, no code required.',
    image: '/assets/images/no_image.png',
    imageAlt: 'Ganapati-Project e-commerce platform screenshot',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Multilingual'],
  },
];

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.reveal-item');
    items?.forEach((el) => el.classList.add('pre-reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || '0', 10);
            setTimeout(() => {
              el.classList.remove('pre-reveal');
              el.classList.add('revealed');
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 blob-primary opacity-15 pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-item flex flex-col items-center mb-16" data-delay="0">
          <div className="flex items-center gap-3 mb-4">
            <SparkleIcon className="w-6 h-6 text-primary" />
            <PaperclipIcon className="w-5 h-5 text-muted-foreground" />
            <SparkleIcon className="w-5 h-5 text-accent" />
          </div>
          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-8">
              <div className="w-px h-6 bg-primary/40" />
              <div className="w-px h-6 bg-primary/40" />
            </div>
            <div className="px-10 py-3 bg-primary text-primary-foreground rounded-2xl border-2 border-primary/80 shadow-lg shadow-primary/20 font-display text-xl font-semibold tracking-wide">
              Portfolio Project
            </div>
          </div>
          <p className="mt-6 text-muted-foreground text-center max-w-md">
            A selection of full-stack projects showcasing React.js, Node.js, and MongoDB in action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={project.id} className="reveal-item card-hover" data-delay={i * 100}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Project {
  id: number;
  client: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden h-full">
      <div className="relative overflow-hidden aspect-[16/9]">
        <AppImage
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-4 py-2 bg-card/90 backdrop-blur-sm text-foreground rounded-full text-sm font-semibold border border-border/50 shadow-sm">
            {project.client}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-primary/8 text-primary rounded-full text-xs font-medium border border-primary/15">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
    </svg>
  );
}

function PaperclipIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}
