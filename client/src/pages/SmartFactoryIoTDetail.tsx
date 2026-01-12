import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Github, Cpu, Shield, Zap, BarChart3, Cloud, Database, FileText } from "lucide-react";
import { useMemo, useEffect } from "react";
import { useNavigationState } from "@/hooks/useNavigationState";
import { safeSessionStorage } from "@/lib/storage";
import { analyticsService } from "@/services/analyticsService";

export default function SmartFactoryIoTDetail() {
  const { showBackButton } = useNavigationState();
  
  useEffect(() => {
    analyticsService.trackPageVisit("smart-factory-iot-detail");
    window.scrollTo(0, 0);
  }, []);

  const projectData = useMemo(
    () => ({
      title: "Smart Factory IoT",
      subtitle: "Real-Time Industrial Monitoring & Control Platform",
      description:
        "A comprehensive industrial IoT platform featuring real-time dashboards, .NET microservices, and Azure IoT Hub integration. The architecture emphasizes robustness through containerization, security via Microsoft Entra ID, and high performance with distributed caching.",
      stats: [
        { label: "Real-Time", value: "SignalR", icon: Zap },
        { label: "Security", value: "Entra ID", icon: Shield },
        { label: "Orchestration", value: "AKS", icon: BarChart3 },
      ],
      problemStatement: "Manufacturing facilities require real-time visibility into equipment status and production metrics. Traditional systems lack live updates, secure device management, and the scalability needed for modern industrial environments.",
      requirements: [
        "Real-time sensor data streaming via SignalR",
        "Secure device connectivity through Azure IoT Hub",
        "Microservices orchestration using Kubernetes (AKS)",
        "Managed data storage with Aiven MySQL",
      ],
      solution: {
        architecture: [
          { title: "Frontend", desc: "React + Vite", icon: Cpu },
          { title: "Backend", desc: ".NET 8 Core", icon: Cloud },
          { title: "IoT Hub", desc: "Azure IoT Hub", icon: Zap },
          { title: "Database", desc: "Aiven MySQL", icon: Database },
          { title: "Orchestration", desc: "Kubernetes (AKS)", icon: BarChart3 },
          { title: "Security", desc: "Microsoft Entra ID", icon: Shield },
        ],
        techStack: [
          { category: "Frontend", items: ["React 19", "TypeScript", "Vite", "TailwindCSS"] },
          { category: "Backend", items: [".NET 8", "ASP.NET Core", "SignalR", "EF Core"] },
          { category: "Infrastructure", items: ["Azure IoT Hub", "AKS", "Docker", "Portainer"] },
          { category: "Data", items: ["Aiven MySQL", "Azure Redis Cache"] },
        ],
      },
      results: [
        "Real-time telemetry streaming with <100ms latency",
        "Secure RBAC integration with Microsoft Entra ID",
        "99.9% uptime SLA with redundant AKS deployment",
        "Automated OTA firmware updates via IoT Hub",
      ],
    }),
    []
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 max-w-7xl mx-auto w-full">
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={`${import.meta.env.BASE_URL}images/profile.jpg`} alt="Andrew Gotora" className="w-10 h-10 rounded-full border-2 border-cyan-500 object-cover" />
              <span className="text-lg font-bold tracking-tight hidden sm:inline">Andrew Gotora</span>
            </a>
          </Link>
          {showBackButton && (
            <Link href="/">
              <a 
                onClick={() => safeSessionStorage.setItem('scrollToProjects', 'true')}
                className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Projects
              </a>
            </Link>
          )}
        </div>
      </nav>

      <section className="relative bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950 py-16 lg:py-24 border-b border-slate-800">
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6">
                <Cpu className="w-3 h-3" /> IoT & Edge Computing
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white">{projectData.title}</h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">{projectData.subtitle}</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/DruHustle/smart-factory-iot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white font-bold rounded-xl hover:bg-cyan-500 transition-all">
                  <Github className="w-5 h-5" /> GitHub Repo
                </a>
                <Link href="/projects/smart-factory-iot/documentation">
                  <a className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all border border-slate-700">
                    <FileText className="w-5 h-5 text-cyan-400" /> Documentation v2
                  </a>
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              {projectData.stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-6">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        <section className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Problem Statement</h2>
            <p className="text-slate-400 text-lg leading-relaxed">{projectData.problemStatement}</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Core Requirements</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {projectData.requirements.map((req, i) => (
                <div key={i} className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex gap-3">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-400 text-sm">{req}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-8">System Architecture</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 overflow-hidden">
            <img 
              src={`${import.meta.env.BASE_URL}images/smart_factory_arch.png`} 
              alt="Smart Factory IoT Architecture" 
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {projectData.solution.techStack.map((stack, i) => (
                <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">{stack.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item, j) => (
                      <span key={j} className="px-3 py-1 bg-slate-800 rounded-lg text-xs text-slate-300">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white">Key Results</h2>
            <div className="space-y-4">
              {projectData.results.map((result, i) => (
                <div key={i} className="flex gap-4 p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-xl">
                  <Zap className="w-5 h-5 text-cyan-400 shrink-0" />
                  <p className="text-sm font-medium text-slate-300">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800 py-12 text-center">
        <p className="text-slate-500 text-sm">© 2026 Andrew Gotora. All rights reserved.</p>
      </footer>
    </div>
  );
}
