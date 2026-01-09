import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Github, Cpu, Shield, Zap, BarChart3, Cloud, Globe, Database, FileText } from "lucide-react";
import { useMemo, useEffect } from "react";
import { useNavigationState } from "@/hooks/useNavigationState";
import { safeSessionStorage } from "@/lib/storage";

export default function IoTDetail() {
  const { showBackButton } = useNavigationState();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectData = useMemo(
    () => ({
      title: "Smart Factory IoT Dashboard",
      subtitle: "Real-Time Industrial IoT Monitoring & Analytics Platform",
      description:
        "A comprehensive IoT dashboard for smart manufacturing environments featuring real-time sensor data streaming, automated alert notifications, and device grouping capabilities. Built with modern web technologies and WebSocket for live updates.",
      stats: [
        { label: "Real-Time", value: "WebSocket", icon: Zap },
        { label: "Notifications", value: "Email/SMS", icon: Shield },
        { label: "Grouping", value: "Zones/Lines", icon: BarChart3 },
      ],
      problemStatement: "Manufacturing facilities require real-time visibility into equipment status, environmental conditions, and production metrics. Traditional systems lack live updates, flexible alerting, and the ability to organize devices by production zones.",
      requirements: [
        "Real-time sensor data streaming without manual refresh",
        "Automated email/SMS notifications when thresholds are exceeded",
        "Device grouping by zones and production lines",
        "Batch operations and grouped analytics for device management",
      ],
      solution: {
        architecture: [
          { title: "Frontend", desc: "React + TypeScript + Vite", icon: Cpu },
          { title: "Backend", desc: "Node.js + Express + TypeScript", icon: Cloud },
          { title: "Real-Time", desc: "WebSocket (ws package)", icon: Zap },
          { title: "Database", desc: "MySQL with Drizzle ORM", icon: Database },
          { title: "Notifications", desc: "Email/SMS alert system", icon: Shield },
          { title: "Styling", desc: "TailwindCSS + shadcn/ui", icon: BarChart3 },
        ],
        techStack: [
          { category: "Frontend", items: ["React 19", "TypeScript", "Vite", "TailwindCSS"] },
          { category: "Backend", items: ["Node.js", "Express", "TypeScript", "WebSocket"] },
          { category: "Database", items: ["MySQL", "Drizzle ORM"] },
          { category: "UI", items: ["shadcn/ui", "Framer Motion", "Recharts"] },
        ],
      },
      implementation: [
        {
          phase: "Core Dashboard",
          duration: "Weeks 1-2",
          description: "Build foundational dashboard with device management, sensor data visualization, and alert monitoring.",
        },
        {
          phase: "WebSocket Integration",
          duration: "Weeks 3-4",
          description: "Implement real-time WebSocket service for live sensor data streaming and automatic chart updates.",
        },
        {
          phase: "Notification System",
          duration: "Weeks 5-6",
          description: "Develop email/SMS notification service with threshold-based alerting and queue management.",
        },
        {
          phase: "Device Grouping",
          duration: "Weeks 7-8",
          description: "Add device grouping functionality for zones/production lines with batch operations and aggregated analytics.",
        },
      ],
      results: [
        "Real-time WebSocket updates for live sensor data",
        "Automated email/SMS alerts with threshold monitoring",
        "Device grouping with batch operations",
        "Enterprise-grade data security with encrypted communications",
        "99.9% uptime SLA with redundant architecture",
        "Seamless OTA updates for zero-downtime device firmware management",
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
              <img src={`${import.meta.env.BASE_URL}images/profile.jpg`} alt="Andrew Gotora" className="w-10 h-10 rounded-full border-2 border-orange-500 object-cover" />
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
                className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-orange-400 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Projects
              </a>
            </Link>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900 py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
                <Cpu className="w-3 h-3" /> IoT & Edge Computing
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">{projectData.title}</h1>
              <p className="text-xl font-medium text-slate-300 mb-8 leading-relaxed">{projectData.subtitle}</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/DruHustle/smart-factory-iot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-500 transition-all hover:scale-105">
                  <Github className="w-5 h-5" /> GitHub Repo
                </a>
                <a href="https://druhustle.github.io/smart-factory-iot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-orange-600 text-orange-300 font-bold rounded-xl hover:bg-orange-600/10 transition-all hover:scale-105">
                  <ExternalLink className="w-5 h-5" /> Live Demo
                </a>
                <Link href="/projects/smart-factory-iot/documentation">
                  <a className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all hover:scale-105 border border-slate-700">
                    <FileText className="w-5 h-5 text-orange-400" /> Project Documentation
                  </a>
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              {projectData.stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm flex items-center gap-6">
                  <stat.icon className="w-8 h-8 text-orange-400" />
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
              <span className="w-8 h-1 bg-orange-500 rounded-full"></span> Problem Statement
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">{projectData.problemStatement}</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-8 h-1 bg-orange-500 rounded-full"></span> Core Requirements
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {projectData.requirements.map((req, i) => (
                <div key={i} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  </div>
                  <p className="text-slate-300 text-sm font-medium">{req}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="bg-slate-800/40 rounded-3xl p-8 md:p-12 border border-slate-700/50">
          <h2 className="text-3xl font-bold mb-10 text-center">IoT Architecture</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {projectData.solution.architecture.map((item, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all group">
                <item.icon className="w-6 h-6 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
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
                  <div className="text-xs font-bold text-orange-400 uppercase mb-2">{phase.duration}</div>
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
                  <h3 className="text-xs font-bold uppercase tracking-widest text-orange-400">{stack.category}</h3>
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
        <section className="bg-gradient-to-br from-orange-700 to-orange-800 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-10 text-center">Business Impact & Results</h2>
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
