'use client';
import React, { useEffect, useRef } from 'react';

const educationData = [
  {
    year: '2022–2026',
    title: 'B.Tech, Computer Science and Engineering (Pursuing)',
    description: 'Bharat-Ratna Indira Gandhi College of Engineering, Solapur — 7.81 CGPA',
  },
  {
    year: '2020–2022',
    title: 'HSC (XII)',
    description: 'A.D. Joshi Junior College, Solapur — 83.67%',
  },
  {
    year: '2019–2020',
    title: 'SSC (X)',
    description: 'S.R. Girls\' High School Sevasadan, Solapur — 86.60%',
  },
];

const projects = [
  { name: 'WanderLust', desc: 'Travel and hotel booking platform with secure authentication, search filters, CRUD operations, and reviews.' },
  { name: 'KisaanConnect', desc: 'A farmer-to-consumer marketplace that removes middlemen, with AI-powered farming tools with Multilingual functionality.' },
   { name: 'Mango Farm', desc: 'A modern, multi-language website for Mango Farm' },
    { name: 'Ganapati-Project', desc: 'A full-featured, multilingual e-commerce platform.' },

];

export default function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 blob-accent pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-item mb-4" data-delay="0">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Introduction</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="reveal-item space-y-6" data-delay="100">
            <h2 className="font-display text-section-heading font-semibold text-foreground">
              About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Final-year B.Tech CSE student (DBATU, 2026) and MERN Stack Developer who loves turning ideas into working products — building full-stack apps with React.js, Node.js, Express.js, and MongoDB.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond MERN, I&apos;ve explored Cloud, Data Science, Cybersecurity, and Project Management through virtual programs with Tata Group, TCS, AWS APAC, and JPMorgan Chase. I&apos;ve also led technical events and delivered a 2-day web dev workshop for 40+ students.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Looking for:</strong> Internship or new-grad roles in Full-Stack, Backend, or Cloud Engineering. Open to collaborations and conversations — let&apos;s build something impactful.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 'Socket.io'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal-item space-y-4" data-delay="200">
            <h3 className="font-display text-xl font-semibold text-foreground">Featured Projects</h3>
            {projects.map((p) => (
              <div key={p.name} className="bg-card rounded-2xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all">
                <h4 className="font-display font-semibold text-foreground mb-1">{p.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="reveal-item flex items-center gap-3 mb-10" data-delay="0">
            <GradCapIcon className="w-8 h-8 text-primary" />
            <h2 className="font-display text-section-heading font-semibold text-foreground">
              Education
            </h2>
          </div>

          <div className="relative timeline-line pl-12 space-y-10">
            {educationData.map((entry, i) => (
              <div key={entry.year} className="reveal-item relative" data-delay={i * 150}>
                <div className="absolute -left-[2.75rem] top-1 w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/30 border-2 border-background">
                  <GradCapIcon className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-wider">
                      {entry.year}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground">{entry.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GradCapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}
