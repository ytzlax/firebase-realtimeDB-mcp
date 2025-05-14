# Firebase Realtime Database MCP

## Overview
The inspiration for this project was taken from [firebase-mcp](https://github.com/gannonh/firebase-mcp). Unlike firebase-mcp, which uses Firestore functionalities, firebase-realtimeDB-mcp uses Firebase Realtime Database functionalities.
**Firebase Realtime Database MCP** enables AI assistants to work directly with Firebase services,

## 🔧 Setup & Configuration

### 1. Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com) → Project Settings → Service Accounts
2. Click "Generate new private key"
3. Save the JSON file securely

### 2. Environment Variables

#### Required
- `SERVICE_ACCOUNT_KEY_PATH`: Path to your Firebase service account key JSON


## 🚀 Quick Start

### Prerequisites
- Firebase project with service account credentials
- Node.js environment

### 1. Install MCP Server

Add the server configuration to your MCP settings file:

- Claude Desktop: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Augment: `~/Library/Application Support/Code/User/settings.json`
- Cursor: `[project root]/.cursor/mcp.json`

### How to use with Claude Desktop?

Follow the guide https://modelcontextprotocol.io/quickstart/user and add the following configuration:

```json
{
  "firebase-realtimeDB-mcp": {
      "command": "node",
      "args": ["/absolute/path/to/firebase-realtimeDB-mcp/dist/index.js"],
      "env": {
        "SERVICE_ACCOUNT_KEY_PATH": "/absolute/path/to/serviceAccountKey.json",
        "FIREBASE_DATABASE_URL": "your-project-id.firebasestorage.app"
      }
   }
  
}
```


### Firebase Tools

| Tool                               | Description                    | Required Parameters              |
| ---------------------------------- | ------------------------------ | ---------------------------------|
| `get_documents_by_filter`          | Get documents by filter        | `collectionName`, `field`,`value`|
| `list_collections`                 | List root collections          | None                             |