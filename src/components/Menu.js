import React, { useCallback, useEffect } from 'react';
import '../styleFiles/Menu.css';
import { useStore,useDispatch } from '../store/StoreProviders';
import { types } from "../store/StoreReducer";


export default function Menu() {
    
    const {components} = useStore();
    
    
    const {className, enable} = components[0];

    const toggle = useCallback((componente) =>{
        let header = document.getElementById('header');
        header.classList.toggle('active');
        document.getElementById("menu").classList.add('sticky');
        if( document.getElementById(componente) != null){
            document.getElementById(componente).classList.add('animation');
        }
    },[])

    
    
        return (<header className="header" id="header">
            
    <ul id="menu" className={enable ? className : "desactivated"}>
        <li>
            <a onClick={() => toggle('WhoAmI')} href="/#WhoAmI" >¿Quién soy?</a>
        </li>
        <li>
            <a onClick={() => toggle("softwareSkills")} href="/#softwareSkills">Habilidades y Tecnologías</a>
        </li>
        <li>
            <a onClick={() => toggle("Certifications")} href="/#Certifications">Estudios y Certificaciones</a>
        </li>
        <li>
            <a onClick={() => toggle("Works")} href="/#Works">Trabajos</a>
        </li>
        <li>
            <a onClick={() => toggle("Contact")} href="/#Contact">Contacto</a>
        </li>
    </ul>
    <div className="toggle" onClick={toggle}></div>
    </header>)
        
    
    
}
