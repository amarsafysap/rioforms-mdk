export default function GetLastName(clientAPI) {
  const app = clientAPI.getAppClientData();
  return (app && typeof app.LastName === 'string') ? app.LastName : '';
}
