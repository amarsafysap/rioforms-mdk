export default function Main_OnLoaded(clientAPI) {
  const page = clientAPI.getPageProxy();
  const cd = page.getClientData();

  // Clean old handlers
  try { cd._netStop && cd._netStop(); } catch {}
  try { cd._netTimer && clearInterval(cd._netTimer); } catch {}
  cd._netStop = null;
  cd._netTimer = null;
  cd._lastOnline = undefined;
  cd._syncInFlight = false;
  cd._lastSyncTs = 0;

  const connectivity = require('@nativescript/core/connectivity');

  const triggerSyncIfCameOnline = () => {
    // Only when transitioning from offline -> online
    if (cd._lastOnline === false) {
      const now = Date.now();
      if (cd._syncInFlight) return;                 // already running
      if (now - (cd._lastSyncTs || 0) < 10000) return; // 10s debounce

      cd._syncInFlight = true;
      cd._lastSyncTs = now;

      clientAPI.executeAction("/RioMDKPOC/Actions/RioFormsMDK/Service/UploadOffline_Silent.action")
        .then(() => clientAPI.executeAction("/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline_Silent.action"))
        .catch(() => { /* ignore offline/server blips */ })
        .finally(() => { cd._syncInFlight = false; });
    }
  };

  const setStatus = () => {
    try {
      const table = page.getControl('SectionedTable_Main');
      const sections = table?.getSections?.() || [];
      const statusSec = sections.find(s => s?.getName?.() === 'StatusSection') || sections[0];
      const field = statusSec?.getControl?.('NetStatus');
      if (!field) return;

      const type = connectivity.getConnectionType();
      const online = type !== connectivity.connectionType.none;

      // Update UI only when changed
      if (cd._lastOnline !== online) {
        field.setValue(online ? 'Online' : 'Offline');
        // If we just became online, trigger a background sync
        if (online) triggerSyncIfCameOnline();
        cd._lastOnline = online;
      }
    } catch {}
  };

  // Initial status + possibly initial sync
  setStatus();

  // Event-based monitoring
  connectivity.startMonitoring(() => setStatus());
  cd._netStop = () => connectivity.stopMonitoring();

  // Polling fallback (some devices skip the event)
  cd._netTimer = setInterval(setStatus, 3000);

  return true;
}
