Smart Factory IoT - System Architecture
Overview
The Smart Factory IoT platform is a comprehensive real-time industrial monitoring and control system. It features a React (Vite) frontend for interactive dashboards, a .NET backend for robust API and business logic, and integration with Azure IoT Hub for device connectivity. The architecture emphasizes robustness through microservices and containerization, security via Microsoft Entra ID and RBAC, extensibility using DDD and SOLID principles, and high performance with caching, asynchronous processing, and optimized queries.
System Architecture Diagram
mermaidgraph TB
    subgraph Client["🖥️ Client Layer"]
        UI["React (Vite) Dashboard<br/>Real-time UI Updates"]
        Auth["Authentication<br/>OAuth 2.0 Tokens"]
    end
    
    subgraph Network["🌐 Communication Layer"]
        REST["REST API<br/>Device Management (ASP.NET Core)"]
        WS["SignalR<br/>Real-time Streaming"]
        APIM["Azure API Management<br/>Gateway & Rate Limiting"]
    end
    
    subgraph Server["⚙️ Backend Layer"]
        Router["ASP.NET Controllers<br/>Type-safe API (Swagger)"]
        Auth_Service["Authentication<br/>Service (Entra ID)"]
        Device_Mgmt["Device<br/>Management (DDD)"]
        Analytics["Analytics<br/>Engine (C#)"]
    end
    
    subgraph Data["💾 Data Layer"]
        DB["Aiven MySQL<br/>Persistent Storage (Managed)"]
        Cache["Azure Redis Cache<br/>Performance"]
    end
    
    subgraph Services["🔧 Service Layer"]
        Notifications["Azure Logic Apps<br/>Notifications"]
        Device_Group["Device<br/>Grouping"]
        OTA["OTA Update<br/>Manager (IoT Hub)"]
        Functions["Azure Functions<br/>Async Tasks"]
    end
    
    subgraph IoT["📡 IoT Layer"]
        Hub["Azure IoT Hub<br/>Device Connectivity"]
        Devices["IoT Devices<br/>Telemetry & C2D"]
    end
    
    subgraph Infra["🏗️ Infrastructure"]
        K8s["AKS (Kubernetes)<br/>Orchestration"]
        Portainer["Portainer<br/>K8s Management"]
        Docker["Docker Containers<br/>Microservices"]
    end
    
    Client -->|HTTPS/WS| Network
    Network -->|Secure Calls| Server
    Server -->|EF Core| Data
    Server -->|Triggers| Services
    Services -->|Alerts| Notifications
    IoT -->|MQTT/AMQP| Hub
    Hub -->|Routing| Server
    Infra -->|Hosts| Server
    Infra -->|Provisions| Data
    Infra -->|Deploys| Client
    
    style Client fill:#00d9ff,stroke:#0a0e27,color:#0a0e27,stroke-width:2px
    style Network fill:#00f0d9,stroke:#0a0e27,color:#0a0e27,stroke-width:2px
    style Server fill:#7c3aed,stroke:#0a0e27,color:#fff,stroke-width:2px
    style Data fill:#06b6d4,stroke:#0a0e27,color:#0a0e27,stroke-width:2px
    style Services fill:#0ea5e9,stroke:#0a0e27,color:#fff,stroke-width:2px
    style IoT fill:#f97316,stroke:#0a0e27,color:#fff,stroke-width:2px
    style Infra fill:#a855f7,stroke:#0a0e27,color:#fff,stroke-width:2px
Component Details
Client Layer

React (Vite) Dashboard: Interactive UI for real-time monitoring, built with Vite for fast development and bundling. Deployed to Vercel for serverless hosting and automatic scaling.
Authentication: OAuth 2.0 with Microsoft Entra ID for secure token-based auth.
State Management: React Context + TanStack Query for data fetching.

Communication Layer

REST API: Device CRUD operations, configuration via ASP.NET Core Web API.
SignalR: Real-time sensor data streaming integrated with Azure SignalR Service for scalability.
Azure API Management: Gateway for API versioning, rate limiting, and security policies.

Backend Layer

ASP.NET Controllers: Centralized API endpoint management with OpenAPI/Swagger for documentation.
Authentication Service: Entra ID integration with JWT validation.
Device Management: CRUD operations and device grouping using Domain-Driven Design (DDD) aggregates and repositories.
Analytics Engine: OEE calculations and reporting in C#.

Data Layer

Aiven MySQL: Managed MySQL database for persistent storage, provisioned via Terraform for cross-cloud compatibility.
Azure Redis Cache: In-memory caching for high-performance reads.

Service Layer

Azure Logic Apps: Workflow automation for notifications (Email/SMS via Microsoft Graph API).
Device Grouping: Batch operations and analytics aggregation.
OTA Update Manager: Firmware updates via Azure IoT Hub direct methods.
Azure Functions: Serverless async tasks for data processing, triggered by IoT Hub or queues.

IoT Layer

Azure IoT Hub: Central hub for device registration, telemetry ingestion (D2C), commands (C2D), and twins for metadata sync.
IoT Devices: Connect via MQTT/AMQP, with SDKs for secure communication.

Infrastructure Layer

Docker: Containerization of .NET backend microservices for portability.
Kubernetes (AKS): Orchestration for backend services, ensuring high availability and auto-scaling.
Portainer: Web-based management for Kubernetes clusters, simplifying operations.

Data Flow
Real-time Monitoring Flow
textDevice → Azure IoT Hub (Telemetry) → Azure Function/ASP.NET → Aiven MySQL
                                                ↓
                                            React Dashboard ← SignalR Updates
Alert Flow
textSensor Reading (IoT Hub) → Threshold Check (.NET) → Alert Generated
                                                 ↓
                                        Azure Logic Apps
                                                 ↓
                                        User Notification (Graph API)
Device Management Flow
textUser Action (React) → REST API (APIM) → .NET Service
                                        ↓
                                    Aiven MySQL Update (EF Core)
                                        ↓
                                    Response to Client
Technology Stack

Layer,Technology,Purpose
Frontend,React 19 (Vite),UI Framework & Bundling
Frontend,TypeScript,Type Safety
Frontend,Tailwind CSS,Styling
Frontend,TanStack Query,Data Fetching
Backend,.NET 8 (ASP.NET Core),Runtime & Web Framework
Backend,Entity Framework Core,ORM for MySQL
Backend,SignalR,Real-time
Database,Aiven MySQL,Managed DB
IoT,Azure IoT Hub,Device Connectivity
Infra,Docker/Kubernetes (AKS),Containerization & Orchestration
Infra,Portainer,K8s Management
IaC,Azure Bicep/Terraform,Resource Provisioning
CI/CD,GitHub Actions,Automation
Monitoring,Azure Monitor/App Insights,Logging & Alerts
Security,Microsoft Entra ID/Key Vault,Auth & Secrets
Deployment,"Vercel (Frontend), Render (Backend Fallback)",Hosting























































































LayerTechnologyPurposeFrontendReact 19 (Vite)UI Framework & BundlingFrontendTypeScriptType SafetyFrontendTailwind CSSStylingFrontendTanStack QueryData FetchingBackend.NET 8 (ASP.NET Core)Runtime & Web FrameworkBackendEntity Framework CoreORM for MySQLBackendSignalRReal-timeDatabaseAiven MySQLManaged DBIoTAzure IoT HubDevice ConnectivityInfraDocker/Kubernetes (AKS)Containerization & OrchestrationInfraPortainerK8s ManagementIaCAzure Bicep/TerraformResource ProvisioningCI/CDGitHub ActionsAutomationMonitoringAzure Monitor/App InsightsLogging & AlertsSecurityMicrosoft Entra ID/Key VaultAuth & SecretsDeploymentVercel (Frontend), Render (Backend Fallback)Hosting
Key Features
1. Real-time Monitoring

Live device status via SignalR and IoT Hub.
Telemetry streaming with low latency.
Automatic reconnection.

2. Alert Management

Threshold-based alerts processed in .NET.
Severity levels with Logic Apps notifications.

3. Device Management

CRUD with grouping, using DDD.
Health monitoring via IoT Hub.

4. Analytics

OEE calculation in C#.
Historical analysis with cached queries.

5. Firmware Management

OTA via IoT Hub and Blob Storage.
Status tracking.

Security Architecture
Authentication

OAuth 2.0 with Entra ID.
Secure hashing (bcrypt) as fallback.
Token refresh.

Authorization

RBAC integrated with Entra ID.
Managed Identities for services.
Policy-driven access.

Data Protection

TLS encryption.
Key Vault for secrets.
Input validation.

Scalability Considerations
Horizontal Scaling

Stateless .NET services in K8s.
IoT Hub scaling units.
Redis for distributed caching.

Performance Optimization

EF Core query optimization.
AsyncAPI for events.
Load balancing in AKS.

Monitoring & Observability

App Insights for telemetry.
Log Analytics for queries.
Alerts via Azure Monitor.

Deployment Architecture
text┌─────────────────────────────────────┐
│     Production Environment          │
├─────────────────────────────────────┤
│  Azure API Management (Gateway)     │
│         ↓                           │
│  ┌─────────────────────────────┐   │
│  │  AKS Cluster (Kubernetes)   │   │
│  │  - .NET Pods (Docker)       │   │
│  │  - SignalR Service          │   │
│  │  - Portainer UI             │   │
│  └─────────────────────────────┘   │
│         ↓                           │
│  ┌─────────────────────────────┐   │
│  │  Data Services              │   │
│  │  - Aiven MySQL              │   │
│  │  - Azure Redis Cache        │   │
│  └─────────────────────────────┘   │
│         ↓                           │
│  ┌─────────────────────────────┐   │
│  │  IoT & Serverless           │   │
│  │  - Azure IoT Hub            │   │
│  │  - Azure Functions          │   │
│  │  - Logic Apps               │   │
│  └─────────────────────────────┘   │
│         ↓                           │
│  Vercel (React Frontend)            │
└─────────────────────────────────────┘
IaC: Provisioned with Bicep for Azure resources, Terraform for Aiven DB.
CI/CD: GitHub Actions for build/deploy, with TDD via xUnit.
Development Workflow

Local Development
Docker Compose for local stack.
Vite dev server.
EF Core migrations.

Testing
Unit/Integration tests (xUnit).
TDD practices.
Swagger for API testing.

Deployment
GitHub Actions pipeline.
Bicep/Terraform apply.
Kubernetes manifests via Helm.


SOLID Principles Implementation
Single Responsibility

Each microservice/Domain has one purpose.

Open/Closed

Extensible via interfaces.

Liskov Substitution

Consistent behaviors.

Interface Segregation

Focused interfaces.

Dependency Inversion

DI in .NET.

Performance Metrics

API Response Time: < 200ms (p95)
SignalR Latency: < 100ms
Dashboard Load Time: < 2s
DB Query Time: < 50ms (p95)
Memory Usage: < 512MB/pod
CPU Usage: < 50% under load

Future Enhancements

Machine Learning
Azure ML for predictive maintenance.

Advanced Analytics
Power BI integration.

Integration
Kafka for event streaming.

Scalability
Multi-region AKS.