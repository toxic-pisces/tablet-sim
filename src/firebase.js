import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child, onValue, push, remove } from 'firebase/database';

// Firebase configuration from your existing project
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

/**
 * Add or set data at a specific path
 * @param {string} path - Database path
 * @param {*} data - Data to store
 */
export const setData = async (path, data) => {
  try {
    await set(ref(database, path), data);
    return { success: true };
  } catch (error) {
    console.error("Error setting data:", error);
    return { success: false, error };
  }
};

/**
 * Get data from a specific path
 * @param {string} path - Database path
 * @returns {Promise<*>} - The data or null
 */
export const getData = async (path) => {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, path));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available at path:", path);
      return null;
    }
  } catch (error) {
    console.error("Error getting data:", error);
    return null;
  }
};

/**
 * Update specific fields at a path (partial update - merges with existing data)
 * @param {string} path - Database path
 * @param {object} data - Data to update (only specified fields)
 */
export const updateData = async (path, data) => {
  try {
    // Get current data first
    const currentData = await getData(path);

    if (currentData) {
      // Merge with existing data (partial update)
      const mergedData = { ...currentData, ...data };
      await set(ref(database, path), mergedData);
      console.log(`✅ Updated ${path} (partial update)`);
    } else {
      // If no existing data, just set the new data
      await set(ref(database, path), data);
      console.log(`✅ Created ${path} (no existing data)`);
    }

    return { success: true };
  } catch (error) {
    console.error("Error updating data:", error);
    return { success: false, error };
  }
};

/**
 * Push new data (auto-generated key)
 * @param {string} path - Database path
 * @param {*} data - Data to push
 * @returns {string} - The generated key
 */
export const pushData = async (path, data) => {
  try {
    const newRef = push(ref(database, path));
    await set(newRef, data);
    return { success: true, key: newRef.key };
  } catch (error) {
    console.error("Error pushing data:", error);
    return { success: false, error };
  }
};

/**
 * Delete data at a specific path
 * @param {string} path - Database path
 */
export const deleteData = async (path) => {
  try {
    await remove(ref(database, path));
    return { success: true };
  } catch (error) {
    console.error("Error deleting data:", error);
    return { success: false, error };
  }
};

/**
 * Listen to real-time changes at a path
 * @param {string} path - Database path
 * @param {function} callback - Callback function when data changes
 * @returns {function} - Unsubscribe function
 */
export const listenToData = (path, callback) => {
  const dataRef = ref(database, path);
  const unsubscribe = onValue(dataRef, (snapshot) => {
    const data = snapshot.exists() ? snapshot.val() : null;
    callback(data);
  }, (error) => {
    console.error("Error listening to data:", error);
  });

  return unsubscribe;
};

/**
 * Initialize default data structure if not exists
 */
export const initializeDatabase = async () => {
  try {
    // Check if partTypeStandards exists
    const standards = await getData('partTypeStandards/Housing');

    if (!standards) {
      console.log("Initializing default standards...");
      await setData('partTypeStandards/Housing', {
        containerCapacity: 200,
        defectTypes: {
          mass: ['Maßabweichung', 'Formfehler', 'Positionsfehler'],
          lehre: ['Kratzer', 'Delle', 'Verschmutzung', 'Riss', 'Fehlbohrung', 'Grat'],
          sicht: ['n.i.O.']
        },
        inspectionTypes: ['lehre', 'mass', 'sicht'],
        inspectionSequence: [
          ['lehre'],
          ['lehre', 'mass'],
          ['lehre', 'mass', 'sicht']
        ]
      });
    }

    // Initialize empty arrays if they don't exist
    const tbkDb = await getData('tbkDatabase');
    if (!tbkDb) {
      await setData('tbkDatabase', {});
    }

    const inspectionDb = await getData('inspectionDatabase');
    if (!inspectionDb) {
      await setData('inspectionDatabase', {});
    }

    console.log("Database initialized successfully");
    return { success: true };
  } catch (error) {
    console.error("Error initializing database:", error);
    return { success: false, error };
  }
};

export { database };
