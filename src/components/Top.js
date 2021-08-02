import React from 'react';
import {useStore} from '../store/StoreProviders'
import '../styleFiles/Top.css';
import Menu  from './Menu';





export default function Top (props) {
    const {components} = useStore();
        return (<div className="top">
            <Menu/>
           <div className="container-title">
            <div className="title" >
                    <span><p>MI NOMBRE ES</p></span>
                    <span><p>LUCIANO AIZAR <span className="lastName1">ASSEFH</span></p>
                        <p className="lastName2">ASSEFH</p>
                    </span>                 
                    <span></span>
                    <span><p>PROGRAMADOR</p> - <p>DESARROLLADOR WEB</p></span>
                    
                </div>
           </div>
           <div className="containerPicture">
            <div className={components[1].enable ? components[1].className : "desactivated"}>
                <img src="./2020-12-01.png" alt="Profile"></img>
            </div>
           </div>
           <div className={components[2].enable? components[2].className : "desactivated"}>
               <span></span>
               <span></span>
           </div>
        </div>)
    
}