import React, { Component } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import * as ReactBootstrap from 'react-bootstrap';

import '../App.css';


    
const Account = () => {
        const data = [
        {Number: 1, Date: '10-02-2021 12:45', Kudos: 12, Description: 'T-Shirt (Eat, Sleep, Code, Repeat)', Status: 'Completed'},
        {Number: 2,Date: '11-02-2021 09:01', Kudos: 25 , Description: 'Umbrella', Status: 'Completed'},
        {Number: 3,Date: '12-02-2021 13:22', Kudos: 12 , Description: 'Black T-Shirt', Status: 'Completed'} ,
        {Number: 4,Date: '13-02-2021 10:06', Kudos: 25 , Description: 'Shopping bag (5x)', Status: 'Completed'},
        {Number: 5,Date: '14-02-2021 17:17', Kudos: 6 , Description: 'Buff', Status: 'Completed'},
        {Number: 6,Date: '15-02-2021 20:58', Kudos: 25 , Description: 'Dark blue hoodie', Status: 'Completed'},
        {Number: 7,Date: '16-02-2021 11:11', Kudos: 6, Description: 'Universal size waterproof bag', Status: 'Completed'},
        {Number: 8,Date: '17-02-2021 12:30', Kudos: 25, Description: 'Umbrella', Status: 'Completed'},
        {Number: 9,Date: '18-02-2021 18:47', Kudos: 4, Description: '3D printing', Status: 'Completed'},
         ]
         const user = [
            {Name: 'Roberts', Surname: 'Kartenko', KudosWallet: 567},
            
             ]
        


        const renderInfo = (Info, index) => {
            return (
                <tr key={index}>
                <th>{Info.Number}</th>
                <th>{Info.Date}</th>
                <th>{Info.Kudos}</th>
                <th>{Info.Description}</th>
                <th>{Info.Status}</th>
                </tr>
            )
        }

        
        

        
        return (
            
            <div className="Account" >

                 <div id="div1">
                     <h1>Name: Roberts</h1> 
                     <h1>Surname:Kartenko</h1>
                     <h1>Kudos:1012</h1>
                </div>
                <div id="divContainer">
                <LineChart width={1500} height={300} data={data} margin={{ top: 5, right: 0, bottom: 5, left: 600 }}>
                    <Line type="monotone" dataKey="Kudos"  stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="Date"  />
                    <YAxis  />
                    <Tooltip />
                </LineChart>
                </div>

                
            
            <ReactBootstrap.Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Number</th>
                <th>Date</th> 
                <th>Kudos</th> 
                <th>Description</th> 
                <th>Status</th>   
                </tr>
            </thead>
            <tbody>
                {data.map(renderInfo)}
            </tbody>
            
            
            
            </ReactBootstrap.Table>


          </div>
        )

    }

export default Account;

