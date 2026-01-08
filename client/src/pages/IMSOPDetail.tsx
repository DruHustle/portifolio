import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Github, Server, Shield, Zap, BarChart3, Database, Globe } from "lucide-react";
import { useMemo, useEffect } from "react";

export default function IMSOPDetail() {
  // Scroll to top when component mounts
  useEffect(() => {
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
      problemStatement: `The organization faced critical challenges in managing legacy monolithic systems that couldn't scale with growing demand. The existing infrastructure struggled with:

• Inability to handle peak traffic loads exceeding 5M requests per day
• High operational costs due to inefficient resource utilization
• Slow deployment cycles (2-3 weeks per release)
• Limited disaster recovery capabilities across regions
• Vendor lock-in concerns with single-cloud dependency`,
      requirements: [
        "Handle 10M+ requests per day with sub-100ms latency",
        "Achieve 99.99% uptime SLA across multiple regions",
        "Reduce infrastructure costs by 30-40%",
        "Enable independent service scaling and deployment",
        "Support multi-cloud strategy (Azure + AWS)",
        "Implement zero-trust security architecture",
        "Automate deployment and infrastructure provisioning",
      ],
      solution: {
        architecture: [
          { title: "Identity & Access Management", desc: "OAuth 2.0, RBAC, managed identities", icon: Shield },
          { title: "Ingestion & Integration", desc: "REST APIs, Kafka streams, WebSocket endpoints", icon: Globe },
          { title: "Operations Management", desc: "Shipment tracking, state machines, event-driven workflows", icon: Server },
          { title: "Analytics & Intelligence", desc: "Data processing, ML model inference, batch analytics", icon: BarChart3 },
          { title: "Prediction & Anomaly Detection", desc: "Delay prediction, demand forecasting, outlier detection", icon: Zap },
          { title: "Conversational AI", desc: "Natural language chatbot with operational data access", icon: Zap },
          { title: "Visualization & Reporting", desc: "GraphQL API, real-time dashboards, data export", icon: Database },
        ],
        techStack: [
          { category: "Backend", items: [".NET Core 8", "Python 3.11", "FastAPI", "GraphQL"] },
          { category: "Data", items: ["PostgreSQL", "Azure SQL", "MongoDB", "Cosmos DB", "Redis"] },
          { category: "Infrastructure", items: ["Kubernetes (AKS)", "Docker", "Terraform", "Azure Bicep"] },
          { category: "DevOps", items: ["Azure DevOps", "GitHub Actions", "ELK Stack", "Prometheus"] },
        ],
      },
      implementation: [
        {
          phase: "Phase 1: Foundation",
          duration: "Weeks 1-4",
          description: "Set up cloud infrastructure, establish CI/CD pipelines, and deploy initial microservices framework",
          details: "Created Azure resource groups, configured networking with VNets and security groups, set up GitHub Actions for automated deployments, and deployed Kubernetes clusters with proper RBAC configuration.",
        },
        {
          phase: "Phase 2: Core Services",
          duration: "Weeks 5-12",
          description: "Develop and deploy core business services with event-driven communication",
          details: "Implemented User, Order, and Inventory services using .NET Core with async/await patterns. Integrated Azure Service Bus for reliable message delivery and implemented event sourcing for audit trails.",
        },
        {
          phase: "Phase 3: Integration & Optimization",
          duration: "Weeks 13-16",
          description: "Integrate all services, optimize performance, and implement monitoring",
          details: "Set up API Gateway with rate limiting, implemented distributed tracing with Application Insights, optimized database queries, and configured auto-scaling policies based on metrics.",
        },
        {
          phase: "Phase 4: Production & Hardening",
          duration: "Weeks 17-20",
          description: "Deploy to production, implement security hardening, and establish operational procedures",
          details: "Conducted security audits, implemented zero-trust policies, set up disaster recovery procedures, trained operations team, and established SLA monitoring dashboards.",
        },
      ],
      results: [
        "Achieved 10M+ requests per day handling with sub-100ms average latency",
        "Maintained 99.99% uptime SLA across all services",
        "Reduced infrastructure costs by 35% through optimized resource allocation",
        "Decreased deployment time from 2-3 weeks to 2-3 hours",
        "Enabled independent scaling of services based on demand",
        "Improved developer productivity with clear service boundaries",
      ],
    }),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20 max-w-7xl mx-auto w-full">
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img
                src="/profile.jpg"
                alt="Andrew Gotora"
                className="w-10 h-10 rounded-full border-2 border-cyan-500 object-cover"
              />
              <span className="text-lg font-bold tracking-tight hidden sm:inline text-white">
                Andrew Gotora
              </span>
            </a>
          </Link>
          <Link href="/#projects">
            <a className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </a>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500 via-transparent to-transparent"></div>
          <div className="grid grid-cols-8 h-full w-full">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/10"></div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Zap className="w-3 h-3" />
              Enterprise Platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight break-words">
              {projectData.title}
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-slate-300 mb-8 leading-relaxed">
              {projectData.subtitle}
            </p>
            <p className="text-lg text-slate-400 leading-relaxed text-justify max-w-2xl">
              {projectData.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            {projectData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 hover:border-cyan-500/30 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        
        {/* Problem & Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
              <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
              Problem Statement
            </h2>
            <div className="prose prose-invert max-w-none text-slate-300 text-lg leading-relaxed whitespace-pre-wrap">
              {projectData.problemStatement}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
              <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
              Core Requirements
            </h2>
            <div className="grid gap-4">
              {projectData.requirements.map((req, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-5 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 hover:bg-slate-800/80 transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </div>
                  <p className="text-slate-300 font-medium">{req}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Solution Architecture - Updated with lighter blue gradient */}
        <section className="bg-gradient-to-br from-cyan-600 to-teal-600 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">System Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectData.solution.architecture.map((item, idx) => (
                <div key={idx} className="flex gap-5 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Technology Ecosystem</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectData.solution.techStack.map((stack, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-400">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm font-medium text-slate-300 hover:border-cyan-500/30 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Timeline */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Implementation Roadmap</h2>
          <div className="space-y-8">
            {projectData.implementation.map((phase, idx) => (
              <div
                key={idx}
                className="group relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-5 gap-8 items-start">
                  <div className="md:col-span-1 mb-4 md:mb-0">
                    <div className="text-sm font-bold text-cyan-400 uppercase tracking-tighter">{phase.duration}</div>
                    <div className="text-xl font-extrabold text-white">{phase.phase}</div>
                  </div>
                  <div className="md:col-span-4 p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 group-hover:border-cyan-500/30 group-hover:bg-slate-800/80 transition-all duration-500">
                    <h4 className="text-lg font-bold mb-3 text-white">{phase.description}</h4>
                    <p className="text-slate-400 leading-relaxed">{phase.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Results & Impact */}
        <section className="bg-gradient-to-br from-cyan-600 to-teal-600 rounded-[2.5rem] p-8 md:p-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Business Impact & Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectData.results.map((result, idx) => (
              <div
                key={idx}
                className="flex gap-5 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg font-medium leading-relaxed">{result}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="text-center py-10">
          <h2 className="text-3xl font-bold mb-8 text-white">Explore the Project</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://github.com/andrewgotora/imsop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 text-white font-bold rounded-2xl hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-slate-900/20 border border-slate-700/50"
            >
              <Github className="w-5 h-5" />
              Source Code
            </a>
            <a
              href="https://andrewgotora.github.io/imsop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyan-600 text-white font-bold rounded-2xl hover:bg-cyan-500 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-cyan-600/20"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demonstration
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-slate-700/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 font-medium">
            © 2026 Andrew Gotora. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
