export default function TechStack() {
  return (
    <div className="content">
      <div className="last-edited text-sm text-[#888] font-semibold absolute top-4 left-1/2 -translate-x-1/2">
        12 December 2024 at 2:30 PM
      </div>
      
      <h1 className="text-2xl mb-4">tech stack</h1>
      <p className="text-sm mb-4 leading-relaxed">
        a detailed look at the technologies and tools i use for development.
      </p>

      <h2 className="text-base mt-8 mb-3">languages</h2>
      <ul className="list-disc ml-8 mt-4 mb-4">
        <li className="mb-2 text-sm leading-relaxed">python - primary language for ML/AI and backend development</li>
        <li className="mb-2 text-sm leading-relaxed">java/kotlin - android development and enterprise applications</li>
        <li className="mb-2 text-sm leading-relaxed">javascript/typescript - web development and node.js applications</li>
        <li className="mb-2 text-sm leading-relaxed">c/c++ - system programming and performance-critical applications</li>
        <li className="mb-2 text-sm leading-relaxed">assembly - basics for understanding how the operating systems, bootloaders, kernels etc. works</li>
      </ul>

      <h2 className="text-base mt-8 mb-3">web development</h2>
      <ul className="list-disc ml-8 mt-4 mb-4">
        <li className="mb-2 text-sm leading-relaxed">frontend: react.js, next.js, tailwind css</li>
        <li className="mb-2 text-sm leading-relaxed">backend: django, flask, node.js, express</li>
        <li className="mb-2 text-sm leading-relaxed">databases: postgresql, mongodb, redis</li>
        <li className="mb-2 text-sm leading-relaxed">hosting: vercel, netlify, aws, digital ocean</li>
      </ul>

      <h2 className="text-base mt-8 mb-3">machine learning</h2>
      <ul className="list-disc ml-8 mt-4 mb-4">
        <li className="mb-2 text-sm leading-relaxed">frameworks: tensorflow, pytorch, scikit-learn</li>
        <li className="mb-2 text-sm leading-relaxed">data processing: pandas, numpy, opencv</li>
        <li className="mb-2 text-sm leading-relaxed">visualization: matplotlib, seaborn, plotly</li>
        <li className="mb-2 text-sm leading-relaxed">deployment: docker, kubernetes</li>
      </ul>

      <h2 className="text-base mt-8 mb-3">tools & environment</h2>
      <ul className="list-disc ml-8 mt-4 mb-4">
        <li className="mb-2 text-sm leading-relaxed">editor: neovim, vs code, jetbrains ides</li>
        <li className="mb-2 text-sm leading-relaxed">terminal: alacritty with oh-my-zsh</li>
        <li className="mb-2 text-sm leading-relaxed">os: macos (primarily), arch & ubuntu (secondary) and windows (secondary)</li>
        <li className="mb-2 text-sm leading-relaxed">version control: git, github</li>
      </ul>
    </div>
  );
} 