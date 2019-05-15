// import * as allActions from "./actionTypes";

// -------------------------CLOCK----------------------------------

export const initializeTime = () => ({ type: "INITIALIZE_TIME" });

export const updateTime = () => ({ type: "UPDATE_TIME" });

// -------------------------STOPWATCH----------------------------------

export const startStopwatch = () => ({ type: "START_STOPWATCH" });

export const incrementStopwatch = () => ({ type: "INCREMENT_STOPWATCH" });

export const stopStopwatch = () => ({ type: "STOP_STOPWATCH" });

export const resetStopwatch = () => ({ type: "RESET_STOPWATCH" });

// -------------------------COUNTDOWN----------------------------------

export const startCountdown = () => ({ type: "START_COUNTDOWN" });

export const decrementCountdown = () => ({ type: "DECREMENT_COUNTDOWN" });

export const stopCountdown = () => ({ type: "STOP_COUNTDOWN" });

export const resetCountdown = () => ({ type: "RESET_COUNTDOWN" });
