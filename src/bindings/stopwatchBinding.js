import { connect } from "react-redux";
import {
  startStopwatch,
  stopStopwatch,
  resetStopwatch,
  incrementStopwatch
} from "../actions/index";
import Stopwatch from "../components/Stopwatch";
import { bindActionCreators } from "redux";

const mapStateToProps = state => ({ sTime: state.sTime, sState: state.sState });

function mapDispatchToProps(dispatch) {
  return {
    startStopwatch: bindActionCreators(startStopwatch, dispatch),
    stopStopwatch: bindActionCreators(stopStopwatch, dispatch),
    resetStopwatch: bindActionCreators(resetStopwatch, dispatch),
    incrementStopwatch: bindActionCreators(incrementStopwatch, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stopwatch);
