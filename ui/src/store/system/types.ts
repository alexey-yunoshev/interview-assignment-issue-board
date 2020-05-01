import { Color } from "@material-ui/lab";

export type Severity = Color;

export type Message = string;

export interface Alert {
  message: Message;
  severity: Severity;
}

export interface isShown {
  isShown: boolean;
}

export interface AlertState extends Alert, isShown {}

export interface SystemState {
  alert: AlertState;
}
