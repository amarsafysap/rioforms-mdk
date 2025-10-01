export default function SaveLastName(clientAPI) {
  const page = clientAPI.getPageProxy();
  const val = page.getControl('SectionedTable_Main')
                  .getSection('UserInfoSection')
                  .getControl('LastNameInput')
                  .getValue();
  clientAPI.getAppClientData().LastName = (val ?? '').toString();
  return true;
}
