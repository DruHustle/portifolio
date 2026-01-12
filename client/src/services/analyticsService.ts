/**
 * Analytics Service
 * Follows SOLID principles:
 * - Single Responsibility: Interface for analytics data
 * - Open/Closed: Extensible for new analytics providers
 */

export interface AnalyticsStats {
  totalPageVisits: number;
  totalResumeViews: number;
  pageVisitsByPage: Record<string, number>;
  lastPageVisit: number | null;
  lastResumeView: number | null;
}

/**
 * Analytics Service - Interface for Vercel Analytics
 * Note: Vercel Analytics metrics are typically viewed in the Vercel Dashboard.
 * This service provides a bridge for the UI if needed.
 */
export class AnalyticsService {
  /**
   * Track a page visit (Handled automatically by Vercel Analytics)
   */
  trackPageVisit(_page: string): void {
    // Vercel Analytics tracks page views automatically
  }

  /**
   * Track a resume view
   */
  trackResumeView(fileName: string): void {
    // Custom event for Vercel Analytics could be added here if needed
    console.log(`Tracking resume view: ${fileName}`);
  }

  /**
   * Get analytics statistics
   * In a real Vercel environment, this would fetch from Vercel Analytics API.
   * For now, we provide placeholder data or interface.
   */
  async getStats(): Promise<AnalyticsStats> {
    // This would ideally call Vercel's Analytics API
    // For the purpose of this portfolio, we'll return mock data that reflects 
    // the transition to Vercel Analytics
    return {
      totalPageVisits: 0, 
      totalResumeViews: 0,
      pageVisitsByPage: {},
      lastPageVisit: Date.now(),
      lastResumeView: null,
    };
  }
}

export const analyticsService = new AnalyticsService();
