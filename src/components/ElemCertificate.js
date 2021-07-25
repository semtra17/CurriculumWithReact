import React,{Component} from 'react';
import "../styleFiles/Certificate.css"

export default function Certificate(props){

  

    return( <div id="certificado" className="Certificate">
                <img id="Certificate" alt="" src={props.image}></img>
             </div>)
        

    


}