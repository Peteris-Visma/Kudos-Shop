import React, { Component } from 'react'
import {ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import * as ReactBootstrap from 'react-bootstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from "jquery";
import '../App.css';
import  amount  from '../Components/Login/Login';
import  username   from '../Components/Login/Login';
import  usersurname   from '../Components/Login/Login';
import Logo from '../Components/KP.png';


    
const Account = () => {
    const data = [
    {Number: 9, Date: '10-02-2021 12:45',Remaining: 591, KudosSpent: 12,Description: 'T-Shirt (Eat, Sleep, Code, Repeat)', Status: 'Completed'},
    {Number: 8,Date: '11-02-2021 09:01', Remaining: 566 , KudosSpent: 25, Description: 'Umbrella', Status: 'Completed'},
    {Number: 7,Date: '12-02-2021 13:22', Remaining: 560 , KudosSpent: 6, Description: 'Black T-Shirt', Status: 'Completed'} ,
    {Number: 6,Date: '13-02-2021 10:06', Remaining: 535 , KudosSpent: 25, Description: 'Shopping bag (5x)', Status: 'Completed'},
    {Number: 5,Date: '14-02-2021 17:17', Remaining: 529 , KudosSpent: 6, Description: 'Buff', Status: 'Completed'},
    {Number: 4,Date: '15-02-2021 20:58', Remaining: 504 , KudosSpent: 25, Description: 'Dark blue hoodie', Status: 'Completed'},
    {Number: 3,Date: '16-02-2021 11:11', Remaining: 499, KudosSpent: 5, Description: 'Universal size waterproof bag', Status: 'Completed'},
    {Number: 2,Date: '17-02-2021 12:30', Remaining: 467, KudosSpent: 32, Description: 'Umbrella', Status: 'Completed'},
    {Number: 1,Date: '18-02-2021 18:47', Remaining: 455, KudosSpent: 12, Description: '3D printing', Status: 'Completed'},
        ]
        
            window.nameVar = username 
            window.surnameVar = usersurname
            window.balanceVar = amount
    
    const renderInfo = (Info, index) => {
        return (
            <tr key={index}>
            <th>{Info.Number}</th>
            <th>{Info.Date}</th>
            <th>{Info.KudosSpent}</th>
            <th>{Info.Description}</th>
            <th>{Info.Status}</th>
            </tr>
        )
    }

    // $.ajax({
    //     url:"https://localhost:5001/api/User/Login",
    //     type:"POST",
    //     //data:JSON.stringify({ Email: this.state.username, password: this.state.password }),
    //     contentType:"application/json; charset=utf-8",
    //     dataType:"json",
    //     success: (msg)=>{
    //       localStorage.setItem("token",msg.token);
    //     },
    // error: (XMLHttpRequest, textStatus, errorThrown)=> {console.log(XMLHttpRequest, textStatus, errorThrown);
    //   //toast.error('Email or password is not correct')
    // }
    //   });

    const FlippyStyle = {
        width: '250px',
        height: '150px',
        textAlign: 'center',
        color: 'Black',
        fontFamily: 'sans-serif,',
        fontSize: '25px',
        justifyContent: 'center',
        background: 'rgb(244,132,132)',
        background: 'linear-gradient(90deg, rgba(244,132,132,1) 7%, rgba(123,184,236,1) 51%, rgba(244,132,132,1) 97%)',   
        }

        const FlippyToggle = {
        width: '250px',
        height: '150px',
        marginLeft: '150px',
        marginTop: '100px',
        marginBottom: '50px'
    }
    return (
            
<div >
    <div id="div1">
        <Flippy flipOnHover={true}  flipOnClick={false}  flipDirection="horizontal"  style={FlippyToggle} id="card">
            <FrontSide style={FlippyStyle }>
                <h4>Account info </h4>  
                <h5> <h5>Name:{window.nameVar} </h5> </h5>
                <h5> <h5>Surname:{window.surnameVar} </h5> </h5>  
            </FrontSide>

            <BackSide style={FlippyStyle }>
                <h4>You have </h4>  <p>{window.balanceVar} <img src={Logo} className="logo"/> </p>   
            </BackSide>

        </Flippy>
    </div>     
    <div id="div2">  
        <ResponsiveContainer width="100%" height={300} >
            <LineChart width={1000} height={400} data={data} margin={{ top: 50, right: 50, bottom: 0, left: 200 }}>
                <Line type="monotone" dataKey="Remaining" strokeWidth={4} stroke="#ec043c" />
                    <CartesianGrid stroke="#ccc"  />
                        <XAxis dataKey="Date"  />
                        <YAxis  />
                    <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    </div>
    <ReactBootstrap.Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>Number</th>
                <th>Date</th> 
                <th>Kudos spent</th> 
                <th>Description</th> 
                <th>Status</th>   
            </tr>
        </thead>

        <tbody>
            {data.map(renderInfo)}
        </tbody>
    </ReactBootstrap.Table>
    <ToastContainer />
</div>
        )

        

    }

export default Account;
