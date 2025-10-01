import { getString } from "@nativescript/core/application-settings";

export default function Submit_EntryPoint(clientAPI) {
  const page = clientAPI.getPageProxy();
  const toast = (Message) =>
    clientAPI.executeAction({ Name: "/RioMDKPOC/Actions/Util/ToastMessage.action", Properties: { Message } });

  const connectivity = require("@nativescript/core/connectivity");
  const isOnline = () => connectivity.getConnectionType() !== connectivity.connectionType.none;

  return (async () => {
    // 1) Collect answers
    const sections = page.getControl("SectionedTable0")?.getSections?.() || [];
    const childPayloads = [];
    for (const s of sections) {
      let b = null;
      try { b = s?.getBindingObject ? s.getBindingObject() : s?.getBindingContext?.().binding || s?.binding; } catch {}
      const t = Number(b?.type_code);
      const qid = b?.ID;
      if (!qid || !t || t === 3) continue;
      const item = { question_ID: qid };
      if (t === 1) item.textAnswer = String(s.getControl?.("Q_Text")?.getValue?.() ?? "");
      if (t === 2) item.boolAnswer = !!(s.getControl?.("Q_Bool")?.getValue?.());
      childPayloads.push(item);
    }

    // 2) Stash children for the CS rule
    const cd = page.getClientData();
    cd.childPayloads = childPayloads;
    cd.childIndex = -1;

    // 3) Read persisted names and pass as ActionBinding to the ChangeSet
    const firstName = getString("userFirstName", "");
    const lastName  = getString("userLastName",  "");

    try {
      await clientAPI.executeAction({
        Name: "/RioMDKPOC/Actions/Submit/SubmitParentAndChildren_CS.action",
        ActionBinding: { firstName, lastName }
      });
    } catch (e) {
      const msg = (e && e.message ? e.message : String(e)).toLowerCase();
      const offlineLike = !isOnline() || msg.includes("offline") || msg.includes("socket") || msg.includes("-10292");
      if (offlineLike) {
        await toast("Saved offline. Will sync when online.");
        await clientAPI.executeAction("/RioMDKPOC/Actions/Navigation/ClosePage.action");
        return true;
      }
      await toast(`Submit failed: ${e?.message || e}`);
      return false;
    }

    // 4) Success toast + optional silent sync if online
    if (isOnline()) {
      await toast("Submitted");
      clientAPI.executeAction("/RioMDKPOC/Actions/RioFormsMDK/Service/UploadOffline_Silent.action")
        .then(() => clientAPI.executeAction("/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline_Silent.action"))
        .catch(() => {});
    } else {
      await toast("Saved offline. Will sync when online.");
    }

    // 5) Close page
    await clientAPI.executeAction("/RioMDKPOC/Actions/Navigation/ClosePage.action");
    return true;
  })();
}
