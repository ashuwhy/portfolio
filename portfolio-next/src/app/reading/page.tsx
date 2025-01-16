export default function Reading() {
  return (
    <div className="content">
      <div className="last-edited text-sm text-[#888] font-semibold absolute top-4 left-1/2 -translate-x-1/2">
        2 December 2024 at 4:15 PM
      </div>
      
      <h1 className="text-2xl mb-4">reading</h1>
      <p className="text-sm mb-4 leading-relaxed">
        books i&apos;m currently reading and some of my favorites.
      </p>

      <h2 className="text-base mt-8 mb-3">currently reading</h2>
      <ul className="list-disc ml-8 mt-4 mb-4">
        <li className="mb-2 text-sm leading-relaxed">The Pragmatic Programmer by David Thomas & Andrew Hunt</li>
        <li className="mb-2 text-sm leading-relaxed">Clean Code by Robert C. Martin</li>
        <li className="mb-2 text-sm leading-relaxed">Deep Learning with Python by François Chollet</li>
      </ul>

      <h2 className="text-base mt-8 mb-3">technical favorites</h2>
      <ul className="list-disc ml-8 mt-4 mb-4">
        <li className="mb-2 text-sm leading-relaxed">Code: The Hidden Language of Computer Hardware and Software by Charles Petzold</li>
        <li className="mb-2 text-sm leading-relaxed">Design Patterns: Elements of Reusable Object-Oriented Software by Gang of Four</li>
        <li className="mb-2 text-sm leading-relaxed">Introduction to Algorithms by CLRS</li>
      </ul>

      <h2 className="text-base mt-8 mb-3">non-technical favorites</h2>
      <ul className="list-disc ml-8 mt-4 mb-4">
        <li className="mb-2 text-sm leading-relaxed">Cosmos by Carl Sagan</li>
        <li className="mb-2 text-sm leading-relaxed">A Brief History of Time by Stephen Hawking</li>
        <li className="mb-2 text-sm leading-relaxed">The Hitchhiker&apos;s Guide to the Galaxy by Douglas Adams</li>
      </ul>

      <h2 className="text-base mt-8 mb-3">reading list</h2>
      <ul className="list-disc ml-8 mt-4 mb-4">
        <li className="mb-2 text-sm leading-relaxed">Designing Data-Intensive Applications by Martin Kleppmann</li>
        <li className="mb-2 text-sm leading-relaxed">System Design Interview by Alex Xu</li>
        <li className="mb-2 text-sm leading-relaxed">The Phoenix Project by Gene Kim</li>
      </ul>
    </div>
  );
} 