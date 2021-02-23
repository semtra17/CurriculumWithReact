import React, { Component } from 'react';

import './Top.css';
import Menu  from './Menu';





export default class Top extends Component {
    render(){
        return <div className="top">
            <Menu/>
           <div className="container-title">
            <div className="title">
                    <p>MI NOMBRE ES</p>
                    <p>LUCIANO AIZAR ASSEFH</p>
                    <span></span>
                    <p>PROGRAMADOR - DESARROLLADOR WEB</p>
                </div>
           </div>
           <div className="myPicture">
               <img src="../2020-12-01.png" alt=""></img>
           </div>
        </div>
    }
}