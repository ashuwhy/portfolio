import Link from 'next/link';

export default function Links() {
  return (
    <div className="content">
      <div className="last-edited text-sm text-[#888] font-semibold absolute top-4 left-1/2 -translate-x-1/2">
        5 January 2025 at 11:23 PM
      </div>
      
      <h1 className="text-2xl mb-4">links</h1>
      <p className="text-sm mb-4 leading-relaxed">
        not super active on social media, but you can find me on these platforms:
      </p>

      <h2 className="text-base mt-8 mb-3">social</h2>
      <ul className="list-disc ml-8 mt-4 mb-4">
        <li className="mb-2 text-sm leading-relaxed">
          <Link href="https://github.com/ashuwhy" target="_blank" rel="noopener" className="text-[#E0A628] hover:underline">github</Link> - where i share my code when i feel like it
        </li>
        <li className="mb-2 text-sm leading-relaxed">
          <Link href="https://twitter.com/ashuwhy" target="_blank" rel="noopener" className="text-[#E0A628] hover:underline">twitter</Link> - occasional thoughts and updates (just made)
        </li>
        <li className="mb-2 text-sm leading-relaxed">
          <Link href="https://instagram.com/ashuwhy" target="_blank" rel="noopener" className="text-[#E0A628] hover:underline">instagram</Link> - i share my art sometimes
        </li>
        <li className="mb-2 text-sm leading-relaxed">
          <Link href="https://linkedin.com/in/ashuwhy" target="_blank" rel="noopener" className="text-[#E0A628] hover:underline">linkedin</Link> - professional connections
        </li>
      </ul>

      <h2 className="text-base mt-8 mb-3">music</h2>
      <ul className="list-disc ml-8 mt-4 mb-4">
        <li className="mb-2 text-sm leading-relaxed">
          <Link href="https://soundcloud.com/ashuwhy" target="_blank" rel="noopener" className="text-[#E0A628] hover:underline">soundcloud</Link> - where i will share my music
        </li>
      </ul>

      <h2 className="text-base mt-8 mb-3">contact</h2>
      <ul className="list-disc ml-8 mt-4 mb-4">
        <li className="mb-2 text-sm leading-relaxed">
          <Link href="mailto:ashutoshsharmawhy@gmail.com" className="text-[#E0A628] hover:underline">email</Link> - best way to reach me
        </li>
      </ul>
    </div>
  );
} 