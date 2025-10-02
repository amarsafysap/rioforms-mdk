export default function Questions_QueryOptions(clientAPI) {
  const page = clientAPI.getPageProxy();

  // Get the Form ID from page binding (fallback to client data if you prefer)
  const formId =
    (page && page.binding && page.binding.ID) ||
    (page.getClientData && page.getClientData().FormID);

  if (!formId) {
    // Safe no-op filter
    return "$filter=ID eq null";
  }

  // Detect web vs native: in MDK web, 'nativescript' is not present
  let isWeb = false;
  try {
    isWeb = !clientAPI.nativescript ||
            (!clientAPI.nativescript.platformModule?.isAndroid
             && !clientAPI.nativescript.platformModule?.isIOS);
  } catch (_) { isWeb = true; }

  // Build the per-platform literal
  const idLiteral = isWeb ? `${formId}` : `guid'${formId}'`;

  // Return the full query
  return `$filter=form_ID eq ${idLiteral} and (type_code eq 1 or type_code eq 2)&$orderby=type_code,ID`;
}
