Smart Factory IoT - API Flows & Sequences
Authentication Flow
mermaidsequenceDiagram
    participant Client as Client App (React/Vite)
    participant API as .NET Backend API
    participant DB as Azure SQL Database
    participant Auth as Microsoft Entra ID
    
    Client->>API: POST /api/auth/login<br/>{email, password}
    API->>Auth: Validate via OAuth 2.0
    Auth->>DB: Query user by email (synced)
    DB-->>Auth: User record
    Auth->>Auth: Verify credentials
    Auth-->>API: Token result
    
    alt Authentication Success
        API->>API: Generate/Return JWT
        API-->>Client: {token, user}
        Client->>Client: Store token in localStorage
    else Authentication Failed
        API-->>Client: 401 Unauthorized
        Client->>Client: Show error message
    end
Real-time Device Monitoring Flow
mermaidsequenceDiagram
    participant Device as IoT Device
    participant IoTHub as Azure IoT Hub
    participant Backend as .NET Backend Service
    participant DB as Azure SQL Database
    participant Dashboard as React Dashboard UI
    
    Device->>IoTHub: Connect via MQTT/AMQP
    IoTHub-->>Device: Connection established
    
    loop Every 5 seconds
        Device->>IoTHub: Send sensor telemetry
        IoTHub->>Backend: Route to Azure Function/ASP.NET (C2D/D2C)
        Backend->>DB: Store sensor_reading
        Backend->>Backend: Check thresholds (DDD Aggregate)
        
        alt Threshold Exceeded
            Backend->>DB: Create alert
            Backend->>IoTHub: Broadcast via SignalR/WebSocket
            IoTHub->>Dashboard: Real-time update (via SignalR hub)
            Dashboard->>Dashboard: Update UI
        else Within Range
            Backend->>IoTHub: Broadcast reading
            IoTHub->>Dashboard: Real-time update
        end
    end
    
    Device->>IoTHub: Disconnect
    IoTHub-->>Device: Connection closed
Alert Management Flow
mermaidsequenceDiagram
    participant Sensor as Sensor Reading
    participant Threshold as Threshold Check
    participant Alert as Alert Service (.NET)
    participant Notification as Azure Logic Apps
    participant User as User
    
    Sensor->>Threshold: New reading value (from IoT Hub)
    Threshold->>Threshold: Compare with limits
    
    alt Value out of range
        Threshold->>Alert: Create alert
        Alert->>Alert: Determine severity
        Alert->>Notification: Trigger workflow
        Notification->>User: Email/SMS alert (via Microsoft Graph)
        User->>User: Receive notification
        
        User->>Alert: Acknowledge alert (API call)
        Alert->>Alert: Mark as acknowledged
        
        User->>Alert: Resolve alert
        Alert->>Alert: Mark as resolved
    else Value in range
        Threshold-->>Sensor: No action
    end
Device Management Flow
mermaidsequenceDiagram
    participant UI as React Dashboard
    participant API as .NET REST API
    participant Service as Device Service (.NET)
    participant DB as Azure SQL Database
    participant Cache as Azure Redis Cache
    
    UI->>API: GET /api/devices
    API->>Cache: Check cache (Managed Identity)
    
    alt Cache hit
        Cache-->>API: Cached devices
    else Cache miss
        API->>Service: Fetch devices (DDD Repository)
        Service->>DB: Query devices (EF Core)
        DB-->>Service: Device records
        Service->>Cache: Update cache
        Service-->>API: Device list
    end
    
    API-->>UI: {devices: [...]}
    UI->>UI: Render device list
    
    UI->>API: POST /api/devices/update<br/>{id, data}
    API->>Service: Update device
    Service->>DB: Update record
    DB-->>Service: Updated device
    Service->>Cache: Invalidate cache
    Service-->>API: Updated device
    API-->>UI: {success: true}
    UI->>UI: Update UI
OTA Update Flow
mermaidsequenceDiagram
    participant Admin as Administrator
    participant API as .NET Backend API
    participant Device as IoT Device
    participant DB as Azure SQL Database
    participant Storage as Azure Blob Storage
    
    Admin->>API: POST /api/ota/deploy<br/>{version, devices}
    API->>DB: Create deployments
    API->>IoTHub: Notify device via Direct Method
    Device->>Device: Check update available
    
    Device->>Storage: Download firmware (SAS Token)
    Storage-->>Device: Firmware file
    Device->>Device: Verify checksum
    Device->>Device: Install firmware
    Device->>Device: Reboot
    
    Device->>API: POST /api/ota/reportStatus<br/>{status: completed} (via IoT Hub)
    API->>DB: Update deployment status
    DB-->>API: Updated
    API-->>Admin: Update complete (SignalR)
    Admin->>Admin: Receive notification
Analytics & Reporting Flow
mermaidsequenceDiagram
    participant Dashboard as React Dashboard
    participant API as .NET Analytics API
    participant Cache as Azure Redis Cache
    participant DB as Azure SQL Database
    
    Dashboard->>API: GET /api/analytics/oee<br/>{timeRange}
    API->>Cache: Check cache
    
    alt Cache valid
        Cache-->>API: Cached metrics
    else Cache expired
        API->>DB: Query sensor readings (EF Core)
        DB-->>API: Raw data
        API->>API: Calculate OEE (C# Logic)
        API->>API: Calculate availability
        API->>API: Calculate performance
        API->>API: Calculate quality
        API->>Cache: Store metrics
    end
    
    API-->>Dashboard: {oee, availability, performance, quality}
    Dashboard->>Dashboard: Render charts
Error Handling Flow
mermaidsequenceDiagram
    participant Client as React Client
    participant API as .NET API Server
    participant Handler as Error Handler (Middleware)
    participant Logger as Azure App Insights
    participant User as User
    
    Client->>API: Request
    API->>API: Process request
    
    alt Error occurs
        API->>Handler: Handle error
        Handler->>Logger: Log error details (Telemetry)
        Logger->>Logger: Store in logs
        
        alt Client error (4xx)
            Handler-->>Client: Error response
            Client->>User: Show error message
        else Server error (5xx)
            Handler->>Logger: Alert administrators
            Handler-->>Client: Generic error
            User->>User: See generic message
        end
    else Success
        API-->>Client: Success response
    end
WebSocket Connection Management
mermaidsequenceDiagram
    participant Client as React Client App
    participant WS as SignalR Hub (.NET)
    participant Heartbeat as Azure Function Heartbeat
    
    Client->>WS: Connect (SignalR)
    WS-->>Client: Connection established
    WS->>WS: Add to connection pool
    
    loop Every 30 seconds
        WS->>Heartbeat: Check connections
        Heartbeat->>Client: Ping
        Client-->>Heartbeat: Pong
    end
    
    alt Connection inactive
        Heartbeat->>WS: Connection timeout
        WS->>Client: Close connection
        Client->>Client: Attempt reconnect
    else Connection active
        Heartbeat->>WS: Connection healthy
    end
    
    Client->>WS: Disconnect
    WS->>WS: Remove from pool
    WS-->>Client: Disconnected
Data Aggregation Flow
mermaidsequenceDiagram
    participant Sensors as Multiple Sensors
    participant Aggregator as Azure Function Aggregator
    participant Processor as .NET Data Processor
    participant DB as Azure SQL Database
    participant Analytics as Analytics Engine (.NET)
    
    loop Every minute
        Sensors->>Aggregator: Send readings (via IoT Hub)
        Aggregator->>Aggregator: Collect all readings
        Aggregator->>Processor: Batch process (Queue Trigger)
        Processor->>Processor: Calculate averages
        Processor->>Processor: Detect anomalies
        Processor->>DB: Store aggregated data
        Processor->>Analytics: Update metrics
        Analytics->>Analytics: Recalculate KPIs
    end
Multi-Device Grouping Flow
mermaidsequenceDiagram
    participant UI as React Dashboard
    participant API as .NET API
    participant Service as Grouping Service (.NET DDD)
    participant DB as Azure SQL Database
    
    UI->>API: POST /api/devices/group<br/>{name, deviceIds}
    API->>Service: Create group
    Service->>DB: Insert group record (EF Core)
    Service->>DB: Insert group_members
    DB-->>Service: Success
    Service-->>API: Group created
    API-->>UI: {groupId, devices}
    
    UI->>API: POST /api/devices/group/batch<br/>{groupId, operation}
    API->>Service: Execute batch operation
    Service->>DB: Get group devices
    DB-->>Service: Device list
    
    loop For each device
        Service->>Service: Execute operation
        Service->>DB: Update device
    end
    
    Service-->>API: Operation complete
    API-->>UI: {success: true, updated: N}
API Response Format
Success Response
JSON{
  "data": {
    "id": 1,
    "name": "Device 1",
    "status": "online"
  }
}
Error Response
JSON{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid credentials"
  }
}
Rate Limiting

API Endpoints: 100 requests per minute per user (via Azure API Management)
SignalR/WebSocket: 1000 messages per minute per connection
File Upload: 10 MB per file, 100 MB per day

Timeout Configuration

Operation,Timeout
REST API Call,30 seconds
SignalR Connection,60 seconds
Database Query,10 seconds
File Upload,5 minutes
Device Firmware Download,30 minutes


























OperationTimeoutREST API Call30 secondsSignalR Connection60 secondsDatabase Query10 secondsFile Upload5 minutesDevice Firmware Download30 minutes
API Versioning

Current Version: v1
Endpoint Pattern: /api/v1/[controller]
Backward Compatibility: Maintained for 2 major versions
Deprecation Notice: 6 months before removal