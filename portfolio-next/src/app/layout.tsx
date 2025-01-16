import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ashu - notes',
  description: 'Personal website and notes of Ashutosh',
  icons: {
    icon: 'https://cdn.icon-icons.com/icons2/294/PNG/256/Notes_31095.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container flex min-h-screen relative">
          <Sidebar />
          <main className="flex-1 ml-[260px] p-8 max-w-[calc(100%-260px)]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
} 