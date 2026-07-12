'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll('.hero-word');
    items?.forEach((el, i) => {
      const elem = el as HTMLElement;
      elem.style.opacity = '0';
      setTimeout(() => {
        elem.classList.add('animate-word-appear');
        elem.style.opacity = '';
      }, 200 + i * 120);
    });
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob-primary pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-8%] w-[400px] h-[400px] blob-accent pointer-events-none" />
      <div className="absolute inset-0 dot-grid-bg opacity-50 pointer-events-none" />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          <div className="space-y-8 py-12 lg:py-0">
            <div className="hero-word inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/8 opacity-0">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Creative Portfolio
              </span>
            </div>

            <div className="space-y-2">
              <p className="hero-word font-display text-muted-foreground text-lg font-medium opacity-0">
                Hello, I&apos;m
              </p>
              <h1 className="hero-word font-display text-hero-xl font-bold text-foreground leading-[0.9] opacity-0">
                Pradnya
                <br />
                <span className="text-primary italic font-light">Jadhav.</span>
              </h1>
            </div>

            <div className="hero-word flex flex-wrap gap-2 opacity-0">
              {['Freelancer','Full-Stack Engineer', 'B.Tech CSE'].map((role) => (
                <span key={role} className="px-4 py-1.5 bg-secondary border border-border rounded-full text-sm font-medium text-muted-foreground">
                  {role}
                </span>
              ))}
            </div>

            <p className="hero-word text-muted-foreground text-lg leading-relaxed max-w-md opacity-0">
              Final-year B.Tech Computer Science student building full-stack web applications with React.js, Node.js, Express.js, and MongoDB — turning ideas into working products.
            </p>

            <div className="hero-word flex flex-col sm:flex-row gap-4 opacity-0">
              <a href="#portfolio" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 text-center">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-4 bg-secondary border border-border text-foreground rounded-full font-semibold text-base hover:bg-muted transition-all text-center">
                Get In Touch
              </a>
            </div>

            <div className="hero-word flex items-center gap-6 pt-2 opacity-0">
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-foreground">4+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Projects</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-foreground">4</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Virtual Programs</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-foreground">40+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Students Mentored</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              <div className="absolute inset-0 translate-x-4 translate-y-4 bg-primary/20 rounded-[2.5rem] border border-primary/20" />
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-accent/20 rounded-[2.5rem] border border-accent/20" />

              <div className="relative bg-secondary rounded-[2.5rem] border border-border overflow-hidden aspect-[3/4] shadow-2xl shadow-primary/10">
                <AppImage
                  src="/assets/images/profile-photo.jpg"
                  alt="Pradnya Jadhav"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-md rounded-2xl p-4 border border-border/50 shadow-lg">
                  <p className="font-display text-lg font-semibold text-foreground">Pradnya Jadhav</p>
                  <p className="text-sm text-muted-foreground">Freelancer</p>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 w-16 h-16 bg-card rounded-2xl border border-border shadow-md flex items-center justify-center float-gentle">
                <SparkleIcon className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-primary/10 rounded-full border border-primary/30 flex items-center justify-center float-gentle-delayed">
                <PaperclipIcon className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute top-1/3 -right-8 w-12 h-12 bg-accent/20 rounded-xl border border-accent/30 flex items-center justify-center float-gentle">
                <StarIcon className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
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
function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
