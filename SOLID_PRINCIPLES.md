# SOLID Principles Implementation

**Project**: Portfolio  
**Version:** 2.0.0
**Author:** Andrew Gotora
**Email:** [andrewgotora@yahoo.com](mailto:andrewgotora@yahoo.com)
**Last Updated**: January 9, 2026

---

## Overview

This document outlines how SOLID principles are implemented throughout the Portfolio application. The architecture follows clean code principles to ensure maintainability, extensibility, and testability.

---

## Single Responsibility Principle (SRP)

**Definition**: A class should have one, and only one, reason to change.

### Implementation

#### Services Layer
Each service handles a specific domain concern:

**ProjectService** (`client/src/services/projectService.ts`)
- **Responsibility**: Manage project data operations
- **Methods**: `getAllProjects()`, `getProjectById()`, `getIMSOPProject()`, `getSAPBTPAIHubProject()`, `getSmartFactoryIoTProject()`
- **Single Concern**: Project data retrieval and management

**NavigationService** (`client/src/services/navigationService.ts`)
- **Responsibility**: Manage navigation state
- **Methods**: `setFromFeaturedProjects()`, `isFromFeaturedProjects()`, `clearNavigationState()`, `checkReferrer()`, `initializeFromReferrer()`
- **Single Concern**: Navigation state persistence and detection

#### Hooks Layer
Custom hooks encapsulate specific state management concerns:

- `useNavigationState`: Manages navigation button visibility state
- `useImagePath`: Handles image path resolution
- `useMobile`: Detects mobile viewport
- `useComposition`: Manages component composition state
- `usePersistFn`: Persists function references

#### Components Layer
Components focus solely on presentation:

- Each component renders specific UI elements
- No business logic embedded in components
- Props-driven rendering

---

## Open/Closed Principle (OCP)

**Definition**: Software entities should be open for extension but closed for modification.

### Implementation

#### Project Registry Pattern
The `ProjectService` uses a registry pattern that allows adding new projects without modifying existing code:

```typescript
static getProjectById(projectId: string): ProjectData | null {
  const projects: Record<string, () => ProjectData> = {
    'imsop': this.getIMSOPProject,
    'sap-btp-ai-hub': this.getSAPBTPAIHubProject,
    'smart-factory-iot': this.getSmartFactoryIoTProject,
  };
  
  const projectGetter = projects[projectId];
  return projectGetter ? projectGetter.call(this) : null;
}
```

**Extension**: Add new projects by adding entries to the registry without modifying the core logic.

#### Navigation Service Extensibility
The `NavigationService` can be extended with new navigation patterns:

```typescript
// Easy to add new navigation detection methods
static checkCustomReferrer(): boolean {
  // New detection logic
}
```

---

## Liskov Substitution Principle (LSP)

**Definition**: Derived classes must be substitutable for their base classes.

### Implementation

#### TypeScript Interfaces
All services and hooks return consistent types that can be substituted:

```typescript
interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  // ... consistent interface
}
```

**Guarantee**: Any function expecting `ProjectData` can receive output from any project getter method.

#### Component Props
Component prop interfaces ensure consistent contracts:

```typescript
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}
```

---

## Interface Segregation Principle (ISP)

**Definition**: Clients should not be forced to depend on interfaces they don't use.

### Implementation

#### Focused Interfaces
Each interface is specific to its use case:

**NavigationState** (minimal interface)
```typescript
interface NavigationState {
  fromFeaturedProjects: boolean;
}
```

**ProjectData** (comprehensive but cohesive)
```typescript
interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  stats: Stat[];
  problemStatement: string;
  requirements: string[];
  solution: Solution;
  implementation: Implementation[];
  results: string[];
}
```

#### Hook Return Types
Hooks return only what consumers need:

```typescript
// useNavigationState returns only showBackButton
function useNavigationState(): { showBackButton: boolean }

// useMobile returns only isMobile
function useMobile(): boolean
```

---

## Dependency Inversion Principle (DIP)

**Definition**: High-level modules should not depend on low-level modules. Both should depend on abstractions.

### Implementation

#### Service Abstractions
Components depend on service interfaces, not implementations:

```typescript
// Component depends on service interface
import { ProjectService } from '@/services/projectService';

// Component uses service methods without knowing implementation details
const project = ProjectService.getProjectById(id);
```

#### Context Providers
React Context provides dependency injection:

```typescript
// ThemeContext provides theme abstraction
const { theme, setTheme } = useTheme();

// Components don't know how theme is stored or managed
```

#### Hook Abstractions
Hooks abstract state management details:

```typescript
// Component depends on hook interface
const { showBackButton } = useNavigationState();

// Component doesn't know about sessionStorage or referrer checking
```

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         Components                           │
│                    (Presentation Layer)                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Home    │  │  IMSOP   │  │Learning H│  │   IoT    │   │
│  │  Page    │  │  Detail  │  │  Detail  │  │  Detail  │   │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘   │
└───────┼─────────────┼─────────────┼─────────────┼──────────┘
        │             │             │             │
        └─────────────┴─────────────┴─────────────┘
                      │
        ┌─────────────┴─────────────┐
        │                           │
┌───────▼────────┐          ┌───────▼────────┐
│     Hooks      │          │    Services    │
│  (State Mgmt)  │          │ (Business Logic│
│                │          │                │
│ useNavigation  │◄─────────┤ Navigation     │
│ useImagePath   │          │ Service        │
│ useMobile      │          │                │
│ useComposition │          │ Project        │
└────────────────┘          │ Service        │
                            └────────────────┘
                                    │
                            ┌───────▼────────┐
                            │   Data Layer   │
                            │ (sessionStorage│
                            │  localStorage) │
                            └────────────────┘
```

---

## Benefits of SOLID Implementation

### Maintainability
- Clear separation of concerns makes code easy to understand
- Changes to one module don't affect others
- Easy to locate and fix bugs

### Testability
- Services can be tested independently
- Hooks can be tested in isolation
- Components can be tested with mocked dependencies

### Extensibility
- New projects can be added without modifying existing code
- New navigation patterns can be added easily
- New hooks and services can be created following established patterns

### Reusability
- Services can be reused across components
- Hooks encapsulate reusable logic
- Components are composable

---

## Code Quality Metrics

- **Service Cohesion**: High (each service has single responsibility)
- **Component Coupling**: Low (components depend on abstractions)
- **Interface Segregation**: Excellent (focused interfaces)
- **Dependency Direction**: Correct (depends on abstractions)
- **Extensibility**: High (open for extension, closed for modification)

---

**Conclusion**: The Portfolio application demonstrates strong SOLID principles implementation with clear separation of concerns, focused responsibilities, and proper abstraction layers. The architecture is maintainable, testable, and extensible.
