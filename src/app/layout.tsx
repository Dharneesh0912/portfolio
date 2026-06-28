// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Sora, Space_Grotesk } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'Dharneesh R | AI & Data Science Portfolio',
  description: 'Portfolio of Dharneesh R, an AI & Data Science undergraduate specializing in Full Stack Development and AI/ML.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} ${spaceGrotesk.variable} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}