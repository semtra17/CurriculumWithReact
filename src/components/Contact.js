import React,{Link, Component} from 'react';
import "../styleFiles/Contact.css"
import ContactCard from './ContactCard';

export default class Contact extends Component{

    render(){
        return <section className={this.props.Contact} id="Contact">
            
                <div className="titleContact">
                    <h2>Contacto</h2>
                </div>
                <span></span>
                <div className="infoContact">
                    <ContactCard hrefPorpuse="http://wa.link/sjjoq1" altText="Whatsapp blanco" srcImg="../Whatsapp blanco.png" title="WhatsApp" info="(0385) 154749296" />
                    <ContactCard hrefPorpuse="mailto:semtra17@gmail.com?subject=Contact" altText="gmail" srcImg="../gmail blanco.png" title="Gmail" info="semtra17@gmail.com" />
                    <ContactCard hrefPorpuse="http://linkedin.com/in/luciano-aizar-assefh-80a09b1b4" altText="linkdin" srcImg="../linkedin blanco.png" title="LinkedIn" info="linkedin.com/in/luciano-aizar-assefh-80a09b1b4" />
                    <ContactCard hrefPorpuse="" altText="telegram" srcImg="../telegramblanco.png" title="Telegram" info="(0385) 154749296" />
           
                </div>
                
           

        </section>

    }


}