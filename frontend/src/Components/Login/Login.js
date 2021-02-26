import React, { Component } from 'react';
import '../../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from "jquery";
import logo from "../visma-logo.png";
import KP from "../KP.png";
import WH from "../SPACE.png";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      amount:'',
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
      url:"https://localhost:5001/api/User/Login",
      type:"POST",
      data:JSON.stringify({ Email: this.state.username, password: this.state.password }),
      contentType:"application/json; charset=utf-8",
      dataType:"json",
      success: (msg)=>{
        localStorage.setItem("token",msg.token);
        //localStorage.setItem("balance",msg.balance);
        toast.success("Hello "+msg.username+" "+msg.usersurname);
        this.state.amount = msg.balance;
        console.log(this.state.amount);
        //module.exports=(this.state.amount);
        setTimeout(() => {
          window.location.href = "/home";
        }, 1000);
      },
  error: (XMLHttpRequest, textStatus, errorThrown)=> {console.log(XMLHttpRequest, textStatus, errorThrown);
    toast.error('Email or password is not correct')
  }
    });


    //request to backend
    // $.post("https://localhost:5001/api/User/Login", { Email: this.state.username, Password: this.state.password })
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
            <span className="text-muted">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={logo} height="28" width="120" className="d-inline-block align-top"alt="Logo"/> </span>
            <h4>Welcome to Kudos Shop &nbsp; </h4>
            <h4><img src={WH} height="1" width="10"  className="d-inline-block align-top"alt="Logo"/> </h4>
            <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" data-test="email" value={this.state.username} onChange={this.handleUserChange}  />
            <div ></div>
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
