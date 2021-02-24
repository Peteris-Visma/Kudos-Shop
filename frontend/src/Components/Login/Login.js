import React, { Component } from 'react';
import '../../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from "jquery";

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
    //----------------------------------------------

    $.ajax({
      url:"https://localhost:44324/api/User/Login",
      type:"POST",
      data:JSON.stringify({ Email: this.state.username, password: this.state.password }),
      contentType:"application/json; charset=utf-8",
      dataType:"json",
      success: (msg)=>{
        localStorage.setItem("token",msg.token);
        toast.success("Hello "+msg.username);
        setTimeout(() => {
          window.location.href = "/home";
        }, 1000);
      },
  error: (XMLHttpRequest, textStatus, errorThrown)=> {console.log(XMLHttpRequest, textStatus, errorThrown);
    toast.error('Email or password is not correct')
  }
    });


    //request to backend
    // $.post("https://localhost:44324/api/User/Login", { Email: this.state.username, Password: this.state.password })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((ex) => {
    //     return toast.error('Email or password is not correct')
    //   });
    //----------------------------------------------

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