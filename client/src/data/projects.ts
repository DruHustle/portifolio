/**
 * Projects Data Module
 * 
 * This module follows SOLID principles:
 * - Single Responsibility: Manages project data structure and definitions
 * - Open/Closed: Easy to extend with new projects without modifying existing code
 * - Liskov Substitution: All projects conform to the same interface
 * - Interface Segregation: Projects only expose necessary properties
 * - Dependency Inversion: Components depend on this data interface, not hardcoded values
 */

export interface ProjectTag {
  label: string;
  color: "cyan" | "blue" | "purple" | "green" | "red" | "indigo";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  subtitle?: string;
  tags: ProjectTag[];
  link?: string;
  isExternal?: boolean;
  gradient: {
    from: string;
    to: string;
  };
}

export const projects: Project[] = [
  {
    id: "smart-factory-iot",
    title: "Smart Factory IoT",
    subtitle: "Real-time Industrial Monitoring & Control Platform",
    description:
      "Comprehensive industrial IoT platform featuring real-time dashboards, .NET microservices, and Azure IoT Hub integration for seamless device connectivity and monitoring.",
    tags: [
      { label: "React (Vite)", color: "cyan" },
      { label: ".NET 8", color: "cyan" },
      { label: "Azure", color: "cyan" },
      { label: "Kubernetes (AKS)", color: "cyan" },
      { label: "SignalR", color: "cyan" },
      { label: "Terraform", color: "cyan" },
      { label: "Docker", color: "cyan" },
      { label: "TypeScript", color: "cyan" },
      { label: "Entity Framework Core", color: "cyan" },
      { label: "MQTT", color: "cyan" },
    ],
    link: "/projects/smart-factory-iot",
    gradient: {
      from: "from-cyan-500",
      to: "to-blue-600",
    },
  },
  {
    id: "imsop",
    title: "IMSOP",
    subtitle: "Intelligent Multi-Cloud Supply Chain & Operations Platform",
    description:
      "Enterprise-grade supply chain platform with GraphQL API, .NET microservices, and multi-cloud support via Azure Arc, ensuring 99.9% uptime and high performance.",
    tags: [
      { label: ".NET 8", color: "purple" },
      { label: "Python", color: "cyan" },
      { label: "GraphQL", color: "purple" },
      { label: "Azure Arc", color: "purple" },
      { label: "Aiven PostgreSQL", color: "purple" },
      { label: "Redis", color: "purple" },
      { label: "Elasticsearch", color: "purple" },
      { label: "SignalR", color: "purple" },
      { label: "Entity Framework Core", color: "purple" },
      { label: "ML.NET", color: "purple" },
    ],
    link: "/projects/imsop",
    gradient: {
      from: "from-purple-500",
      to: "to-indigo-600",
    },
  },
  {
    id: "sap-btp-ai-hub",
    title: "SAP BTP AI Learning Hub",
    description:
      "Interactive learning platform with hands-on tutorials, AI playground, and architecture builder for mastering SAP Business Technology Platform AI solutions.",
    tags: [
      { label: "React", color: "blue" },
      { label: "Python", color: "cyan" },
      { label: "TypeScript", color: "blue" },
      { label: "SAP BTP", color: "blue" },
      { label: "AI/ML", color: "blue" },
      { label: "API Development", color: "blue" },
      { label: "GitHub Pages", color: "blue" },
    ],
    link: "/projects/sap-btp-ai-hub",
    gradient: {
      from: "from-blue-600",
      to: "to-indigo-700",
    },
  },
];

/**
 * Get a project by ID
 * Follows Open/Closed Principle: Can be extended with caching or API calls
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

/**
 * Get all projects
 * Follows Single Responsibility: Data retrieval is isolated
 */
export function getAllProjects(): Project[] {
  return projects;
}
