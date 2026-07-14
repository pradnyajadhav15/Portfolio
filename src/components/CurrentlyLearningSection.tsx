'use client';
import React from 'react';

const learning = [
    'Python & Data Science',
    
  'Next.js Server Actions',
  'Docker & Containerization',
  'System Design Basics',
  'GraphQL',
];

export default function CurrentlyLearningSection() {
  return (
    <section className="py-16 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
              Currently Learning
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {learning.map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}