import { FastMCP } from "fastmcp";
import { z } from "zod";
import { FirebaseApp } from "./firebaseApp.js";

export class FirebaseRealtimeDbMcp {
    private server: FastMCP;
    private firebaseApp: FirebaseApp;

    constructor(serviceKeyPath: string, databaseURL: string) {
        this.firebaseApp = new FirebaseApp(serviceKeyPath as string, databaseURL as string)

        this.server = new FastMCP({
            name: "Firebase real time DB Server",
            version: "1.0.0",
        });

        this.addTools();

        this.server.start({
            transportType: "stdio",
        });

    }

    addTools() {
        this.server.addTool({
            name: "get_documents_by_filter",
            description: "Get documents by filter",
            parameters: z.object({
                collectionName: z.string(),
                field: z.string(),
                value: z.string()
            }),
            execute: async (args) => {
                const res = await this.firebaseApp.getDocsByField(args.collectionName, args.field, args.value);
                return JSON.stringify(res as any);
            },
        });

        this.server.addTool({
            name: "list_collections",
            description: "List collections",
            execute: async (args) => {
                const res = await this.firebaseApp.listTopLevelCollections();
                return JSON.stringify(res as any);
            },
        });

    }

}