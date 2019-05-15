import initialState from "./initialState";
import moment from "moment";

const clockApp = (state = initialState, action) => {
  switch (action.type) {
    // -------------------------CLOCK----------------------------------
    case "INITIALIZE_TIME":
      return Object.assign({}, state, { ...state, currentTime: Date.now() });

    case "UPDATE_TIME":
      return Object.assign({}, state, {
        ...state,
        currentTime: moment(state.currentTime).add(1, "second")
      });

    // -------------------------STOPWATCH----------------------------------
    case "INCREMENT_STOPWATCH":
      return Object.assign({}, state, {
        ...state,
        sTime: moment(state.sTime).add(25, "millisecond")
      });
    case "STOP_STOPWATCH":
      return Object.assign({}, state, { ...state, sState: "STOPPED" });
    case "RESET_STOPWATCH":
      return Object.assign({}, state, {
        ...state,
        sState: "INITIAL",
        sTime: resetStopwatch()
      });
    case "START_STOPWATCH":
      return Object.assign({}, state, { ...state, sState: "RUNNING" });

    // -------------------------COUNTDOWN----------------------------------
    case "DECREMENT_COUNTDOWN":
      return Object.assign({}, state, {
        ...state,
        cTime: moment(state.cTime).subtract(25, "millisecond")
      });
    case "STOP_COUNTDOWN":
      return Object.assign({}, state, { ...state, sState: "STOPPED" });
    case "RESET_COUNTDOWN":
      return Object.assign({}, state, {
        ...state,
        sState: "INITIAL",
        sTime: resetStopwatch()
      });
    case "START_COUNTDOWN":
      return Object.assign({}, state, { ...state, sState: "RUNNING" });

    default:
      return state;
  }
};

function resetStopwatch() {
  var initialStopwatchState = new Date();
  initialStopwatchState.setHours(0);
  initialStopwatchState.setMinutes(0);
  initialStopwatchState.setSeconds(0);
  initialStopwatchState.setMilliseconds(0);

  return initialStopwatchState;
}

export default clockApp;
