export default function BuildChildren_InCS(clientAPI) {
  const toast = (msg) => clientAPI.executeAction({
    Name: "/RioMDKPOC/Actions/Util/ToastMessage.action",
    Properties: { Message: msg.length > 200 ? msg.slice(0, 200) + "…" : msg }
  });

  return (async () => {
    const page = clientAPI.getPageProxy();
    const cd = page.getClientData();
    const arr = Array.isArray(cd.childPayloads) ? cd.childPayloads : [];

    if (!arr.length) {
      await toast("No answers to submit (childPayloads empty)");
      return true;
    }

    for (let i = 0; i < arr.length; i++) {
      cd.childIndex = i;
      await clientAPI.executeAction("/RioMDKPOC/Actions/OData/CreateAnswer_FromCD.action");
    }

    await toast(`Queued ${arr.length} child record(s).`);
    return true;
  })().catch(err =>
    clientAPI.executeAction({
      Name: "/RioMDKPOC/Actions/Util/ToastMessage.action",
      Properties: { Message: `Child create failed: ${err?.message || err}` }
    })
  );
}
