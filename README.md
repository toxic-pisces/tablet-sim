# Qualitätsprüfung - Tablet Interface (v2.0)

Moderne, Firebase-basierte Tablet-Anwendung für die Qualitätskontrolle in der Produktion mit Echtzeit-Synchronisation.

## 🚀 Features

- ✅ **Firebase Realtime Database** - Zentrale Datenspeicherung mit Echtzeit-Sync
- 📱 **Multi-Tablet Support** - Mehrere Tablets arbeiten gleichzeitig mit derselben Datenbank
- 🔄 **Echtzeit-Synchronisation** - Änderungen werden sofort auf allen Geräten angezeigt
- 📊 **Zwei Datenbanken**:
  - **TBK-Datenbank**: Verknüpfung von BatchNummer, TBK-Nummer, Behälter, Laufkarte, ChargenNr
  - **Prüfungsdatenbank**: Vollständige Prüfungsdokumentation mit IO/NIO, Prüfer, Zeitstempel
- 📷 **Barcode-Scanner** - Integrierter Scanner für TBK-Nummern
- 🔧 **Standards-Editor** - Konfigurierbare Fehlermerkmale und Behälterkapazitäten
- 🌍 **Mehrsprachig** - Deutsch & Polnisch
- 💾 **PWA-fähig** - Installierbar als App auf Tablets

## 📁 Projektstruktur

```
tablet_simulation/
├── index.html              # Haupt-HTML
├── manifest.json           # PWA Manifest
├── sw.js                   # Service Worker
├── package.json            # Dependencies
├── vite.config.js          # Vite Konfiguration
├── src/
│   ├── main.js            # Haupt-Logik & Event Handler
│   ├── firebase.js        # Firebase Konfiguration & API
│   ├── state.js           # State Management mit Firebase-Sync
│   └── styles/
│       └── main.css       # Alle Styles
└── _archived_*/           # Archivierte alte Dateien
```

## 🔧 Installation & Start

### 1. Dependencies installieren
```bash
npm install
```

### 2. Development Server starten
```bash
npm run dev
```
→ Öffnet automatisch http://localhost:3000/

### 3. Production Build erstellen
```bash
npm run build
```

### 4. Production Preview
```bash
npm run preview
```

## 🗄️ Firebase Datenbankstruktur

### TBK-Datenbank
```json
tbkDatabase/
  └── {batchNummer}/
      ├── batchNummer: "BATCH001"
      ├── tbkNummer: "TBK12345"
      ├── containerNumber: "123456"
      ├── laufkarte: "LK-001"
      └── chargenr: "CH-2024-001"
```

### Prüfungsdatenbank
```json
inspectionDatabase/
  └── {batchNummer-pruefungsNummer}/
      ├── pruefungsNummer: 1
      ├── batchNummer: "BATCH001"
      ├── inspektion: "L" (L=Lehre, M=Maß, S=Sicht)
      ├── total: 200
      ├── io: 195          // Wird beim Abschließen gefüllt
      ├── nio: 5           // Wird beim Abschließen gefüllt
      ├── pruefer: "12345"
      ├── start: "24.10.2025, 09:30:00"
      └── ende: "24.10.2025, 09:45:00"  // Wird beim Abschließen gefüllt
```

### Standards
```json
partTypeStandards/
  └── Housing/
      ├── containerCapacity: 200
      ├── defectTypes/
      │   ├── lehre: ["Kratzer", "Delle", ...]
      │   ├── mass: ["Maßabweichung", ...]
      │   └── sicht: ["n.i.O."]
      └── inspectionTypes: ["lehre", "mass", "sicht"]
```

## 🔑 Wichtige Funktionen

### Prüfungs-Workflow
1. **TBK scannen** → Erstellt Eintrag in TBK-Datenbank
2. **Behälternummer eingeben** → Verknüpft mit TBK
3. **Teileanzahl festlegen** → **Erstellt Prüfungseintrag mit allen Feldern (io, nio, ende = null)**
4. **Prüfung durchführen** → Fehler erfassen
5. **Abschließen** → **Aktualisiert denselben Eintrag mit io, nio, ende**

### Firebase-Integration
- **Echtzeit-Listener**: Alle Tablets hören auf Änderungen
- **Partielles Update**: Nur geänderte Felder werden aktualisiert
- **Automatische Synchronisation**: Keine manuellen Refreshes nötig

## 🔨 Technologie-Stack

- **Frontend**: Vanilla JavaScript (ES6+ Module)
- **Backend**: Firebase Realtime Database
- **Build Tool**: Vite 5
- **Scanner**: html5-qrcode
- **PWA**: Service Worker + Manifest

## 📝 Wichtige Änderungen (v2.0)

### Von v0.8 (Monolith) zu v2.0 (Modular + Firebase):

1. ✅ **Modulare Struktur**: HTML/CSS/JS getrennt
2. ✅ **Firebase-Integration**: Zentrale Datenbank statt lokalem State
3. ✅ **Ein Prüfungseintrag**: Nicht mehr 2 separate Einträge
4. ✅ **Partielles Update**: Merge statt vollständigem Ersatz
5. ✅ **Echtzeit-Sync**: Änderungen werden sofort propagiert
6. ✅ **Bessere Code-Organisation**: State Management separiert

## 🐛 Bekannte Issues & Lösungen

### Problem: onclick-Handler funktionieren nicht
**Lösung**: Alle Funktionen werden vor DOMContentLoaded auf `window` exportiert

### Problem: Zwei Prüfungseinträge werden erstellt
**Lösung**:
- `createInspectionDatabaseEntry`: Erstellt Eintrag mit allen Feldern (auch null)
- `completeInspection`: Aktualisiert denselben Eintrag (kein neuer Insert)

### Problem: undefined in Datenbank-Tabelle
**Lösung**: Alle Felder werden initial mit `null` gesetzt, nicht `undefined`

## 🔐 Firebase Konfiguration

Die Firebase-Config befindet sich in `src/firebase.js`. Bei Bedarf anpassen:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebasedatabase.app",
  projectId: "YOUR_PROJECT",
  // ...
};
```

## 🎯 Nächste Schritte

- [ ] Fehlerbehandlung verbessern (Network offline)
- [ ] Offline-Modus mit lokaler Queue
- [ ] Export-Funktionen (CSV/Excel)
- [ ] Erweiterte Statistiken
- [ ] User-Management mit Firebase Auth

## 📞 Support

Bei Fragen oder Problemen bitte ein Issue erstellen oder die Dokumentation konsultieren.

---

**Version**: 2.0.0
**Letzte Aktualisierung**: 24. Oktober 2025
**Status**: ✅ Production Ready
