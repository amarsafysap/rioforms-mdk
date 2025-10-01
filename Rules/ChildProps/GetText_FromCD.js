export default function GetText_FromCD(clientAPI) {
  const cd = clientAPI.getPageProxy().getClientData();
  const i = cd.childIndex ?? 0;
  const arr = cd.childPayloads || [];
  const val = arr[i]?.textAnswer ?? "";
  return val;
}
