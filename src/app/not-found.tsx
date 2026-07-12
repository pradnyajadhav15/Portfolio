'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

export default function NotFound() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-10 sm:px-6">
      <section className="w-full max-w-md text-center">
        <div className="mb-5 flex justify-center sm:mb-6">
          <h1 className="font-display text-[clamp(5.5rem,25vw,9rem)] font-bold leading-none text-primary/20">
            404
          </h1>
        </div>

        <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Page Not Found
        </h2>

        <p className="mt-3 text-sm leading-6 text-foreground/70 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back!
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <button
            type="button"
            onClick={handleGoBack}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors duration-200 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto"
          >
            <Icon name="ArrowLeftIcon" size={16} />
            Go Back
          </button>

          <button
            type="button"
            onClick={handleGoHome}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-medium text-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto"
          >
            <Icon name="HomeIcon" size={16} />
            Back to Home
          </button>
        </div>
      </section>
    </main>
  );
}