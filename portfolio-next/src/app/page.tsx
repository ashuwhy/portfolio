'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 586) {
        router.push('/about-me');
      }
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [router]);

  return null;
} 