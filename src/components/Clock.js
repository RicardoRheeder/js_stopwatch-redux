import React, { Component } from "react";
import moment from "moment";
import "../index.css";

class Clock extends Component {
  componentDidMount() {
    this.props.initializeTime();
    this.interval = setInterval(this.props.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currentTime } = this.props;

    return (
      <div className="clockComponent">
        <span className="stopwatch">
          {moment(currentTime).format("hh:mm:ss A")}
        </span>
      </div>
    );
  }
}

export default Clock;
