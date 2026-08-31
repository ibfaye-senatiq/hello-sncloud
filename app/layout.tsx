import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'hello-sncloud',
  description: 'Reference workload running on SN Cloud (Coolify)',
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
