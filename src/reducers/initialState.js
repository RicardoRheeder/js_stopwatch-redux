function resetStopwatch() {
  var initialStopwatchState = new Date();
  initialStopwatchState.setHours(0);
  initialStopwatchState.setMinutes(0);
  initialStopwatchState.setSeconds(0);
  initialStopwatchState.setMilliseconds(0);

  return initialStopwatchState;
}

function resetCountdown() {
  var initialCountdownState = new Date();
  initialCountdownState.setHours(1);
  initialCountdownState.setMinutes(0);
  initialCountdownState.setSeconds(0);
  initialCountdownState.setMilliseconds(0);

  return initialCountdownState;
}

export default {
  currentTime: Date.now(),

  sState: "INITIAL",
  sTime: resetStopwatch(),

  cState: "INITIAL",
  cTime: resetCountdown()
};
