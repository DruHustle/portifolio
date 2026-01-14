import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useImagePath, useProfileImagePath } from '../hooks/useImagePath';
import { ProjectService } from '../services/projectService';

/**
 * Test Suite: Image Path Hook
 * Ensures consistent image path resolution across the application
 */
describe('useImagePath Hook', () => {
  it('should return correct image path with base URL', () => {
    const imagePath = useImagePath('images/test.jpg');
    expect(imagePath).toContain('images/test.jpg');
  });

  it('should handle profile image path correctly', () => {
    const profilePath = useProfileImagePath();
    expect(profilePath).toContain('images/profile.jpg');
  });

  it('should not double-slash paths', () => {
    const imagePath = useImagePath('images/test.jpg');
    expect(imagePath).not.toContain('//images');
  });
});

/**
 * Test Suite: Project Service
 * Validates project data structure and retrieval
 */
describe('ProjectService', () => {
  it('should retrieve IMSOP project data', () => {
    const project = ProjectService.getProjectById('imsop');
    expect(project).toBeDefined();
    expect(project?.title).toBe('IMSOP');
    expect(project?.subtitle).toContain('Supply Chain');
  });

  it('should retrieve Learning Hub project data', () => {
    const project = ProjectService.getProjectById('sap-btp-ai-hub');
    expect(project).toBeDefined();
    expect(project?.title).toBe('Learning Hub');
    expect(project?.subtitle).toContain('Education');
  });

  it('should retrieve IoT project data', () => {
    const project = ProjectService.getProjectById('smart-factory-iot');
    expect(project).toBeDefined();
    expect(project?.title).toBe('Smart Factory IoT Dashboard');
    expect(project?.subtitle).toContain('IoT');
  });

  it('should return null for unknown project', () => {
    const project = ProjectService.getProjectById('unknown-project');
    expect(project).toBeNull();
  });

  it('should have required project properties', () => {
    const project = ProjectService.getProjectById('imsop');
    expect(project).toHaveProperty('title');
    expect(project).toHaveProperty('subtitle');
    expect(project).toHaveProperty('description');
    expect(project).toHaveProperty('stats');
    expect(project).toHaveProperty('problemStatement');
    expect(project).toHaveProperty('requirements');
    expect(project).toHaveProperty('solution');
    expect(project).toHaveProperty('implementation');
    expect(project).toHaveProperty('results');
  });

  it('should have valid stats structure', () => {
    const project = ProjectService.getProjectById('imsop');
    expect(project?.stats).toBeInstanceOf(Array);
    expect(project?.stats.length).toBeGreaterThan(0);
    project?.stats.forEach((stat) => {
      expect(stat).toHaveProperty('label');
      expect(stat).toHaveProperty('value');
    });
  });

  it('should have valid architecture items', () => {
    const project = ProjectService.getProjectById('imsop');
    expect(project?.solution.architecture).toBeInstanceOf(Array);
    expect(project?.solution.architecture.length).toBeGreaterThan(0);
    project?.solution.architecture.forEach((item) => {
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('desc');
    });
  });

  it('should have valid tech stack', () => {
    const project = ProjectService.getProjectById('imsop');
    expect(project?.solution.techStack).toBeInstanceOf(Array);
    expect(project?.solution.techStack.length).toBeGreaterThan(0);
    project?.solution.techStack.forEach((stack) => {
      expect(stack).toHaveProperty('category');
      expect(stack).toHaveProperty('items');
      expect(stack.items).toBeInstanceOf(Array);
    });
  });

  it('should have valid implementation phases', () => {
    const project = ProjectService.getProjectById('imsop');
    expect(project?.implementation).toBeInstanceOf(Array);
    expect(project?.implementation.length).toBeGreaterThan(0);
    project?.implementation.forEach((phase) => {
      expect(phase).toHaveProperty('phase');
      expect(phase).toHaveProperty('duration');
      expect(phase).toHaveProperty('description');
    });
  });

  it('should have results array', () => {
    const project = ProjectService.getProjectById('imsop');
    expect(project?.results).toBeInstanceOf(Array);
    expect(project?.results.length).toBeGreaterThan(0);
    project?.results.forEach((result) => {
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });
  });

  it('should have consistent data across all projects', () => {
    const projectIds = ['imsop', 'sap-btp-ai-hub', 'smart-factory-iot'];
    projectIds.forEach((id) => {
      const project = ProjectService.getProjectById(id);
      expect(project?.title).toBeDefined();
      expect(project?.title.length).toBeGreaterThan(0);
      expect(project?.stats.length).toBeGreaterThanOrEqual(3);
      expect(project?.requirements.length).toBeGreaterThanOrEqual(3);
      expect(project?.results.length).toBeGreaterThanOrEqual(3);
    });
  });
});

/**
 * Test Suite: Data Validation
 * Ensures all project data meets quality standards
 */
describe('Project Data Validation', () => {
  it('should not have empty strings in project data', () => {
    const projectIds = ['imsop', 'sap-btp-ai-hub', 'smart-factory-iot'];
    projectIds.forEach((id) => {
      const project = ProjectService.getProjectById(id);
      expect(project?.title).toBeTruthy();
      expect(project?.subtitle).toBeTruthy();
      expect(project?.description).toBeTruthy();
      expect(project?.problemStatement).toBeTruthy();
    });
  });

  it('should have minimum required content in requirements', () => {
    const project = ProjectService.getProjectById('imsop');
    expect(project?.requirements.length).toBeGreaterThanOrEqual(3);
    project?.requirements.forEach((req) => {
      expect(req.length).toBeGreaterThan(10);
    });
  });

  it('should have meaningful results', () => {
    const project = ProjectService.getProjectById('imsop');
    expect(project?.results.length).toBeGreaterThanOrEqual(3);
    project?.results.forEach((result) => {
      expect(result.length).toBeGreaterThan(5);
    });
  });
});
