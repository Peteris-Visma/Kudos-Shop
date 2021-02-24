import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Transaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            amount: '',
            userName1: '',
            amount1: '',
            userName2: '',
            amount2: ''
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
    
    onSendForm(e) {
        e.preventDefault();
        console.log(this.state)
        toast.info("Kudos have sent!")
    }

    onGenerateForm(e) {
        e.preventDefault();
        console.log(this.state)
        toast.info("Kudos have generated!")
    }

    onRequestForm(e) {
        e.preventDefault();
        console.log(this.state)
        toast.info("Kudos have requested!")
    }

    render() {
        const { userName, amount,userName1, amount1,userName2, amount2 } = this.state
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
                                <input type="text" className="form-control" placeholder="Seacrh name"
                                    name="userName" value={this.state.userName} onChange={this.onInputchange} required/>
                                </div>
                                <div className="mb-3">
                                <input type="double" className="form-control" placeholder="Amount"
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
                                <input type="text" className="form-control" placeholder="Seacrh name"
                                    name="userName1" value={this.state.userName1} onChange={this.onInputchange} required/>
                                </div>
                                <div className="mb-3">
                                <input type="double" className="form-control" placeholder="Amount"
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
                                <input type="text" className="form-control" placeholder="Seacrh name"
                                    name="userName2" value={this.state.userName2} onChange={this.onInputchange} required/>
                                </div>
                                <div className="mb-3">
                                <input type="double" className="form-control" placeholder="Amount"
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
