import { Link } from "wouter";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  Code2,
  Cloud,
  Zap,
  Shield,
  Database,
  GitBranch,
  Award,
  Target,
  TrendingUp,
} from "lucide-react";
import { useMemo, useEffect } from "react";
import { NavigationService } from "@/services/navigationService";
import { analyticsService } from "@/services/analyticsService";
import { safeSessionStorage } from "@/lib/storage";

export default function Home() {
  useEffect(() => {
    analyticsService.trackPageVisit("home");
  }, []);

  const principles = useMemo(
    () => [
      {
        icon: Code2,
        title: "Microservices Architecture",
        desc: "Independent, scalable services with clear boundaries",
      },
      {
        icon: Cloud,
        title: "Multi-Cloud Strategy",
        desc: "Azure + AWS for resilience and cost optimization",
      },
      {
        icon: Zap,
        title: "Event-Driven Communication",
        desc: "Real-time data processing with SignalR and Kafka",
      },
      {
        icon: Database,
        title: "Domain-Driven Design",
        desc: "Bounded contexts aligned with business capabilities",
      },
      {
        icon: GitBranch,
        title: "Infrastructure as Code",
        desc: "Terraform and Bicep for automated management",
      },
      {
        icon: Shield,
        title: "Zero Trust Security",
        desc: "OAuth 2.0 and Entra ID for robust access control",
      },
    ],
    []
  );

  const skills = useMemo(
    () => [
      {
        title: "Cloud & Services",
        skills: [
          "Azure (Functions, App Services, AKS)",
          "AWS (EC2, Lambda, RDS)",
          "Microsoft Entra ID & Graph API",
          "Multi-cloud deployment",
        ],
      },
      {
        title: "DevOps & Infrastructure",
        skills: [
          "Terraform & Azure Bicep",
          "Azure DevOps & GitHub Actions",
          "CI/CD Pipeline Automation",
          "Infrastructure as Code",
        ],
      },
      {
        title: "Containerization",
        skills: [
          "Docker & Docker Compose",
          "Kubernetes Orchestration",
          "Microservices Architecture",
          "Container Networking",
        ],
      },
      {
        title: "Programming",
        skills: [
          "C# & .NET 8 Core",
          "Python (Django, FastAPI)",
          "JavaScript & TypeScript",
          "SQL & Database Design",
        ],
      },
      {
        title: "API & Integration",
        skills: [
          "REST & GraphQL APIs",
          "OAuth 2.0 & Security",
          "Event-Driven Architecture",
          "SignalR & Message Queues",
        ],
      },
      {
        title: "Monitoring & Security",
        skills: [
          "Azure Monitor & App Insights",
          "Log Analytics & Alerting",
          "Zero Trust Architecture",
          "Governance Automation",
        ],
      },
    ],
    []
  );

  const businessImpact = useMemo(
    () => [
      {
        icon: TrendingUp,
        title: "Performance Optimization",
        desc: "Architected systems handling 10M+ requests/day with sub-100ms latency, delivering 35% infrastructure cost reduction through cloud-native optimization.",
      },
      {
        icon: Target,
        title: "Enterprise Reliability",
        desc: "Designed and implemented multi-cloud architectures achieving 99.9% uptime SLA across Azure and AWS, enabling mission-critical operations.",
      },
      {
        icon: Award,
        title: "Scalable Solutions",
        desc: "Built microservices platforms using domain-driven design and event-driven architecture, reducing time-to-market for new features by 40%.",
      },
    ],
    []
  );

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | null, id: string) => {
    if (e) e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const shouldScroll = safeSessionStorage.getItem('scrollToProjects');
    if (shouldScroll === 'true') {
      safeSessionStorage.removeItem('scrollToProjects');
      setTimeout(() => {
        scrollToSection(null, 'projects');
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <nav className="fixed top-0 w-full bg-slate-950 text-white z-50 border-b border-slate-800">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4 max-w-7xl mx-auto w-full">
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img
                src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                alt="Andrew Gotora"
                className="w-10 h-10 rounded-full border-2 border-cyan-500 object-cover"
              />
              <span className="text-lg font-bold tracking-tight hidden sm:inline">
                Andrew Gotora
              </span>
            </a>
          </Link>
          <div className="flex items-center gap-8">
            <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="text-sm font-medium hover:text-cyan-400 transition-colors cursor-pointer">Projects</a>
            <a href="#skills" onClick={(e) => scrollToSection(e, "skills")} className="text-sm font-medium hover:text-cyan-400 transition-colors cursor-pointer">Skills</a>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="text-sm font-medium hover:text-cyan-400 transition-colors cursor-pointer">About</a>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                Cloud Platform<br />Engineering
              </h1>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
                Specializing in full-stack cloud architecture, microservices design, and enterprise-scale system engineering across multi-cloud platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 text-white font-bold rounded-xl hover:bg-cyan-500 transition-all">
                  View Projects <ChevronRight className="w-4 h-4" />
                </a>
                <a 
                  href="resume/resume_download.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-700 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
                >
                  View Resume <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { val: "10M+", label: "Daily Requests Architected" },
                { val: "99.9%", label: "Uptime SLA Achieved" },
                { val: "35%", label: "Cost Reduction Delivered" }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.val}</div>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-slate-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Enterprise-scale solutions and architectural implementations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Factory IoT",
                sub: "Real-Time Industrial Monitoring",
                desc: "Comprehensive IoT platform with real-time SignalR updates, .NET 8 microservices, and Azure IoT Hub integration.",
                tech: [".NET 8", "SignalR", "Azure IoT Hub", "AKS"],
                link: "/projects/smart-factory-iot",
                color: "from-cyan-500 to-blue-600"
              },
              {
                title: "IMSOP",
                sub: "Multi-Cloud Supply Chain Platform",
                desc: "Enterprise-grade microservices architecture with GraphQL API, supporting multi-cloud environments via Azure Arc.",
                tech: [".NET 8", "GraphQL", "Azure Arc", "PostgreSQL"],
                link: "/projects/imsop",
                color: "from-purple-500 to-indigo-600"
              },
              {
                title: "SAP BTP AI Learning Hub",
                sub: "Enterprise AI Education Platform",
                desc: "Interactive learning platform for mastering SAP BTP AI solutions with hands-on tutorials and architecture builder.",
                tech: ["React", "SAP BTP", "AI/ML", "TypeScript"],
                link: "/projects/sap-btp-ai-hub",
                color: "from-blue-600 to-indigo-700"
              }
            ].map((p, i) => (
              <Link key={i} href={p.link}>
                <a 
                  onClick={() => NavigationService.setFromFeaturedProjects()}
                  className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${p.color}`}></div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Project</span>
                      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">{p.title}</h3>
                    <p className="text-sm text-cyan-600 font-semibold mb-4">{p.sub}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {p.tech.map((t, j) => (
                        <span key={j} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded font-bold uppercase tracking-wider">{t}</span>
                      ))}
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Specialized in cloud-native architectures and enterprise systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span key={j} className="px-3 py-1.5 bg-white text-slate-700 text-xs font-bold rounded-lg border border-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-slate-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Architecting the Future of Cloud</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  With extensive experience in enterprise software engineering, I specialize in building resilient, scalable, and cost-effective cloud platforms. My approach combines deep technical expertise with a focus on business value and operational excellence.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {principles.map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <p.icon className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{p.title}</h4>
                      <p className="text-sm text-slate-500 leading-snug">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              {businessImpact.map((impact, i) => (
                <div key={i} className="p-8 bg-slate-950 text-white rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all">
                      <impact.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold">{impact.title}</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{impact.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                alt="Andrew Gotora"
                className="w-10 h-10 rounded-full border-2 border-cyan-500 object-cover"
              />
              <span className="text-xl font-bold tracking-tight">Andrew Gotora</span>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/DruHustle" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/andrewgotora" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:andrewgotora@yahoo.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-slate-500 text-sm">© 2026 Andrew Gotora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
