Smart Factory IoT - Database Schema
Entity Relationship Diagram
mermaiderDiagram
    USERS ||--o{ DEVICES : manages
    USERS ||--o{ ALERTS : creates
    USERS ||--o{ ALERT_THRESHOLDS : sets
    DEVICES ||--o{ SENSOR_READINGS : generates
    DEVICES ||--o{ ALERTS : triggers
    DEVICES ||--o{ OTA_DEPLOYMENTS : receives
    ALERT_THRESHOLDS ||--o{ ALERTS : triggers
    OTA_VERSIONS ||--o{ OTA_DEPLOYMENTS : uses
    
    USERS {
        int id PK
        string email UK
        string password_hash
        string name
        string role
        timestamp created_at
        timestamp updated_at
    }
    
    DEVICES {
        int id PK
        string device_id UK
        string name
        string type
        string location
        string status
        int user_id FK
        json metadata
        timestamp last_seen
        timestamp created_at
        timestamp updated_at
    }
    
    SENSOR_READINGS {
        int id PK
        int device_id FK
        float temperature
        float humidity
        float pressure
        float vibration
        float power_consumption
        float rpm
        timestamp recorded_at
        timestamp created_at
    }
    
    ALERTS {
        int id PK
        int device_id FK
        int threshold_id FK
        int user_id FK
        string severity
        string message
        string status
        timestamp triggered_at
        timestamp acknowledged_at
        timestamp resolved_at
        timestamp created_at
    }
    
    ALERT_THRESHOLDS {
        int id PK
        int device_id FK
        int user_id FK
        string metric_type
        float min_value
        float max_value
        string severity
        boolean enabled
        timestamp created_at
        timestamp updated_at
    }
    
    OTA_VERSIONS {
        int id PK
        string version UK
        string firmware_url
        string release_notes
        string status
        timestamp released_at
        timestamp created_at
    }
    
    OTA_DEPLOYMENTS {
        int id PK
        int device_id FK
        int version_id FK
        string status
        int progress_percent
        string error_message
        timestamp started_at
        timestamp completed_at
        timestamp created_at
    }
Table Specifications
USERS
Stores user account information and authentication credentials. Integrated with Microsoft Entra ID for authentication.





















































ColumnTypeConstraintsDescriptionidINTPRIMARY KEY, AUTO_INCREMENTUnique user identifieremailVARCHAR(255)UNIQUE, NOT NULLUser email addresspassword_hashVARCHAR(255)NOT NULLBcrypt hashed password (fallback; primary auth via Entra ID)nameVARCHAR(255)NOT NULLUser full nameroleENUMNOT NULLUser role (admin, operator, user)created_atTIMESTAMPNOT NULLAccount creation timeupdated_atTIMESTAMPNOT NULLLast update time
DEVICES
Represents IoT devices in the factory, registered via Azure IoT Hub.













































































ColumnTypeConstraintsDescriptionidINTPRIMARY KEY, AUTO_INCREMENTUnique device identifierdevice_idVARCHAR(255)UNIQUE, NOT NULLDevice hardware ID (synced with Azure IoT Hub device twin)nameVARCHAR(255)NOT NULLDevice display nametypeVARCHAR(100)NOT NULLDevice type (sensor, gateway, etc.)locationVARCHAR(255)NOT NULLPhysical locationstatusENUMNOT NULLDevice status (online, offline, error; updated via IoT Hub)user_idINTFOREIGN KEYOwner user IDmetadataJSONAdditional device information (synced with IoT Hub twins)last_seenTIMESTAMPLast communication timestamp (from IoT Hub telemetry)created_atTIMESTAMPNOT NULLCreation timeupdated_atTIMESTAMPNOT NULLLast update time
SENSOR_READINGS
Time-series data from device sensors, ingested via Azure IoT Hub telemetry.







































































ColumnTypeConstraintsDescriptionidINTPRIMARY KEY, AUTO_INCREMENTUnique reading identifierdevice_idINTFOREIGN KEY, NOT NULLAssociated devicetemperatureFLOATTemperature in CelsiushumidityFLOATHumidity percentagepressureFLOATPressure in kPavibrationFLOATVibration levelpower_consumptionFLOATPower in WattsrpmFLOATRotations per minuterecorded_atTIMESTAMPNOT NULLSensor reading timestampcreated_atTIMESTAMPNOT NULLRecord creation time
Indexes:

device_id, recorded_at (composite index for time-series queries)
recorded_at (for time range queries)

ALERTS
System alerts triggered by threshold violations, with notifications via Azure Logic Apps.













































































ColumnTypeConstraintsDescriptionidINTPRIMARY KEY, AUTO_INCREMENTUnique alert identifierdevice_idINTFOREIGN KEY, NOT NULLAssociated devicethreshold_idINTFOREIGN KEYTriggered thresholduser_idINTFOREIGN KEYAlert ownerseverityENUMNOT NULLSeverity level (critical, warning, info)messageTEXTNOT NULLAlert descriptionstatusENUMNOT NULLAlert status (active, acknowledged, resolved)triggered_atTIMESTAMPNOT NULLAlert trigger timeacknowledged_atTIMESTAMPAcknowledgment timeresolved_atTIMESTAMPResolution timecreated_atTIMESTAMPNOT NULLRecord creation time
Indexes:

user_id, created_at (for user alert queries)
status, severity (for alert filtering)

ALERT_THRESHOLDS
Configuration for alert triggers.







































































ColumnTypeConstraintsDescriptionidINTPRIMARY KEY, AUTO_INCREMENTUnique threshold identifierdevice_idINTFOREIGN KEY, NOT NULLAssociated deviceuser_idINTFOREIGN KEY, NOT NULLThreshold ownermetric_typeVARCHAR(100)NOT NULLMetric being monitoredmin_valueFLOATMinimum acceptable valuemax_valueFLOATMaximum acceptable valueseverityENUMNOT NULLAlert severity levelenabledBOOLEANNOT NULLWhether threshold is activecreated_atTIMESTAMPNOT NULLCreation timeupdated_atTIMESTAMPNOT NULLLast update time
OTA_VERSIONS
Firmware version management, with URLs stored in Azure Blob Storage.





















































ColumnTypeConstraintsDescriptionidINTPRIMARY KEY, AUTO_INCREMENTUnique version identifierversionVARCHAR(50)UNIQUE, NOT NULLVersion number (semver)firmware_urlVARCHAR(500)NOT NULLDownload URL (Azure Blob)release_notesTEXTVersion release notesstatusENUMNOT NULLVersion status (draft, released, deprecated)released_atTIMESTAMPRelease timestampcreated_atTIMESTAMPNOT NULLCreation time
OTA_DEPLOYMENTS
Tracks firmware update deployments to devices via Azure IoT Hub.

































































ColumnTypeConstraintsDescriptionidINTPRIMARY KEY, AUTO_INCREMENTUnique deployment identifierdevice_idINTFOREIGN KEY, NOT NULLTarget deviceversion_idINTFOREIGN KEY, NOT NULLFirmware versionstatusENUMNOT NULLDeployment status (pending, in_progress, completed, failed)progress_percentINTUpdate progress (0-100)error_messageTEXTError details if failedstarted_atTIMESTAMPDeployment start timecompleted_atTIMESTAMPDeployment completion timecreated_atTIMESTAMPNOT NULLRecord creation time
Indexes:

device_id, status (for device deployment queries)
version_id, status (for version deployment tracking)

Query Patterns
Real-time Sensor Data
SQLSELECT * FROM SENSOR_READINGS
WHERE device_id = ? AND recorded_at > GETDATE() - INTERVAL 1 HOUR
ORDER BY recorded_at DESC
LIMIT 100;
Active Alerts
SQLSELECT a.*, d.name as device_name, u.email as user_email
FROM ALERTS a
JOIN DEVICES d ON a.device_id = d.id
JOIN USERS u ON a.user_id = u.id
WHERE a.status = 'active'
ORDER BY a.severity DESC, a.triggered_at DESC;
Device Status Overview
SQLSELECT 
    d.id, d.name, d.status,
    COUNT(CASE WHEN a.status = 'active' THEN 1 END) as active_alerts,
    MAX(sr.recorded_at) as last_reading
FROM DEVICES d
LEFT JOIN ALERTS a ON d.id = a.device_id
LEFT JOIN SENSOR_READINGS sr ON d.id = sr.device_id
GROUP BY d.id;
Performance Optimization
Indexing Strategy

Primary keys on all tables
Foreign key indexes for joins
Composite indexes for common queries
Timestamp indexes for time-range queries

Query Optimization

Use EXPLAIN to analyze queries
Avoid N+1 queries with proper joins
Batch operations for bulk updates
Pagination for large result sets

Caching Strategy

Cache frequently accessed thresholds using Azure Cache for Redis
Cache device metadata
Cache user roles and permissions via Microsoft Entra ID
Invalidate cache on updates via Azure Functions

Data Retention Policy













































TableRetentionArchiveUSERSIndefiniteN/ADEVICESIndefiniteN/ASENSOR_READINGS90 daysArchive to Azure Blob StorageALERTS1 yearArchive to Azure Blob StorageALERT_THRESHOLDSIndefiniteN/AOTA_VERSIONSIndefiniteN/AOTA_DEPLOYMENTS1 yearArchive to Azure Blob Storage
Backup & Recovery
Backup Strategy

Daily incremental backups via Azure Backup
Weekly full backups
Backup retention: 30 days
Off-site backup storage in Azure

Recovery Procedure

Identify recovery point
Restore from Azure Backup
Verify data integrity
Sync with replicas using Azure SQL Geo-Replication
Resume operations

Security Considerations
Data Protection

Encrypt sensitive fields at rest using Azure SQL TDE
Use parameterized queries to prevent SQL injection
Implement row-level security for multi-tenant data
Audit all data modifications via Azure SQL Auditing

Access Control

Role-based access to data via RBAC and Microsoft Entra ID
User can only see their own devices
Admin can see all data
Operator has read-only access

Compliance

GDPR compliance for user data
Data anonymization for deleted users
Audit logs for all modifications
Encryption in transit (HTTPS/TLS)