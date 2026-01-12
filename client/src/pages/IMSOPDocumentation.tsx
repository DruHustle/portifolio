import { Link } from "wouter";
import { ArrowLeft, FileText, Download, Eye } from "lucide-react";
import { useEffect } from "react";

const baseUrl = import.meta.env.BASE_URL || '/';

const docs = [
  {
    title: "Architecture Overview v2",
    description: "Detailed technical design, including system architecture, .NET 8 microservices, and multi-cloud support.",
    mdPath: "/docs/imsop/architecture.md",
    pdfPath: "/docs/imsop/architecture.pdf",
  },
  {
    title: "Database Schema v2",
    description: "Comprehensive database design and entity relationship specifications for Aiven PostgreSQL.",
    mdPath: "/docs/imsop/database-schema.md",
    pdfPath: "/docs/imsop/database-schema.pdf",
  },
  {
    title: "API Flows v2",
    description: "Technical specification for REST and GraphQL APIs used across the platform.",
    mdPath: "/docs/imsop/api-flows.md",
    pdfPath: "/docs/imsop/api-flows.pdf",
  },
];

export default function IMSOPDocumentation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 max-w-7xl mx-auto w-full">
          <Link href="/projects/imsop">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={`${import.meta.env.BASE_URL}images/profile.jpg`} alt="Andrew Gotora" className="w-10 h-10 rounded-full border-2 border-purple-500 object-cover" />
              <span className="text-lg font-bold tracking-tight hidden sm:inline">Andrew Gotora</span>
            </a>
          </Link>
          <Link href="/projects/imsop">
            <a className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-purple-400 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Project
            </a>
          </Link>
        </div>
      </nav>

      <header className="bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 py-16 border-b border-slate-800">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
            <FileText className="w-3 h-3" /> Project Assets v2
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white">IMSOP Documentation</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Technical specifications, design patterns, and architectural blueprints for the Intelligent Multi-Cloud Supply Chain platform.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {docs.map((doc, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-purple-500/30 transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8" />
                </div>
                <a 
                  href={`${baseUrl}${doc.pdfPath}`} 
                  download 
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-purple-500 hover:text-white transition-all"
                  title="Download PDF"
                >
                  <Download className="w-5 h-5" />
                </a>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">{doc.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed text-sm">{doc.description}</p>
              <div className="flex flex-col gap-3">
                <a 
                  href={`${baseUrl}${doc.pdfPath}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all border border-slate-700"
                >
                  <Eye className="w-4 h-4" /> View Online
                </a>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-20 p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">System Architecture</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-center">
            High-level overview of the IMSOP platform's multi-cloud architecture.
          </p>
          <div className="rounded-2xl overflow-hidden border border-slate-800">
            <img 
              src={`${import.meta.env.BASE_URL}images/imsop_arch.png`} 
              alt="IMSOP Architecture" 
              className="w-full h-auto"
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-12 text-center">
        <p className="text-slate-500 text-sm">© 2026 Andrew Gotora. All rights reserved.</p>
      </footer>
    </div>
  );
}
