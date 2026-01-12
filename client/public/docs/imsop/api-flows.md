IMSOP - API Flows & Sequences
Authentication Flow
mermaidsequenceDiagram
    participant User as User/Client
    participant Auth as Auth Service (.NET Core)
    participant DB as Database (Aiven PostgreSQL)
    participant API as API Gateway (Azure API Management)
    
    User->>Auth: POST /auth/login<br/>(email, password)
    Auth->>DB: Query user by email (EF Core)
    DB-->>Auth: User record
    Auth->>Auth: Verify password hash (BCrypt)
    Auth->>Auth: Generate JWT token (Microsoft.IdentityModel.Tokens)
    Auth-->>User: JWT token + Refresh token
    
    User->>API: Request with JWT
    API->>Auth: Validate token
    Auth-->>API: Token valid + User info
    API-->>User: Response with data
Supply Chain Order Flow
mermaidsequenceDiagram
    participant User as User
    participant API as API Service (.NET Core)
    participant Queue as Message Queue (Azure Service Bus)
    participant Supplier as Supplier System
    participant Notification as Notification Service (Azure Functions)
    
    User->>API: Create Purchase Order
    API->>API: Validate order data (FluentValidation)
    API->>API: Check inventory (EF Core)
    API->>Queue: Enqueue PO creation event
    API-->>User: Order created (ID)
    
    Queue->>Supplier: Send PO to supplier (Async)
    Supplier-->>Queue: PO acknowledged
    
    Queue->>Notification: Send email notification
    Notification->>User: Email sent (SendGrid via Azure)
    
    Supplier->>API: Update shipment status
    API->>Queue: Enqueue shipment event
    Queue->>Notification: Send tracking update
    Notification->>User: SMS/Email update (Twilio via Azure)
Real-time Analytics Flow
mermaidsequenceDiagram
    participant Device as IoT Device
    participant Collector as Data Collector (.NET Core Worker)
    participant Cache as Redis Cache (Aiven Redis)
    participant Analytics as Analytics Engine (Azure Functions)
    participant Dashboard as Dashboard (React/Vite)
    
    Device->>Collector: Send sensor data
    Collector->>Cache: Store in Redis (StackExchange.Redis)
    Collector->>Analytics: Trigger analysis (HTTP Trigger)
    
    Analytics->>Analytics: Calculate metrics (ML.NET)
    Analytics->>Cache: Update aggregates
    
    Dashboard->>Cache: SignalR subscribe
    Cache-->>Dashboard: Real-time updates
    Dashboard->>Dashboard: Render charts (Recharts)
Multi-Cloud Integration Flow
Note: Shifted to Azure-centric with optional multi-cloud via Azure Arc.
mermaidsequenceDiagram
    participant Client as Client
    participant Router as Cloud Router (.NET Core)
    participant Azure as Azure Service
    participant Aggregator as Result Aggregator (Azure Functions)
    
    Client->>Router: Request data
    Router->>Router: Determine provider (Azure preferred)
    
    Router->>Azure: API Call (Azure SDK)
    Azure-->>Router: Response
    
    Router->>Aggregator: Aggregate results
    Aggregator-->>Client: Combined response
Inventory Management Flow
mermaidsequenceDiagram
    participant User as Warehouse User
    participant API as Inventory API (.NET Core)
    participant DB as Database (Aiven PostgreSQL)
    participant Cache as Cache (Aiven Redis)
    participant Notification as Alert Service (Azure Functions)
    
    User->>API: Scan product barcode
    API->>DB: Get product details (EF Core)
    DB-->>API: Product info
    API->>API: Calculate available quantity
    API->>Cache: Update inventory cache (IDistributedCache)
    
    alt Quantity below reorder level
        API->>Notification: Trigger reorder alert (Queue Trigger)
        Notification->>User: Alert notification
    end
    
    API-->>User: Inventory updated
Shipment Tracking Flow
mermaidsequenceDiagram
    participant Carrier as Carrier System
    participant API as Tracking API (.NET Core)
    participant DB as Database (Aiven PostgreSQL)
    participant Cache as Cache (Aiven Redis)
    participant Client as Client App (React/Vite)
    
    Carrier->>API: POST /shipments/{id}/tracking
    API->>DB: Update shipment location (EF Core)
    API->>Cache: Update tracking cache
    API->>Cache: Publish SignalR event
    
    Client->>Cache: Subscribe to shipment
    Cache-->>Client: Location update
    Client->>Client: Update map view
    
    alt Delivery confirmed
        API->>DB: Update shipment status
        API->>Cache: Publish delivery event
        Cache-->>Client: Delivery notification
    end
User Permission Flow
mermaidsequenceDiagram
    participant User as User
    participant API as API Service (.NET Core)
    participant AuthService as Auth Service (Microsoft Entra ID)
    participant DB as Database (Aiven PostgreSQL)
    participant Cache as Permission Cache (Aiven Redis)
    
    User->>API: Request resource
    API->>AuthService: Check permissions (Graph API)
    AuthService->>Cache: Get user permissions (IDistributedCache)
    
    alt Permissions cached
        Cache-->>AuthService: Cached permissions
    else Permissions not cached
        AuthService->>DB: Query user roles (EF Core)
        DB-->>AuthService: Roles data
        AuthService->>DB: Query role permissions
        DB-->>AuthService: Permissions data
        AuthService->>Cache: Cache permissions
    end
    
    AuthService->>AuthService: Evaluate access
    
    alt Access granted
        AuthService-->>API: Authorized
        API-->>User: Resource data
    else Access denied
        AuthService-->>API: Forbidden
        API-->>User: 403 Error
    end
Report Generation Flow
mermaidsequenceDiagram
    participant User as User
    participant API as Report API (.NET Core)
    participant Queue as Job Queue (Azure Service Bus)
    participant Engine as Report Engine (Azure Functions)
    participant Storage as File Storage (Azure Blob Storage)
    participant Notification as Email Service (Azure Functions)
    
    User->>API: Request report
    API->>API: Validate parameters (FluentValidation)
    API->>Queue: Enqueue report job
    API-->>User: Report queued
    
    Queue->>Engine: Process report (Queue Trigger)
    Engine->>Engine: Aggregate data (EF Core)
    Engine->>Engine: Generate PDF (Syncfusion/Dapper)
    Engine->>Storage: Upload file (Azure SDK)
    Storage-->>Engine: File URL
    
    Engine->>Notification: Send email
    Notification->>User: Email with link
    
    User->>Storage: Download report
    Storage-->>User: PDF file
API Response Formats
Success Response
JSON{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Example",
    "createdAt": "2024-01-10T10:00:00Z"
  },
  "meta": {
    "timestamp": "2024-01-10T10:00:00Z",
    "version": "1.0"
  }
}
Error Response
JSON{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input parameters",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  },
  "meta": {
    "timestamp": "2024-01-10T10:00:00Z",
    "requestId": "req-12345"
  }
}
Paginated Response
JSON{
  "success": true,
  "data": [
    { "id": "1", "name": "Item 1" },
    { "id": "2", "name": "Item 2" }
  ],
  "pagination": {
    "page": 1,
    "pageSize": 20,
    "total": 100,
    "totalPages": 5,
    "hasNextPage": true,
    "hasPreviousPage": false
  }
}
Rate Limiting Configuration



































Endpoint TypeRequests/MinuteBurstAuthentication510Read Operations60100Write Operations3050Bulk Operations1020Search3050
Timeout Configuration





























OperationTimeoutAPI Request30sDatabase Query10sFile Upload5mReport Generation10mWebSocket Connection30s (idle)
API Versioning Strategy
URL-based Versioning
text/api/v1/orders
/api/v2/orders
Header-based Versioning
textAccept: application/vnd.imsop.v1+json
Deprecation Policy

Announce deprecation 6 months in advance
Maintain deprecated version for 12 months
Provide migration guide
Support both versions during transition

Error Handling Flow
mermaidgraph TD
    A["API Request"] --> B{"Validate Input"}
    B -->|Invalid| C["Return 400 Error"]
    B -->|Valid| D{"Check Auth"}
    D -->|Unauthorized| E["Return 401 Error"]
    D -->|Authorized| F{"Check Permissions"}
    F -->|Forbidden| G["Return 403 Error"]
    F -->|Allowed| H{"Process Request"}
    H -->|Success| I["Return 200 + Data"]
    H -->|Business Error| J["Return 422 Error"]
    H -->|Server Error| K["Return 500 Error"]
    
    C --> L["Log Error"]
    E --> L
    G --> L
    J --> L
    K --> L
    L --> M["Send Alert if Critical"]
WebSocket Connection Management
Connection Flow
text1. Client initiates SignalR connection
2. Server validates JWT token (Microsoft Entra ID)
3. Server subscribes client to channels
4. Server sends initial state
5. Client receives real-time updates
6. Connection maintained with heartbeat
7. Client disconnects or timeout
Message Format
JSON{
  "type": "update",
  "channel": "shipments:123",
  "event": "status_changed",
  "data": {
    "shipmentId": "123",
    "status": "in_transit",
    "location": "New York, NY"
  },
  "timestamp": "2024-01-10T10:00:00Z"
}
Data Aggregation Flow
mermaidsequenceDiagram
    participant Source1 as Data Source 1
    participant Source2 as Data Source 2
    participant Aggregator as Aggregation Service (.NET Core)
    participant Cache as Cache Layer (Aiven Redis)
    participant Dashboard as Dashboard (React/Vite)
    
    Source1->>Aggregator: Send data
    Source2->>Aggregator: Send data
    
    Aggregator->>Aggregator: Merge data
    Aggregator->>Aggregator: Calculate metrics (ML.NET)
    Aggregator->>Cache: Store aggregated data
    
    Dashboard->>Cache: Query metrics (SignalR)
    Cache-->>Dashboard: Aggregated data
    Dashboard->>Dashboard: Render visualizations
Multi-Device Grouping Flow
mermaidsequenceDiagram
    participant User as User
    participant API as Device API (.NET Core)
    participant DB as Database (Aiven PostgreSQL)
    participant Cache as Cache (Aiven Redis)
    
    User->>API: Create device group
    API->>DB: Insert group record (EF Core)
    API->>Cache: Cache group info
    
    User->>API: Add devices to group
    API->>DB: Insert group memberships
    API->>Cache: Update group cache
    
    User->>API: Query group status
    API->>Cache: Get group devices
    Cache-->>API: Device list
    API->>API: Aggregate device metrics
    API-->>User: Group status
Performance Optimization Strategies
Caching Strategy

Cache frequently accessed data (5 min TTL) using Aiven Redis
Cache user permissions (10 min TTL)
Cache product catalog (1 hour TTL)
Cache organization settings (1 day TTL)

Query Optimization

Use database indexes for common queries (EF Core LINQ)
Implement query result pagination
Use projection to select only needed fields
Batch related queries together (EF Core)

Async Processing

Queue long-running operations (Azure Service Bus)
Process reports asynchronously (Azure Functions)
Send notifications asynchronously
Archive data asynchronously

Load Distribution

Distribute requests across multiple servers (Azure App Service)
Use message queues for async tasks
Cache responses at CDN level (Azure CDN)
Implement request batching