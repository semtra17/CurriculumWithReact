import React,{Component} from 'react';
import "../styleFiles/WhoAmI.css"

export default class WhoAmI extends Component{
    constructor(props){
        super(props);

       this.state ={

       }
    }
    
    render(){
        return <section className={this.props.whoAmIClassName} id="WhoAmI">
            
            <div className="titleWhoAmI">
                <h2>¿Quién soy?</h2>
            </div>
            <span></span>

            <div className="infoWhoAmI">
                <div >
                    <p>
                         {this.props.whoAmIProfileText}</p>
                   
                </div>
                <div><img alt="personality" src="../personalidad.png" ></img></div>
            </div>
                
           

        </section>

    }


}