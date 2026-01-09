/**
 * Navigation Service
 * Implements Single Responsibility Principle by handling navigation state
 * Follows Open/Closed Principle - extensible for new navigation patterns
 */

import { safeSessionStorage } from "@/lib/storage";

const NAVIGATION_KEY = 'fromFeaturedProjects';

export interface NavigationState {
  fromFeaturedProjects: boolean;
}

/**
 * Navigation service - manages navigation state across the application
 * Follows Dependency Inversion Principle by exposing interfaces
 */
export class NavigationService {
  /**
   * Mark that user navigated from Featured Projects section
   */
  static setFromFeaturedProjects(): void {
    try {
      safeSessionStorage.setItem(NAVIGATION_KEY, 'true');
    } catch (error) {
      // Silently fail if sessionStorage is not available
      // console.warn('SessionStorage not available:', error);
    }
  }

  /**
   * Check if user came from Featured Projects section
   * @returns true if user navigated from Featured Projects
   */
  static isFromFeaturedProjects(): boolean {
    try {
      return safeSessionStorage.getItem(NAVIGATION_KEY) === 'true';
    } catch (error) {
      // Silently fail if sessionStorage is not available
      // console.warn('SessionStorage not available:', error);
      return false;
    }
  }

  /**
   * Clear navigation state
   */
  static clearNavigationState(): void {
    try {
      safeSessionStorage.removeItem(NAVIGATION_KEY);
    } catch (error) {
      // Silently fail if sessionStorage is not available
      // console.warn('SessionStorage not available:', error);
    }
  }

  /**
   * Check if user came from portfolio based on referrer
   * @returns true if referrer contains portfolio URL
   */
  static checkReferrer(): boolean {
    try {
      const referrer = document.referrer;
      return (
        referrer.includes('druhustle.github.io/portifolio') ||
        referrer.includes('druhustle.github.io/portfolio') ||
        referrer.includes('localhost') // For local development
      );
    } catch (error) {
      console.warn('Unable to check referrer:', error);
      return false;
    }
  }

  /**
   * Initialize navigation state based on referrer
   * Should be called when entering a project detail page
   */
  static initializeFromReferrer(): void {
    if (this.checkReferrer() || this.isFromFeaturedProjects()) {
      this.setFromFeaturedProjects();
    }
  }
}
