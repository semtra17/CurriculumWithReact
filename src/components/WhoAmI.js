import React,{Component} from 'react';
import "../styleFiles/WhoAmI.css"
import {Utils} from '../DataBase/Utils'
import { useStore } from '../store/StoreProviders';
export default function WhoAmI(props){
   
    const {profileText} = Utils;
    const {whoAmI_component} = useStore();
    const {className_component, enable} = whoAmI_component;
        return (<section className={enable ? className_component: "desactivated"} id="WhoAmI">
            
            <div className="titleWhoAmI">
                <h2>¿Quién soy?</h2>
            </div>
            <span></span>

            <div className="infoWhoAmI">
                <div >
                    <p>
                         {profileText}</p>
                   
                </div>
                <div><img alt="personality" src="../personalidad.png" ></img></div>
            </div>
                
           

        </section>)

    


}