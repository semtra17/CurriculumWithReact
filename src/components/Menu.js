import React, { Component } from 'react';
import './Menu.css';


export default class Menu extends Component {
    render(){
        return <div className="menu">
            <ul>
                <li>
                    <a href="#WhoAmI">¿Quién soy?</a>
                </li>
                <li>
                    <a href="#SkillsSoftware">Habilidades y Tecnologías</a>
                </li>
                <li>
                    <a href="#">Estudios y Certificaciones</a>
                </li>
                <li>
                    <a href="#">Trabajos</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul>
        </div>
    }
}