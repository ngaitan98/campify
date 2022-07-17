import admin, { ServiceAccount } from 'firebase-admin';
import serviceAccount from '../../secrets/serviceAccount.json';

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount as ServiceAccount),
            databaseURL: process.env.DATABASE_URL || ""
        });
    } catch (error) {
        console.log('Firebase admin initialization error', error);
    }
}
export default admin.database();
