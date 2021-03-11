import React,{Component} from 'react';
import "../styleFiles/Contact.css"

export default class Contact extends Component{

    render(){
        return <section className={this.props.Contact} id="Contact">
            
                <div className="titleContact">
                    <h2>Contacto</h2>
                </div>
                <span></span>
                <div className="infoContact">
                    <a href="/wa.link/sjjoq1" className="box">
                        <div className="imgBx">
                            <img alt="wp" src="../whatsapp.png"></img>
                        </div>
                        <div className="layer layer1"></div>
                        <div className="layer layer2"></div>
                        <div className="contentBx">
                            <div>
                                <h2>WhatsApp</h2>
                                <p>(0385) 154749296</p>
                            </div>
                        </div>
                    </a>
                    <a href="/#" className="box">
                        <div className="imgBx">
                            <img alt="gmail" src="../gmail.png"></img>
                        </div>
                        <div className="layer layer1"></div>
                        <div className="layer layer2"></div>
                        <div className="contentBx">
                            <div>
                                <h2>Gmail</h2>
                                <p>semtra17@gmail.com</p>
                            </div>
                        </div>
                    </a>
                
                    <a  href="/linkedin.com/in/luciano-aizar-assefh-80a09b1b4" className="box">
                        <div className="imgBx">
                            <img alt="linkdin" src="../linkedin (1).png"></img>
                        </div>
                        <div className="layer layer1"></div>
                        <div className="layer layer2"></div>
                        <div className="contentBx">
                            <div>
                                <h2>LinkedIn</h2>
                                <p>linkedin.com/in/luciano-aizar-assefh-80a09b1b4</p>
                            </div>
                        </div>
                    </a>
                    <a href="/#" className="box">
                        <div className="imgBx">
                            <img alt="telegram" src="../telegram.png"></img>
                        </div>
                        <div className="layer layer1"></div>
                        <div className="layer layer2"></div>
                        <div className="contentBx">
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