import { initializeDatabase, listenToData } from './firebase.js';
import {
  state,
  initializeState,
  addTBKEntry,
  getTBKEntry,
  updateTBKEntry,
  addInspection,
  updateInspection,
  getInspection,
  updateContainerCapacity,
  addDefectType as addDefectTypeToDb,
  removeDefectType as removeDefectTypeFromDb,
  getTBKDatabaseAsArray,
  getInspectionDatabaseAsArray
} from './state.js';

// Login Numpad
let loginNumberInput = '';

function addLoginDigit(digit) {
    if (loginNumberInput.length < 10) {
        loginNumberInput += digit;
        updateLoginDisplay();

        // Vibration feedback
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    }
}

function clearLoginNumber() {
    if (loginNumberInput.length > 0) {
        loginNumberInput = loginNumberInput.slice(0, -1);
        updateLoginDisplay();

        // Vibration feedback
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    }
}

function updateLoginDisplay() {
    const display = document.getElementById('loginDisplay');
    const valueEl = document.getElementById('loginValue');

    if (!valueEl) return;

    if (loginNumberInput.length === 0) {
        valueEl.innerHTML = '-';
        valueEl.classList.add('empty');
        display.classList.remove('active');
    } else {
        // Build display with animation for each digit
        let displayValue = '';
        for (let i = 0; i < loginNumberInput.length; i++) {
            displayValue += `<span class="digit">${loginNumberInput[i]}</span>`;
        }
        valueEl.innerHTML = displayValue;
        valueEl.classList.remove('empty');
        display.classList.add('active');
    }
}

// Translations
const translations = {
    de: {
        loginTitle: 'Qualitätsprüfung',
        personnelPlaceholder: 'Personalnummer',
        loginBtn: 'Anmelden',
        serie: 'Serie',
        sonderfall: 'Sonderfall',
        sicht: 'Sicht',
        sonstiges: 'Sonstiges',
        lehre: 'Lehre',
        mass: 'Maß',
        scanComplete: 'Scan abgeschlossen',
        containerNumber: 'Behälternummer eingeben',
        confirm: 'Bestätigen',
        quantity: 'Teileanzahl',
        fullContainer: 'Voller Behälter',
        currentState: 'Aktueller Stand',
        manual: 'Manuell eingeben',
        articleNumber: 'Artikelnummer',
        totalQuantity: 'Gesamtmenge',
        defectCount: 'Ausschuss',
        inspector: 'Prüfer',
        inspectionComplete: 'Prüfung abgeschlossen',
        resetInspection: 'Prüfung zurücksetzen',
        nextInspection: 'Nächste Prüfung',
        pauseTitle: 'ABWESEND',
        returnBtn: 'Wieder anwesend',
        featureNotAvailable: 'Feature nicht verfügbar',
        featureInProgress: 'Feature in Arbeit',
        active: 'Aktiv',
        finished: 'Fertig'
    },
    pl: {
        loginTitle: 'Kontrola Jakości',
        personnelPlaceholder: 'Numer personelu',
        loginBtn: 'Zaloguj się',
        serie: 'Seria',
        sonderfall: 'Przypadek specjalny',
        sicht: 'Wzrok',
        sonstiges: 'Inne',
        lehre: 'Szablon',
        mass: 'Wymiar',
        scanComplete: 'Skanowanie zakończone',
        containerNumber: 'Wprowadź numer kontenera',
        confirm: 'Potwierdź',
        quantity: 'Ilość części',
        fullContainer: 'Pełny kontener',
        currentState: 'Aktualny stan',
        manual: 'Wprowadź ręcznie',
        articleNumber: 'Numer artykułu',
        totalQuantity: 'Całkowita ilość',
        defectCount: 'Złom',
        inspector: 'Inspektor',
        inspectionComplete: 'Kontrola zakończona',
        resetInspection: 'Resetuj kontrolę',
        nextInspection: 'Następna kontrola',
        pauseTitle: 'NIEOBECNY',
        returnBtn: 'Z powrotem',
        featureNotAvailable: 'Funkcja niedostępna',
        featureInProgress: 'Funkcja w toku',
        active: 'Aktywny',
        finished: 'Zakończone'
    }
};

function t(key) {
    return translations[state.language][key] || key;
}

// Login
function login() {
    if (loginNumberInput.length > 0) {
        // Vibration feedback
        if ('vibrate' in navigator) {
            navigator.vibrate(200);
        }

        state.personnelNumber = loginNumberInput;
        state.userName = 'P-' + state.personnelNumber;
        document.getElementById('userName').textContent = state.userName;
        document.getElementById('loginScreen').classList.add('hidden');
        document.getElementById('mainApp').classList.remove('hidden');
        showMainMenu();
    } else {
        // Shake animation if empty
        const display = document.getElementById('loginDisplay');
        display.style.animation = 'none';
        setTimeout(() => {
            display.style.animation = 'shake 0.5s';
        }, 10);
    }
}

// Language Toggle
function toggleLanguage() {
    state.language = state.language === 'de' ? 'pl' : 'de';
    const flagBtn = document.getElementById('languageBtn');
    flagBtn.textContent = state.language === 'de' ? '🇩🇪' : '🇵🇱';
    updateLanguage();
}

function updateLanguage() {
    document.getElementById('loginTitle').textContent = t('loginTitle');
    const loginLabel = document.querySelector('#loginScreen .number-input-label');
    if (loginLabel) {
        loginLabel.textContent = t('personnelPlaceholder');
    }
    document.getElementById('pauseTitle').textContent = t('pauseTitle');
    document.getElementById('returnBtn').textContent = t('returnBtn');

    // Reload current screen with new language
    const currentScreen = state.currentScreen;
    if (currentScreen === 'main') showMainMenu();
    else if (currentScreen === 'serie') showSerieMenu();
}

// Pause
function togglePause() {
    state.isPaused = !state.isPaused;
    const pauseScreen = document.getElementById('pauseScreen');

    if (state.isPaused) {
        state.pauseStart = new Date();
        pauseScreen.classList.remove('hidden');
        updatePauseTime();
    } else {
        pauseScreen.classList.add('hidden');
        state.pauseStart = null;
    }
}

function updatePauseTime() {
    if (!state.isPaused) return;

    const now = new Date();
    const diff = now - state.pauseStart;
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    document.getElementById('pauseTime').textContent =
        `seit ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    setTimeout(updatePauseTime, 1000);
}

// Navigation
function goBack() {
    if (state.history.length > 0) {
        const previous = state.history.pop();
        previous();
    }
}

function addToHistory(fn) {
    state.history.push(fn);
}

function openStatistics() {
    window.open('https://toxic-pisces.github.io/haering/testt.html', '_blank');
}

// Main Menu
function showMainMenu() {
    state.currentScreen = 'main';
    state.history = [];
    const content = document.getElementById('contentArea');
    content.innerHTML = `
        <div class="content-grid grid-2">
            <button class="big-btn animate-scale stagger-1" onclick="showSerieMenu()">${t('serie')}</button>
            <button class="big-btn animate-scale stagger-2" onclick="showFeatureNotAvailable()">${t('sonderfall')}</button>
        </div>
    `;
}

// Serie Menu
function showSerieMenu() {
    addToHistory(showMainMenu);
    state.currentScreen = 'serie';
    const content = document.getElementById('contentArea');
    content.innerHTML = `
        <div class="content-grid grid-4">
            <button class="big-btn animate-scale stagger-1" onclick="startInspection('sicht')">${t('sicht')}</button>
            <button class="big-btn animate-scale stagger-2" onclick="showFeatureInProgress()">${t('sonstiges')}</button>
            <button class="big-btn animate-scale stagger-3" onclick="startInspection('lehre')">${t('lehre')}</button>
            <button class="big-btn animate-scale stagger-4" onclick="startInspection('mass')">${t('mass')}</button>
        </div>
    `;
}

// Start Inspection
function startInspection(type) {
    addToHistory(showSerieMenu);
    state.currentInspection.inspectionType = type;
    showScanSimulation();
}

function validateInspectionSequence(tbkNumber, containerNumber, requestedType) {
    // Validation happens after scanning
    const batchNummer = getBatchNumber(tbkNumber, containerNumber);
    if (!batchNummer) return null;

    // Get inspection sequence from standards
    const sequence = state.partTypeStandards.Housing.inspectionSequence;

    // If sequence is empty, no validations needed
    if (!sequence || sequence.length === 0) return null;

    // Map inspection types to their short codes
    const typeToCode = { 'lehre': 'L', 'mass': 'M', 'sicht': 'S' };
    const codeToLabel = { 'L': 'Lehre', 'M': 'Maß', 'S': 'Sicht' };

    // Get all inspections for this batch (use array version)
    const batchInspections = getInspectionDatabaseAsArray().filter(
        entry => entry.batchNummer === batchNummer
    );

    // Find which step the requested inspection is in
    let requestedStepIndex = -1;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i].includes(requestedType)) {
            requestedStepIndex = i;
            break;
        }
    }

    // If inspection is not in sequence, it's disabled
    if (requestedStepIndex === -1) {
        const label = codeToLabel[typeToCode[requestedType]];
        return `${label}-Prüfung ist in den Standards nicht aktiviert.`;
    }

    // Check if all inspections from previous steps have been completed
    for (let stepIndex = 0; stepIndex < requestedStepIndex; stepIndex++) {
        const requiredInspections = sequence[stepIndex];

        // Check each inspection in this step
        for (const requiredType of requiredInspections) {
            const requiredCode = typeToCode[requiredType];
            const hasCompleted = batchInspections.some(entry => entry.inspektion === requiredCode);

            if (!hasCompleted) {
                const requestedLabel = codeToLabel[typeToCode[requestedType]];
                const requiredLabel = codeToLabel[requiredCode];
                return `${requestedLabel}-Prüfung kann erst nach ${requiredLabel}-Prüfung durchgeführt werden.`;
            }
        }
    }

    return null;
}

async function checkContainerCapacity(tbkNumber, containerNumber, inspectionType) {
    const batchNummer = getBatchNumber(tbkNumber, containerNumber);
    if (!batchNummer) return null;

    const containerCapacity = state.partTypeStandards.Housing.containerCapacity;
    const typeToCode = { 'lehre': 'L', 'mass': 'M', 'sicht': 'S' };
    const codeToLabel = { 'L': 'Lehre', 'M': 'Maß', 'S': 'Sicht' };
    const inspectionCode = typeToCode[inspectionType];

    // Get actual parts in container from TBK database
    const tbkEntry = await getTBKEntry(batchNummer);
    let actualPartsInContainer;

    if (tbkEntry && tbkEntry.currentPartsInContainer !== null && tbkEntry.currentPartsInContainer !== undefined) {
        // Use value from TBK database
        actualPartsInContainer = tbkEntry.currentPartsInContainer;
        console.log(`📊 currentPartsInContainer from TBK: ${actualPartsInContainer}`);
    } else {
        // First inspection - currentPartsInContainer not yet set (will be set when quantity is chosen)
        actualPartsInContainer = null;
        console.log(`📊 First inspection - currentPartsInContainer not yet initialized`);
    }

    // IMPORTANT: Get FRESH data from Firebase, not cached local state
    console.log('🔍 Fetching fresh inspection data from Firebase...');
    
    // Wait a moment for Firebase to sync (in case data was just written)
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const allInspections = getInspectionDatabaseAsArray();
    console.log('📊 Total inspections in database:', allInspections.length);

    // Get ALL inspections of this type for this batch
    const allInspectionsOfType = allInspections.filter(
        entry => entry.batchNummer === batchNummer &&
                 entry.inspektion === inspectionCode
    );

    console.log(`📊 Inspections of type ${inspectionCode} for batch ${batchNummer}:`, allInspectionsOfType.length);

    // If there are NO inspections at all, this is the first one -> allow
    if (allInspectionsOfType.length === 0) {
        console.log('✅ First inspection for this type - allowing');
        state.currentInspection.remainingCapacity = containerCapacity;
        state.currentInspection.actualPartsInContainer = actualPartsInContainer;
        return null; // Allow to proceed
    }

    // Get only COMPLETED inspections of this type for this batch (ende must exist AND not be null)
    const completedInspections = allInspectionsOfType.filter(
        entry => entry.ende && entry.ende !== null && entry.ende !== undefined
    );

    // Check if there's an ACTIVE (unfinished) inspection (ende is null, undefined, or doesn't exist)
    const activeInspection = allInspectionsOfType.find(
        entry => !entry.ende || entry.ende === null || entry.ende === undefined
    );

    console.log(`✔️ Completed inspections:`, completedInspections.length);
    console.log(`⏳ Active inspections:`, activeInspection ? 'YES' : 'NO');
    
    // Debug: Log all inspections with their ende status
    allInspectionsOfType.forEach((insp, idx) => {
        console.log(`  Inspection ${idx + 1}:`, {
            pruefungsNummer: insp.pruefungsNummer,
            total: insp.total,
            ende: insp.ende,
            endeType: typeof insp.ende,
            isComplete: !!(insp.ende && insp.ende !== null),
            isActive: !insp.ende || insp.ende === null
        });
    });

    // If there's an active inspection, allow joining (bypass capacity check completely)
    if (activeInspection) {
        console.log('✅ Active inspection found - bypassing capacity check, allowing join');
        console.log('📋 Active inspection details:', {
            pruefungsNummer: activeInspection.pruefungsNummer,
            pruefer: activeInspection.pruefer,
            total: activeInspection.total,
            ende: activeInspection.ende
        });
        state.currentInspection.remainingCapacity = containerCapacity;
        state.currentInspection.actualPartsInContainer = actualPartsInContainer;
        return null; // Allow to proceed
    }

    // If no completed inspections (only active ones), allow
    if (completedInspections.length === 0) {
        console.log('✅ No completed inspections - allowing');
        state.currentInspection.remainingCapacity = containerCapacity;
        state.currentInspection.actualPartsInContainer = actualPartsInContainer;
        return null;
    }

    // Calculate total parts already inspected for this type (only completed with ende !== null)
    const totalInspected = completedInspections.reduce((sum, entry) => sum + entry.total, 0);

    console.log(`📊 Total inspected (completed only): ${totalInspected}/${containerCapacity}`);

    // Calculate remaining capacity based on CONTAINER CAPACITY (not currentPartsInContainer!)
    // Container is only full when totalInspected >= containerCapacity
    const remainingCapacity = containerCapacity - totalInspected;

    if (remainingCapacity <= 0) {
        const label = codeToLabel[inspectionCode];
        console.log('❌ Container full - blocking');
        return `Dieser Behälter ist für ${label}-Prüfung bereits voll (${containerCapacity}/${containerCapacity} Teile geprüft).`;
    }

    console.log(`✅ Remaining capacity: ${remainingCapacity} parts (can still add inspections up to container capacity)`);

    // Store remaining capacity for quantity selection
    state.currentInspection.remainingCapacity = remainingCapacity;
    state.currentInspection.actualPartsInContainer = actualPartsInContainer;

    return null;
}

function showScanSimulation() {
    // Open the real barcode scanner instead of simulation
    openBarcodeScanner();
}

function completeScan() {
    // This function is now replaced by the real scanner
    // Kept for backwards compatibility
    state.currentInspection.articleNumber = '1234567';
    state.currentInspection.tz = Math.floor(Math.random() * 11);
    showScanConfirmation();
}

// Scan Confirmation
function showScanConfirmation() {
    addToHistory(showScanSimulation);
    const content = document.getElementById('contentArea');
    content.innerHTML = `
        <div class="data-confirmation animate-scale">
            <h2 class="animate-slide-up">Teilebegleitkarte gescannt</h2>
            <div class="data-row animate-slide-right stagger-1">
                <span class="data-label">TBK Nummer:</span>
                <span class="data-value">${state.currentInspection.articleNumber}</span>
            </div>
            <div class="data-row animate-slide-right stagger-2">
                <span class="data-label">Artikel:</span>
                <span class="data-value">Housing</span>
            </div>
            <div class="data-row animate-slide-right stagger-3">
                <span class="data-label">TZ:</span>
                <span class="data-value">${state.currentInspection.tz}</span>
            </div>
            <button class="btn-primary animate-slide-up stagger-4" onclick="showContainerNumberInput()">${t('confirm')}</button>
        </div>
    `;
}

// Container Number Input with Numpad
let containerNumberInput = '';

function showContainerNumberInput() {
    addToHistory(showScanConfirmation);
    containerNumberInput = '';

    const content = document.getElementById('contentArea');
    content.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; padding: 20px;">
            <div style="max-width: 500px; width: 100%;">
                <h2 style="text-align: center; margin-bottom: 25px; color: #1a202c; font-size: 24px;">Behälternummer eingeben</h2>

                <div class="number-input-display" id="containerDisplay">
                    <div class="number-input-label">6-stellige Behälternummer</div>
                    <div class="number-input-value empty" id="containerValue">------</div>
                </div>

                <div class="numpad">
                    <button class="numpad-btn" onclick="addContainerDigit('1')">1</button>
                    <button class="numpad-btn" onclick="addContainerDigit('2')">2</button>
                    <button class="numpad-btn" onclick="addContainerDigit('3')">3</button>
                    <button class="numpad-btn" onclick="addContainerDigit('4')">4</button>
                    <button class="numpad-btn" onclick="addContainerDigit('5')">5</button>
                    <button class="numpad-btn" onclick="addContainerDigit('6')">6</button>
                    <button class="numpad-btn" onclick="addContainerDigit('7')">7</button>
                    <button class="numpad-btn" onclick="addContainerDigit('8')">8</button>
                    <button class="numpad-btn" onclick="addContainerDigit('9')">9</button>
                    <button class="numpad-btn special" onclick="clearContainerNumber()">⌫</button>
                    <button class="numpad-btn" onclick="addContainerDigit('0')">0</button>
                    <button class="numpad-btn" onclick="submitContainerNumber()" style="background: linear-gradient(135deg, #10b981, #059669); color: white; border: none;">✓</button>
                </div>
            </div>
        </div>
    `;

    updateContainerDisplay();
}

function addContainerDigit(digit) {
    if (containerNumberInput.length < 6) {
        containerNumberInput += digit;
        updateContainerDisplay();

        // Vibration feedback
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    }
}

function clearContainerNumber() {
    if (containerNumberInput.length > 0) {
        containerNumberInput = containerNumberInput.slice(0, -1);
        updateContainerDisplay();

        // Vibration feedback
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    }
}

function updateContainerDisplay() {
    const display = document.getElementById('containerDisplay');
    const valueEl = document.getElementById('containerValue');

    if (!valueEl) return;

    if (containerNumberInput.length === 0) {
        valueEl.innerHTML = '------';
        valueEl.classList.add('empty');
        display.classList.remove('active');
    } else {
        // Build display with animation for each digit
        let displayValue = '';
        for (let i = 0; i < 6; i++) {
            if (i < containerNumberInput.length) {
                displayValue += `<span class="digit">${containerNumberInput[i]}</span>`;
            } else {
                displayValue += '-';
            }
        }
        valueEl.innerHTML = displayValue;
        valueEl.classList.remove('empty');
        display.classList.add('active');
    }
}

// Track container number verification
let containerNumberVerification = {
    first: null,
    second: null,
    third: null,
    attempt: 1 // 1 = first entry, 2 = confirmation, 3 = tie-breaker
};

async function submitContainerNumber() {
    if (containerNumberInput.length === 6) {
        const currentInput = containerNumberInput;

        if (containerNumberVerification.attempt === 1) {
            // First entry - store and ask for confirmation
            containerNumberVerification.first = currentInput;
            containerNumberVerification.attempt = 2;

            // Clear input and show confirmation prompt
            containerNumberInput = '';
            updateContainerDisplay();

            showModal({
                title: 'Bestätigung',
                content: `<p style="font-size: 18px; text-align: center;">Bitte erneut eingeben</p>`,
                buttons: [
                    { text: 'OK', action: () => { closeModal(); } }
                ]
            });

            // Vibration feedback
            if ('vibrate' in navigator) {
                navigator.vibrate(100);
            }
            return;
        }

        if (containerNumberVerification.attempt === 2) {
            // Second entry - check if it matches first
            containerNumberVerification.second = currentInput;

            if (containerNumberVerification.first === containerNumberVerification.second) {
                // Match! Proceed with inspection
                await proceedWithInspection(currentInput);
            } else {
                // Mismatch! Ask for third entry
                containerNumberVerification.attempt = 3;
                containerNumberInput = '';
                updateContainerDisplay();

                showModal({
                    title: 'Fehler',
                    content: `<p style="color: #e74c3c; font-size: 18px; text-align: center; margin: 20px 0;">Nummern stimmen nicht überein</p>
                              <p style="font-size: 16px; text-align: center;">Bitte korrekte Nummer eingeben</p>`,
                    buttons: [
                        { text: 'OK', action: () => { closeModal(); } }
                    ]
                });

                // Error vibration
                if ('vibrate' in navigator) {
                    navigator.vibrate([100, 50, 100]);
                }
                return;
            }
        }

        if (containerNumberVerification.attempt === 3) {
            // Third entry - use this as final decision
            containerNumberVerification.third = currentInput;

            // Determine which number to use (match with first or second, or just use third)
            let finalNumber = currentInput;
            if (currentInput === containerNumberVerification.first) {
                finalNumber = containerNumberVerification.first;
            } else if (currentInput === containerNumberVerification.second) {
                finalNumber = containerNumberVerification.second;
            }

            await proceedWithInspection(finalNumber);
        }
    } else {
        // Shake animation if not complete
        const display = document.getElementById('containerDisplay');
        display.style.animation = 'none';
        setTimeout(() => {
            display.style.animation = 'shake 0.5s';
        }, 10);
    }
}

// Helper function to proceed with inspection after verification
async function proceedWithInspection(containerNumber) {
    // Reset verification state
    containerNumberVerification = {
        first: null,
        second: null,
        third: null,
        attempt: 1
    };

    state.currentInspection.containerNumber = containerNumber;

    // Add TBK + Container to database (creates new batch if needed)
    await addTbkToDatabase(state.currentInspection.articleNumber, containerNumber);

    // Validate inspection sequence NOW (after we have container number)
    const validationError = validateInspectionSequence(
        state.currentInspection.articleNumber,
        containerNumber,
        state.currentInspection.inspectionType
    );
    if (validationError) {
        showModal({
            title: 'Reihenfolge nicht eingehalten',
            content: `<p>${validationError}</p>`,
            buttons: [
                { text: 'Zurück zum Menü', action: () => { closeModal(); showSerieMenu(); } }
            ]
        });
        return;
    }

    // Check container capacity for this inspection type (async - wait for Firebase)
    const capacityError = await checkContainerCapacity(
        state.currentInspection.articleNumber,
        containerNumber,
        state.currentInspection.inspectionType
    );
    if (capacityError) {
        showModal({
            title: 'Behälter voll',
            content: `<p>${capacityError}</p>`,
            buttons: [
                { text: 'Zurück zum Menü', action: () => { closeModal(); showSerieMenu(); } }
            ]
        });
        return;
    }

    // Vibration feedback
    if ('vibrate' in navigator) {
        navigator.vibrate(200);
    }

    // Check if there are active team members doing the SAME inspection
    const batchNummer = getBatchNumber(
        state.currentInspection.articleNumber,
        containerNumber
    );

    const currentType = state.currentInspection.inspectionType;
    const typeToCode = { 'lehre': 'L', 'mass': 'M', 'sicht': 'S' };
    const currentCode = typeToCode[currentType];

    // Get all active inspections of the same type
    const allInspections = getInspectionDatabaseAsArray();
    const activeTeamMembers = allInspections.filter(
        insp => insp.batchNummer === batchNummer &&
                insp.inspektion === currentCode &&
                (!insp.ende || insp.ende === null) &&
                insp.pruefer !== state.personnelNumber
    );

    if (activeTeamMembers.length > 0) {
        // There's an active team member doing the same inspection
        // Pass the original total quantity to setQuantity - it will handle the splitting
        const teamMember = activeTeamMembers[0];
        // Use originalTotal if available, otherwise fall back to total (for backwards compatibility)
        const totalQuantity = teamMember.originalTotal || teamMember.total;

        console.log(`🔵 Joining team inspection with original total quantity ${totalQuantity} - setQuantity will split it`);

        // Pass the full quantity - setQuantity will handle the splitting
        await setQuantity(totalQuantity);
    } else {
        // No active team members - show quantity selection
        await showQuantitySelection();
    }
}

// Quantity Selection
async function showQuantitySelection() {
    addToHistory(showScanConfirmation);
    const content = document.getElementById('contentArea');

    // Get remaining capacity from validation (set in checkContainerCapacity)
    // This is based on containerCapacity - totalInspected
    const remainingCapacity = state.currentInspection.remainingCapacity || state.partTypeStandards.Housing.containerCapacity;
    const containerCapacity = state.partTypeStandards.Housing.containerCapacity;

    // Determine button label and quantity
    let buttonLabel = t('fullContainer');
    let buttonQuantity = remainingCapacity;

    // If remaining capacity is less than full capacity, show "Restkapazität"
    if (remainingCapacity < containerCapacity) {
        buttonLabel = 'Restkapazität';
    }

    let fullContainerBtn = '';
    if (remainingCapacity > 0) {
        fullContainerBtn = `<button class="big-btn animate-scale stagger-1" onclick="setQuantity(${buttonQuantity})">${buttonLabel} (${buttonQuantity} Stk.)</button>`;
    }

    content.innerHTML = `
        <div class="content-grid grid-2">
            ${fullContainerBtn}
            <button class="big-btn animate-scale stagger-2" onclick="showManualQuantity()">${t('manual')}</button>
        </div>
    `;
}

async function setQuantity(qty) {
    try {
        console.log('🔵 setQuantity called with qty:', qty);

        console.log('🔵 Checking for active inspections (team members)...');
        // Check if there are other active inspections for this batch (team members)
        const teamMembers = await checkForActiveInspections();
        console.log('🔵 Team members found:', teamMembers.length);

        // Determine actual quantity based on team situation
        let actualQuantity = qty;
        const currentType = state.currentInspection.inspectionType;
        const typeToCode = { 'lehre': 'L', 'mass': 'M', 'sicht': 'S' };
        const currentCode = typeToCode[currentType];

        if (teamMembers.length > 0) {
            // Check if any team member is doing the SAME inspection type
            const sameTypeMembers = teamMembers.filter(member => member.inspektion === currentCode);

            if (sameTypeMembers.length > 0) {
                // Same inspection type = split quantity equally
                const totalInspectors = sameTypeMembers.length + 1; // +1 for current inspector

                // Use originalTotal from the first team member if available, otherwise use qty
                const firstMember = sameTypeMembers[0];
                const originalTotal = firstMember.originalTotal || qty;

                actualQuantity = Math.ceil(originalTotal / totalInspectors);
                console.log(`🔵 Splitting ${originalTotal} parts among ${totalInspectors} inspectors = ${actualQuantity} parts each`);

                // Store originalTotal for future splits
                state.currentInspection.originalTotal = originalTotal;

                // UPDATE existing team members' quantities in the database
                for (const member of sameTypeMembers) {
                    const inspectionKey = member.inspectionDbId || `${member.batchNummer}-${member.pruefungsNummer}`;
                    console.log(`🔄 Updating quantity for inspector ${member.pruefer} (key: ${inspectionKey}) to ${actualQuantity}`);

                    // Calculate new io based on the ratio
                    // If member had total=200 and now gets total=100, and had io=180, new io should be 90
                    let updatedIo = null;
                    if (member.io !== null && member.io !== undefined) {
                        // Member has already set io - adjust proportionally
                        const ratio = actualQuantity / member.total;
                        updatedIo = Math.ceil(member.io * ratio);
                    }

                    const updates = {
                        total: actualQuantity,
                        originalTotal: originalTotal  // Ensure originalTotal is stored
                    };

                    if (updatedIo !== null) {
                        updates.io = updatedIo;
                    }

                    await updateInspection(inspectionKey, updates);
                }
            } else {
                // Different inspection types = each inspector does all parts
                actualQuantity = qty;
                state.currentInspection.originalTotal = qty;
                console.log(`🔵 Different inspection types - each inspector does all ${qty} parts`);
            }
        } else {
            // No team members - store original total
            state.currentInspection.originalTotal = qty;
        }

        state.currentInspection.quantity = actualQuantity;
        state.currentInspection.defects = {};
        state.currentInspection.totalDefects = 0;

        // ALWAYS create own inspection entry (each inspector has their own row)
        console.log('🔵 Creating new inspection entry...');
        await createInspectionDatabaseEntry();

        // Initialize or update currentPartsInContainer in TBK
        await initializeOrUpdateCurrentParts(actualQuantity);

        // Show notification based on team situation
        if (teamMembers.length > 0) {
            // Other inspectors are working on this batch
            showTeamNotification(teamMembers, actualQuantity, qty);
        } else {
            // Solo inspection
            showNotification('🎯 Prüfung gestartet', `Du prüfst ${actualQuantity} Teile`, 'success');
        }

        console.log('🔵 Showing inspection interface...');
        showInspectionInterface();
    } catch (error) {
        console.error('❌ Error in setQuantity:', error);
        alert('Fehler beim Starten der Prüfung: ' + error.message);
    }
}

// Inspection Database Functions

/**
 * Check for all active inspections (team members) for this batch
 * Returns array of all active inspections in the same sequence step
 */
async function checkForActiveInspections() {
    const batchNummer = getBatchNumber(
        state.currentInspection.articleNumber,
        state.currentInspection.containerNumber
    );

    if (!batchNummer) {
        console.log('🔍 checkForActiveInspections: No batch number found');
        return [];
    }

    const currentType = state.currentInspection.inspectionType;

    console.log('🔍 checkForActiveInspections: Looking for batch', batchNummer, 'type', currentType);

    // Get inspection sequence to find which types are in the same step
    const sequence = state.partTypeStandards.Housing.inspectionSequence;
    let typesInSameStep = [currentType];

    // Find which step the current inspection is in
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i].includes(currentType)) {
            typesInSameStep = sequence[i];
            console.log('🔍 Types in same sequence step:', typesInSameStep);
            break;
        }
    }

    // Map types to codes
    const typeToCode = { 'lehre': 'L', 'mass': 'M', 'sicht': 'S' };
    const codesInSameStep = typesInSameStep.map(t => typeToCode[t]);
    console.log('🔍 Codes in same step:', codesInSameStep);

    // Find ALL active inspections in the same step (not just from current user)
    const allInspections = getInspectionDatabaseAsArray();
    const activeTeamMembers = allInspections.filter(
        insp => insp.batchNummer === batchNummer &&
                (!insp.ende || insp.ende === null || insp.ende === undefined) &&
                codesInSameStep.includes(insp.inspektion) &&
                insp.pruefer !== state.personnelNumber // Exclude current user
    );

    console.log('🔍 checkForActiveInspections: Found', activeTeamMembers.length, 'team members');
    return activeTeamMembers;
}

/**
 * Show team notification when other inspectors are working on the same batch
 */
function showTeamNotification(teamMembers, actualQuantity, originalQuantity) {
    const codeToLabel = { 'L': 'Lehre', 'M': 'Maß', 'S': 'Sicht' };
    const typeToCode = { 'lehre': 'L', 'mass': 'M', 'sicht': 'S' };
    const currentCode = typeToCode[state.currentInspection.inspectionType];
    const sameTypeMembers = teamMembers.filter(member => member.inspektion === currentCode);
    const isSameType = sameTypeMembers.length > 0;

    if (teamMembers.length === 1) {
        // One other inspector
        const member = teamMembers[0];
        const typeLabel = codeToLabel[member.inspektion];

        if (isSameType) {
            // Same type - quantity was split
            showNotification(
                'Team-Pruefung',
                `Pruefer ${member.pruefer} arbeitet auch an diesem Behaelter. Ihr teilt euch ${originalQuantity} Teile (je ${actualQuantity} Teile)`,
                'info',
                5000
            );
        } else {
            // Different type - each does full quantity
            showNotification(
                'Parallel-Pruefung',
                `Pruefer ${member.pruefer} macht parallel ${typeLabel}-Pruefung (${actualQuantity} Teile)`,
                'info',
                4000
            );
        }
    } else {
        // Multiple inspectors
        if (isSameType) {
            // At least one doing same type - quantity was split
            const totalInspectors = sameTypeMembers.length + 1;
            showNotification(
                'Team-Pruefung',
                `${sameTypeMembers.length} weitere Pruefer arbeiten am selben Typ. ${originalQuantity} Teile aufgeteilt auf ${totalInspectors} Pruefer (je ${actualQuantity} Teile)`,
                'info',
                5000
            );
        } else {
            // All different types
            const types = [...new Set(teamMembers.map(m => codeToLabel[m.inspektion]))];
            showNotification(
                'Parallel-Pruefung',
                `${teamMembers.length} Pruefer arbeiten parallel an anderen Typen (${types.join(', ')})`,
                'info',
                4000
            );
        }
    }
}

async function createInspectionDatabaseEntry() {
    // Get BatchNummer from TBK + Container combination
    const batchNummer = getBatchNumber(
        state.currentInspection.articleNumber,
        state.currentInspection.containerNumber
    );

    if (!batchNummer) {
        console.error("Batch not found in database");
        return;
    }

    // Calculate Prüfungsnummer (count inspections for this batch + 1)
    const inspectionsForBatch = getInspectionDatabaseAsArray().filter(
        entry => entry.batchNummer === batchNummer
    );
    const pruefungsNummer = inspectionsForBatch.length + 1;

    // Determine inspection type: M (Maß), L (Lehre), or S (Sicht)
    let inspektion = 'L';
    if (state.currentInspection.inspectionType === 'mass') inspektion = 'M';
    else if (state.currentInspection.inspectionType === 'sicht') inspektion = 'S';

    // Create unique key for this inspection (batchNummer-pruefungsNummer)
    const inspectionKey = `${batchNummer}-${pruefungsNummer}`;

    // Create entry with ALL fields initialized (even if null)
    // Each inspector has their OWN entry (no shared activeInspectors)
    const entry = {
        pruefungsNummer: pruefungsNummer,
        batchNummer: batchNummer,
        inspektion: inspektion,
        total: state.currentInspection.quantity,
        originalTotal: state.currentInspection.originalTotal || state.currentInspection.quantity, // Store original total for team splitting
        io: null,  // Will be filled when inspection completes
        nio: null, // Will be filled when inspection completes
        defects: {}, // Defects tracking
        pruefer: state.personnelNumber,
        start: new Date().toLocaleString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }),
        ende: null // Will be filled when inspection completes
    };

    // Save with the unique key (batchNummer-pruefungsNummer)
    await addInspection(inspectionKey, entry);

    // Store reference to this entry for later updates
    state.currentInspection.inspectionDbId = inspectionKey;
    console.log('✅ Inspection entry created:', inspectionKey);

    // Set up real-time listener for THIS inspection entry
    // This allows us to react when another inspector joins and the quantity is adjusted
    setupInspectionQuantityListener(inspectionKey);
}

/**
 * Listen to changes in the current inspection entry
 * Updates local state if quantity changes (e.g., when another inspector joins)
 */
function setupInspectionQuantityListener(inspectionKey) {
    listenToData(`inspectionDatabase/${inspectionKey}`, (data) => {
        if (!data) return;

        // Only update if we're still in an active inspection with this key
        if (state.currentInspection.inspectionDbId !== inspectionKey) return;

        // Check if total quantity has changed
        if (data.total !== state.currentInspection.quantity) {
            console.log(`🔄 Quantity changed from ${state.currentInspection.quantity} to ${data.total}`);

            // Update local state
            const oldQuantity = state.currentInspection.quantity;
            state.currentInspection.quantity = data.total;

            // Update UI to reflect new quantity in the inspection interface
            const totalQuantityDisplay = document.getElementById('totalQuantityDisplay');
            if (totalQuantityDisplay) {
                totalQuantityDisplay.textContent = data.total;
                console.log(`✅ Updated totalQuantityDisplay to ${data.total}`);
            }

            // Show notification
            showNotification(
                'Menge angepasst',
                `Ein weiterer Prüfer ist beigetreten. Deine Menge wurde von ${oldQuantity} auf ${data.total} Teile angepasst.`,
                'info',
                5000
            );
        }
    });
}

async function updateInspectionDatabaseEntry() {
    if (state.currentInspection.inspectionDbId === null) return;

    // Calculate IO and NIO
    const nio = state.currentInspection.totalDefects;
    const io = state.currentInspection.quantity - nio;

    const updates = {
        io: io,
        nio: nio,
        ende: new Date().toLocaleString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })
    };

    await updateInspection(state.currentInspection.inspectionDbId, updates);
}

/**
 * Decrement currentPartsInContainer by 1 (called when a NIO is registered)
 * This is the SIMPLEST approach: Every NIO immediately reduces the count by 1
 */
async function decrementCurrentPartsInContainer() {
    const batchNummer = getBatchNumber(
        state.currentInspection.articleNumber,
        state.currentInspection.containerNumber
    );

    if (!batchNummer) {
        console.error('decrementCurrentPartsInContainer: No batch number found');
        return;
    }

    const tbkEntry = await getTBKEntry(batchNummer);

    if (!tbkEntry || tbkEntry.currentPartsInContainer === null || tbkEntry.currentPartsInContainer === undefined) {
        console.error('decrementCurrentPartsInContainer: currentPartsInContainer not initialized');
        return;
    }

    const newValue = tbkEntry.currentPartsInContainer - 1;
    console.log(`🔻 NIO registered: currentPartsInContainer ${tbkEntry.currentPartsInContainer} → ${newValue}`);

    await updateTBKEntry(batchNummer, {
        currentPartsInContainer: newValue
    });
}

/**
 * Initialize or update currentPartsInContainer when a quantity is set
 * Called when a new inspection starts (total quantity is set)
 *
 * Logic:
 * 1. If currentPartsInContainer is null (first inspection) → Set it to the quantity
 * 2. If an inspection of the same type is already completed → Add the new quantity (nachträgliche Teile)
 * 3. Otherwise → Do nothing (will be updated when inspection completes)
 */
async function initializeOrUpdateCurrentParts(quantity) {
    const batchNummer = getBatchNumber(
        state.currentInspection.articleNumber,
        state.currentInspection.containerNumber
    );

    if (!batchNummer) {
        console.log('⚠️ initializeOrUpdateCurrentParts: No batch number found');
        return;
    }

    const tbkEntry = await getTBKEntry(batchNummer);
    const currentType = state.currentInspection.inspectionType;
    const typeToCode = { 'lehre': 'L', 'mass': 'M', 'sicht': 'S' };
    const currentCode = typeToCode[currentType];

    console.log(`\n========================================`);
    console.log(`🔧 INITIALIZE/UPDATE CURRENT PARTS`);
    console.log(`   Batch: ${batchNummer}`);
    console.log(`   Type: ${currentType} (${currentCode})`);
    console.log(`   Quantity: ${quantity}`);
    console.log(`========================================`);

    // Check if currentPartsInContainer is already set
    if (tbkEntry && tbkEntry.currentPartsInContainer !== null && tbkEntry.currentPartsInContainer !== undefined) {
        console.log(`📊 currentPartsInContainer already exists: ${tbkEntry.currentPartsInContainer}`);

        // Check if there are completed inspections of the same type
        const { getData } = await import('./firebase.js');
        const freshInspectionData = await getData('inspectionDatabase');
        const allInspections = freshInspectionData ? Object.values(freshInspectionData) : [];

        const completedSameType = allInspections.filter(
            insp => insp.batchNummer === batchNummer &&
                    insp.inspektion === currentCode &&
                    insp.ende !== null && insp.ende !== undefined &&
                    insp.io !== null && insp.nio !== null &&
                    insp.pruefer !== state.personnelNumber // Exclude current user's inspection
        );

        if (completedSameType.length > 0) {
            // Nachträgliche Teile: Add quantity to currentPartsInContainer
            const newCurrentParts = tbkEntry.currentPartsInContainer + quantity;
            console.log(`✅ Nachträgliche Teile detected! Adding ${quantity} parts`);
            console.log(`   Old: ${tbkEntry.currentPartsInContainer} → New: ${newCurrentParts}`);

            await updateTBKEntry(batchNummer, {
                currentPartsInContainer: newCurrentParts
            });
        } else {
            console.log(`ℹ️ No completed inspections of same type yet - will update on completion`);
        }
    } else {
        // First inspection - initialize currentPartsInContainer
        console.log(`✅ First inspection - initializing currentPartsInContainer to ${quantity}`);
        await updateTBKEntry(batchNummer, {
            currentPartsInContainer: quantity
        });
    }

    console.log(`========================================\n`);
}

async function deleteCurrentInspectionDatabaseEntry() {
    if (state.currentInspection.inspectionDbId === null) return;

    // Delete entry from Firebase
    const { deleteData } = await import('./firebase.js');
    await deleteData(`inspectionDatabase/${state.currentInspection.inspectionDbId}`);
    state.currentInspection.inspectionDbId = null;

    // Note: Prüfungsnummern recalculation is not needed with Firebase
    // as we use unique keys (batchNummer-pruefungsNummer)
}

// Quantity Input with Numpad
let quantityNumberInput = '';

function showManualQuantity() {
    quantityNumberInput = '';

    // Get remaining capacity info
    const remainingCapacity = state.currentInspection.remainingCapacity ||
                             state.partTypeStandards.Housing.containerCapacity;
    const containerCapacity = state.partTypeStandards.Housing.containerCapacity;
    const isPartialContainer = remainingCapacity < containerCapacity;

    let capacityInfo = '';
    if (isPartialContainer) {
        capacityInfo = `<p style="text-align: center; color: #f59e0b; font-size: 14px; margin-top: -10px; margin-bottom: 15px;">⚠️ Verbleibende Kapazität: ${remainingCapacity} Teile</p>`;
    }

    const content = document.getElementById('contentArea');
    content.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; padding: 20px;">
            <div style="max-width: 500px; width: 100%;">
                <h2 style="text-align: center; margin-bottom: 25px; color: #1a202c; font-size: 24px;">${t('quantity')}</h2>
                ${capacityInfo}

                <div class="number-input-display" id="quantityDisplay">
                    <div class="number-input-label">Anzahl Teile (max. ${remainingCapacity})</div>
                    <div class="number-input-value empty" id="quantityValue">0</div>
                </div>

                <div class="numpad">
                    <button class="numpad-btn" onclick="addQuantityDigit('1')">1</button>
                    <button class="numpad-btn" onclick="addQuantityDigit('2')">2</button>
                    <button class="numpad-btn" onclick="addQuantityDigit('3')">3</button>
                    <button class="numpad-btn" onclick="addQuantityDigit('4')">4</button>
                    <button class="numpad-btn" onclick="addQuantityDigit('5')">5</button>
                    <button class="numpad-btn" onclick="addQuantityDigit('6')">6</button>
                    <button class="numpad-btn" onclick="addQuantityDigit('7')">7</button>
                    <button class="numpad-btn" onclick="addQuantityDigit('8')">8</button>
                    <button class="numpad-btn" onclick="addQuantityDigit('9')">9</button>
                    <button class="numpad-btn special" onclick="clearQuantityNumber()">⌫</button>
                    <button class="numpad-btn" onclick="addQuantityDigit('0')">0</button>
                    <button class="numpad-btn" onclick="submitManualQuantity()" style="background: linear-gradient(135deg, #10b981, #059669); color: white; border: none;">✓</button>
                </div>
            </div>
        </div>
    `;

    updateQuantityDisplay();
}

function addQuantityDigit(digit) {
    if (quantityNumberInput.length < 3) {
        quantityNumberInput += digit;
        updateQuantityDisplay();

        // Vibration feedback
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    }
}

function clearQuantityNumber() {
    if (quantityNumberInput.length > 0) {
        quantityNumberInput = quantityNumberInput.slice(0, -1);
        updateQuantityDisplay();

        // Vibration feedback
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    }
}

function updateQuantityDisplay() {
    const display = document.getElementById('quantityDisplay');
    const valueEl = document.getElementById('quantityValue');

    if (!valueEl) return;

    if (quantityNumberInput.length === 0) {
        valueEl.innerHTML = '0';
        valueEl.classList.add('empty');
        display.classList.remove('active');
    } else {
        // Build display with animation for each digit
        let displayValue = '';
        for (let i = 0; i < quantityNumberInput.length; i++) {
            displayValue += `<span class="digit">${quantityNumberInput[i]}</span>`;
        }
        valueEl.innerHTML = displayValue;
        valueEl.classList.remove('empty');
        display.classList.add('active');
    }
}

function submitManualQuantity() {
    const qty = parseInt(quantityNumberInput);

    // Get remaining capacity for this container
    const remainingCapacity = state.currentInspection.remainingCapacity ||
                             state.partTypeStandards.Housing.containerCapacity;

    if (qty > 0 && qty <= remainingCapacity) {
        // Vibration feedback
        if ('vibrate' in navigator) {
            navigator.vibrate(200);
        }
        setQuantity(qty);
    } else if (quantityNumberInput.length === 0) {
        // Go back if no input
        goBack();
    } else if (qty > remainingCapacity) {
        // Show error if exceeds remaining capacity
        showModal({
            title: 'Kapazität überschritten',
            content: `<p>Die eingegebene Menge (${qty} Teile) überschreitet die verbleibende Kapazität dieses Behälters (${remainingCapacity} Teile).</p>`,
            buttons: [
                { text: 'OK', action: closeModal }
            ]
        });
    } else {
        // Shake animation if invalid
        const display = document.getElementById('quantityDisplay');
        display.style.animation = 'none';
        setTimeout(() => {
            display.style.animation = 'shake 0.5s';
        }, 10);
    }
}

// Inspection Interface
function showInspectionInterface() {
    addToHistory(showQuantitySelection);
    const type = state.currentInspection.inspectionType;

    // Get ALL inspectors working on this batch (including current)
    const allInspectors = getAllBatchInspectors();

    // Store inspectors in state for modal
    state.currentInspection.otherInspectors = allInspectors;

    // Determine display for unified inspector card
    let inspectorLabel = 'Prüfer';
    let inspectorDisplay = '';

    if (allInspectors.length === 0) {
        // Only current user
        inspectorDisplay = '<span style="color: #94a3b8; font-size: 18px;">Nur du</span>';
    } else if (allInspectors.length === 1) {
        // One other inspector
        const inspector = allInspectors[0];
        const statusClass = inspector.status === 'active' ? 'status-active' : 'status-finished';

        inspectorDisplay = `
            <span class="status-indicator ${statusClass}"></span>
            P-${inspector.pruefer} (${inspector.typeLabel})
        `;
    } else {
        // Multiple inspectors
        const activeCount = allInspectors.filter(insp => insp.status === 'active').length;
        const finishedCount = allInspectors.filter(insp => insp.status === 'finished').length;

        inspectorDisplay = `
            ${activeCount > 0 ? `<span class="status-indicator status-active"></span>${activeCount} aktiv` : ''}
            ${activeCount > 0 && finishedCount > 0 ? ' • ' : ''}
            ${finishedCount > 0 ? `<span class="status-indicator status-finished"></span>${finishedCount} fertig` : ''}
        `;
    }

    // Set up periodic refresh of inspector display
    setupInspectorDisplayRefresh();

    // Get defect types from standards based on inspection type
    const defectTypes = state.partTypeStandards.Housing.defectTypes[type];

    const content = document.getElementById('contentArea');
    content.innerHTML = `
        <div class="inspection-container">
            <div class="info-row" style="grid-template-columns: repeat(4, 1fr);">
                <div class="info-card animate-slide-up stagger-1">
                    <h3>Artikel</h3>
                    <p>Housing</p>
                </div>
                <div class="info-card animate-slide-up stagger-2">
                    <h3>${t('totalQuantity')}</h3>
                    <p id="totalQuantityDisplay">${state.currentInspection.quantity}</p>
                </div>
                <div class="info-card animate-slide-up stagger-3">
                    <h3>${t('defectCount')}</h3>
                    <p id="totalDefects">0</p>
                </div>
                <div class="info-card animate-slide-up stagger-4" style="cursor: ${allInspectors.length > 0 ? 'pointer' : 'default'};" ${allInspectors.length > 0 ? 'onclick="showInspectorModal()"' : ''}>
                    <h3>${inspectorLabel}</h3>
                    <p class="inspector-status" id="inspectorDisplay">
                        ${inspectorDisplay}
                    </p>
                </div>
            </div>

            <div class="defect-grid">
                ${defectTypes.map((defect, i) => `
                    <button class="defect-btn animate-scale stagger-${(i % 4) + 1}"
                            onclick="registerDefect('${defect}', event)">
                        <span class="defect-counter" id="counter-${i}">0</span>
                        <h3>${defect}</h3>
                    </button>
                `).join('')}
            </div>

            <div class="action-row">
                <button class="action-btn btn-complete animate-slide-up stagger-2" onclick="completeInspection()">${t('inspectionComplete')}</button>
                <button class="action-btn btn-reset animate-slide-up stagger-3" onclick="resetInspection()">${t('resetInspection')}</button>
                <button class="action-btn btn-drawing animate-slide-up stagger-4" onclick="showDrawing()" ${!state.partTypeStandards.Housing.drawing ? 'disabled' : ''}>
                    Zeichnung
                </button>
            </div>
        </div>
    `;
}

/**
 * Get ALL inspectors working on this batch (not just previous steps, but current step too)
 * Excludes the current user
 */
function getAllBatchInspectors() {
    const batchNummer = getBatchNumber(
        state.currentInspection.articleNumber,
        state.currentInspection.containerNumber
    );

    if (!batchNummer) return [];

    const typeToCode = { 'lehre': 'L', 'mass': 'M', 'sicht': 'S' };
    const codeToLabel = { 'L': 'Lehre', 'M': 'Maß', 'S': 'Sicht' };

    // Get ALL inspections for this batch
    const allInspections = getInspectionDatabaseAsArray().filter(
        entry => entry.batchNummer === batchNummer &&
                 entry.pruefer !== state.personnelNumber // Exclude current user
    );

    const inspectors = allInspections.map(entry => {
        // Determine status (finished if inspection has ende, active if not)
        const status = (entry.ende && entry.ende !== null) ? 'finished' : 'active';

        return {
            pruefer: entry.pruefer,
            status: status,
            typeLabel: codeToLabel[entry.inspektion],
            pruefungsNummer: entry.pruefungsNummer,
            inspektion: entry.inspektion
        };
    });

    return inspectors;
}

/**
 * Refresh inspector display periodically
 */
let inspectorRefreshInterval = null;

function setupInspectorDisplayRefresh() {
    // Clear any existing interval
    if (inspectorRefreshInterval) {
        clearInterval(inspectorRefreshInterval);
    }

    // Refresh every 2 seconds
    inspectorRefreshInterval = setInterval(() => {
        refreshInspectorDisplay();
    }, 2000);
}

function refreshInspectorDisplay() {
    const inspectorDisplayEl = document.getElementById('inspectorDisplay');
    if (!inspectorDisplayEl) {
        // Not on inspection screen anymore, stop refreshing
        if (inspectorRefreshInterval) {
            clearInterval(inspectorRefreshInterval);
            inspectorRefreshInterval = null;
        }
        return;
    }

    const allInspectors = getAllBatchInspectors();
    let inspectorDisplay = '';

    if (allInspectors.length === 0) {
        inspectorDisplay = '<span style="color: #94a3b8; font-size: 18px;">Nur du</span>';
    } else if (allInspectors.length === 1) {
        const inspector = allInspectors[0];
        const statusClass = inspector.status === 'active' ? 'status-active' : 'status-finished';
        inspectorDisplay = `
            <span class="status-indicator ${statusClass}"></span>
            P-${inspector.pruefer} (${inspector.typeLabel})
        `;
    } else {
        const activeCount = allInspectors.filter(insp => insp.status === 'active').length;
        const finishedCount = allInspectors.filter(insp => insp.status === 'finished').length;

        inspectorDisplay = `
            ${activeCount > 0 ? `<span class="status-indicator status-active"></span>${activeCount} aktiv` : ''}
            ${activeCount > 0 && finishedCount > 0 ? ' • ' : ''}
            ${finishedCount > 0 ? `<span class="status-indicator status-finished"></span>${finishedCount} fertig` : ''}
        `;
    }

    inspectorDisplayEl.innerHTML = inspectorDisplay;

    // Update stored state for modal
    state.currentInspection.otherInspectors = allInspectors;
}

// Show Inspector Modal
function showInspectorModal() {
    const inspectors = state.currentInspection.otherInspectors || [];

    if (inspectors.length === 0) return;

    const inspectorCards = inspectors.map(insp => `
        <div class="inspector-info-item animate-slide-up">
            <h4>Prüfer</h4>
            <p>P-${insp.pruefer}</p>
        </div>
        <div class="inspector-info-item animate-slide-up">
            <h4>Prüfung</h4>
            <p>${insp.typeLabel} - Prüf. ${insp.pruefungsNummer}</p>
        </div>
        <div class="inspector-info-item animate-slide-up">
            <h4>Status</h4>
            <p>
                <span class="status-indicator ${insp.status === 'active' ? 'status-active' : 'status-finished'}"></span>
                ${insp.status === 'active' ? t('active') : t('finished')}
            </p>
        </div>
    `).join('');

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'inspectorModal';
    modal.onclick = (e) => {
        if (e.target === modal) closeInspectorModal();
    };

    modal.innerHTML = `
        <div class="inspector-modal">
            <div class="inspector-header">
                <h2>Prüfer an diesem Behälter</h2>
                <p>TBK ${state.currentInspection.articleNumber} • Artikel Housing</p>
            </div>
            <div class="inspector-body">
                <div class="inspector-info-grid">
                    ${inspectorCards}
                </div>
                <button class="btn-primary" onclick="closeInspectorModal()">Schließen</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function closeInspectorModal() {
    const modal = document.getElementById('inspectorModal');
    if (modal) {
        modal.remove();
    }
}

async function registerDefect(type, event) {
    const button = event.currentTarget;

    // Prevent multiple clicks during animation
    if (button.classList.contains('clicked')) {
        return;
    }

    // Add click animation
    button.classList.add('clicked');

    // Register the defect
    if (!state.currentInspection.defects[type]) {
        state.currentInspection.defects[type] = 0;
    }
    state.currentInspection.defects[type]++;
    state.currentInspection.totalDefects++;

    // Update UI
    updateDefectCounters();

    // Sync defects to Firebase in real-time
    if (state.currentInspection.inspectionDbId) {
        await updateInspection(state.currentInspection.inspectionDbId, {
            defects: state.currentInspection.defects,
            nio: state.currentInspection.totalDefects
        });
    }

    // DIRECTLY update currentPartsInContainer: subtract 1 for each NIO
    await decrementCurrentPartsInContainer();

    // Remove class after animation
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 250);
}

function updateDefectCounters() {
    // Get defect types from standards based on current inspection type
    const defectTypes = state.partTypeStandards.Housing.defectTypes[state.currentInspection.inspectionType];

    defectTypes.forEach((type, i) => {
        const counter = document.getElementById(`counter-${i}`);
        if (counter) {
            const oldValue = parseInt(counter.textContent);
            const newValue = state.currentInspection.defects[type] || 0;

            if (newValue !== oldValue) {
                counter.style.animation = 'none';
                setTimeout(() => {
                    counter.style.animation = 'countPulse 0.4s ease-out';
                    counter.textContent = newValue;
                }, 10);
            }
        }
    });

    const totalElement = document.getElementById('totalDefects');
    const oldTotal = parseInt(totalElement.textContent);
    if (state.currentInspection.totalDefects !== oldTotal) {
        totalElement.style.animation = 'none';
        setTimeout(() => {
            totalElement.style.animation = 'countPulse 0.4s ease-out';
            totalElement.textContent = state.currentInspection.totalDefects;
        }, 10);
    }
}

// Complete Inspection
async function completeInspection() {
    const good = state.currentInspection.quantity - state.currentInspection.totalDefects;
    const bad = state.currentInspection.totalDefects;

    // Update inspection database entry with IO, NIO, and end time
    await updateInspectionDatabaseEntry();

    // NOTE: currentPartsInContainer is already up-to-date!
    // It's updated in real-time whenever a NIO is registered (see decrementCurrentPartsInContainer)

    showModal({
        title: t('inspectionComplete'),
        content: `
            <p><strong>Gut:</strong> ${good} Teile</p>
            <p><strong>Schlecht:</strong> ${bad} Teile</p>
            <p style="margin-top: 20px;">Ergebnisse werden gespeichert...</p>
        `,
        buttons: [
            { text: t('confirm'), action: () => { closeModal(); showMainMenu(); } }
        ]
    });
}

// Reset Inspection
function resetInspection() {
    showModal({
        title: 'Warnung',
        content: '<p>Möchten Sie die aktuelle Prüfung wirklich zurücksetzen? Alle Daten gehen verloren.</p>',
        buttons: [
            { text: 'Abbrechen', action: closeModal },
            { text: 'Zurücksetzen', action: async () => {
                // Delete current inspection from database
                await deleteCurrentInspectionDatabaseEntry();
                closeModal();
                showMainMenu();
            }}
        ]
    });
}

// Show Drawing
function showDrawing() {
    if (!state.partTypeStandards.Housing.drawing) {
        showNotification('Keine Zeichnung', 'Es wurde keine technische Zeichnung hochgeladen', 'info');
        return;
    }

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.onclick = (e) => {
        if (e.target === modal || e.target.classList.contains('modal-close-btn')) {
            modal.remove();
        }
    };

    modal.innerHTML = `
        <div class="drawing-modal">
            <div class="drawing-header">
                <h2>Technische Zeichnung - Housing</h2>
                <button class="modal-close-btn" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <div class="drawing-content">
                <img src="${state.partTypeStandards.Housing.drawing}" alt="Technische Zeichnung" />
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

// Modal System
function showModal(config) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'activeModal';

    const buttonsHtml = config.buttons.map((btn, index) =>
        `<button class="btn-secondary" onclick="executeModalAction(${index})">${btn.text}</button>`
    ).join('');

    modal.innerHTML = `
        <div class="modal-content">
            <h2>${config.title}</h2>
            ${config.content}
            <div class="modal-buttons">
                ${buttonsHtml}
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Store actions in a temporary array
    window.currentModalActions = config.buttons.map(btn => btn.action);
}

function executeModalAction(index) {
    if (window.currentModalActions && window.currentModalActions[index]) {
        window.currentModalActions[index]();
    }
}

function closeModal() {
    const modal = document.getElementById('activeModal');
    if (modal) {
        modal.remove();
    }
}

// Feature Modals
function showFeatureNotAvailable() {
    showModal({
        title: t('featureNotAvailable'),
        content: '<p>Diese Funktion ist derzeit nicht verfügbar.</p>',
        buttons: [
            { text: 'OK', action: closeModal }
        ]
    });
}

function showFeatureInProgress() {
    showModal({
        title: t('featureInProgress'),
        content: '<p>Diese Funktion ist aktuell in Entwicklung.</p>',
        buttons: [
            { text: 'OK', action: closeModal }
        ]
    });
}

// Notification System
function showNotification(title, message, type = 'info', duration = 4000) {
    const notification = document.createElement('div');
    
    // Color scheme based on type
    const colors = {
        success: 'linear-gradient(135deg, #10b981, #059669)',
        info: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        warning: 'linear-gradient(135deg, #f59e0b, #d97706)',
        error: 'linear-gradient(135deg, #ef4444, #dc2626)'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 20px 30px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 3000;
        font-size: 16px;
        font-weight: 600;
        animation: slideInRight 0.4s ease-out;
        max-width: 400px;
    `;
    
    notification.innerHTML = `
        <div style="font-size: 18px; margin-bottom: 5px;">${title}</div>
        <div style="font-size: 14px; font-weight: 400; opacity: 0.95;">${message}</div>
    `;
    
    document.body.appendChild(notification);

    // Remove after duration
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// Barcode Scanner
let html5QrcodeScanner = null;
let scanInProgress = false;

function openBarcodeScanner() {
    scanInProgress = false;
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'scannerModal';
    modal.onclick = (e) => {
        if (e.target === modal) closeBarcodeScanner();
    };

    modal.innerHTML = `
        <div class="scanner-modal">
            <div class="scanner-header">
                <h2>Barcode Scanner</h2>
                <button class="scanner-close-btn" onclick="closeBarcodeScanner()">×</button>
            </div>
            <div class="scanner-body">
                <div id="reader"></div>
                <div class="scanner-status" id="scannerStatus">
                    <p class="scanner-status-text">Richte die Kamera auf einen Barcode...</p>
                </div>
                <div class="scanner-fallback">
                    <p class="scanner-fallback-text">oder gib den Code manuell ein:</p>
                    <input
                        type="text"
                        id="manualBarcodeInput"
                        placeholder="Barcode eingeben"
                        onkeypress="if(event.key === 'Enter') submitManualBarcode()"
                    />
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    startBarcodeScanner();
}

function startBarcodeScanner() {
    const config = {
        fps: 20, // Increased from 10 for faster scanning
        qrbox: { width: 400, height: 150 }, // Wider and flatter for barcodes
        // Support all common barcode formats
        formatsToSupport: [
            Html5QrcodeSupportedFormats.QR_CODE,
            Html5QrcodeSupportedFormats.EAN_13,
            Html5QrcodeSupportedFormats.EAN_8,
            Html5QrcodeSupportedFormats.CODE_128,
            Html5QrcodeSupportedFormats.CODE_39,
            Html5QrcodeSupportedFormats.UPC_A,
            Html5QrcodeSupportedFormats.UPC_E
        ],
        rememberLastUsedCamera: true,
        aspectRatio: 1.777778 // 16:9 aspect ratio for better barcode scanning
    };

    html5QrcodeScanner = new Html5Qrcode("reader");

    // Try to get rear camera on mobile devices
    html5QrcodeScanner.start(
        { facingMode: "environment" },
        config,
        onScanSuccess,
        onScanError
    ).catch(err => {
        console.error("Camera start error:", err);
        const status = document.getElementById('scannerStatus');
        if (status) {
            status.className = 'scanner-status error';
            status.innerHTML = `
                <p class="scanner-status-text">⚠️ Kamera-Zugriff verweigert oder nicht verfügbar</p>
                <p style="font-size: 13px; margin-top: 10px; font-weight: normal;">Bitte verwende die manuelle Eingabe unten.</p>
            `;
        }
        // Auto-focus manual input
        setTimeout(() => {
            const input = document.getElementById('manualBarcodeInput');
            if (input) input.focus();
        }, 300);
    });
}

function onScanSuccess(decodedText, decodedResult) {
    // Prevent multiple scans
    if (scanInProgress) {
        return;
    }
    scanInProgress = true;

    // Vibration feedback
    if ('vibrate' in navigator) {
        navigator.vibrate(200);
    }

    const status = document.getElementById('scannerStatus');
    if (status) {
        status.className = 'scanner-status success';
        status.innerHTML = `
            <p class="scanner-status-text">✓ Erfolgreich gescannt!</p>
            <div class="scanner-result">${decodedText}</div>
        `;
    }

    // Process the scanned code immediately - show brief success message
    setTimeout(() => {
        processBarcodeResult(decodedText);
    }, 500);
}

function onScanError(errorMessage) {
    // Silently ignore scan errors (happens continuously while scanning)
}

function submitManualBarcode() {
    const input = document.getElementById('manualBarcodeInput');
    const barcode = input.value.trim();

    if (barcode.length > 0) {
        // Vibration feedback
        if ('vibrate' in navigator) {
            navigator.vibrate(200);
        }

        const status = document.getElementById('scannerStatus');
        if (status) {
            status.className = 'scanner-status success';
            status.innerHTML = `
                <p class="scanner-status-text">✓ Manuell eingegeben!</p>
                <div class="scanner-result">${barcode}</div>
            `;
        }

        setTimeout(() => {
            processBarcodeResult(barcode);
        }, 1000);
    }
}

function processBarcodeResult(barcode) {
    // Stop and clean up scanner first
    if (html5QrcodeScanner) {
        html5QrcodeScanner.stop().then(() => {
            html5QrcodeScanner.clear();
            html5QrcodeScanner = null;
        }).catch(err => {
            console.error("Error stopping scanner:", err);
            html5QrcodeScanner = null;
        });
    }

    // Remove modal
    const modal = document.getElementById('scannerModal');
    if (modal) {
        modal.remove();
    }

    // Save the scanned barcode as TBK number
    state.currentInspection.articleNumber = barcode;
    state.currentInspection.tz = Math.floor(Math.random() * 11);

    // Show confirmation page (container number will be entered next)
    showScanConfirmation();
}

// TBK Database Functions
async function addTbkToDatabase(tbkNummer, containerNumber) {
    // Check if this TBK + Container combination already exists (use array version)
    const exists = getTBKDatabaseAsArray().some(entry =>
        entry.tbkNummer === tbkNummer && entry.containerNumber === containerNumber
    );

    if (!exists) {
        // Generate random 6-digit Laufkarte and 8-digit Chargenr
        const laufkarte = Math.floor(100000 + Math.random() * 900000).toString();
        const chargenr = Math.floor(10000000 + Math.random() * 90000000).toString();

        // Calculate next batchNummer
        const currentEntries = getTBKDatabaseAsArray();
        const batchNummer = currentEntries.length + 1;

        // Add new entry - unique batchNummer for each TBK + Container combination
        const entry = {
            batchNummer: batchNummer,
            tbkNummer: tbkNummer,
            containerNumber: containerNumber,
            laufkarte: laufkarte,
            chargenr: chargenr,
            currentPartsInContainer: null  // Will be set after first inspection
        };

        await addTBKEntry(entry);
    }
}

function getBatchNumber(tbkNummer, containerNumber) {
    // Find the batch for this specific TBK + Container combination (use array version)
    const entry = getTBKDatabaseAsArray().find(e =>
        e.tbkNummer === tbkNummer && e.containerNumber === containerNumber
    );
    return entry ? entry.batchNummer : null;
}

function openDatabase() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'databaseModal';
    modal.onclick = (e) => {
        if (e.target === modal) closeDatabase();
    };

    // TBK Database Table (use array version)
    const tbkDatabaseArray = getTBKDatabaseAsArray();
    let tbkTableContent = '';
    if (tbkDatabaseArray.length === 0) {
        tbkTableContent = `
            <div class="database-empty">
                <div class="database-empty-icon">🗄️</div>
                <div class="database-empty-text">Keine TBK-Daten vorhanden</div>
                <div class="database-empty-subtext">Scanne eine TBK, um Einträge zu erstellen</div>
            </div>
        `;
    } else {
        const rows = tbkDatabaseArray.map(entry => `
            <tr>
                <td>${entry.batchNummer}</td>
                <td>${entry.tbkNummer}</td>
                <td>${entry.containerNumber}</td>
                <td>${entry.laufkarte}</td>
                <td>${entry.chargenr}</td>
            </tr>
        `).join('');

        tbkTableContent = `
            <h3 style="margin-bottom: 20px; color: #1a202c; font-size: 20px;">TBK Datenbank</h3>
            <table class="database-table">
                <thead>
                    <tr>
                        <th>BatchNummer</th>
                        <th>TBK Nummer</th>
                        <th>Behälter</th>
                        <th>Laufkarte</th>
                        <th>ChargenNr</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        `;
    }

    // Inspection Database Table (use array version)
    const inspectionDatabaseArray = getInspectionDatabaseAsArray();
    let inspectionTableContent = '';
    if (inspectionDatabaseArray.length === 0) {
        inspectionTableContent = `
            <div class="database-empty" style="margin-top: 40px;">
                <div class="database-empty-icon">📋</div>
                <div class="database-empty-text">Keine Prüfungen vorhanden</div>
                <div class="database-empty-subtext">Führe eine Prüfung durch, um Einträge zu erstellen</div>
            </div>
        `;
    } else {
        const rows = inspectionDatabaseArray.map(entry => `
            <tr>
                <td>${entry.pruefungsNummer}</td>
                <td>${entry.batchNummer}</td>
                <td>${entry.inspektion}</td>
                <td>${entry.total}</td>
                <td>${entry.io !== null ? entry.io : '-'}</td>
                <td>${entry.nio !== null ? entry.nio : '-'}</td>
                <td>${entry.pruefer}</td>
                <td>${entry.start}</td>
                <td>${entry.ende || '-'}</td>
            </tr>
        `).join('');

        inspectionTableContent = `
            <h3 style="margin: 40px 0 20px 0; color: #1a202c; font-size: 20px;">Prüfungsdatenbank</h3>
            <table class="database-table">
                <thead>
                    <tr>
                        <th>Prüfungs-Nr</th>
                        <th>Batch-Nr</th>
                        <th>Inspektion</th>
                        <th>Total</th>
                        <th>IO</th>
                        <th>NIO</th>
                        <th>Prüfer</th>
                        <th>Start</th>
                        <th>Ende</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        `;
    }

    modal.innerHTML = `
        <div class="database-modal">
            <div class="database-header">
                <h2>🗄️ Datenbanken</h2>
                <button class="database-close-btn" onclick="closeDatabase()">×</button>
            </div>
            <div class="database-body">
                ${tbkTableContent}
                ${inspectionTableContent}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function closeDatabase() {
    const modal = document.getElementById('databaseModal');
    if (modal) {
        modal.remove();
    }
}

function closeBarcodeScanner() {
    // Manual close (X button or click outside)
    if (html5QrcodeScanner) {
        html5QrcodeScanner.stop().then(() => {
            html5QrcodeScanner.clear();
            html5QrcodeScanner = null;
        }).catch(err => {
            console.error("Error stopping scanner:", err);
            html5QrcodeScanner = null;
        });
    }

    const modal = document.getElementById('scannerModal');
    if (modal) {
        modal.remove();
    }

    scanInProgress = false;
}

// Standards Editor
function openStandards() {
    const standards = state.partTypeStandards.Housing;

    // Create defect tags for each inspection type
    const createDefectSection = (type, label) => {
        const defects = standards.defectTypes[type];
        const defectTagsHtml = defects.map((defect, index) => `
            <div class="defect-tag">
                ${defect}
                <button class="defect-tag-remove" onclick="removeDefectType('${type}', ${index})">×</button>
            </div>
        `).join('');

        return `
            <div class="standards-section">
                <h3>Fehlermerkmale - ${label}</h3>
                <div class="defect-tags" id="defectTags-${type}">
                    ${defectTagsHtml}
                </div>
                <input
                    type="text"
                    class="standards-input"
                    id="newDefectInput-${type}"
                    placeholder="Neues Fehlermerkmal für ${label} eingeben"
                    onkeypress="if(event.key === 'Enter') addDefectType('${type}')"
                />
                <button class="add-defect-btn" onclick="addDefectType('${type}')">+ Fehlermerkmal hinzufügen</button>
            </div>
        `;
    };

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'standardsModal';
    modal.onclick = (e) => {
        if (e.target === modal) closeStandards();
    };

    modal.innerHTML = `
        <div class="database-modal">
            <div class="database-header">
                <h2>⚙️ Standards - Housing</h2>
                <button class="database-close-btn" onclick="closeStandards()">×</button>
            </div>
            <div class="database-body">
                <div class="standards-section">
                    <h3>Behälterkapazität</h3>
                    <input
                        type="number"
                        class="standards-input"
                        id="containerCapacity"
                        value="${standards.containerCapacity}"
                        placeholder="Anzahl Teile pro Behälter"
                        inputmode="numeric"
                    />
                </div>

                ${createDefectSection('lehre', 'Lehre')}
                ${createDefectSection('mass', 'Maß')}
                ${createDefectSection('sicht', 'Sicht')}

                <div class="standards-section">
                    <h3>Inspektionsreihenfolge</h3>
                    <div class="sequence-builder" id="sequenceBuilder">
                        <div class="sequence-builder-title">🎯 Ziehe die Prüfungen in die Timeline (gleicher Schritt = parallel möglich)</div>
                        <div class="available-inspections" id="availableInspections"></div>
                        <div class="timeline" id="timeline"></div>
                    </div>
                </div>

                <div class="standards-section">
                    <h3>📐 Technische Zeichnung</h3>
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <input
                            type="file"
                            id="drawingUpload"
                            accept="image/*"
                            style="display: none;"
                            onchange="handleDrawingUpload(event)"
                        />
                        <button class="btn-secondary" onclick="document.getElementById('drawingUpload').click()">
                            ${standards.drawing ? '📄 Zeichnung ersetzen' : '📤 Zeichnung hochladen'}
                        </button>
                        ${standards.drawing ? '<button class="btn-secondary" onclick="removeDrawing()">🗑️ Entfernen</button>' : ''}
                        ${standards.drawing ? '<button class="btn-secondary" onclick="previewDrawing()">👁️ Vorschau</button>' : ''}
                    </div>
                    ${standards.drawing ? '<p style="color: #10b981; margin-top: 10px; font-size: 14px;">✓ Zeichnung hochgeladen</p>' : '<p style="color: #94a3b8; margin-top: 10px; font-size: 14px;">Keine Zeichnung hochgeladen</p>'}
                </div>

                <button class="btn-primary" style="width: 100%; margin-top: 30px;" onclick="saveStandards()">
                    Speichern
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Initialize the drag-and-drop sequence builder
    initializeSequenceBuilder();
}

function initializeSequenceBuilder() {
    const availableContainer = document.getElementById('availableInspections');
    const timelineContainer = document.getElementById('timeline');

    // Get current sequence from state
    const currentSequence = state.partTypeStandards.Housing.inspectionSequence;

    // Define all inspection types
    const allInspections = ['lehre', 'mass', 'sicht'];
    const inspectionLabels = {
        'lehre': 'Lehre',
        'mass': 'Maß',
        'sicht': 'Sicht'
    };
    const inspectionIcons = {
        'lehre': '📏',
        'mass': '📐',
        'sicht': '👁️'
    };

    // Find which inspections are already in timeline
    const usedInspections = new Set();
    currentSequence.forEach(step => {
        step.forEach(inspection => usedInspections.add(inspection));
    });

    // Render available inspections (not yet in timeline)
    availableContainer.innerHTML = '<div class="sequence-builder-subtitle">Verfügbare Prüfungen:</div>';
    let dropZoneContent = '';

    if (usedInspections.size === 3) {
        dropZoneContent = '<div style="text-align: center; color: #94a3b8; padding: 20px; font-style: italic;">Ziehe Prüfungen hierher, um sie zu deaktivieren</div>';
    } else {
        allInspections.forEach(type => {
            if (!usedInspections.has(type)) {
                dropZoneContent += createInspectionCard(type, inspectionLabels[type], inspectionIcons[type]);
            }
        });
    }

    availableContainer.innerHTML += `<div class="available-drop-zone" ondrop="handleDropToAvailable(event)" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)">${dropZoneContent}</div>`;

    // Render timeline with current sequence - only show steps that exist + one empty (max 3 total)
    timelineContainer.innerHTML = '<div class="sequence-builder-subtitle">Timeline (nacheinander):</div>';

    // Determine how many steps to show (max 3)
    const maxSteps = 3;
    const numSteps = currentSequence.length > 0
        ? Math.min(currentSequence.length + 1, maxSteps)
        : 1;

    for (let i = 0; i < numSteps; i++) {
        const stepInspections = currentSequence[i] || [];
        let stepContent = '';

        if (stepInspections.length > 0) {
            stepContent = stepInspections.map(type =>
                createInspectionCard(type, inspectionLabels[type], inspectionIcons[type])
            ).join('');
        } else {
            stepContent = '<div style="text-align: center; color: #94a3b8; padding: 10px; font-size: 13px;">Leer</div>';
        }

        timelineContainer.innerHTML += `
            <div class="timeline-step" data-step="${i}" ondrop="handleDrop(event)" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)">
                <div class="timeline-step-header">
                    <span class="timeline-step-number">${i + 1}</span>
                    Schritt ${i + 1}
                </div>
                <div class="timeline-drop-zone">
                    ${stepContent}
                </div>
            </div>
        `;
    }

    // If no inspections in timeline, show helper text
    if (usedInspections.size === 0) {
        timelineContainer.innerHTML += '<div style="text-align: center; color: #64748b; margin-top: 20px; font-style: italic;">Ziehe Prüfungen aus "Verfügbare Prüfungen" hierher</div>';
    }
}

function createInspectionCard(type, label, icon) {
    return `
        <div class="inspection-card ${type}" draggable="true" data-type="${type}"
             ondragstart="handleDragStart(event)" ondragend="handleDragEnd(event)"
             ontouchstart="handleTouchStart(event)" ontouchmove="handleTouchMove(event)" ontouchend="handleTouchEnd(event)">
            <span class="inspection-card-icon">${icon}</span>
            <span class="inspection-card-label">${label}</span>
        </div>
    `;
}

let draggedElement = null;
let draggedType = null;

function handleDragStart(event) {
    draggedElement = event.target.closest('.inspection-card');
    draggedType = draggedElement.dataset.type;
    draggedElement.classList.add('dragging');
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', draggedType);
}

function handleDragEnd(event) {
    if (draggedElement) {
        draggedElement.classList.remove('dragging');
    }

    // Remove drag-over styling from all steps
    document.querySelectorAll('.timeline-step, .available-drop-zone').forEach(step => {
        step.classList.remove('drag-over');
    });
}

function handleDragOver(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }

    const dropZone = event.target.closest('.timeline-step, .available-drop-zone');
    if (dropZone) {
        // Remove drag-over from all
        document.querySelectorAll('.timeline-step, .available-drop-zone').forEach(el => {
            el.classList.remove('drag-over');
        });
        // Add to current
        dropZone.classList.add('drag-over');
    }

    event.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragLeave(event) {
    const step = event.target.closest('.timeline-step');
    if (step && !step.contains(event.relatedTarget)) {
        step.classList.remove('drag-over');
    }
}

function handleDrop(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    if (event.preventDefault) {
        event.preventDefault();
    }

    const step = event.target.closest('.timeline-step');
    if (!step || !draggedElement || !draggedType) return false;

    const stepIndex = parseInt(step.dataset.step);

    // Check if card is coming from available inspections or from another step
    const parentDropZone = draggedElement.closest('.available-drop-zone');
    const parentStep = draggedElement.closest('.timeline-step');

    if (parentDropZone) {
        // Add to timeline from available
        addToTimelineStep(draggedType, stepIndex);
    } else if (parentStep) {
        // Move between steps
        const oldStepIndex = parseInt(parentStep.dataset.step);
        if (oldStepIndex !== stepIndex) {
            removeFromTimelineStep(draggedType, oldStepIndex);
            addToTimelineStep(draggedType, stepIndex);
        }
    }

    // Refresh the builder UI
    initializeSequenceBuilder();

    return false;
}

function addToTimelineStep(inspectionType, stepIndex) {
    const sequence = state.partTypeStandards.Housing.inspectionSequence;

    // Ensure the step array exists
    while (sequence.length <= stepIndex) {
        sequence.push([]);
    }

    // Add inspection to step if not already there
    if (!sequence[stepIndex].includes(inspectionType)) {
        sequence[stepIndex].push(inspectionType);
    }
}

function removeFromTimelineStep(inspectionType, stepIndex) {
    const sequence = state.partTypeStandards.Housing.inspectionSequence;

    if (sequence[stepIndex]) {
        const index = sequence[stepIndex].indexOf(inspectionType);
        if (index > -1) {
            sequence[stepIndex].splice(index, 1);
        }

        // Remove empty steps from the end
        while (sequence.length > 0 && sequence[sequence.length - 1].length === 0) {
            sequence.pop();
        }
    }
}

function handleDropToAvailable(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    if (event.preventDefault) {
        event.preventDefault();
    }

    if (!draggedElement || !draggedType) return false;

    // Check if card is from timeline
    const parentStep = draggedElement.closest('.timeline-step');

    if (parentStep) {
        // Remove from timeline (disable inspection)
        const stepIndex = parseInt(parentStep.dataset.step);
        removeFromTimelineStep(draggedType, stepIndex);

        // Refresh the builder UI
        initializeSequenceBuilder();
    }

    return false;
}

// Touch event handling for mobile/tablet
let touchStartX = 0;
let touchStartY = 0;
let touchElement = null;
let clonedElement = null;

function handleTouchStart(event) {
    const touch = event.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;

    touchElement = event.currentTarget.closest('.inspection-card');
    draggedElement = touchElement;
    draggedType = touchElement.dataset.type;

    // Prevent default to avoid text selection
    event.preventDefault();

    // Create a clone for visual feedback
    clonedElement = touchElement.cloneNode(true);
    clonedElement.style.position = 'fixed';
    clonedElement.style.pointerEvents = 'none';
    clonedElement.style.zIndex = '10000';
    clonedElement.style.opacity = '0.9';
    clonedElement.style.left = touch.clientX - (touchElement.offsetWidth / 2) + 'px';
    clonedElement.style.top = touch.clientY - (touchElement.offsetHeight / 2) + 'px';
    clonedElement.style.width = touchElement.offsetWidth + 'px';
    clonedElement.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3)';
    document.body.appendChild(clonedElement);

    // Make original semi-transparent
    touchElement.style.opacity = '0.3';
}

function handleTouchMove(event) {
    if (!touchElement || !clonedElement) return;

    event.preventDefault();

    const touch = event.touches[0];

    // Move the clone
    clonedElement.style.left = touch.clientX - (touchElement.offsetWidth / 2) + 'px';
    clonedElement.style.top = touch.clientY - (touchElement.offsetHeight / 2) + 'px';

    // Check what element is underneath
    clonedElement.style.display = 'none';
    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    clonedElement.style.display = 'block';

    // Remove all drag-over classes
    document.querySelectorAll('.timeline-step, .available-drop-zone').forEach(el => {
        el.classList.remove('drag-over');
    });

    // Add drag-over class to the element below
    if (elementBelow) {
        const dropZone = elementBelow.closest('.timeline-step, .available-drop-zone');
        if (dropZone) {
            dropZone.classList.add('drag-over');
        }
    }
}

function handleTouchEnd(event) {
    if (!touchElement || !clonedElement) return;

    event.preventDefault();

    const touch = event.changedTouches[0];

    // Find element at touch position
    clonedElement.style.display = 'none';
    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);

    // Restore original opacity
    touchElement.style.opacity = '1';

    // Remove clone
    if (clonedElement && clonedElement.parentNode) {
        clonedElement.parentNode.removeChild(clonedElement);
    }
    clonedElement = null;

    // Remove all drag-over classes
    document.querySelectorAll('.timeline-step, .available-drop-zone').forEach(el => {
        el.classList.remove('drag-over');
    });

    // Handle drop
    if (elementBelow) {
        const timelineStep = elementBelow.closest('.timeline-step');
        const availableZone = elementBelow.closest('.available-drop-zone');

        if (timelineStep) {
            // Dropped on timeline
            const stepIndex = parseInt(timelineStep.dataset.step);
            const parentDropZone = touchElement.closest('.available-drop-zone');
            const parentStep = touchElement.closest('.timeline-step');

            if (parentDropZone) {
                addToTimelineStep(draggedType, stepIndex);
            } else if (parentStep) {
                const oldStepIndex = parseInt(parentStep.dataset.step);
                if (oldStepIndex !== stepIndex) {
                    removeFromTimelineStep(draggedType, oldStepIndex);
                    addToTimelineStep(draggedType, stepIndex);
                }
            }

            initializeSequenceBuilder();
        } else if (availableZone) {
            // Dropped on available zone
            const parentStep = touchElement.closest('.timeline-step');

            if (parentStep) {
                const stepIndex = parseInt(parentStep.dataset.step);
                removeFromTimelineStep(draggedType, stepIndex);
                initializeSequenceBuilder();
            }
        }
    }

    touchElement = null;
    draggedElement = null;
    draggedType = null;
}

async function addDefectType(inspectionType) {
    const input = document.getElementById(`newDefectInput-${inspectionType}`);
    const defectName = input.value.trim();

    if (defectName && !state.partTypeStandards.Housing.defectTypes[inspectionType].includes(defectName)) {
        state.partTypeStandards.Housing.defectTypes[inspectionType].push(defectName);
        input.value = '';

        // Save to Firebase
        await addDefectTypeToDb(inspectionType, defectName);

        // Update display
        updateDefectTags(inspectionType);
    }
}

async function removeDefectType(inspectionType, index) {
    state.partTypeStandards.Housing.defectTypes[inspectionType].splice(index, 1);

    // Save to Firebase
    await removeDefectTypeFromDb(inspectionType, index);

    updateDefectTags(inspectionType);
}

function updateDefectTags(inspectionType) {
    const container = document.getElementById(`defectTags-${inspectionType}`);
    const defectTagsHtml = state.partTypeStandards.Housing.defectTypes[inspectionType].map((defect, index) => `
        <div class="defect-tag">
            ${defect}
            <button class="defect-tag-remove" onclick="removeDefectType('${inspectionType}', ${index})">×</button>
        </div>
    `).join('');
    container.innerHTML = defectTagsHtml;
}

function setInspectionSequence(sequence) {
    state.partTypeStandards.Housing.inspectionSequence = sequence;

    // Update UI
    document.querySelectorAll('.sequence-option').forEach(el => {
        el.classList.remove('selected');
    });
    event.target.closest('.sequence-option').classList.add('selected');
}

// Handle drawing upload
async function handleDrawingUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        showNotification('Fehler', 'Bild ist zu groß. Maximal 5MB erlaubt.', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
        const base64Image = e.target.result;

        // Update local state
        state.partTypeStandards.Housing.drawing = base64Image;

        // Save directly to Firebase
        const { updateData } = await import('./firebase.js');
        await updateData('partTypeStandards/Housing', {
            drawing: base64Image
        });

        showNotification('Erfolg', 'Zeichnung wurde hochgeladen und gespeichert', 'success');

        // Refresh standards modal to show new state
        closeStandards();
        setTimeout(() => openStandards(), 100);
    };
    reader.onerror = () => {
        showNotification('Fehler', 'Fehler beim Hochladen der Zeichnung', 'error');
    };
    reader.readAsDataURL(file);
}

// Remove drawing
async function removeDrawing() {
    // Update local state
    state.partTypeStandards.Housing.drawing = null;

    // Save directly to Firebase
    const { updateData } = await import('./firebase.js');
    await updateData('partTypeStandards/Housing', {
        drawing: null
    });

    showNotification('Erfolg', 'Zeichnung wurde entfernt', 'success');
    closeStandards();
    setTimeout(() => openStandards(), 100);
}

// Preview drawing in modal
function previewDrawing() {
    if (!state.partTypeStandards.Housing.drawing) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.onclick = (e) => {
        if (e.target === modal || e.target.classList.contains('modal-close-btn')) {
            modal.remove();
        }
    };

    modal.innerHTML = `
        <div class="drawing-modal">
            <button class="modal-close-btn" onclick="this.closest('.modal').remove()">×</button>
            <img src="${state.partTypeStandards.Housing.drawing}" alt="Technische Zeichnung" style="max-width: 90vw; max-height: 90vh; object-fit: contain;" />
        </div>
    `;

    document.body.appendChild(modal);
}

async function saveStandards() {
    const capacity = document.getElementById('containerCapacity').value;
    state.partTypeStandards.Housing.containerCapacity = parseInt(capacity);

    // Save to Firebase (capacity, drawing, and inspectionSequence)
    await updateContainerCapacity(parseInt(capacity));

    // Save all other fields (drawing, inspectionSequence, defectTypes)
    const { updateData } = await import('./firebase.js');
    await updateData('partTypeStandards/Housing', {
        drawing: state.partTypeStandards.Housing.drawing,
        inspectionSequence: state.partTypeStandards.Housing.inspectionSequence,
        defectTypes: state.partTypeStandards.Housing.defectTypes,
        inspectionTypes: state.partTypeStandards.Housing.inspectionTypes
    });

    showModal({
        title: 'Gespeichert',
        content: '<p>Standards wurden erfolgreich gespeichert!</p>',
        buttons: [
            { text: 'OK', action: () => { closeModal(); closeStandards(); } }
        ]
    });
}

function closeStandards() {
    const modal = document.getElementById('standardsModal');
    if (modal) {
        modal.remove();
    }
}

// Make functions globally available for inline event handlers IMMEDIATELY
// (before DOMContentLoaded so onclick handlers work)
window.addLoginDigit = addLoginDigit;
window.clearLoginNumber = clearLoginNumber;
window.login = login;
window.toggleLanguage = toggleLanguage;
window.togglePause = togglePause;
window.goBack = goBack;
window.openStatistics = openStatistics;
window.showMainMenu = showMainMenu;
window.showSerieMenu = showSerieMenu;
window.startInspection = startInspection;
window.showFeatureNotAvailable = showFeatureNotAvailable;
window.showFeatureInProgress = showFeatureInProgress;
window.showScanConfirmation = showScanConfirmation;
window.showContainerNumberInput = showContainerNumberInput;
window.addContainerDigit = addContainerDigit;
window.clearContainerNumber = clearContainerNumber;
window.submitContainerNumber = submitContainerNumber;
window.showQuantitySelection = showQuantitySelection;
window.setQuantity = setQuantity;
window.showManualQuantity = showManualQuantity;
window.addQuantityDigit = addQuantityDigit;
window.clearQuantityNumber = clearQuantityNumber;
window.submitManualQuantity = submitManualQuantity;
window.showInspectionInterface = showInspectionInterface;
window.showInspectorModal = showInspectorModal;
window.closeInspectorModal = closeInspectorModal;
window.registerDefect = registerDefect;
window.completeInspection = completeInspection;
window.resetInspection = resetInspection;
window.showDrawing = showDrawing;
window.executeModalAction = executeModalAction;
window.closeModal = closeModal;
window.openBarcodeScanner = openBarcodeScanner;
window.closeBarcodeScanner = closeBarcodeScanner;
window.submitManualBarcode = submitManualBarcode;
window.openDatabase = openDatabase;
window.closeDatabase = closeDatabase;
window.openStandards = openStandards;
window.closeStandards = closeStandards;
window.addDefectType = addDefectType;
window.removeDefectType = removeDefectType;
window.saveStandards = saveStandards;
window.handleDrawingUpload = handleDrawingUpload;
window.removeDrawing = removeDrawing;
window.previewDrawing = previewDrawing;
window.handleDragStart = handleDragStart;
window.handleDragEnd = handleDragEnd;
window.handleDragOver = handleDragOver;
window.handleDragLeave = handleDragLeave;
window.handleDrop = handleDrop;
window.handleDropToAvailable = handleDropToAvailable;
window.handleTouchStart = handleTouchStart;
window.handleTouchMove = handleTouchMove;
window.handleTouchEnd = handleTouchEnd;

// Initialize app after DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Initializing Firebase and app state...');

    try {
        await initializeDatabase();
        await initializeState();
        console.log('✅ App initialized with Firebase successfully');

        // Initialize login display
        updateLoginDisplay();

        // Register Service Worker for PWA
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js')
                .then(registration => {
                    console.log('✅ Service Worker registered:', registration.scope);
                })
                .catch(error => {
                    console.log('❌ Service Worker registration failed:', error);
                });
        }
    } catch (error) {
        console.error('❌ Error initializing app:', error);
        alert('Fehler beim Initialisieren der App. Bitte die Seite neu laden.');
    }
});
