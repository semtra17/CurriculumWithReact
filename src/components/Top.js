import React from 'react';
import {useStore} from '../store/StoreProviders'
import '../styleFiles/Top.css';
import Menu  from './Menu';





export default function Top (props) {
    const {myPicture_element,linesPicture_element, top_component} = useStore();
    const {className_element, enable} = linesPicture_element;
        return (<div className={top_component.enable ? top_component.className_component : "desactivated"}>
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
            <div className={myPicture_element.enable ? myPicture_element.className_element : "desactivated"}>
                <img src="./2020-12-01.png" alt="Profile"></img>
            </div>
           </div>
           <div className={enable? className_element : "desactivated"}>
               <span></span>
               <span></span>
           </div>
        </div>)
    
}