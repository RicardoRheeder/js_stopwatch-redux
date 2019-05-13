import React, { Component } from 'react'

/**
 * This page displays the fields for user input to log in and sets authentication
 */
export default class LoginPage extends Component {
  // RedirectToReferrer is used to determine whether or not to redirect the user to the previous page
  state = { redirectToReferrer: false };

  componentDidMount(){
    this.props.setLoginShown(true);
  }

  componentWillUnmount(){
    this.props.setLoginShown(false);
  }

  render() {
    // Sets from to either condition
    let { from } = this.props.location.state || { from: { pathname: "/" } };

    return (
      <div>
        <h1>
          Log in screen
        </h1>
        <div>
          <label >Username:</label>
          <input type="text" id="name" name="name" required minLength="4" maxLength="8" size="20" ></input>
        </div>
        <div>
          <label >Password:</label>
          <input type="text" id="name" name="name" required minLength="4" maxLength="8" size="20" ></input>
        </div>
        <div>
          <button onClick={()=>{
                this.props.history.push(from);  // Sends the user back to the previous page
                this.props.setAuthentication(true); // Registers that the user is now logged in
          }}>Log in</button>
        </div>
      </div>
    );
  }
}