export default function GetLastName_FromPage(clientAPI) {
  try {
    const ctrl = clientAPI.evaluateTargetPathForAPI("#Control:LastNameInput");
    const v = ctrl && typeof ctrl.getValue === "function" ? ctrl.getValue() : "";
    return (v == null ? "" : String(v));
  } catch (e) {
    return "";
  }
}
