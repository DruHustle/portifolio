/**
 * Analytics Service
 * Follows SOLID principles:
 * - Single Responsibility: Each method has one clear purpose
 * - Open/Closed: Extensible for new analytics types
 * - Liskov Substitution: Consistent interface
 * - Interface Segregation: Focused interfaces
 * - Dependency Inversion: Depends on abstractions
 */

export interface PageVisit {
  page: string;
  timestamp: number;
  referrer: string;
}

export interface ResumeDownload {
  fileName: string;
  timestamp: number;
}

export interface AnalyticsStats {
  totalPageVisits: number;
  totalResumeDownloads: number;
  pageVisitsByPage: Record<string, number>;
  lastPageVisit: number | null;
  lastResumeDownload: number | null;
}

interface StorageProvider {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

const VISITS_STORAGE_KEY = 'portfolio_page_visits';
const DOWNLOADS_STORAGE_KEY = 'portfolio_resume_downloads';

/**
 * Safe localStorage wrapper that handles Safari private browsing mode
 * and other edge cases where localStorage might be unavailable
 */
class SafeStorageProvider implements StorageProvider {
  private isAvailable: boolean;
  private fallbackData: Map<string, string> = new Map();

  constructor() {
    this.isAvailable = this.checkStorageAvailability();
  }

  private checkStorageAvailability(): boolean {
    try {
      const testKey = '__storage_test__';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  }

  getItem(key: string): string | null {
    try {
      if (this.isAvailable) {
        return localStorage.getItem(key);
      }
      return this.fallbackData.get(key) || null;
    } catch (error) {
      console.warn('Failed to get item from storage:', error);
      return this.fallbackData.get(key) || null;
    }
  }

  setItem(key: string, value: string): void {
    try {
      if (this.isAvailable) {
        localStorage.setItem(key, value);
      } else {
        this.fallbackData.set(key, value);
      }
    } catch (error) {
      console.warn('Failed to set item in storage:', error);
      // Fallback to in-memory storage
      this.fallbackData.set(key, value);
    }
  }

  removeItem(key: string): void {
    try {
      if (this.isAvailable) {
        localStorage.removeItem(key);
      } else {
        this.fallbackData.delete(key);
      }
    } catch (error) {
      console.warn('Failed to remove item from storage:', error);
      this.fallbackData.delete(key);
    }
  }
}

/**
 * Analytics Service - Manages all analytics data
 * Responsibility: Track and retrieve analytics data
 */
export class AnalyticsService {
  private storageProvider: StorageProvider;

  constructor(storageProvider?: StorageProvider) {
    this.storageProvider = storageProvider || new SafeStorageProvider();
  }

  /**
   * Track a page visit
   */
  trackPageVisit(page: string): void {
    try {
      const visits = this.getPageVisits();
      const visit: PageVisit = {
        page,
        timestamp: Date.now(),
        referrer: typeof document !== 'undefined' ? document.referrer : '',
      };
      visits.push(visit);
      this.storageProvider.setItem(VISITS_STORAGE_KEY, JSON.stringify(visits));
    } catch (error) {
      console.warn('Failed to track page visit:', error);
      // Silently fail - don't break the application
    }
  }

  /**
   * Track a resume download
   */
  trackResumeDownload(fileName: string): void {
    try {
      const downloads = this.getResumeDownloads();
      const download: ResumeDownload = {
        fileName,
        timestamp: Date.now(),
      };
      downloads.push(download);
      this.storageProvider.setItem(DOWNLOADS_STORAGE_KEY, JSON.stringify(downloads));
    } catch (error) {
      console.warn('Failed to track resume download:', error);
      // Silently fail - don't break the application
    }
  }

  /**
   * Get all page visits
   */
  getPageVisits(): PageVisit[] {
    try {
      const data = this.storageProvider.getItem(VISITS_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.warn('Failed to retrieve page visits:', error);
      return [];
    }
  }

  /**
   * Get all resume downloads
   */
  getResumeDownloads(): ResumeDownload[] {
    try {
      const data = this.storageProvider.getItem(DOWNLOADS_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.warn('Failed to retrieve resume downloads:', error);
      return [];
    }
  }

  /**
   * Get analytics statistics
   */
  getStats(): AnalyticsStats {
    const pageVisits = this.getPageVisits();
    const resumeDownloads = this.getResumeDownloads();

    const pageVisitsByPage: Record<string, number> = {};
    pageVisits.forEach((visit) => {
      pageVisitsByPage[visit.page] = (pageVisitsByPage[visit.page] || 0) + 1;
    });

    return {
      totalPageVisits: pageVisits.length,
      totalResumeDownloads: resumeDownloads.length,
      pageVisitsByPage,
      lastPageVisit: pageVisits.length > 0 ? pageVisits[pageVisits.length - 1].timestamp : null,
      lastResumeDownload: resumeDownloads.length > 0 ? resumeDownloads[resumeDownloads.length - 1].timestamp : null,
    };
  }

  /**
   * Clear all analytics data
   */
  clearAllData(): void {
    try {
      this.storageProvider.removeItem(VISITS_STORAGE_KEY);
      this.storageProvider.removeItem(DOWNLOADS_STORAGE_KEY);
    } catch (error) {
      console.warn('Failed to clear analytics data:', error);
    }
  }
}

/**
 * Create singleton instance
 */
export const analyticsService = new AnalyticsService();
