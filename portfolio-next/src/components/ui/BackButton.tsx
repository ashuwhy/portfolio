'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/')}
      className="back-button fixed top-4 left-4 z-50 bg-transparent border-none text-[#e6e6e6] cursor-pointer p-2 transition-opacity opacity-60 hover:opacity-100 md:hidden"
    >
      <Image
        src="/sidebar.leading.svg"
        alt="Back"
        width={24}
        height={24}
        className="block -mt-px"
      />
    </button>
  );
} 