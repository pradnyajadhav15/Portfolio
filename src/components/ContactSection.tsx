'use client';
import React, { useEffect, useRef } from 'react';

const contactDetails = [
  {
    icon: 'phone',
    label: 'Phone',
    value: '+91 87669 77048',
    href: 'tel:+918766977048',
  },
  {
    icon: 'email',
    label: 'Email',
    value: 'jadhavpradnya558@gmail.com',
    href: 'mailto:jadhavpradnya558@gmail.com',
  },
  {
    icon: 'web',
    label: 'LinkedIn',
    value: 'linkedin.com/in/pradnya-jadhav',
    href: 'https://www.linkedin.com/in/pradnya-jadhav-173199348/',
  },
  {
    icon: 'social',
    label: 'GitHub',
    value: '@pradnyajadhav15',
    href: 'https://github.com/pradnyajadhav15',
  },
];

export default function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 blob-primary opacity-20 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 blob-accent opacity-25 translate-x-1/4 translate-y-1/4 pointer-events-none" />
      <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="reveal-item space-y-4" data-delay="0">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Get In Touch</span>
              <h2 className="font-display text-section-heading font-semibold text-foreground leading-tight">
                Let&apos;s build
                <br />
                <span className="text-primary italic font-light">something together.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Open to internships, full-time roles, and freelance projects. Whether you&apos;re hiring or have a project in mind, my inbox is always open.
              </p>
            </div>

            <div className="reveal-item space-y-4" data-delay="150">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="flex items-center gap-5 p-5 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <ContactIcon name={detail.icon} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-0.5">
                      {detail.label}
                    </p>
                    <p className="text-foreground font-medium">{detail.value}</p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowIcon className="w-5 h-5 text-primary" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal-item" data-delay="200">
            <div className="relative">
              <div className="bg-card rounded-3xl p-10 border border-border shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 blob-accent opacity-30 translate-x-1/4 -translate-y-1/4 pointer-events-none" />

                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)] animate-pulse" />
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Open to work</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-3xl font-semibold text-foreground">
                      Hiring or have
                      <br />
                      a project?
                    </h3>
                    <p className="text-muted-foreground">
                      I typically respond within 24 hours. Let&apos;s talk about how I can contribute.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {['Internship Opportunities', 'Full-Time Roles', 'Freelance Web Projects', 'Open Source Collaboration'].map((service) => (
                      <div key={service} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-sm text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="mailto:jadhavpradnya558@gmail.com"
                    className="block w-full py-4 bg-primary text-primary-foreground rounded-full font-semibold text-center hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 text-base"
                  >
                    Send Me a Message
                  </a>
                </div>
              </div>

              <div className="absolute -top-5 -right-5 w-14 h-14 bg-secondary rounded-2xl border border-border shadow-md flex items-center justify-center float-gentle">
                <SparkleIcon className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/10 rounded-full border border-primary/20 flex items-center justify-center float-gentle-delayed">
                <PaperclipIcon className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactIcon({ name }: { name: string }) {
  if (name === 'phone') {
    return (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    );
  }
  if (name === 'email') {
    return (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    );
  }
  if (name === 'web') {
    return (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
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