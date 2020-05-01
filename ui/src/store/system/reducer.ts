import { AlertState, SystemState } from "./types";
import { SystemAction, SystemActionType as Action } from "./actions";

const initialState: SystemState = {
  alert: {
    isShown: false,
    severity: "info",
    message: "",
  },
};

export function systemReducer(state = initialState, action: SystemAction): SystemState {
  switch (action.type) {
    case Action.ShowAlert: {
      const alert: AlertState = {
        isShown: true,
        severity: action.payload.severity,
        message: action.payload.message,
      };
      return { ...state, alert };
    }
    case Action.HideAlert: {
      const alert: AlertState = { ...state.alert, isShown: false };
      return { ...state, alert };
    }
    default:
      return state;
  }
}
