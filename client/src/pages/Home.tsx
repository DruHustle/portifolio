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
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
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
        title: "Security & Governance",
        skills: [
          "Role-Based Access Control (RBAC)",
          "Managed Identities & Secrets Management",
          "Policy-Driven Access Control",
          "Secure API Design & Compliance",
        ],
      },
      {
        title: "Architecture & Engineering Practices",
        skills: [
          "Domain-Driven Design (DDD)",
          "Test-Driven Development (TDD)",
          "SOLID Principles",
          "Agile (Scrum & Kanban)",
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
      {
        title: "IoT & Edge Computing",
        skills: [
          "Azure IoT Hub & IoT Edge",
          "MQTT & AMQP Protocols",
          "Raspberry Pi & ESP32 Development",
          "Edge Analytics & Telemetry",
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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900 text-white z-50 border-b border-gray-800">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3 md:py-4 max-w-7xl mx-auto w-full">
          <Link href="/">
            <a className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity min-w-0">
              <img
                src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                alt="Andrew Gotora"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-teal-400 object-cover flex-shrink-0"
              />
              <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight hidden sm:inline truncate">
                Andrew Gotora
              </span>
            </a>
          </Link>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#projects" 
              onClick={(e) => scrollToSection(e, "projects")}
              className="text-sm font-medium hover:text-teal-400 transition-all duration-300 cursor-pointer" >
              Projects
            </a>
            <a href="#skills" 
              onClick={(e) => scrollToSection(e, "skills")}
              className="text-sm font-medium hover:text-teal-400 transition-all duration-300 cursor-pointer" >
              Skills
            </a>   
            <a href="#about" 
              onClick={(e) => scrollToSection(e, "about")}
              className="text-sm font-medium hover:text-teal-400 transition-all duration-300 cursor-pointer">
              About
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900 border-gray-800 text-white p-0">
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col p-6 pt-16 gap-6">
                  <a 
                    href="#projects" 
                    onClick={(e) => {
                      scrollToSection(e, "projects");
                    }}
                    className="text-lg font-medium hover:text-teal-400 transition-colors"
                  >
                    Projects
                  </a>
                  <a 
                    href="#skills" 
                    onClick={(e) => scrollToSection(e, "skills")}
                    className="text-lg font-medium hover:text-teal-400 transition-colors"
                  >
                    Skills
                  </a>
                  <a 
                    href="#about" 
                    onClick={(e) => scrollToSection(e, "about")}
                    className="text-lg font-medium hover:text-teal-400 transition-colors"
                  >
                    About
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-[#E0F2FE]"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>

        <div className="px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Cloud Platform<br />Engineering
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-2xl text-gray-200 mb-8">
                Specializing in full-stack cloud architecture, microservices design, and enterprise-scale system engineering across multi-cloud platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-all hover:shadow-lg hover:shadow-teal-500/50 hover:scale-105">
                  View Projects <ChevronRight className="w-4 h-4" />
                </a>
                <a 
                  href="resume/resume_download.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all hover:scale-105"
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
                <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                  <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-1">{stat.val}</div>
                  <p className="text-sm font-medium text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Light Ocean Blue Background */}
      <section id="projects" className="py-20 bg-[#E0F2FE]">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-2">Enterprise-scale solutions and architectural implementations.</p>
            <p className="text-teal-600 font-bold text-sm animate-pulse">Click to discover more</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Factory IoT",
                sub: "Real-Time Industrial Monitoring",
                desc: "Comprehensive IoT platform with real-time SignalR updates, .NET 8 microservices, and Azure IoT Hub integration.",
                tech: [".NET 8", "SignalR", "Azure IoT Hub", "AKS", "MQTT/AMQP"],
                link: "/projects/smart-factory-iot",
                color:"from-orange-500 to-red-500"
              },
              {
                title: "IMSOP",
                sub: "Multi-Cloud Supply Chain Platform",
                desc: "Enterprise-grade microservices architecture with GraphQL API, supporting multi-cloud environments via Azure Arc.",
                tech: [".NET 8", "GraphQL", "Azure Arc", "PostgreSQL"],
                link: "/projects/imsop",
                color: "from-cyan-500 to-teal-500" 
              },
              {
                title: "Learning Hub",
                sub: "Enterprise AI Education Platform",
                desc: "Interactive learning hub for designing, prototyping, and deploying real-world AI solutions using a modern multi-tool ecosystem.",
                tech: ["Python", "OpenAI", "NVIDIA CUDA", "Azure AI", "SAP BTP AI Core", "AI/ML"],
                link: "/projects/sap-btp-ai-hub",
                color:"from-blue-500 to-indigo-500"
              }
            ].map((p, i) => (
              <Link key={i} href={p.link}>
                <a 
                  onClick={() => NavigationService.setFromFeaturedProjects()}
                  className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-blue-100 hover:border-teal-500/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer will-change-transform"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${p.color}`}></div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full">Project</span>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">{p.title}</h3>
                    <p className="text-sm text-teal-600 font-semibold mb-4">{p.sub}</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {p.tech.map((t, j) => (
                        <span key={j} className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded font-bold uppercase tracking-wider">{t}</span>
                      ))}
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Light Ocean Blue Background */}
      <section id="skills" className="py-20 bg-[#F0F9FF]">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">Specialized in cloud-native architectures and enterprise systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-blue-50 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span key={j} className="px-3 py-1.5 bg-blue-50/50 text-blue-700 text-xs font-semibold rounded-lg border border-blue-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Architecting the Future of Cloud</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  With extensive experience in enterprise software engineering, I specialize in building resilient, scalable, and cost-effective cloud platforms. My approach combines deep technical expertise with a focus on business value and operational excellence.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {principles.map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                      <p.icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{p.title}</h4>
                      <p className="text-sm text-gray-600 leading-snug">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              {businessImpact.map((impact, i) => (
                <div key={i} className="p-8 bg-slate-900 text-white rounded-2xl border border-slate-800 hover:border-teal-500/50 transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-all">
                      <impact.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <h3 className="text-xl font-bold">{impact.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{impact.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                alt="Andrew Gotora"
                className="w-10 h-10 rounded-full border-2 border-teal-500 object-cover"
              />
              <span className="text-xl font-bold tracking-tight">Andrew Gotora</span>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/DruHustle" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/andrewgotora" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:andrewgotora@yahoo.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">© 2026 Andrew Gotora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}