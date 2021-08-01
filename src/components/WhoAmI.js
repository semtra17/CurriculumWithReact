import React,{Component} from 'react';
import "../styleFiles/WhoAmI.css"
import {Utils} from '../DataBase/Utils'
import { useStore } from '../store/StoreProviders';
export default function WhoAmI(props){
   
    const {profileText} = Utils;
    const {components} = useStore();
    const {className, enable} = components[3];
        return (<section className={enable ? className: "desactivated"} id="WhoAmI">
            
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