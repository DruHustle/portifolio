import { useEffect, useState } from "react";
import { Eye, ExternalLink, BarChart3, ShieldCheck, Zap } from "lucide-react";
import { analyticsService, AnalyticsStats } from "@/services/analyticsService";

export default function Analytics() {
  const [stats, setStats] = useState<AnalyticsStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      const analyticsStats = await analyticsService.getStats();
      setStats(analyticsStats);
      setLoading(false);
    };
    loadStats();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-slate-400 animate-pulse">Loading Vercel Analytics...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">Vercel Analytics</h1>
              <p className="text-slate-400 text-sm mt-1">Real-time performance and visitor insights</p>
            </div>
            <a 
              href="https://vercel.com/dashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-slate-200 transition-colors"
            >
              Vercel Dashboard <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4 text-blue-400">
              <Eye className="w-5 h-5" />
              <h3 className="font-medium">Privacy First</h3>
            </div>
            <p className="text-slate-400 text-sm">Vercel Analytics is fully GDPR/CCPA compliant, tracking visitors without compromising privacy.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4 text-green-400">
              <Zap className="w-5 h-5" />
              <h3 className="font-medium">Real-time</h3>
            </div>
            <p className="text-slate-400 text-sm">Insights are processed in real-time, providing immediate feedback on site performance and traffic.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4 text-purple-400">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="font-medium">Secure</h3>
            </div>
            <p className="text-slate-400 text-sm">Server-side tracking ensures data integrity and prevents client-side manipulation.</p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center">
          <BarChart3 className="w-16 h-16 text-slate-700 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Live Metrics Integration</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            We have migrated from local storage tracking to <strong>Vercel Analytics</strong> for more robust, 
            secure, and high-performance monitoring. Detailed metrics including top pages, 
            referrers, and visitor demographics are now managed through the Vercel infrastructure.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full text-sm text-slate-300">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Vercel Analytics Active
          </div>
        </div>
      </main>
    </div>
  );
}
