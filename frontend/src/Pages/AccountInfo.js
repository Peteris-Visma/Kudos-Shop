import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import $ from "jquery";
import defImage from "../assets/Default/userDefault.jpg";
import KP from "../Components/KP.png";


class AccountInfo extends Component {
    constructor() {
        super();
        this.page = {
            userInfo: {
                name:"Loading",
                email:"Loading",
                balance:"Loading"
            }
        }
    }
    loadInfo=()=>{
        $.get("https://localhost:44324/api/User/GetInfo/"+localStorage.getItem("token")).then((result)=>{
            this.page.userInfo =result;
            this.setState(this.page.userInfo);
        }).catch(ex=>{
            toast.error("Log in again please");
            this.page.userInfo = {
                name: "Error",
                email: "Error",
                balance: "Error"
            }
            this.setState(this.page.userInfo);
            setTimeout(() => {
                window.location.href = "/";
              }, 2000);
        });
    }

    render() {

        return (
            <div onLoad={this.loadInfo} className="container-fluid">
                <div className="row mt-3">
                    <div className="text-center col-sm-3">
                        <img src={KP}></img>
                    </div>
                    <div className="col-sm-4">
                        <div className="row mt-2">
                            <div className="col-sm-12">
                             <span className="badge badge-pill badge-danger">Name: </span>   {this.page.userInfo.name}
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-12">
                            <span className="badge badge-pill badge-danger">Email: </span> {this.page.userInfo.email}
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-12">
                            <span className="badge badge-pill badge-danger">Balance: </span> {this.page.userInfo.balance}
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-12">
                        <button className="btn btn-secondary" onClick={this.loadInfo}>
  Refresh
</button>
</div>
                        </div>
                    </div>

                </div>
                <ToastContainer />
            </div>
        );
    }
}

export default AccountInfo;
