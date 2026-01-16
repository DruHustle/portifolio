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
        "An enterprise-grade supply chain platform designed for real-time visibility and intelligent automation. Built with .NET 8 and GraphQL, it supports multi-cloud environments via Azure Arc, ensuring high availability and robust performance across distributed systems.",
      stats: [
        { label: "Uptime", value: "99.9%", icon: Shield },
        { label: "API", value: "GraphQL", icon: Zap },
        { label: "Cost Reduction", value: "35%", icon: BarChart3 },
      ],
      problemStatement: "Organizations face complexity in managing supply chains across fragmented cloud environments. Legacy systems lack real-time visibility, flexible querying capabilities, and the ability to scale seamlessly across multiple cloud providers.",
      requirements: [
        "Multi-cloud support via Azure Arc integration",
        "Flexible data querying using HotChocolate GraphQL",
        "Real-time event streaming with SignalR",
        "Managed PostgreSQL and Redis via Aiven",
      ],
      solution: {
        architecture: [
          { title: "Identity", desc: "Microsoft Entra ID, JWT, OAuth 2.0", icon: Shield },
          { title: "Ingestion", desc: "REST APIs, GraphQL, SignalR", icon: Globe },
          { title: "Operations", desc: "Workflow automation, shipment tracking", icon: Server },
          { title: "Analytics", desc: "ML.NET predictions, real-time metrics", icon: BarChart3 },
          { title: "Integration", desc: "Third-party APIs, Microsoft Graph", icon: Zap },
          { title: "Reporting", desc: "PDF generation, custom dashboards", icon: Database },
          { title: "Notifications", desc: "Azure Logic Apps, email/SMS", icon: Zap },
        ],
        techStack: [
          { category: "Backend", items: [".NET 8", "ASP.NET Core", "GraphQL", "EF Core", "HotChocolate", "FluentValidation", "ML.NET", "SignalR", "Dapper", "Microsoft.IdentityModel.Tokens", "StackExchange.Redis"] },
          { category: "Infrastructure", items: ["Azure App Services", "Azure Functions", "Azure Arc", "Service Bus", "Azure Blob Storage", "Azure Logic Apps", "Azure Virtual Networks", "Azure CDN", "Azure Monitor", "Azure Key Vault", "Docker", "Kubernetes"] },
          { category: "Frontend", items: ["React", "Vite", "TypeScript", "TailwindCSS", "Apollo", "Recharts"] },
          { category: "Authentication", items: ["Microsoft Entra ID", "JWT", "BCrypt"] },
          { category: "DevOps", items: ["Azure DevOps", "GitHub Actions", "Azure Bicep/ARM Templates"] },
          { category: "Monitoring", items: ["Azure Monitor", "Application Insights"] },
        ],
          
        implementation: [
        {
          phase: "Foundation",
          duration: "Weeks 1-4 ",
          description: "Provision infrastructure with Azure Bicep/Terraform, set up CI/CD with GitHub Actions, deploy core microservices and data layer.",
        },
        {
          phase: "Core Services",
          duration: "Weeks 5-12",
          description: "Implement supply chain and operations services with DDD, integrate event-driven architecture using Azure Service Bus.",
        },
        {
          phase: "Optimization",
          duration: "Weeks 13-16",
          description: "Add analytics with ML.NET, optimize caching with Aiven Redis, implement monitoring with Azure Monitor.",
        },
        {
          phase: "Production",
          duration: "Weeks 17-20",
          description: "Deploy to production with Azure Arc for multi-cloud, harden security with Entra ID, establish RBAC and auditing.",
        },
      ],

      },
      results: [
        "99.9% system availability with automated failover",
        "Real-time tracking and automated alert generation",
        "Multi-layer data security with encryption at rest and in transit",
        "35% infrastructure cost reduction",
        "Deployment time reduced from weeks to hours"
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

      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 py-16 lg:py-24 border-b border-slate-800">
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6">
                <Server className="w-3 h-3" /> Enterprise Platform
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white">{projectData.title}</h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">{projectData.subtitle}</p>
              <div className="flex flex-wrap gap-4">
               {/* Possible future use of GitHub link
                <a href="https://github.com/DruHustle/imsop-app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-400 transition-all">
                  <Github className="w-5 h-5" /> Source Code
                </a>
                 */}  

                  <a href={
                      typeof window !== "undefined" 
                        ? window.location.hostname.includes("github.io")
                          ? "https://DruHustle.github.io/imsop-app/"
                          : window.location.hostname.includes("vercel.app")
                            ? "https://imsop-app.vercel.app/"
                            : window.location.origin // Fallback for localhost (e.g., http://localhost:3000)
                        : "#"
                    }
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-400 transition-all"
                  >
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </a>

                <Link href="/projects/imsop/documentation">
                  <a className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all border border-slate-700">
                    <FileText className="w-5 h-5 text-cyan-400" /> Documentation
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
        
            {/* Problem & Requirements */}  
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
      {/* System Architecture */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">System Architecture</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 overflow-hidden">
            <img 
              src={`${import.meta.env.BASE_URL}images/imsop_arch.png`} 
              alt="IMSOP Architecture" 
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Tech Stack */}
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
              {/* Project Results */}
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
        {/* Implementation Roadmap */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-3xl font-bold">Implementation Roadmap</h2>
          <div className="flex flex-col gap-6">
            {projectData.solution.implementation.map((phase, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-start gap-6 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                <div className="sm:w-[100px] text-xs font-bold text-cyan-400 uppercase">{phase.duration}</div>
                <div className="sm:w-[140px] text-xl font-bold text-white">{phase.phase}</div>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

      </main>

      <footer className="border-t border-slate-800 py-12 text-center">
        <p className="text-slate-500 text-sm">© 2026 Andrew Gotora. All rights reserved.</p>
      </footer>
    </div>
  );
}