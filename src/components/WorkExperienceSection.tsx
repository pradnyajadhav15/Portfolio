'use client';
import React, { useEffect, useRef } from 'react';

const roles = [
  {
    title: 'Virtual Experience Programs',
    icon: 'brush',
    color: 'primary',
    description:
      'Completed job simulation programs with Tata Group, TCS, AWS APAC, and JPMorgan Chase — gaining hands-on exposure to Cloud Solutions Architecture, Data Science, Cybersecurity, and Project Management workflows used in industry.',
    skills: ['AWS', 'Data Science', 'Cybersecurity', 'Project Management'],
  },
  {
    title: 'Full-Stack Development',
    icon: 'play',
    color: 'accent',
    description:
      'Built and shipped four full-stack applications end to end — from database schema design through REST API development to responsive React front ends — covering auth, real-time features, and dashboards.',
    skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
  },
  {
    title: 'Technical Leadership',
    icon: 'star',
    color: 'muted',
    description:
      'Led technical events and delivered a 2-day web development workshop for 40+ students, sharpening communication, mentoring, and leadership skills while helping peers get started with web development.',
    skills: ['Mentoring', 'Public Speaking', 'Event Leadership'],
  },
];

export default function WorkExperienceSection() {
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
    <section id="experience" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 blob-accent opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-item text-center mb-16" data-delay="0">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary block mb-4">My Journey</span>
          <h2 className="font-display text-section-heading font-semibold text-foreground">
            Work Experience
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-[72px] left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-primary/30 via-accent/50 to-primary/30" />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {roles.map((role, i) => (
              <div key={role.title} className="reveal-item flex flex-col" data-delay={i * 150}>
                <div className="hidden md:flex justify-center mb-0 relative z-10">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 border-2 border-background">
                    <RoleIcon name={role.icon} />
                  </div>
                </div>

                <div className="card-hover bg-card rounded-3xl p-7 border border-border shadow-sm flex-1 mt-0 md:-mt-4">
                  <div className="md:hidden w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <RoleIconLarge name={role.icon} />
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {role.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {role.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-secondary text-muted-foreground rounded-full text-xs font-medium border border-border">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
      <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    );
  }
  if (name === 'play') {
    return (
      <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
    </svg>
  );
}

function RoleIconLarge({ name }: { name: string }) {
  if (name === 'brush') {
    return (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    );
  }
  if (name === 'play') {
    return (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
      </svg>
    );
  }
  return (
    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
