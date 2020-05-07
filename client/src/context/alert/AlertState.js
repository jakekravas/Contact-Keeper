import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import {
  SET_ALERT,
  REMOVE_ALERT
} from "../types";

const AlertState = props => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  // Alert will be removed after 5 seconds, but the 5 seconds can be changed
  const setAlert = (msg, type, timeout = 5000) => {
    const id = Math.floor(Math.random() * 1000);  
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  }

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
};

export default AlertState;