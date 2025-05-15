import { FirebaseRealtimeDbMcp } from "./firebaseRealtimeDbMcp.js"
import dotenv from 'dotenv';
dotenv.config();

const serviceKeyPath = process.env.SERVICE_ACCOUNT_KEY_PATH ;
const databaseURL = process.env.FIREBASE_DATABASE_URL ;

try {
    new FirebaseRealtimeDbMcp(serviceKeyPath as string, databaseURL as string);
}
catch (error) {
    // logger
}