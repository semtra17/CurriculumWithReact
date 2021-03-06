import React,{Component} from 'react';
import "../styleFiles/Contact.css"

export default class Contact extends Component{

    render(){
        return <section className="Contact" id="Contact">
            <div>
                <div className="titleContact">
                    <h2>Contacto</h2>
                </div>

                <div className="infoContact">
                <a href="#">
                        <img src="../whatsapp.png" alt="whoIcon"></img>
                         <span>(0385) 154749296</span>
                         </a>
                <a href="#">
                        <img src="../gmail.png" alt="whoIcon"></img>
                         <span>semtra17@gmail.com</span>
                         </a>
                <a href="#">
                        <img src="../linkedin (1).png" alt="whoIcon"></img>
                         <span>linkedin.com/in/luciano-aizar-assefh-80a09b1b4</span>
                         </a>
                <a href="#">
                        <img src="../telegram.png" alt="whoIcon"></img>
                         <span>(0385) 154749296</span>
                         </a>
                </div>
                
            </div>

        </section>

    }


}