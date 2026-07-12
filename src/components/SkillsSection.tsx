'use client';
import React, { useEffect, useRef } from 'react';

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
      { threshold: 0.15 }
    );

    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-28 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 blob-primary opacity-20 pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 blob-accent opacity-30 pointer-events-none translate-x-1/4" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-item text-center mb-16" data-delay="0">
          <div className="flex items-center justify-center gap-3 mb-4">
            <PaperclipIcon className="w-5 h-5 text-primary opacity-60" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">What I Do</span>
            <SparkleIcon className="w-5 h-5 text-primary opacity-60" />
          </div>
          <h2 className="font-display text-section-heading font-semibold text-foreground">
            Personal Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div key={skill.title} className="reveal-item card-hover" data-delay={i * 150}>
              <div className="bg-card rounded-3xl p-8 border border-border shadow-sm h-full">
                <div className="mb-6 flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    {skill.icon === 'frontend' && <FrontendIcon className="w-8 h-8 text-primary" />}
                    {skill.icon === 'backend' && <BackendIcon className="w-8 h-8 text-primary" />}
                    {skill.icon === 'cloud' && <CloudIcon className="w-8 h-8 text-primary" />}
                  </div>
                  <SparkleIcon className="w-6 h-6 text-accent sparkle-spin" />
                </div>

                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/8 text-primary rounded-full text-xs font-medium border border-primary/15">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-item mt-16 flex justify-center" data-delay="300">
          <div className="relative">
            <CodeMockup />
          </div>
        </div>
      </div>
    </section>
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

function FrontendIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  );
}

function BackendIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  );
}

function CodeMockup() {
  return (
    <div className="relative w-[280px] h-[170px]">
      <div className="absolute inset-0 bg-card rounded-3xl border border-border shadow-lg overflow-hidden">
        <div className="bg-primary/10 h-8 flex items-center justify-between px-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
          </div>
          <div className="w-20 h-1.5 bg-primary/20 rounded-full" />
        </div>
        <div className="p-4 space-y-2 font-mono text-xs">
          <div className="flex gap-2 items-center">
            <span className="text-primary">const</span>
            <div className="h-2 bg-muted rounded-full w-2/5" />
          </div>
          <div className="flex gap-2 items-center pl-4">
            <div className="h-2 bg-muted/70 rounded-full w-3/5" />
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-primary">app.get</span>
            <div className="h-2 bg-muted rounded-full w-1/3" />
          </div>
          <div className="flex gap-2 items-center pl-4">
            <div className="h-2 bg-muted/70 rounded-full w-2/5" />
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-primary">export</span>
            <div className="h-2 bg-muted rounded-full w-1/4" />
          </div>
        </div>
      </div>

      <div className="absolute -top-3 -right-3 float-gentle">
        <SparkleIcon className="w-6 h-6 text-primary" />
      </div>
      <div className="absolute -bottom-3 -left-3 float-gentle-delayed">
        <SparkleIcon className="w-5 h-5 text-accent" />
      </div>
    </div>
  );
}
