import React from "react";
// import "../../index.css";

/**
 * Serves as the about page to provide any additional information
 */
export default function About() {
  return (
    <React.Fragment>
      <h1>Reminder on how to add new components.</h1>
      <ul>
        <li>
          <b>Step 1:</b> Within src\reducers\initialState.js,{" "}
          <b>add the required initial state</b> for the new component.
        </li>
        <br />
        <li>
          <b>Step 2:</b> Within \src\actions\index.js,{" "}
          <b>add the function names with their return types.</b>
        </li>
        <br />
        <li>
          <b>Step 3:</b> Within src\reducers\rootReducer.js,{" "}
          <b>add the actions the reducer will perform</b> on the object types.
        </li>
        <br />
        <li>
          <b>Step 4:</b> Within src\bindings\, add a new file to{" "}
          <b>handle the bindings</b> of your component and <b>connect</b> your
          states and props.
          <div className="listDiv">eg. src\bindings\stopwatchBinding.js</div>
        </li>
        <br />
        <li>
          <b>Step 5:</b> Within src\Composite.js, <b>import the bindings</b> of
          the components, and <b>add the components to a desired path</b>.
          <div className="listDiv">
            eg. import Stopwatch from "./bindings/stopwatchBinding";
          </div>
          <div className="listDiv">
            e.g ANGLEOPEN Route path="/stopwatch" component=CURLYStopwatchCURLY
            ANGLECLOSE
          </div>
        </li>
        <br />
        <li>
          <b>Step 6:</b> <b>Define your component</b> within
          src\components\ComponentName.js
        </li>
      </ul>
    </React.Fragment>
  );
}
