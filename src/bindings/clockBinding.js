import { connect } from "react-redux";
import { updateTime, initializeTime } from "../actions/index";
import Clock from "../components/Clock";
import { bindActionCreators } from "redux";

const mapStateToProps = state => ({ currentTime: state.currentTime });
function mapDispatchToProps(dispatch) {
  return {
    updateTime: bindActionCreators(updateTime, dispatch),
    initializeTime: bindActionCreators(initializeTime, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock);
