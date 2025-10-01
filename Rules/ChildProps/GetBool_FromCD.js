export default function GetBool_FromCD(clientAPI) {
  const cd = clientAPI.getPageProxy().getClientData();
  const i = cd.childIndex ?? 0;
  const arr = cd.childPayloads || [];
  const v = arr[i]?.boolAnswer;
  if (typeof v === 'boolean') return v;
  if (v === 'true') return true;
  if (v === 'false') return false;
  return undefined;
}
