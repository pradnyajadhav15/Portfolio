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
  colorScheme: 'light',
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  title: 'Pradnya Jadhav — Creative Portfolio',
  description:
    'Creative portfolio of Pradnya Jadhav — showcasing projects, skills, and experience.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  openGraph: {
    title: 'Pradnya Jadhav — Creative Portfolio',
    description: 'Creative portfolio of Pradnya Jadhav.',
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
