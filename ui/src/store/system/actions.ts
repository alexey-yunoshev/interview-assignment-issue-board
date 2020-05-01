import { Alert, Message, Severity } from "./types";

export enum SystemActionType {
  ShowAlert = "[System] show alert",
  HideAlert = "[System] hide alert",
}

export interface SystemShowAlertAction {
  type: SystemActionType.ShowAlert;
  payload: Alert;
}

export interface SystemHideAlertAction {
  type: SystemActionType.HideAlert;
}

export type SystemAction = SystemShowAlertAction | SystemHideAlertAction;

export function showAlert(severity: Severity, message: Message): SystemShowAlertAction {
  return {
    type: SystemActionType.ShowAlert,
    payload: {
      message,
      severity,
    },
  };
}

export function hideAlert(): SystemHideAlertAction {
  return {
    type: SystemActionType.HideAlert,
  };
}
