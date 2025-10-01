// Returns "Online" or "Offline" based on current connectivity
import { getConnectionType, connectionType } from "@nativescript/core/connectivity";

export default function GetOnlineBadge(clientAPI) {
  const online = getConnectionType() !== connectionType.none;
  return online ? "Online" : "Offline";
}
