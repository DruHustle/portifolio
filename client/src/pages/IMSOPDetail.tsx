import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Github, Server, Shield, Zap, BarChart3, Database, Globe, FileText } from "lucide-react";
import { useMemo, useEffect } from "react";
import { useNavigationState } from "@/hooks/useNavigationState";
import { safeSessionStorage } from "@/lib/storage";
import { analyticsService } from "@/services/analyticsService";

export default function IMSOPDetail() {
  const { showBackButton } = useNavigationState();
  
  useEffect(() => {
    analyticsService.trackPageVisit("imsop-detail");
    window.scrollTo(0, 0);
  }, []);

  const projectData = useMemo(
    () => ({
      title: "IMSOP",
      subtitle: "Intelligent Multi-Cloud Supply Chain & Operations Platform",
      description:
        "An enterprise-grade, cloud-native platform designed for real-time supply chain visibility, predictive analytics, and intelligent automation. Built with domain-driven design principles across seven bounded contexts, serving 10M+ requests per day with 99.99% uptime SLA.",
      stats: [
        { label: "Daily Requests", value: "10M+", icon: Zap },
        { label: "Uptime SLA", value: "99.99%", icon: Shield },
        { label: "Cost Reduction", value: "35%", icon: BarChart3 },
      ],
      problemStatement: "The organization faced critical challenges in managing legacy monolithic systems that couldn't scale with growing demand. Peak traffic loads exceeding 5M requests per day caused frequent outages and high operational costs.",
      requirements: [
        "Handle 10M+ requests per day with sub-100ms latency",
        "Achieve 99.99% uptime SLA across multiple regions",
        "Reduce infrastructure costs by 30-40%",
        "Support multi-cloud strategy (Azure + AWS)",
      ],
      solution: {
        architecture: [
          { title: "Identity", desc: "OAuth 2.0, RBAC, managed identities", icon: Shield },
          { title: "Ingestion", desc: "REST APIs, Kafka streams, WebSockets", icon: Globe },
          { title: "Operations", desc: "Shipment tracking, state machines", icon: Server },
          { title: "Analytics", desc: "Data processing, ML model inference", icon: BarChart3 },
          { title: "Prediction", desc: "Delay prediction, demand forecasting", icon: Zap },
          { title: "AI Assistant", desc: "Natural language chatbot", icon: Zap },
          { title: "Reporting", desc: "GraphQL API, real-time dashboards", icon: Database },
        ],
        techStack: [
          { category: "Backend", items: [".NET Core 8", "Python 3.11", "FastAPI", "GraphQL"] },
          { category: "Data", items: ["PostgreSQL", "Azure SQL", "MongoDB", "Redis"] },
          { category: "Infrastructure", items: ["Kubernetes (AKS)", "Docker", "Terraform", "Azure Bicep"] },
          { category: "DevOps", items: ["Azure DevOps", "GitHub Actions", "ELK Stack", "Prometheus"] },
        ],
      },
      implementation: [
        {
          phase: "Foundation",
          duration: "Weeks 1-4",
          description: "Set up cloud infrastructure, establish CI/CD pipelines, and deploy initial microservices framework.",
        },
        {
          phase: "Core Services",
          duration: "Weeks 5-12",
          description: "Develop and deploy core business services with event-driven communication using Azure Service Bus.",
        },
        {
          phase: "Optimization",
          duration: "Weeks 13-16",
          description: "Integrate all services, optimize performance, and implement distributed tracing with App Insights.",
        },
        {
          phase: "Production",
          duration: "Weeks 17-20",
          description: "Deploy to production, implement security hardening, and establish operational procedures.",
        },
      ],
      results: [
        "10M+ requests per day with sub-100ms latency",
        "99.99% uptime SLA across all services",
        "Multi-layer data security with encryption at rest and in transit",
        "35% infrastructure cost reduction",
        "Minimal downtime through redundant multi-region deployment",
        "Deployment time reduced from weeks to hours",
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
              <img src={`${import.meta.env.BASE_URL}images/profile.jpg`} alt="Andrew Gotora" className="w-10 h-10 rounded-full border-2 border-cyan-500 object-cover" />
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
                className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6">
                <Zap className="w-3 h-3" /> Enterprise Platform
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">{projectData.title}</h1>
              <p className="text-xl font-medium text-slate-300 mb-8 leading-relaxed">{projectData.subtitle}</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/DruHustle/imsop-app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-400 transition-all hover:scale-105">
                  <Github className="w-5 h-5" /> Source Code
                </a>
                <a href="https://DruHustle.github.io/imsop-app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500/10 transition-all hover:scale-105">
                  <ExternalLink className="w-5 h-5" /> Live Demo
                </a>
                <Link href="/projects/imsop/documentation">
                  <a className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all hover:scale-105 border border-slate-700">
                    <FileText className="w-5 h-5 text-cyan-400" /> Project Documentation
                  </a>
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              {projectData.stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm flex items-center gap-6">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
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
              <span className="w-8 h-1 bg-cyan-500 rounded-full"></span> Problem Statement
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">{projectData.problemStatement}</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-8 h-1 bg-cyan-500 rounded-full"></span> Core Requirements
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {projectData.requirements.map((req, i) => (
                <div key={i} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                  </div>
                  <p className="text-slate-300 text-sm font-medium">{req}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="bg-slate-800/40 rounded-3xl p-8 md:p-12 border border-slate-700/50">
          <h2 className="text-3xl font-bold mb-10 text-center">System Architecture</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {projectData.solution.architecture.map((item, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all group">
                <item.icon className="w-6 h-6 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
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
                  <div className="text-xs font-bold text-cyan-400 uppercase mb-2">{phase.duration}</div>
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
                  <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400">{stack.category}</h3>
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
        <section className="bg-gradient-to-br from-cyan-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
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
