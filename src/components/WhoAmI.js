import React,{Component} from 'react';
import "../styleFiles/WhoAmI.css"

export default function WhoAmI(props){
   
    
    
        return (<section className={props.whoAmIClassName} id="WhoAmI">
            
            <div className="titleWhoAmI">
                <h2>¿Quién soy?</h2>
            </div>
            <span></span>

            <div className="infoWhoAmI">
                <div >
                    <p>
                         {props.whoAmIProfileText}</p>
                   
                </div>
                <div><img alt="personality" src="../personalidad.png" ></img></div>
            </div>
                
           

        </section>)

    


}