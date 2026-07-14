'use client';
import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "Pradnya has a rare mix of technical depth and clarity — she picks up new concepts fast and explains them even faster. Her workshop was one of the most well-organized sessions our students attended.",
    name: 'Professor Name',
    role: 'Faculty, DBATU',
  },
  {
    quote: "I attended Pradnya's web development workshop and walked away with real, working skills. She's patient, thorough, and genuinely invested in helping beginners succeed.",
    name: 'Workshop Attendee',
    role: 'Student, DBATU',
  },
  {
    quote: "Working with Pradnya on our AWS virtual program was great — she asks the right questions and ships clean, well-documented solutions.",
    name: 'Program Mentor',
    role: 'AWS APAC Virtual Program',
  },
];

export default function TestimonialsSection() {
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
    <section id="testimonials" ref={sectionRef} className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 blob-accent opacity-20 pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-item text-center mb-16" data-delay="0">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary block mb-4">Kind Words</span>
          <h2 className="font-display text-section-heading font-semibold text-foreground">
            Testimonials
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name} className="reveal-item card-hover" data-delay={i * 150}>
              <div className="bg-card rounded-3xl p-7 border border-border shadow-sm h-full flex flex-col">
                <QuoteIcon className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
    </svg>
  );
}