import { useEffect, useState, useMemo } from "react";
import { ArrowLeft, TrendingUp, Download, Eye, Calendar } from "lucide-react";
import { analyticsService, AnalyticsStats } from "@/services/analyticsService";

export default function Analytics() {
  const [stats, setStats] = useState<AnalyticsStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Track this page visit
    analyticsService.trackPageVisit("analytics");
    
    // Load stats
    const analyticsStats = analyticsService.getStats();
    setStats(analyticsStats);
    setLoading(false);
  }, []);

  const formattedStats = useMemo(() => {
    if (!stats) return null;

    return {
      totalVisits: stats.totalPageVisits.toLocaleString(),
      totalDownloads: stats.totalResumeViews.toLocaleString(),
      lastVisit: stats.lastPageVisit
        ? new Date(stats.lastPageVisit).toLocaleDateString()
        : "Never",
      lastDownload: stats.lastResumeView
        ? new Date(stats.lastResumeView).toLocaleDateString()
        : "Never",
    };
  }, [stats]);

  const pageVisitsList = useMemo(() => {
    if (!stats) return [];
    return Object.entries(stats.pageVisitsByPage)
      .map(([page, count]) => ({ page, count }))
      .sort((a, b) => b.count - a.count);
  }, [stats]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white">Loading analytics...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
              <p className="text-slate-400 text-sm mt-1">Portfolio visits and resume downloads</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Total Visits */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 hover:border-teal-500/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-300 font-medium">Total Visits</h3>
              <Eye className="w-5 h-5 text-teal-400" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">{formattedStats?.totalVisits}</div>
            <p className="text-slate-400 text-sm">Page views tracked</p>
          </div>

          {/* Total Downloads */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 hover:border-orange-500/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-300 font-medium">Resume Downloads</h3>
              <Download className="w-5 h-5 text-orange-400" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">{formattedStats?.totalDownloads}</div>
            <p className="text-slate-400 text-sm">Total downloads</p>
          </div>

          {/* Last Visit */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-300 font-medium">Last Visit</h3>
              <Calendar className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-lg font-bold text-white mb-2">{formattedStats?.lastVisit}</div>
            <p className="text-slate-400 text-sm">Most recent visit</p>
          </div>

          {/* Last Download */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 hover:border-green-500/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-300 font-medium">Last Download</h3>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-lg font-bold text-white mb-2">{formattedStats?.lastDownload}</div>
            <p className="text-slate-400 text-sm">Most recent download</p>
          </div>
        </div>

        {/* Page Visits Breakdown */}
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Eye className="w-6 h-6 text-teal-400" />
            Page Visits Breakdown
          </h2>

          {pageVisitsList.length > 0 ? (
            <div className="space-y-4">
              {pageVisitsList.map(({ page, count }) => (
                <div key={page} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900/70 transition-colors">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-white font-medium capitalize">{page || "Home"}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-48 bg-slate-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-teal-400 to-teal-500 h-2 rounded-full transition-all"
                        style={{
                          width: `${Math.min(
                            (count / Math.max(...pageVisitsList.map((p) => p.count), 1)) * 100,
                            100
                          )}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-white font-bold w-12 text-right">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Eye className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">No page visits tracked yet</p>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-slate-800/40 border border-slate-700/50 rounded-xl p-8">
          <h3 className="text-lg font-bold text-white mb-4">About This Dashboard</h3>
          <p className="text-slate-300 leading-relaxed">
            This analytics dashboard tracks your portfolio visits and resume downloads using browser local storage. 
            Data is stored locally on your device and is not sent to any external servers. 
            The dashboard updates automatically as visitors interact with your portfolio.
          </p>
        </div>
      </main>
    </div>
  );
}
