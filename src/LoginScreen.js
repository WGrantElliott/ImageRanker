import React from 'react';

export default class LoginScreen extends React.Component {
    constructor(props) {
      super(props);
      this.username = '';
      this.password = '';
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h1>Login</h1>
          <form className = "inputContent" onSubmit={this.handleSubmit}>
            <input
              id="usernameButton"
              placeholder = "Username"
            />
            <br />
            <input
              id="passwordButton"
              placeholder = "Password"
            />
            <br />
            <br />
            <button>
              Login
            </button>
          </form>
        </div>
      );
    }
  
    handleSubmit = (event) => {
      console.log(event.target.username.value)
      console.log(event.target.password.value)
    }
  }
