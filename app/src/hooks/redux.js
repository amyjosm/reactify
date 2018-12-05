import { useState, useEffect } from "react";
import store from "../reducers";

export function useRedux(reducer, type) {
  let prevState = store.getState()[reducer];
  const [state, setState] = useState(prevState);
  let tracker = false;

  useEffect(() => {
    store.dispatch({ type, payload: state });
  });

  store.subscribe(() => {
    const currentState = store.getState()[reducer];
    if(currentState !== state && tracker){
      console.log("tracked");
      // setState(currentState);
    }
    tracker = true;
    console.log("Effect State:", state);
    console.log("Previous State:", prevState);
    console.log("Current State:", currentState);
    console.log("===================================");
  });

  return [state, setState];
}
