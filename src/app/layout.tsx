import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Your Name - Web Developer & Cloud Engineer',
  description: 'Full Stack Developer & Cloud Engineer specializing in modern web applications and cloud infrastructure',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}