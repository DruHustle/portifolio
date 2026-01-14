/**
 * Project Data Service
 * Implements Single Responsibility Principle by separating data from components
 */

export interface ProjectStat {
  label: string;
  value: string;
  icon: any;
}

export interface ArchitectureItem {
  title: string;
  desc: string;
  icon: any;
}

export interface TechStackItem {
  category: string;
  items: string[];
}

export interface ImplementationPhase {
  phase: string;
  duration: string;
  description: string;
}

export interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  stats: ProjectStat[];
  problemStatement: string;
  requirements: string[];
  solution: {
    architecture: ArchitectureItem[];
    techStack: TechStackItem[];
  };
  implementation: ImplementationPhase[];
  results: string[];
}

/**
 * Project service - handles all project-related data operations
 * Follows Dependency Inversion Principle by exposing interfaces
 */
export class ProjectService {
  /**
   * Get project data by ID
   * @param projectId - The project identifier
   * @returns Project data or null if not found
   */
  static getProjectById(projectId: string): ProjectData | null {
    const projects: Record<string, ProjectData> = {
      imsop: this.getIMSOPProject(),
      'sap-btp-ai-hub': this.getSAPBTPProject(),
      'smart-factory-iot': this.getSmartFactoryIoTProject(),
    };

    return projects[projectId] || null;
  }

  private static getIMSOPProject(): ProjectData {
    return {
      title: 'IMSOP',
      subtitle: 'Intelligent Multi-Cloud Supply Chain & Operations Platform',
      description:
        'An enterprise-grade, cloud-native platform designed for real-time supply chain visibility, predictive analytics, and intelligent automation. Built with domain-driven design principles across seven bounded contexts, serving 10M+ requests per day with 99.99% uptime SLA.',
      stats: [
        { label: 'Daily Requests', value: '10M+', icon: null },
        { label: 'Uptime SLA', value: '99.99%', icon: null },
        { label: 'Cost Reduction', value: '35%', icon: null },
      ],
      problemStatement:
        'The organization faced critical challenges in managing legacy monolithic systems that couldn\'t scale with growing demand. Peak traffic loads exceeding 5M requests per day caused frequent outages and high operational costs.',
      requirements: [
        'Handle 10M+ requests per day with sub-100ms latency',
        'Achieve 99.99% uptime SLA across multiple regions',
        'Reduce infrastructure costs by 30-40%',
        'Support multi-cloud strategy (Azure + AWS)',
      ],
      solution: {
        architecture: [
          { title: 'Identity', desc: 'OAuth 2.0, RBAC, managed identities', icon: null },
          { title: 'Ingestion', desc: 'REST APIs, Kafka streams, WebSockets', icon: null },
          { title: 'Operations', desc: 'Shipment tracking, state machines', icon: null },
          { title: 'Analytics', desc: 'Data processing, ML model inference', icon: null },
          { title: 'Prediction', desc: 'Delay prediction, demand forecasting', icon: null },
          { title: 'AI Assistant', desc: 'Natural language chatbot', icon: null },
          { title: 'Reporting', desc: 'GraphQL API, real-time dashboards', icon: null },
        ],
        techStack: [
          { category: 'Backend', items: ['.NET Core 8', 'Python 3.11', 'FastAPI', 'GraphQL'] },
          { category: 'Data', items: ['PostgreSQL', 'Azure SQL', 'MongoDB', 'Redis'] },
          { category: 'Infrastructure', items: ['Kubernetes (AKS)', 'Docker', 'Terraform', 'Azure Bicep'] },
          { category: 'DevOps', items: ['Azure DevOps', 'GitHub Actions', 'ELK Stack', 'Prometheus'] },
        ],
      },
      implementation: [
        {
          phase: 'Foundation',
          duration: 'Weeks 1-4',
          description: 'Set up cloud infrastructure, establish CI/CD pipelines, and deploy initial microservices framework.',
        },
        {
          phase: 'Core Services',
          duration: 'Weeks 5-12',
          description: 'Develop and deploy core business services with event-driven communication using Azure Service Bus.',
        },
        {
          phase: 'Optimization',
          duration: 'Weeks 13-16',
          description: 'Integrate all services, optimize performance, and implement distributed tracing with App Insights.',
        },
        {
          phase: 'Production',
          duration: 'Weeks 17-20',
          description: 'Deploy to production, implement security hardening, and establish operational procedures.',
        },
      ],
      results: [
        '10M+ requests per day with sub-100ms latency',
        '99.99% uptime SLA across all services',
        '35% infrastructure cost reduction',
        'Deployment time reduced from weeks to hours',
      ],
    };
  }

  private static getSAPBTPProject(): ProjectData {
    return {
      title: 'Learning Hub',
      subtitle: 'Enterprise AI Education Platform',
      description:
        'An interactive, comprehensive learning platform designed for mastering AI business solutions on using different AI technologies. The platform provides hands-on tutorials, best practices, and resources for developers, architects, and business professionals.',
      stats: [
        { label: 'Tutorials', value: '6+', icon: null },
        { label: 'Learning Paths', value: '3', icon: null },
        { label: 'Interactive Tools', value: '4+', icon: null },
      ],
      problemStatement:
        'Organizations face significant challenges in adopting AI solutions due to a lack of comprehensive, hands-on learning resources and a steep learning curve for AI technologies. There is a need for an interactive platform that provides practical tutorials and tools to facilitate learning and experimentation with AI in business contexts.',
      requirements: [
        'Provide comprehensive tutorials for all skill levels',
        'Create interactive playground for LLM experimentation',
        'Enable hands-on learning with code and diagrams',
        'Deliver production-ready, responsive user interface',
      ],
      solution: {
        architecture: [
          { title: 'Frontend', desc: 'React 19 with TypeScript', icon: null },
          { title: 'Styling', desc: 'Tailwind CSS 4', icon: null },
          { title: 'UI Components', desc: 'shadcn/ui library', icon: null },
          { title: 'Animations', desc: 'Framer Motion', icon: null },
          { title: 'Code', desc: 'Syntax highlighting', icon: null },
          { title: 'Diagrams', desc: 'Mermaid integration', icon: null },
          { title: 'Routing', desc: 'Wouter for navigation', icon: null },
        ],
        techStack: [
          { category: 'Frontend', items: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'shadcn/ui'] },
          { category: 'Tooling', items: ['Vite', 'pnpm', 'ESLint', 'Prettier'] },
          { category: 'Libraries', items: ['Wouter', 'Framer Motion', 'Mermaid'] },
          { category: 'Deployment', items: ['GitHub Pages', 'GitHub Actions'] },
        ],
      },
      implementation: [
        {
          phase: 'Foundation',
          duration: 'Weeks 1-2',
          description: 'Establish project structure, design system, and component library using React and Tailwind.',
        },
        {
          phase: 'Tutorial System',
          duration: 'Weeks 3-5',
          description: 'Develop tutorial content structure and rendering system with markdown support.',
        },
        {
          phase: 'Interactive Features',
          duration: 'Weeks 6-7',
          description: 'Build interactive playground and architecture builder with Mermaid integration.',
        },
        {
          phase: 'Polish',
          duration: 'Weeks 8-9',
          description: 'Optimize performance, add animations, and refine UX for all device sizes.',
        },
      ],
      results: [
        '6+ comprehensive tutorials delivered',
        '98+ Lighthouse performance score',
        'Interactive playground and quiz system',
        'Fully responsive mobile-first design',
      ],
    };
  }

  private static getSmartFactoryIoTProject(): ProjectData {
    return {
      title: 'Smart Factory IoT Dashboard',
      subtitle: 'Real-Time Industrial IoT Monitoring & Analytics Platform',
      description:
        'A comprehensive IoT dashboard for smart manufacturing environments featuring real-time sensor data streaming, automated alert notifications, and device grouping capabilities. Built with modern web technologies and WebSocket for live updates.',
      stats: [
        { label: 'Real-Time Updates', value: 'WebSocket', icon: null },
        { label: 'Notifications', value: 'Email/SMS', icon: null },
        { label: 'Device Groups', value: 'Zones/Lines', icon: null },
      ],
      problemStatement:
        'Manufacturing facilities require real-time visibility into equipment status, environmental conditions, and production metrics. Traditional systems lack live updates, flexible alerting, and the ability to organize devices by production zones.',
      requirements: [
        'Real-time sensor data streaming without manual refresh',
        'Automated email/SMS notifications when thresholds are exceeded',
        'Device grouping by zones and production lines',
        'Batch operations and grouped analytics for device management',
      ],
      solution: {
        architecture: [
          { title: 'Frontend', desc: 'React + TypeScript + Vite', icon: null },
          { title: 'Backend', desc: 'Node.js + Express + TypeScript', icon: null },
          { title: 'Real-Time', desc: 'WebSocket (ws package)', icon: null },
          { title: 'Database', desc: 'MySQL with Drizzle ORM', icon: null },
          { title: 'Notifications', desc: 'Email/SMS alert system', icon: null },
          { title: 'UI Design', desc: 'IMSOP-inspired deep space theme', icon: null },
          { title: 'Styling', desc: 'TailwindCSS + shadcn/ui', icon: null },
        ],
        techStack: [
          { category: 'Frontend', items: ['React 19', 'TypeScript', 'Vite', 'TailwindCSS'] },
          { category: 'Backend', items: ['Node.js', 'Express', 'TypeScript', 'WebSocket'] },
          { category: 'Database', items: ['MySQL', 'Drizzle ORM'] },
          { category: 'UI', items: ['shadcn/ui', 'Framer Motion', 'Recharts'] },
        ],
      },
      implementation: [
        {
          phase: 'Core Dashboard',
          duration: 'Weeks 1-2',
          description: 'Build foundational dashboard with device management, sensor data visualization, and alert monitoring.',
        },
        {
          phase: 'WebSocket Integration',
          duration: 'Weeks 3-4',
          description: 'Implement real-time WebSocket service for live sensor data streaming and automatic chart updates.',
        },
        {
          phase: 'Notification System',
          duration: 'Weeks 5-6',
          description: 'Develop email/SMS notification service with threshold-based alerting and queue management.',
        },
        {
          phase: 'Device Grouping',
          duration: 'Weeks 7-8',
          description: 'Add device grouping functionality for zones/production lines with batch operations and aggregated analytics.',
        },
      ],
      results: [
        'Real-time WebSocket updates for live sensor data',
        'Automated email/SMS alerts with threshold monitoring',
        'Device grouping with batch operations',
        'IMSOP-inspired UI with deep space blue theme',
      ],
    };
  }
}
