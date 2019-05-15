// import * as allActions from "./actionTypes";

// -------------------------CLOCK----------------------------------

export const initializeTime = () => ({ type: "INITIALIZE_TIME" });

export const updateTime = () => ({ type: "UPDATE_TIME" });

// -------------------------STOPWATCH----------------------------------

export const startStopwatch = () => ({ type: "START_STOPWATCH" });

export const incrementTime = () => ({ type: "INCREMENT_TIME" });

export const stopStopwatch = () => ({ type: "STOP_STOPWATCH" });

export const resetStopwatch = () => ({ type: "RESET_STOPWATCH" });
