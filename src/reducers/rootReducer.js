// import { combineReducers } from "redux";
// import clockStore from "./clockReducer";
// import stopwatchStore from "./stopwatchReducer";

// const rootReducer = combineReducers({
//   // clockStore,
//   // stopwatchStore
// });

// export default rootReducer;

import initialState from "./initialState";
import moment from "moment";

const clockApp = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE_TIME":
      return Object.assign({}, state, { ...state, currentTime: Date.now() });
    case "UPDATE_TIME":
      return Object.assign({}, state, {
        ...state,
        currentTime: moment(state.currentTime).add(1, "second")
      });
    case "INCREMENT_STOPWATCH":
      return Object.assign({}, state, {
        ...state,
        sCurrentTime: moment(state.sCurrentTime).add(1, "second")
      });
    default:
      return state;
  }
};

export default clockApp;
