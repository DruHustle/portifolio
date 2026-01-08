import { Button } from "@/components/ui/button";
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
import { useMemo } from "react";

export default function Home() {
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
        desc: "Real-time data processing with Kafka streams",
      },
      {
        icon: Database,
        title: "Domain-Driven Design",
        desc: "Seven bounded contexts around business capabilities",
      },
      {
        icon: GitBranch,
        title: "Infrastructure as Code",
        desc: "Terraform-based infrastructure management",
      },
      {
        icon: Shield,
        title: "Zero Trust Security",
        desc: "OAuth 2.0 and managed identities for access control",
      },
    ],
    []
  );

  const skills = useMemo(
    () => [
      {
        title: "Cloud & Services",
        skills: [
          "Azure (Functions, App Services, Automation)",
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
          "C# & .NET Core",
          "Python (Django, Flask, FastAPI)",
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
          "Kafka & Message Queues",
        ],
      },
      {
        title: "Monitoring & Security",
        skills: [
          "Azure Monitor & Application Insights",
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
        desc: "Architected systems handling 10M+ requests/day with sub-100ms latency, delivering 35% infrastructure cost reduction through cloud-native optimization and resource efficiency.",
      },
      {
        icon: Target,
        title: "Enterprise Reliability",
        desc: "Designed and implemented multi-cloud architectures achieving 99.99% uptime SLA across Azure and AWS, enabling mission-critical business operations with zero downtime deployments.",
      },
      {
        icon: Award,
        title: "Scalable Solutions",
        desc: "Built microservices platforms using domain-driven design and event-driven architecture, enabling independent scaling of services and reducing time-to-market for new features by 40%.",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900 text-white z-50 border-b border-gray-800">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3 md:py-4 max-w-7xl mx-auto w-full">
          <Link href="/">
            <a className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity min-w-0">
              <img
                src="/portifolio/images/profile.jpg"
                alt="Andrew Gotora"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-cyan-400 object-cover flex-shrink-0"
              />
              <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight hidden sm:inline truncate">
                Andrew Gotora
              </span>
            </a>
          </Link>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/projects">
              <a className="text-sm hover:text-teal-400 transition-all duration-300 hover:scale-105 inline-block">
                Projects
              </a>
            </Link>
            <Link href="/skills">
              <a className="text-sm hover:text-teal-400 transition-all duration-300 hover:scale-105 inline-block">
                Skills
              </a>
            </Link>
            <a
              href="/about"
              className="text-sm hover:text-teal-400 transition-all duration-300 hover:scale-105 inline-block"
            >
              About
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-20 sm:pb-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-white"
          style={{
            clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)",
          }}
        ></div>

        <div className="px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Main Content */}
            <div className="lg:col-span-2 min-w-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
                Cloud Platform
                <br />
                Engineering
                <br />
                Portfolio
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl text-gray-200 mb-6 sm:mb-8">
                A comprehensive demonstration of full-stack cloud architecture,
                microservices design, and enterprise-scale system engineering
                across multi-cloud platforms.
              </p>

              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 w-full">
                <a href="/projects" className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-teal-500 text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-teal-600 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/50 hover:scale-105 flex-1 xs:flex-none">
                  View Projects
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-white text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105 flex-1 xs:flex-none"
                >
                  Download Resume
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Stats Sidebar */}
            <div className="lg:col-span-1 space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white border-opacity-20 hover:bg-opacity-15 transition-all">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-teal-400">
                  10M+
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-400">
                  Requests per day architected
                </p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white border-opacity-20 hover:bg-white hover:bg-opacity-15 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-teal-400 group-hover:text-teal-300 transition-colors">
                  99.99%
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-400">
                  Uptime SLA achieved
                </p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white border-opacity-20 hover:bg-white hover:bg-opacity-15 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-teal-400 group-hover:text-teal-300 transition-colors">
                  35%
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-400">
                  Infrastructure cost reduction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Principles */}
      <section className="bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-800 text-white py-12 sm:py-16 md:py-20">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Architecture Principles
          </h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 md:mb-16">
            Built on modern, enterprise-grade architectural patterns
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {principles.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 sm:p-6 hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300 group border border-gray-200"
              >
                <item.icon className="w-6 sm:w-8 h-6 sm:h-8 text-teal-500 mb-3 sm:mb-4 group-hover:scale-110 group-hover:text-teal-600 transition-all" />
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
            Technical Expertise
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 md:mb-16 max-w-2xl">
            Comprehensive skill set across cloud platforms, containerization,
            DevOps, and modern software architecture patterns.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-6">
            {skills.map((category, idx) => (
              <div
                key={idx}
                className="border border-slate-700/50 rounded-xl p-4 sm:p-6 md:p-8 bg-slate-800/50 hover:bg-slate-800 hover:border-teal-500/50 transition-all duration-300 group"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-6 text-white border-b-2 border-teal-500 pb-2 sm:pb-3 group-hover:border-teal-400 transition-colors">
                  {category.title}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {category.skills.map((skill, sidx) => (
                    <li
                      key={sidx}
                      className="flex items-start gap-2 sm:gap-3 text-slate-300 text-xs sm:text-sm font-medium"
                    >
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 py-16 sm:py-20 md:py-28">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider rounded-full mb-4 border border-cyan-500/30">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Showcasing enterprise-scale solutions and architectural implementations. Select a project to explore technical details.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <Link href="/projects/imsop">
              <a className="group relative block rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-cyan-500/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-teal-500"></div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider rounded-full border border-cyan-500/30">Enterprise Platform</span>
                    <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    IMSOP
                  </h3>
                  <p className="text-sm text-slate-400 font-medium mb-4">Intelligent Multi-Cloud Supply Chain & Operations Platform</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 text-justify">
                    Enterprise-grade microservices architecture with 7 bounded contexts, serving 10M+ requests per day with 99.99% uptime SLA.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[".NET Core", "Python", "Kubernetes", "Azure", "Kafka"].map(
                      (tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-slate-700/50 text-slate-300 px-3 py-1.5 rounded-lg font-medium border border-slate-600/50"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/projects/sap-btp-ai-hub">
              <a className="group relative block rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-blue-500/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-500/30">AI Platform</span>
                    <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    SAP BTP AI Learning Hub
                  </h3>
                  <p className="text-sm text-slate-400 font-medium mb-4">Enterprise AI Education Platform</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 text-justify">
                    Interactive learning platform with hands-on tutorials, AI playground, and architecture builder for mastering SAP Business Technology Platform AI solutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "SAP BTP", "AI/ML", "GitHub Pages"].map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-700/50 text-slate-300 px-3 py-1.5 rounded-lg font-medium border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* About Author Section */}
      <section id="about" className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-12 sm:py-16 md:py-20">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12">
            About the Author
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {businessImpact.map((item, idx) => (
              <div key={idx} className="space-y-3 sm:space-y-4 group hover:bg-white/5 p-3 sm:p-4 rounded-lg transition-all duration-300">
                <div className="flex items-center gap-2 sm:gap-3">
                  <item.icon className="w-6 sm:w-8 h-6 sm:h-8 text-teal-400 flex-shrink-0 group-hover:text-teal-300 transition-colors" />
                  <h3 className="text-base sm:text-lg font-bold group-hover:text-teal-300 transition-colors">{item.title}</h3>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-blue-700 pt-6 sm:pt-8 mb-6 sm:mb-8">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-200 mb-4 sm:mb-6">
              As a Full Stack Cloud Engineer with expertise in .NET, Python, and cloud platforms, I specialize in designing and implementing enterprise-scale solutions that drive measurable business value. My approach combines architectural excellence with pragmatic DevOps practices, enabling organizations to achieve operational efficiency, cost optimization, and rapid innovation.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-200">
              With proven experience across Azure, AWS, Kubernetes, and event-driven architectures, I help teams build resilient, scalable systems that support business growth. My focus is on translating complex technical challenges into strategic solutions that directly impact the bottom line—whether through infrastructure optimization, deployment automation, or microservices transformation.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="mailto:andrewgotora@yahoo.com"
              className="group w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/60 border border-slate-700/50 hover:border-teal-500/50 hover:bg-slate-800 transition-all duration-300"
              title="Email"
            >
              <Mail className="w-5 h-5 text-teal-400 group-hover:text-teal-300 transition-colors" />
            </a>

            <a
              href="https://linkedin.com/in/andrewgotora"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/60 border border-slate-700/50 hover:border-teal-500/50 hover:bg-slate-800 transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-teal-400 group-hover:text-teal-300 transition-colors" />
            </a>

            <a
              href="https://github.com/andrewgotora"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/60 border border-slate-700/50 hover:border-teal-500/50 hover:bg-slate-800 transition-all duration-300"
              title="GitHub"
            >
              <Github className="w-5 h-5 text-teal-400 group-hover:text-teal-300 transition-colors" />
            </a>
          </div>

          <div className="border-t border-blue-700 mt-6 sm:mt-8 pt-6 sm:pt-8">
            <p className="text-xs sm:text-sm text-gray-500">
              © 2026 Andrew Gotora. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
