export default function IsText(clientAPI) {
  try {
    const b = clientAPI.getBindingObject?.() || clientAPI.getPageProxy?.().binding || {};
    const t = Number(b.type_code);
    return t === 1; // Text
  } catch (e) {
    return false;
  }
}
