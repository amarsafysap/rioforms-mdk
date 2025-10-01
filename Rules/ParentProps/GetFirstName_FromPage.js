export default function GetFirstName_FromPage(clientAPI) {
  try {
    const ctrl = clientAPI.evaluateTargetPathForAPI("#Control:FirstNameInput");
    const v = ctrl && typeof ctrl.getValue === "function" ? ctrl.getValue() : "";
    return (v == null ? "" : String(v));
  } catch (e) {
    return "";
  }
}
