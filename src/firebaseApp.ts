import { readFileSync } from 'fs';
import { initializeApp, cert, App } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';

export class FirebaseApp {
    app: App;
    db;
    constructor(serviceKeyPath: string, databaseURL: string) {
        const serviceAccount = JSON.parse(
            readFileSync(serviceKeyPath, 'utf8')
        );
        this.app = initializeApp({
            credential: cert(serviceAccount),
            databaseURL
        });
        this.db = getDatabase(this.app)

    }

    getDocsByField(collection: string, field: string, value: string) {
        const ref = this.db.ref(collection);
        return new Promise((resolve, reject) => {
            try {
                ref.orderByChild(field).equalTo(value).once('value')
                    .then(snapshot => {
                        if (snapshot.exists()) {
                            const val = snapshot.val()
                            resolve(Object.values(val));
                        } else {
                            resolve([]);
                        }
                    });
            } catch (error) {
                reject(error);
            }
        });
    }

    listTopLevelCollections() {
        return new Promise(async (resolve, reject) => {
            try {
                const snapshot = await this.db.ref('/').once('value');
                const data = snapshot.val();

                if (!data) {
                    resolve([]);
                }

                const collections = Object.keys(data);
                resolve(collections);
            } catch (error) {
                reject(error);
            }
        });
    }

    listDocs(collection: string, filterField: string, filterValue: any) {
        return new Promise(async (resolve, reject) => {
            try {
                let ref = this.db.ref(collection);
                let query;

                if (filterField && filterValue !== undefined) {
                    query = ref.orderByChild(filterField).equalTo(filterValue);
                }

                const snapshot = await query!.once('value');
                const data = snapshot.val();

                if (!data) {
                    resolve({});
                }

                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }
}

