export default function Main_OnUnloaded(clientAPI) {
  const page = clientAPI.getPageProxy();
  const cd = page.getClientData();
  try { cd._netStop && cd._netStop(); } catch {}
  try { cd._netTimer && clearInterval(cd._netTimer); } catch {}
  cd._netStop = null;
  cd._netTimer = null;
  return true;
}
