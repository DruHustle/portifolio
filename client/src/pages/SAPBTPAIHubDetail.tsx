import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Github, BookOpen, Code2, Layers, Award, Zap, Smartphone } from "lucide-react";
import { useMemo, useEffect } from "react";
import { useNavigationState } from "@/hooks/useNavigationState";
import { safeSessionStorage } from "@/lib/storage";

export default function SAPBTPAIHubDetail() {
  const { showBackButton } = useNavigationState();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectData = useMemo(
    () => ({
      title: "SAP BTP AI Learning Hub",
      subtitle: "Enterprise AI Education Platform",
      description:
        "An interactive, comprehensive learning platform designed for mastering AI business solutions on SAP Business Technology Platform (BTP). The platform provides hands-on tutorials, best practices, and resources for developers, architects, and business professionals.",
      stats: [
        { label: "Tutorials", value: "6+", icon: BookOpen },
        { label: "Learning Paths", value: "3", icon: Layers },
        { label: "Interactive Tools", value: "4+", icon: Code2 },
      ],
      problemStatement: "Organizations face significant challenges in adopting AI solutions on SAP BTP due to a lack of comprehensive, hands-on learning resources and a steep learning curve for services like SAP AI Core and Generative AI Hub.",
      requirements: [
        "Provide comprehensive tutorials for all skill levels",
        "Create interactive playground for LLM experimentation",
        "Enable hands-on learning with code and diagrams",
        "Deliver production-ready, responsive user interface",
      ],
      solution: {
        architecture: [
          { title: "Frontend", desc: "React 19 with TypeScript", icon: Code2 },
          { title: "Styling", desc: "Tailwind CSS 4", icon: Layers },
          { title: "UI Components", desc: "shadcn/ui library", icon: Smartphone },
          { title: "Animations", desc: "Framer Motion", icon: Zap },
          { title: "Code", desc: "Syntax highlighting", icon: Code2 },
          { title: "Diagrams", desc: "Mermaid integration", icon: Layers },
          { title: "Routing", desc: "Wouter for navigation", icon: Smartphone },
        ],
        techStack: [
          { category: "Frontend", items: ["React 19", "TypeScript", "Tailwind CSS 4", "shadcn/ui"] },
          { category: "Tooling", items: ["Vite", "pnpm", "ESLint", "Prettier"] },
          { category: "Libraries", items: ["Wouter", "Framer Motion", "Mermaid"] },
          { category: "Deployment", items: ["GitHub Pages", "GitHub Actions"] },
        ],
      },
      implementation: [
        {
          phase: "Foundation",
          duration: "Weeks 1-2",
          description: "Establish project structure, design system, and component library using React and Tailwind.",
        },
        {
          phase: "Tutorial System",
          duration: "Weeks 3-5",
          description: "Develop tutorial content structure and rendering system with markdown support.",
        },
        {
          phase: "Interactive Features",
          duration: "Weeks 6-7",
          description: "Build interactive playground and architecture builder with Mermaid integration.",
        },
        {
          phase: "Polish",
          duration: "Weeks 8-9",
          description: "Optimize performance, add animations, and refine UX for all device sizes.",
        },
      ],
      results: [
        "6+ comprehensive tutorials delivered",
        "98+ Lighthouse performance score",
        "Interactive playground and quiz system",
        "Fully responsive mobile-first design",
      ],
    }),
    []
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20 max-w-7xl mx-auto w-full">
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={`${import.meta.env.BASE_URL}images/profile.jpg`} alt="Andrew Gotora" className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover" />
              <span className="text-lg font-bold tracking-tight hidden sm:inline">Andrew Gotora</span>
            </a>
          </Link>
          {showBackButton && (
            <Link href="/">
              <a 
                onClick={() => {
                  // Store intent to scroll to projects
                  safeSessionStorage.setItem('scrollToProjects', 'true');
                }}
                className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Projects
              </a>
            </Link>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                <BookOpen className="w-3 h-3" /> AI Education Platform
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">{projectData.title}</h1>
              <p className="text-xl font-medium text-slate-300 mb-8 leading-relaxed">{projectData.subtitle}</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/DruHustle/sap-btp-ai-hub" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-400 transition-all hover:scale-105">
                  <Github className="w-5 h-5" /> Source Code
                </a>
                <a href="https://DruHustle.github.io/sap-btp-ai-hub/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-400 font-bold rounded-xl hover:bg-blue-500/10 transition-all hover:scale-105">
                  <ExternalLink className="w-5 h-5" /> Live Demo
                </a>
              </div>
            </div>
            <div className="grid gap-4">
              {projectData.stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm flex items-center gap-6">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                  <div>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Problem & Requirements */}
        <section className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-500 rounded-full"></span> Problem Statement
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">{projectData.problemStatement}</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-500 rounded-full"></span> Core Requirements
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {projectData.requirements.map((req, i) => (
                <div key={i} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  </div>
                  <p className="text-slate-300 text-sm font-medium">{req}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="bg-slate-800/40 rounded-3xl p-8 md:p-12 border border-slate-700/50">
          <h2 className="text-3xl font-bold mb-10 text-center">Platform Architecture</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {projectData.solution.architecture.map((item, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all group">
                <item.icon className="w-6 h-6 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-xs font-bold text-white uppercase tracking-tighter">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap & Tech Stack */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold">Implementation Roadmap</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {projectData.implementation.map((phase, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                  <div className="text-xs font-bold text-blue-400 uppercase mb-2">{phase.duration}</div>
                  <h4 className="text-xl font-bold text-white mb-3">{phase.phase}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Tech Stack</h2>
            <div className="space-y-6">
              {projectData.solution.techStack.map((stack, i) => (
                <div key={i} className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400">{stack.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item, j) => (
                      <span key={j} className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-xs font-bold text-slate-300">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-10 text-center">Platform Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projectData.results.map((result, i) => (
              <div key={i} className="flex gap-5 p-6 bg-white/10 rounded-2xl border border-white/20">
                <Zap className="w-6 h-6 text-white shrink-0" />
                <p className="text-lg font-bold leading-tight">{result}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 text-center">
        <p className="text-slate-500 font-medium">© 2026 Andrew Gotora. All rights reserved.</p>
      </footer>
    </div>
  );
}
