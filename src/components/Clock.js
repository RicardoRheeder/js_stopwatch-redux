import React, { Component } from 'react';
// import CountdownText from './TimerText';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as stuffActions from '../actions/stuffActions';
// import PropTypes from 'prop-types';
import '../index.css';
import moment from 'moment';


/**
 * Serves as a component to display the current local time
 */
const Clock = function({currentTime}) {
  debugger;
  return(
    <div className="clockComponent">
      <span className="stopwatch">
      {moment(currentTime).format('h:mm:ss a') }
    </span>
  </div>
  )
  
}


// );

const mapStateToProps = state => ({ currentTime: state.clockStore.currentTime })
export default connect(mapStateToProps)(Clock)