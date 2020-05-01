import * as React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { SnackbarCloseReason } from "@material-ui/core/Snackbar/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Color } from "@material-ui/lab/Alert/Alert";

export type AlertOnCloseHandler = (event: React.SyntheticEvent<any>, reason?: SnackbarCloseReason) => void;

export interface AlertProps {
  onClose: AlertOnCloseHandler;
  open: boolean;
  severity: Color;
  children?: any;
}

export function Alert({ children, onClose, open, severity }: AlertProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
    >
      <MuiAlert onClose={onClose} severity={severity}>
        {children}
      </MuiAlert>
    </Snackbar>
  );
}
