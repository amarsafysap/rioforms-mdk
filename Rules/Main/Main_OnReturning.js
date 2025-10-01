export default function Main_OnReturning(clientAPI) {
  const page = clientAPI.getPageProxy();
  const cd = page.getClientData();

  // Re-start clean (same as OnLoaded)
  try { cd._netStop && cd._netStop(); } catch {}
  try { cd._netTimer && clearInterval(cd._netTimer); } catch {}
  cd._netStop = null;
  cd._netTimer = null;
  cd._syncInFlight = false;
  cd._lastSyncTs = cd._lastSyncTs || 0;

  const connectivity = require('@nativescript/core/connectivity');

  const triggerSyncIfCameOnline = () => {
    if (cd._lastOnline === false) {
      const now = Date.now();
      if (cd._syncInFlight) return;
      if (now - (cd._lastSyncTs || 0) < 10000) return;

      cd._syncInFlight = true;
      cd._lastSyncTs = now;

      clientAPI.executeAction("/RioMDKPOC/Actions/RioFormsMDK/Service/UploadOffline_Silent.action")
        .then(() => clientAPI.executeAction("/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline_Silent.action"))
        .catch(() => {})
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

      if (cd._lastOnline !== online) {
        field.setValue(online ? 'Online' : 'Offline');
        if (online) triggerSyncIfCameOnline();
        cd._lastOnline = online;
      } else {
        // Ensure the label is correct on return
        field.setValue(online ? 'Online' : 'Offline');
      }
    } catch {}
  };

  // Immediate check + monitoring + polling
  setStatus();
  connectivity.startMonitoring(() => setStatus());
  cd._netStop = () => connectivity.stopMonitoring();
  cd._netTimer = setInterval(setStatus, 3000);

  return true;
}
