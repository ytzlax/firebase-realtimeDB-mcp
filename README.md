# Firebase Realtime Database MCP
<a href="https://glama.ai/mcp/servers/@ytzlax/firebase-realtimeDB-mcp">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@ytzlax/firebase-realtimeDB-mcp/badge" />
</a>  

## Overview

The inspiration for this project was taken from [firebase-mcp](https://github.com/gannonh/firebase-mcp). Unlike firebase-mcp, which uses Firestore functionalities, **firebase-realtimeDB-mcp** uses Firebase Realtime Database functionalities.
Firebase Realtime Database MCP enables AI assistants to work directly with Firebase services.

## 🚀 Quick Start

### Prerequisites

* Firebase project with service account credentials
* Node.js environment

### 1\. Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com) → Project Settings → Service Accounts
2. Click "Generate new private key"
3. Save the JSON file securely

### 2\. Environment Variables

#### Required

* `SERVICE_ACCOUNT_KEY_PATH`: Path to your Firebase service account key JSON
* `FIREBASE_DATABASE_URL`: Firebase realtime database URL 

### 1. Install Firebase Realtime Database MCP project locally

A. Run ```git clone https://github.com/ytzlax/firebase-realtimeDB-mcp.git``` in the terminal.  
B. cd to the cloned path, and run ```npm i```.  
C. Run ```npm run build```.

### 2. Install MCP Server

Add the server configuration to your MCP settings file:

* Claude Desktop: `~/Library/Application Support/Claude/claude_desktop_config.json`
* Augment: `~/Library/Application Support/Code/User/settings.json`
* Cursor: `[project root]/.cursor/mcp.json`

### How to use with Claude Desktop?

Follow the guide https://modelcontextprotocol.io/quickstart/user and add the following configuration:

``` json
{
  "firebase-realtimeDB-mcp": {
      "command": "node",
      "args": ["/absolute/path/to/dist/index.js"],
      "env": {
        "SERVICE_ACCOUNT_KEY_PATH": "/absolute/path/to/serviceAccountKey.json",
        "FIREBASE_DATABASE_URL": "your-project-id.firebasestorage.app"
      }
   }

}
```

### Firebase Tools

| Tool | Description | Required Parameters |
| ---- | ----------- | ------------------- |
| `get_documents_by_filter` | Get documents by filter | `collectionName`, `field`,`value` |
| `list_collections` | List root collections | None |
| `add_doc` | Add Document | json object
