'use client';
import React from 'react';

const techStack = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Express.js', color: '#000000' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Git', color: '#F05032' },
  { name: 'Socket.io', color: '#010101' },
];

export default function TechStackSection() {
  return (
    <section className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.4em] text-primary mb-10">
          Tech Stack
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 p-4 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-md transition-all"
            >
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: tech.color }} />
              <span className="text-xs font-medium text-muted-foreground text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}