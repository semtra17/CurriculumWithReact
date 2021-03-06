import React, { Component } from 'react';

import '../styleFiles/Top.css';
import Menu  from './Menu';





export default class Top extends Component {


  

    render(){
        return <div className="top">
            <Menu sticky={this.props.sticky}/>
           <div className="container-title">
            <div className="title" >
                    <span><p>MI NOMBRE ES</p></span>
                    <span><p>LUCIANO AIZAR ASSEFH</p></span>
                    
                    
                    <span></span>
                    <span><p>PROGRAMADOR - DESARROLLADOR WEB</p></span>
                    
                </div>
           </div>
           <div className="containerPicture">
            <div className={this.props.myPicture}>
                <img src="./2020-12-01.png" alt="Profile"></img>
            </div>
           </div>
           <div className={this.props.linesPicture}>
               <span></span>
               <span></span>
           </div>
        </div>
    }
}