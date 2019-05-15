import React, { Component } from "react";
import "../index.css";
import ClockBtn from "./TimerControlButtons.js";
import moment from "moment";

class Countdown extends Component {
  componentDidMount() {
    this.countdown = undefined;
  }

  componentWillUnmount() {
    clearInterval(this.countdown);
  }

  startCountdown() {
    this.props.startCountdown();
    this.countdown = setInterval(this.props.decrementCountdown, 1);
  }

  stopCountdown() {
    this.props.stopCountdown();
    clearInterval(this.countdown);
    this.countdown = null;
  }

  handleReset() {
    clearInterval(this.countdown);
    this.props.resetCountdown();
    this.countdown = null;
  }

  onClick(buttonId) {
    if (buttonId == 0 && this.countdown == null) {
      this.startCountdown();
    } else if (buttonId == 1) {
      this.stopCountdown();
    } else if (buttonId == 2) {
      this.handleReset();
    }
  }

  render() {
    const { cTime } = this.props;

    return (
      <div className="clockComponent">
        <span className="stopwatch">
          {" "}
          {moment(cTime).format("hh:mm:ss:SS")}
        </span>
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

export default Countdown;
