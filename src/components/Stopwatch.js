import React, { Component } from "react";
import "../index.css";
import ClockBtn from "./TimerControlButtons.js";
import moment from "moment";

class Stopwatch extends Component {
  componentDidMount() {
    this.stopwatch = undefined;
  }

  componentWillUnmount() {
    clearInterval(this.stopwatch);
  }

  startStopwatch() {
    this.props.startStopwatch();
    this.stopwatch = setInterval(this.props.incrementStopwatch, 1);
  }

  stopStopwatch() {
    this.props.stopStopwatch();
    clearInterval(this.stopwatch);
    this.stopwatch = null;
  }

  handleReset() {
    clearInterval(this.stopwatch);
    this.props.resetStopwatch();
    this.stopwatch = null;
  }

  onClick(buttonId) {
    if (buttonId == 0 && this.stopwatch == null) {
      this.startStopwatch();
    } else if (buttonId == 1) {
      this.stopStopwatch();
    } else if (buttonId == 2) {
      this.handleReset();
    }
  }

  render() {
    const { sTime } = this.props;

    return (
      <div className="clockComponent">
        <span className="stopwatch"> {moment(sTime).format("mm:ss:SS")}</span>
        <div className="clockButtonsPanel">
          {/**Maps each button the the corresponding key - essentially creates a button for each key */}
          {["Start", "Stop", "Reset"].map((name, index) => (
            <ClockBtn
              key={"mykey-" + index}
              btnName={name}
              myId={index}
              innerClick={() => {
                this.onClick(index);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Stopwatch;
