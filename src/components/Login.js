import React from "react";
import Title from './Title.js';
import base from '../base.js';

class Login extends React.Component {
  username = React.createRef();
  password = React.createRef();

  submitCredentials = (event) => {
    event.preventDefault();
    const username = this.username.current.value;
    const password = this.password.current.value;

    this.props.history.push('/app');
  };

  render() {
    return (
      <React.Fragment>
        <Title title="BIOMED Transfer Courses" />
        <form className="login-form" onSubmit={this.submitCredentials}>
          <h2>Login:</h2>
          <input
            type="text"
            ref={this.username}
            required
            placeholder="Username"
          />
          <input
            type="text"
            ref={this.password}
            required
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
