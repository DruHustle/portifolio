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
        desc: "Architected systems handling 10M+ requests/day with sub-100ms latency, delivering 35% infrastructure cost reduction through cloud-native optimization.",
      },
      {
        icon: Target,
        title: "Enterprise Reliability",
        desc: "Designed and implemented multi-cloud architectures achieving 99.99% uptime SLA across Azure and AWS, enabling mission-critical operations.",
      },
      {
        icon: Award,
        title: "Scalable Solutions",
        desc: "Built microservices platforms using domain-driven design and event-driven architecture, reducing time-to-market for new features by 40%.",
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
                src="images/profile.jpg"
                alt="Andrew Gotora"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-cyan-400 object-cover flex-shrink-0"
              />
              <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight hidden sm:inline truncate">
                Andrew Gotora
              </span>
            </a>
          </Link>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#projects" className="text-sm font-medium hover:text-teal-400 transition-all duration-300">
              Projects
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-teal-400 transition-all duration-300">
              Skills
            </a>
            <a href="#about" className="text-sm font-medium hover:text-teal-400 transition-all duration-300">
              About
            </a>
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
                Cloud Platform<br />Engineering<br />Portfolio
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-2xl text-gray-200 mb-8">
                A comprehensive demonstration of full-stack cloud architecture, microservices design, and enterprise-scale system engineering across multi-cloud platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-all hover:shadow-lg hover:shadow-teal-500/50 hover:scale-105">
                  View Projects <ChevronRight className="w-4 h-4" />
                </a>
                <a href="resume/resume_download.pdf" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all hover:scale-105">
                  Download Resume <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { val: "10M+", label: "Daily Requests Architected" },
                { val: "99.99%", label: "Uptime SLA Achieved" },
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
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">Enterprise-scale solutions and architectural implementations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {[
              {
                title: "IMSOP",
                sub: "Intelligent Multi-Cloud Supply Chain Platform",
                desc: "Enterprise-grade microservices architecture with 7 bounded contexts, serving 10M+ requests per day with 99.99% uptime SLA.",
                tech: [".NET Core", "Python", "Kubernetes", "Azure", "Kafka"],
                link: "/projects/imsop",
                color: "from-cyan-500 to-teal-500"
              },
              {
                title: "SAP BTP AI Learning Hub",
                sub: "Enterprise AI Education Platform",
                desc: "Interactive learning platform with hands-on tutorials, AI playground, and architecture builder for mastering SAP BTP AI solutions.",
                tech: ["React", "TypeScript", "SAP BTP", "AI/ML", "GitHub Pages"],
                link: "/projects/sap-btp-ai-hub",
                color: "from-blue-500 to-indigo-500"
              }
            ].map((p, i) => (
              <Link key={i} href={p.link}>
                <a className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-blue-100 hover:border-teal-500/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer will-change-transform">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((cat, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-blue-100 hover:border-teal-500/30 transition-all group shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-gray-900 border-b-2 border-teal-500 pb-3 inline-block">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.skills.map((skill, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-700 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Engineering Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((p, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0">
                  <p.icon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900 text-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">About the Architect</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Passionate about bridging the gap between complex enterprise technology and practical business value. With extensive experience in the SAP ecosystem and cloud-native development, I focus on helping organizations leverage AI and multi-cloud architectures to drive innovation and efficiency.
              </p>
              <div className="grid gap-6">
                {businessImpact.map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-[2.5rem] blur-2xl opacity-20"></div>
              <div className="relative bg-slate-800 rounded-[2rem] p-8 border border-white/10">
                <div className="flex items-center gap-6 mb-8">
                  <img
                    src="images/profile.jpg"
                    alt="Andrew Gotora"
                    className="w-20 h-20 rounded-2xl border-2 border-teal-500 object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold">Andrew Gotora</h3>
                    <p className="text-teal-400 font-medium">Cloud Platform Engineer</p>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <a href="mailto:andrewgotora@yahoo.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    andrewgotora@yahoo.com
                  </a>
                  <a href="https://www.linkedin.com/in/andrew-gotora-72966068" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    LinkedIn Profile
                  </a>
                  <a href="https://github.com/andrewgotora" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <Github className="w-5 h-5" />
                    </div>
                    GitHub Profile
                  </a>
                </div>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6 rounded-xl font-bold text-lg">
                  Let's Collaborate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 bg-slate-900 text-center">
        <p className="text-gray-500 font-medium">© 2026 Andrew Gotora. All rights reserved.</p>
      </footer>
    </div>
  );
}
