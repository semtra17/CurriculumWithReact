import React, { Component } from 'react';
import '../styleFiles/Menu.css';


export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            sticky:false,
        }
    }

    


    toggle(){
        var header = document.getElementById('header');
        header.classList.toggle('active')
      }
    
    render(){
        return <header className="header" id="header">
            
            <ul className={this.props.sticky}>
        <li>
            <a onClick={this.toggle} href="/#WhoAmI">¿Quién soy?</a>
        </li>
        <li>
            <a onClick={this.toggle} href="/#SkillsSoftware">Habilidades y Tecnologías</a>
        </li>
        <li>
            <a onClick={this.toggle} href="/#Certifications">Estudios y Certificaciones</a>
        </li>
        <li>
            <a onClick={this.toggle} href="/#Works">Trabajos</a>
        </li>
        <li>
            <a onClick={this.toggle} href="/#Contact">Contacto</a>
        </li>
    </ul>
    <div className="toggle" onClick={this.toggle}></div>
        </header>
        
    
    }
}
