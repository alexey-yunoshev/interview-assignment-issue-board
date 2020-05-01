import React from "react";
import { Board } from "./components/Board/Board";
import { Box } from "@material-ui/core";
import { connect } from "react-redux";

import { RootState } from "./store/rootState";
import { AppDispatch } from "./store/rootAction";
import { hideAlert } from "./store/system/actions";
import { SystemState } from "./store/system/types";
import { Alert, AlertOnCloseHandler } from "./components/Alert";

export interface AppProps {
  alert: SystemState["alert"];
  hideAlert: () => void;
}

export function AppComponent({ alert, hideAlert }: AppProps) {
  const onAlertClose: AlertOnCloseHandler = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    hideAlert();
  };

  return (
    <Box bgcolor="#f5faff" display="flex" justifyContent="center" className="root" minHeight="100vh">
      <Board />
      {
        <Alert onClose={onAlertClose} open={alert.isShown} severity={alert.severity}>
          {alert.message}
        </Alert>
      }
    </Box>
  );
}

export const App = connect(
  (state: RootState) => ({
    alert: state.system.alert,
  }),
  (dispatch: AppDispatch) => ({
    hideAlert: () => dispatch(hideAlert()),
  }),
)(AppComponent);
