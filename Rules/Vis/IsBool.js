export default function IsBool(clientAPI) {
  try {
    const b = clientAPI.getBindingObject?.() || clientAPI.getPageProxy?.().binding || {};
    const t = Number(b.type_code);
    return t === 2; // Yes/No
  } catch (e) {
    return false;
  }
}
