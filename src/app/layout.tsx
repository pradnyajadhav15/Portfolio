import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Baloo_2, Poppins } from 'next/font/google';
import '../styles/tailwind.css';

const baloo2 = Baloo_2({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  title: 'Pradnya Jadhav | MERN Stack Developer & Full-Stack Engineer',
  description:
    'Portfolio of Pradnya Jadhav, a final-year B.Tech CSE student and MERN Stack Developer specializing in React.js, Node.js, Express.js, and MongoDB. Open to internships, full-time roles, and freelance projects.',
  keywords: ['Pradnya Jadhav', 'MERN Stack Developer', 'Full-Stack Developer', 'React Developer', 'Node.js Developer', 'DBATU', 'Web Developer Portfolio'],
  authors: [{ name: 'Pradnya Jadhav' }],
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  openGraph: {
    title: 'Pradnya Jadhav | MERN Stack Developer',
    description: 'Portfolio showcasing full-stack projects built with React.js, Node.js, Express.js, and MongoDB.',
    images: [{ url: '/assets/images/og-image.png', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${baloo2.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
