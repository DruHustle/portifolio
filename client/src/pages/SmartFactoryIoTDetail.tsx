import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Github, Cpu, Shield, Zap, BarChart3, Cloud, Database, FileText, Bell } from "lucide-react";
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
        { label: "Notifications", value: "Email/SMS", icon: Bell },
      ],
      problemStatement: "Manufacturing facilities require real-time visibility into equipment status and production metrics. Traditional systems lack live updates, secure device management, and the scalability needed for modern industrial environments.",
      requirements: [
        "Real-time sensor data streaming via SignalR",
        "Automated email/SMS notifications when thresholds are exceeded",
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
          { category: "Frontend", items: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "React Context"] },
          { category: "Backend", items: [".NET 8", "ASP.NET Core", "Entity Framework Core", "SignalR", "Domain-Driven Design (DDD)", "OpenAPI / Swagger"] },
          { category: "Infrastructure", items: ["Azure IoT Hub", "Kubernetes (AKS)", "Docker", "Portainer", "Azure API Management"] },
          { category: "Data", items: ["Aiven MySQL", "Azure Redis Cache", "Azure Blob Storage"] },
          { category: "Cloud & Services", items: ["Azure Functions", "Azure Logic Apps", "Microsoft Entra ID", "Azure Monitor", "Application Insights"] },
          { category: "DevOps & CI/CD", items: ["Terraform", "Azure Bicep", "GitHub Actions", "Helm", "Docker Compose"] },     
        ],
        implementation: [
          {
            phase: "Foundation",
            duration: "Weeks 1–4",
            description: "Provision cloud and data infrastructure using Azure Bicep and Terraform (Azure resources + Aiven MySQL), establish CI/CD pipelines with GitHub Actions, containerize backend services with Docker, and deploy base workloads to AKS.",
          },
          {
            phase: "Core Platform",
            duration: "Weeks 5–10",
            description: "Develop core .NET 8 microservices using Domain-Driven Design (DDD), implement device management, authentication with Microsoft Entra ID, REST APIs with OpenAPI/Swagger, and integrate real-time communication using SignalR.",
          },
          {
            phase: "Data Processing",
            duration: "Weeks 11–14",
            description: "Integrate Azure IoT Hub for telemetry ingestion, implement Azure Functions for data aggregation and async processing, configure Azure Redis Cache for high-performance reads, and persist operational data in Aiven MySQL via EF Core.",
          },
          {
            phase: "Optimization",
            duration: "Weeks 15–18",
            description: "Introduce analytics engine for OEE calculations in C#, optimize query performance and caching, enable monitoring and alerting with Azure Monitor and Application Insights, and harden security with RBAC, Managed Identities, and policy-driven access.",
          },
          {
            phase: "Production",
            duration: "Weeks 19–20",
            description: "Finalize deployment on AKS with Helm manifests, configure Azure API Management for versioning and rate limiting, validate OTA workflows via IoT Hub and Blob Storage, and complete production hardening with auditing, backups, and disaster recovery.",
          },
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
                {/* possible future use of GitHub link
                <a href="https://github.com/DruHustle/smart-factory-iot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-500 transition-all hover:scale-105">
                  <Github className="w-5 h-5" /> GitHub Repo
                </a>
                  */}
                  <a 
                    href={ typeof window !== "undefined" && window.location.hostname.includes("github.io") ? "https://DruHustle.github.io/smart-factory-iot/"  : "https://smart-factory-iot-app.vercel.app/"}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-400 transition-all"
                  >
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </a>

                <Link href="/projects/smart-factory-iot/documentation">
                  <a className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all hover:scale-105 border border-slate-700">
                    <FileText className="w-5 h-5 text-orange-400" /> Documentation 
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
          <h2 className="text-3xl font-bold mb-10 text-center">System Architecture</h2>
          <div className="overflow-hidden">
            <img 
              src={`${import.meta.env.BASE_URL}images/smart_factory_arch.png`} 
              alt="Smart Factory IoT Architecture" 
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </section>

        {/* Tech Stack & Key Results */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold">Tech Stack</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {projectData.solution.techStack.map((stack, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-3">{stack.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item, j) => (
                      <span key={j} className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-700/50 text-xs font-bold text-slate-300">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Key Results</h2>
            <div className="space-y-6">
              {projectData.results.map((result, i) => (
                <div key={i} className="flex gap-5 p-6 bg-white/10 rounded-2xl border border-white/20">
                  <Zap className="w-6 h-6 text-white shrink-0" />
                  <p className="text-lg font-bold leading-tight">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Implementation Roadmap */}
        <div className="lg:col-span-2 space-y-8">
        <h2 className="text-3xl font-bold">Implementation Roadmap</h2>
        <div className="flex flex-col gap-6">
          {projectData.solution.implementation.map((phase, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-start gap-6 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <div className="sm:w-[100px] text-xs font-bold text-orange-400 uppercase">{phase.duration}</div>
              <div className="sm:w-[140px] text-xl font-bold text-white">{phase.phase}</div>
              <p className="text-sm text-slate-400 leading-relaxed flex-1">{phase.description}</p>
            </div>
          ))}
            </div>
          </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 text-center">
        <p className="text-slate-500 font-medium">© 2026 Andrew Gotora. All rights reserved.</p>
      </footer>
    </div>
  );
}