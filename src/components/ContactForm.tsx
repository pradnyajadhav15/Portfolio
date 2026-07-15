'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mgogvwqr', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 text-center">
        <p className="font-display text-lg font-semibold text-foreground">Message sent!</p>
        <p className="text-sm text-muted-foreground mt-1">I&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="w-full px-5 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="w-full px-5 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
      <textarea
        name="message"
        placeholder="Your message"
        required
        rows={4}
        className="w-full px-5 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-500 text-center">Something went wrong. Try emailing me directly instead.</p>
      )}
    </form>
  );
 
}
