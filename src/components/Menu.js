import React, { Component } from 'react';
import '../styleFiles/Menu.css';


export default class Menu extends Component {
    constructor(props){
        super(props);
   
    }

    


    toggle = (componente) =>{
        let header = document.getElementById('header');
        header.classList.toggle('active');
        
        document.getElementById("menu").classList.add('sticky');
        if( document.getElementById(componente) != null){
            document.getElementById(componente).classList.add('animation');
        }
      }
    
    render(){
        return <header className="header" id="header">
            
            <ul id="menu" className={this.props.sticky}>
        <li>
            <a onClick={() => this.toggle("WhoAmI")} href="/#WhoAmI">¿Quién soy?</a>
        </li>
        <li>
            <a onClick={() => this.toggle("softwareSkills")} href="/#softwareSkills">Habilidades y Tecnologías</a>
        </li>
        <li>
            <a onClick={() => this.toggle("Certifications")} href="/#Certifications">Estudios y Certificaciones</a>
        </li>
        <li>
            <a onClick={() => this.toggle("Works")} href="/#Works">Trabajos</a>
        </li>
        <li>
            <a onClick={() => this.toggle("Contact")} href="/#Contact">Contacto</a>
        </li>
    </ul>
    <div className="toggle" onClick={this.toggle}></div>
        </header>
        
    
    }
}
