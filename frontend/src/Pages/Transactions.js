import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from "jquery";
import axios from 'axios';

export default class Transaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            amount: '',
            userName1: '',
            amount1: '',
            userName2: '',
            amount2: '',
            users: []
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.onSendForm = this.onSendForm.bind(this);
        this.onGenerateForm = this.onGenerateForm.bind(this);
        this.onRequestForm = this.onRequestForm.bind(this);
    }
    onInputchange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    

      componentDidMount() {
        window.addEventListener('load', this.handleLoad);
     }
    
     componentWillUnmount() { 
       window.removeEventListener('load', this.handleLoad)  
     }

    handleLoad() {
    axios({
        method: 'get',
        url: 'https://localhost:44324/api/User/GetUsers',
        //responseType: 'stream'
        })
        .then(function (response) {
            const users1 = [response.data[0].idU,response.data[0].nameU, response.data[0].surnameU];
           // this.setState({ users });
            //toast.info('Works');
            console.log(response.data)
            console.log(users1)
            //this.setState({
                //id1: response.data[1].idU
            //})
        });
    }

    onSendForm(e) {
        e.preventDefault();
        console.log(this.state.userName)
        console.log(this.state.amount)
        axios({
            method: 'post',
            url: 'https://localhost:44324/api/User/SendKudos',
            data: {
              SenderId:  1,
              RecieverId: 2,
              Amount:5
            }
        })
        .then(function (response) {
            console.log(response);
            toast.info("Kudos have been send!")
          })
        .catch(function (error) {
            console.log(error);
        });
    }

    onGenerateForm(e) {
        e.preventDefault();
        console.log(this.state)
        toast.info("Kudos have generated!")
    }

    onRequestForm(e) {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://localhost:44324/api/TransferRequest/AddTransfer',
            data: {
                FromUser: 1,
                ToUSer: 2,
                TransferAmount: 1,
                Description: "Kudos please!",
                DateTime: "2018-03-29",
                Approve: false
            }
        })
        .then(function (response) {
            console.log(response);
          })
        .catch(function (error) {
            console.log(error);
        });
        toast.info("Kudos have been requested!")
    }

    render() {
        const { userName, amount,userName1, amount1,userName2, amount2,userNames } = this.state
        return (
            <div className="App container">
                <div className="element"></div>
                <h4 className="d-flex justify-content-center align-items-center mb-3">
                        <span className="text-muted">Send/Receive kudos</span>
                </h4>
                <div className="elementOne"></div>
                <div className="row" >
                    <div className="col-sm ">
                        <form>
                            <div className="mb-3">
                                <label> Send kudos </label>
                                <input type="text" className="form-control" placeholder="Enter Employee"
                                    name="userName" value={this.state.userName} onChange={this.onInputchange} required/>
                                </div>
                                <div className="mb-3">
                                <input type="double" className="form-control" placeholder="Amount of Kudos"
                                    name="amount" value={this.state.amount} onChange={this.onInputchange} required/>
                                <div className="mb-3"></div>
                                <label>Reason:&nbsp;&nbsp;</label>
                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="A">Assistance</option>
                                    <option value="B">Being Visma Ambassador</option>
                                    <option value="C">Organisational activities</option>
                                    <option value="D">Internal training for Visma Labs teams</option>
                                </select>       
                            </div>
                            <hr/>
                            <button className="btn btn-danger btn-lg btn-lg" type={"submit"} onClick={this.onSendForm}>Send</button>
                        </form>
                    </div>
                    <div className="col-sm">
                        <form>
                            <div className="mb-3">
                                <label> Generate kudos </label>
                                <input type="text" className="form-control" placeholder="Enter Employee"
                                    name="userName1" value={this.state.userName1} onChange={this.onInputchange} required/>
                                </div>
                                <div className="mb-3">
                                <input type="double" className="form-control" placeholder="Amount of Kudos"
                                    name="amount1" value={this.state.amount1} onChange={this.onInputchange} required/>   
                            </div>
                            <hr/>
                            <button className="btn btn-danger btn-lg btn-lg" type={"submit"} onClick={this.onGenerateForm}>Generate</button>
                        </form>
                    </div>
                    <div className="col-sm">                   
                        <form>
                            <div className="mb-3">
                                <label> Request kudos </label>
                                <input type="text" className="form-control" placeholder="Enter Employee"
                                    name="userName2" value={this.state.userName2} onChange={this.onInputchange} required/>
                                </div>
                                <div className="mb-3">
                                <input type="double" className="form-control" placeholder="Amount of Kudos"
                                    name="amount2" value={this.state.amount2} onChange={this.onInputchange} required/>   
                            </div>
                            <hr/>
                            <button className="btn btn-danger btn-lg btn-lg" type={"submit"} onClick={this.onRequestForm}>Request</button>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        )
    }
}
