import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Harsh Raj - Cloud Engineer & Web Developer',
  description: 'Cloud Engineer & Full Stack Developer specializing in modern web applications and cloud infrastructure',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.12.37/build/spline-viewer.js"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}