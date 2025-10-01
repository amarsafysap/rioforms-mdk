export default function OnFormDetailLoaded(context) {
  const page = context.getPageProxy();
  page.getClientData().FormID = page.binding && page.binding.ID;
  return true;
}
