import React,{Component} from 'react';
import "../styleFiles/Certificate.css"

export default class Certificate extends Component{

  

    render(){
        return <div id="certificado" className="Certificate">
            <img id="Certificate" alt="" src={this.props.image}></img>
           
             
    
        </div>

    }


}