import { setData, getData, updateData, listenToData } from './firebase.js';

// Global State
export const state = {
  language: 'de',
  personnelNumber: '',
  userName: '',
  isPaused: false,
  pauseStart: null,
  currentScreen: 'main',
  history: [],
  currentInspection: {
    articleNumber: '',
    tz: 0,
    containerNumber: '',
    quantity: 0,
    inspectionType: '',
    defects: {},
    totalDefects: 0,
    inspectionDbId: null
  },
  tbkDatabase: {},
  inspectionDatabase: {},
  partTypeStandards: {
    Housing: {
      containerCapacity: 200,
      defectTypes: {
        mass: ['Maßabweichung', 'Formfehler', 'Positionsfehler'],
        lehre: ['Kratzer', 'Delle', 'Verschmutzung', 'Riss', 'Fehlbohrung', 'Grat'],
        sicht: ['n.i.O.']
      },
      inspectionTypes: ['lehre', 'mass', 'sicht'],
      inspectionSequence: [
        ['lehre'],
        ['mass'],
        ['sicht']
      ],
      drawing: null // Base64 encoded image
    }
  }
};

// Listeners storage
const listeners = {
  tbk: null,
  inspection: null,
  standards: null
};

/**
 * Initialize state from Firebase and set up real-time listeners
 */
export const initializeState = async () => {
  try {
    console.log('Initializing state from Firebase...');

    // Load TBK Database
    const tbkData = await getData('tbkDatabase');
    if (tbkData) {
      state.tbkDatabase = tbkData;
    }

    // Load Inspection Database
    const inspectionData = await getData('inspectionDatabase');
    if (inspectionData) {
      state.inspectionDatabase = inspectionData;
    }

    // Load Standards
    const standardsData = await getData('partTypeStandards/Housing');
    if (standardsData) {
      state.partTypeStandards.Housing = standardsData;
    }

    // Set up real-time listeners
    setupRealtimeListeners();

    console.log('State initialized successfully');
    return { success: true };
  } catch (error) {
    console.error('Error initializing state:', error);
    return { success: false, error };
  }
};

/**
 * Set up real-time listeners for automatic synchronization
 */
export const setupRealtimeListeners = () => {
  // Listen to TBK Database changes
  listeners.tbk = listenToData('tbkDatabase', (data) => {
    console.log('TBK Database updated from Firebase');
    state.tbkDatabase = data || {};
    // Trigger UI update if needed
    if (window.updateDatabaseUI) {
      window.updateDatabaseUI();
    }
  });

  // Listen to Inspection Database changes
  listeners.inspection = listenToData('inspectionDatabase', (data) => {
    console.log('Inspection Database updated from Firebase');
    state.inspectionDatabase = data || {};
    // Trigger UI update if needed
    if (window.updateDatabaseUI) {
      window.updateDatabaseUI();
    }
  });

  // Listen to Standards changes
  listeners.standards = listenToData('partTypeStandards/Housing', (data) => {
    console.log('Standards updated from Firebase');
    if (data) {
      state.partTypeStandards.Housing = data;
    }
    // Trigger UI update if needed
    if (window.updateStandardsUI) {
      window.updateStandardsUI();
    }
  });

  console.log('Real-time listeners activated');
};

/**
 * Add TBK entry to database
 */
export const addTBKEntry = async (entry) => {
  try {
    const { batchNummer } = entry;
    await setData(`tbkDatabase/${batchNummer}`, entry);
    console.log('TBK entry added:', batchNummer);
    return { success: true, key: batchNummer };
  } catch (error) {
    console.error('Error adding TBK entry:', error);
    return { success: false, error };
  }
};

/**
 * Get TBK entry by batch number
 */
export const getTBKEntry = async (batchNummer) => {
  try {
    const entry = await getData(`tbkDatabase/${batchNummer}`);
    return entry;
  } catch (error) {
    console.error('Error getting TBK entry:', error);
    return null;
  }
};

/**
 * Update TBK entry
 */
export const updateTBKEntry = async (batchNummer, updates) => {
  try {
    await updateData(`tbkDatabase/${batchNummer}`, updates);
    console.log('TBK entry updated:', batchNummer);
    return { success: true };
  } catch (error) {
    console.error('Error updating TBK entry:', error);
    return { success: false, error };
  }
};

/**
 * Add inspection to database
 */
export const addInspection = async (inspectionKey, inspection) => {
  try {
    await setData(`inspectionDatabase/${inspectionKey}`, inspection);
    console.log('Inspection added:', inspectionKey);
    return { success: true, key: inspectionKey };
  } catch (error) {
    console.error('Error adding inspection:', error);
    return { success: false, error };
  }
};

/**
 * Update inspection in database
 */
export const updateInspection = async (pruefungsNummer, updates) => {
  try {
    await updateData(`inspectionDatabase/${pruefungsNummer}`, updates);
    console.log('Inspection updated:', pruefungsNummer);
    return { success: true };
  } catch (error) {
    console.error('Error updating inspection:', error);
    return { success: false, error };
  }
};

/**
 * Get inspection by number
 */
export const getInspection = async (pruefungsNummer) => {
  try {
    const inspection = await getData(`inspectionDatabase/${pruefungsNummer}`);
    return inspection;
  } catch (error) {
    console.error('Error getting inspection:', error);
    return null;
  }
};

/**
 * Update standards (container capacity)
 */
export const updateContainerCapacity = async (capacity) => {
  try {
    await updateData('partTypeStandards/Housing', { containerCapacity: capacity });
    console.log('Container capacity updated:', capacity);
    return { success: true };
  } catch (error) {
    console.error('Error updating container capacity:', error);
    return { success: false, error };
  }
};

/**
 * Add defect type to standards
 */
export const addDefectType = async (inspectionType, defect) => {
  try {
    const currentDefects = state.partTypeStandards.Housing.defectTypes[inspectionType] || [];
    const updatedDefects = [...currentDefects, defect];

    const updates = {};
    updates[`defectTypes/${inspectionType}`] = updatedDefects;

    await updateData('partTypeStandards/Housing', updates);
    console.log('Defect type added:', inspectionType, defect);
    return { success: true };
  } catch (error) {
    console.error('Error adding defect type:', error);
    return { success: false, error };
  }
};

/**
 * Remove defect type from standards
 */
export const removeDefectType = async (inspectionType, index) => {
  try {
    const currentDefects = state.partTypeStandards.Housing.defectTypes[inspectionType] || [];
    const updatedDefects = currentDefects.filter((_, i) => i !== index);

    const updates = {};
    updates[`defectTypes/${inspectionType}`] = updatedDefects;

    await updateData('partTypeStandards/Housing', updates);
    console.log('Defect type removed:', inspectionType, index);
    return { success: true };
  } catch (error) {
    console.error('Error removing defect type:', error);
    return { success: false, error };
  }
};

/**
 * Get all TBK entries as array
 */
export const getTBKDatabaseAsArray = () => {
  return Object.values(state.tbkDatabase);
};

/**
 * Get all inspections as array
 */
export const getInspectionDatabaseAsArray = () => {
  return Object.values(state.inspectionDatabase);
};

/**
 * Clean up listeners (call when app closes)
 */
export const cleanupListeners = () => {
  if (listeners.tbk) listeners.tbk();
  if (listeners.inspection) listeners.inspection();
  if (listeners.standards) listeners.standards();
  console.log('Listeners cleaned up');
};
