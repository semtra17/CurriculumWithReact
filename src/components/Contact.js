import React,{Link, Component} from 'react';
import "../styleFiles/Contact.css"

export default class Contact extends Component{

    render(){
        return <section className={this.props.Contact} id="Contact">
            
                <div className="titleContact">
                    <h2>Contacto</h2>
                </div>
                <span></span>
                <div className="infoContact">
                    <a href="http://wa.link/sjjoq1" className="box">
                        <div className="imgBx">
                            <img alt="Whatsapp blanco" src="../Whatsapp blanco.png"></img>
                        </div>
                        
                        <div className="content">
                            <div>
                                <h2>WhatsApp</h2>
                                <p>(0385) 154749296</p>
                            </div>
                        </div>
                    </a>
                    <a  className="box">
                        <div className="imgBx">
                            <img alt="gmail" src="../gmail blanco.png"></img>
                        </div>
                        
                        <div className="content">
                            <div>
                                <h2>Gmail</h2>
                                <p>semtra17@gmail.com</p>
                            </div>
                        </div>
                    </a>
                    
                    <a  href="http://linkedin.com/in/luciano-aizar-assefh-80a09b1b4" className="box">
                        <div className="imgBx">
                            <img alt="linkdin" src="../linkedin blanco.png"></img>
                        </div>  
                        <div className="content">
                            <div>
                                <h2>LinkedIn</h2>
                                <p>linkedin.com/in/luciano-aizar-assefh-80a09b1b4</p>
                            </div>
                        </div>
                    </a>
                    <a  className="box">
                        <div className="imgBx">
                            <img alt="telegram" src="../telegramblanco.png"></img>
                        </div>
                        
                        <div className="content">
                            <div>
                                <h2>Telegram</h2>
                                <p>(0385) 154749296</p>
                            </div>
                        </div>
                    </a>
           
                </div>
                
           

        </section>

    }


}