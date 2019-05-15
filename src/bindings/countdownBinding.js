import { connect } from "react-redux";
import {
  startCountdown,
  stopCountdown,
  resetCountdown,
  decrementCountdown
} from "../actions/index";
import Countdown from "../components/Countdown";
import { bindActionCreators } from "redux";

const mapStateToProps = state => ({ cTime: state.cTime, cState: state.cState });

function mapDispatchToProps(dispatch) {
  return {
    startCountdown: bindActionCreators(startCountdown, dispatch),
    stopCountdown: bindActionCreators(stopCountdown, dispatch),
    resetCountdown: bindActionCreators(resetCountdown, dispatch),
    decrementCountdown: bindActionCreators(decrementCountdown, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countdown);
