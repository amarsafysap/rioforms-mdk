export default function SaveFirstName(clientAPI) {
  const page = clientAPI.getPageProxy();
  const val = page.getControl('SectionedTable_Main')
                  .getSection('UserInfoSection')
                  .getControl('FirstNameInput')
                  .getValue();
  clientAPI.getAppClientData().FirstName = (val ?? '').toString();
  return true;
}
