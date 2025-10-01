export default function Sync_UploadThenDownload(clientAPI) {
  const alert = (Message, Title = "Sync") =>
    clientAPI.executeAction({ Name: "/RioMDKPOC/Actions/Util/AlertMessage.action", Properties: { Title, Message: String(Message) } });

  return (async () => {
    const log = [];
    const step = async (label, actionPath) => {
      log.push(`→ ${label}`);
      try {
        await clientAPI.executeAction(actionPath);
        log.push(`✓ ${label}`);
      } catch (e) {
        log.push(`✗ ${label}: ${e?.message || e}`);
      }
    };

    log.push("Starting sync");

    // Safe to run even if already initialized
    await step("Initialize", "/RioMDKPOC/Actions/RioFormsMDK/Service/InitializeOffline.action");
    await step("Download",   "/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline.action");
    await step("Upload",     "/RioMDKPOC/Actions/RioFormsMDK/Service/UploadOffline.action");
    await step("Final pull", "/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline.action");

    log.push("Done");
    await alert(log.join("\n"));
    return true;
  })();
}
