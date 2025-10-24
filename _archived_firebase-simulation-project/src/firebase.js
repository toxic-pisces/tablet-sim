import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child, update } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNNZLbYUCp2QSWwoK0HJhzLdgRbWv3jzY",
  authDomain: "behaeltertrack.firebaseapp.com",
  databaseURL: "https://behaeltertrack-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "behaeltertrack",
  storageBucket: "behaeltertrack.firebasestorage.app",
  messagingSenderId: "528411805785",
  appId: "1:528411805785:web:e53a588db0808796dd0948",
  measurementId: "G-9R5SLN5N1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to add data to the database
export const addData = (path, data) => {
    set(ref(database, path), data);
};

// Function to retrieve data from the database
export const getData = async (path) => {
    const dbRef = ref(database);
    try {
        const snapshot = await get(child(dbRef, path));
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("No data available");
            return null;
        }
    } catch (error) {
        console.error("Error getting data: ", error);
    }
};

// Function to update data in the database
export const updateData = (path, data) => {
    const updates = {};
    updates[path] = data;
    return update(ref(database), updates);
};