// /RioMDKPOC/Rules/Submit_EntryPoint.js
export default function Submit_EntryPoint(clientAPI) {
  const page = clientAPI.getPageProxy();

  const toast = (Message) =>
    clientAPI.executeAction({
      Name: "/RioMDKPOC/Actions/Util/ToastMessage.action",
      Properties: { Message }
    });

  // Platform check (don’t rely on top-level NS imports on web)
  const isMobile = () => {
    try {
      const ns = clientAPI.nativescript;
      return !!(ns && (ns.platformModule?.isAndroid || ns.platformModule?.isIOS));
    } catch {
      return false;
    }
  };

  // Connectivity (mobile uses NS connectivity; web uses navigator.onLine)
  let connectivity;
  const isOnline = () => {
    if (isMobile()) {
      try {
        connectivity = connectivity || require("@nativescript/core/connectivity");
        return connectivity.getConnectionType() !== connectivity.connectionType.none;
      } catch {
        // If connectivity module isn’t available for any reason, assume online
        return true;
      }
    }
    try {
      return typeof navigator !== "undefined" ? navigator.onLine !== false : true;
    } catch {
      return true;
    }
  };

  return (async () => {
    // 1) Collect answers
    const sections = page.getControl("SectionedTable0")?.getSections?.() || [];
    const childPayloads = [];

    for (const s of sections) {
      let b = null;
      try {
        b = s?.getBindingObject
          ? s.getBindingObject()
          : s?.getBindingContext?.().binding || s?.binding;
      } catch {}

      const t = Number(b?.type_code);
      const qid = b?.ID;
      if (!qid || !t || t === 3) continue; // guard / ignore non-text/boolean

      const item = { question_ID: qid };
      if (t === 1) item.textAnswer = String(s.getControl?.("Q_Text")?.getValue?.() ?? "");
      if (t === 2) item.boolAnswer = !!(s.getControl?.("Q_Bool")?.getValue?.());
      childPayloads.push(item);
    }

    // 2) Stash children for the ChangeSet helper
    const cd = page.getClientData();
    cd.childPayloads = childPayloads;
    cd.childIndex = -1;

    // 3) Read persisted names (mobile via NS app-settings; web leaves blank)
    let firstName = "";
    let lastName = "";
    if (isMobile()) {
      try {
        const appSettings = require("@nativescript/core/application-settings");
        firstName = appSettings.getString("userFirstName", "");
        lastName  = appSettings.getString("userLastName",  "");
      } catch {
        // ignore; leave blank if not available
      }
    }

    // 4) Execute ChangeSet (parent + children)
    try {
      await clientAPI.executeAction({
        Name: "/RioMDKPOC/Actions/Submit/SubmitParentAndChildren_CS.action",
        ActionBinding: { firstName, lastName } // (safe even if action ignores it)
      });
    } catch (e) {
      const msg = (e && e.message ? e.message : String(e)).toLowerCase();
      const offlineLike =
        !isOnline() || msg.includes("offline") || msg.includes("socket") || msg.includes("-10292");

      if (offlineLike) {
        await toast("Saved offline. Will sync when online.");
        await clientAPI.executeAction("/RioMDKPOC/Actions/Navigation/ClosePage.action");
        return true;
      }
      await toast(`Submit failed: ${e?.message || e}`);
      return false;
    }

    // 5) Success UX (mobile still does silent upload+pull; web skips it)
    if (isOnline()) {
      await toast("Submitted");
      if (isMobile()) {
        clientAPI
          .executeAction("/RioMDKPOC/Actions/RioFormsMDK/Service/UploadOffline_Silent.action")
          .then(() =>
            clientAPI.executeAction("/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline_Silent.action")
          )
          .catch(() => {});
      }
    } else {
      await toast("Saved offline. Will sync when online.");
    }

    // 6) Close page
    await clientAPI.executeAction("/RioMDKPOC/Actions/Navigation/ClosePage.action");
    return true;
  })();
}
