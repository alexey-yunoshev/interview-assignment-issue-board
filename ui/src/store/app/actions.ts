export enum SystemActionType {
  ShowAlert = "[System] show alert",
  HideAlert = "[System] hide alert",
}

export interface SystemShowAlertAction {
  type: SystemActionType.ShowAlert;
}

export interface SystemHideAlertAction {
  type: SystemActionType.HideAlert;
}

export type SystemAction = SystemShowAlertAction | SystemHideAlertAction;

export function showAlert(): SystemShowAlertAction {
  return {
    type: SystemActionType.ShowAlert,
  };
}

export function hideAlert(): SystemHideAlertAction {
  return {
    type: SystemActionType.HideAlert,
  };
}
