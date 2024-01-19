import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import SocketProvider from '@/components/providers/Socket';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WebRTC-video',
  description: 'Video chat app created with webRTC and nextjs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('dark', inter.className)}>
        <SocketProvider>{children}</SocketProvider>
      </body>
    </html>
  );
}
