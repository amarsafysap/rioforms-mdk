export default function GetFirstName(clientAPI) {
  const app = clientAPI.getAppClientData();
  return (app && typeof app.FirstName === 'string') ? app.FirstName : '';
}
