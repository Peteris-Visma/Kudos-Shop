import React, { Component } from 'react';
import '../../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return toast.error('Username is required')
    }

    if (!this.state.password) {
      return toast.error('Password is required')
    }

    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <div className="Login">
        <div className="element"></div>
        <h4 className="d-flex justify-content-center align-items-center mb-3">
             <span className="text-muted">Login</span>
        </h4>
        <div className="elementOne"></div>
        <div className="login"> 
            <form onSubmit={this.handleSubmit}>
            {
                this.state.error &&
                <h3 data-test="error" onClick={this.dismissError}>
                <button onClick={this.dismissError}>✖</button>
                {this.state.error}
                </h3>
            }
            <label>User Name&nbsp;&nbsp;</label>
            <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
            <div></div>
            <label>Password&nbsp;&nbsp;</label>
            <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
            <div></div>
            <button className="btn btn-danger btn-lg btn-lg" type={"submit"} onClick={this.handleSubmit}>Log In</button>
            </form>
        </div> 
        <ToastContainer />
      </div>
    );
  }
}

export default LoginPage;