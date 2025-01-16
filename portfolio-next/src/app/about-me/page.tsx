import Link from 'next/link';

export default function AboutMe() {
  return (
    <div className="content">
      <div className="last-edited text-sm text-[#888] font-semibold absolute top-4 left-1/2 -translate-x-1/2">
        3 January 2025 at 8:47 PM
      </div>
      
      <h1 className="text-2xl mb-4">about me</h1>
      <p className="text-sm mb-4 leading-relaxed">
        hey there! i&apos;m ashutosh, a computer science student at IIT Kharagpur (class of &apos;27) with a passion for building innovative solutions to real-world problems.
        <br />when i&apos;m not coding or attending classes, you&apos;ll find me diving into space exploration theories, working on music production
      </p>

      <h2 className="text-base mt-8 mb-3">currently</h2>
      <ul className="list-disc ml-8 mt-4 mb-4">
        <li className="mb-2 text-sm leading-relaxed">pursuing computer science & engineering at IIT Kharagpur</li>
        <li className="mb-2 text-sm leading-relaxed">
          developing <Link href="https://github.com/ashuwhy/lang.as" target="_blank" rel="noopener" className="text-[#E0A628] hover:underline">lang.as</Link> - my own programming language using a python wrapper (because why not?)
        </li>
        <li className="mb-2 text-sm leading-relaxed">working on &quot;mood classifier&quot; (name pending) - an application powered by essentia.js [private]</li>
        <li className="mb-2 text-sm leading-relaxed">experimenting with AI/ML technologies</li>
        <li className="mb-2 text-sm leading-relaxed">learning about space missions</li>
        <li className="mb-2 text-sm leading-relaxed">and making music!</li>
      </ul>

      <h2 className="text-base mt-8 mb-3">projects</h2>
      <ul className="list-disc ml-8 mt-4 mb-4">
        <li className="mb-2 text-sm leading-relaxed">
          created <Link href="https://github.com/ashuwhy/poplyrics-1k" target="_blank" rel="noopener" className="text-[#E0A628] hover:underline">poplyrics-1k</Link> - a custom dataset for training LLaMA 3.2-3b
        </li>
        <li className="mb-2 text-sm leading-relaxed">
          developed <Link href="https://github.com/ashuwhy/AbleSpleeter" target="_blank" rel="noopener" className="text-[#E0A628] hover:underline">ablespleeter</Link> - a max audio separation tool for ableton
        </li>
        <li className="mb-2 text-sm leading-relaxed">
          built <Link href="https://github.com/ashuwhy/4thcipher" target="_blank" rel="noopener" className="text-[#E0A628] hover:underline">4thcipher</Link> - result of my intrest in cryptography and encryption techniques
        </li>
        <li className="mb-2 text-sm leading-relaxed">
          and a lot more on my <Link href="https://github.com/ashuwhy/" target="_blank" rel="noopener" className="text-[#E0A628] hover:underline">github</Link>
        </li>
      </ul>

      <h2 className="text-base mt-8 mb-3">interests</h2>
      <ul className="list-disc ml-8 mt-4 mb-4">
        <li className="mb-2 text-sm leading-relaxed">programming & coding - executing my ideas and solutions into reality</li>
        <li className="mb-2 text-sm leading-relaxed">music production - creating mainly pop and electronic tracks, my taste range from classical to the latest mainstream</li>
        <li className="mb-2 text-sm leading-relaxed">ai/ml - learning about the latest in tech and implementing them in projects</li>
        <li className="mb-2 text-sm leading-relaxed">space exploration - learning about satellites, with Voyager 1 & 2 and their computers being my initial inspiration into space</li>
      </ul>

      <h2 className="text-base mt-8 mb-3">skills & tools</h2>
      <ul className="list-disc ml-8 mt-4 mb-4">
        <li className="mb-2 text-sm leading-relaxed">languages: python, java, javascript, c, c++, assembly (basic)</li>
        <li className="mb-2 text-sm leading-relaxed">technologies: react.js, next.js, django, flask, tensorflow, pytorch, essentia.js</li>
        <li className="mb-2 text-sm leading-relaxed">tools: git, linux, figma, docker, cloud platforms</li>
        <li className="mb-2 text-sm leading-relaxed">space tools: NASA&apos;s eyes, celestia, stellarium</li>
      </ul>
    </div>
  );
} 