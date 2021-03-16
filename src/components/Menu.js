import React, { Component } from 'react';
import '../styleFiles/Menu.css';


export default class Menu extends Component {
    state = {
        sticky:false,
    }

    



    
    render(){
        return <div className="header">
            <ul className={this.props.sticky}>
        <li>
            <a href="/#WhoAmI">¿Quién soy?</a>
        </li>
        <li>
            <a href="/#SkillsSoftware">Habilidades y Tecnologías</a>
        </li>
        <li>
            <a href="/#Certifications">Estudios y Certificaciones</a>
        </li>
        <li>
            <a href="/#Contact">Contacto</a>
        </li>
        <li>
            <a href="/#">Trabajos</a>
        </li>
    </ul>
        </div>
        
    
    }
}
