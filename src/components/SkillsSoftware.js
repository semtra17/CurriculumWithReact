import React,{Component} from  'react';


import './SkillsSoftware.css'

export default class SkillsSoftware extends Component {
    render(){
        return <section className="SkillsSoftware" id="SkillsSoftware">
                    <div>
                        <div className="titleSkillsSoftware">
                            <h2>Habilidades y Tecnologías</h2>
                        </div>

                        <div className="infoSkillsSoftware">
                            <div><img src="../habilidades.png" alt="whoIcon"></img></div>
                            <div >
                                <p>
                                Mi herramienta y lenguaje principal de desarrollo es JavaScript, me gusta usarlo tanto del lado del cliente como del servidor.<br/> 
                                En mis trabajos he aplicado y utilizado por mi mismo JavaScript, CSS y HTML como principales del desarrollo web, librerías y frameworks como Bootstrap (para acelerar el proceso de maquetación estética), Electron Js., Express, JQuery, Webpack y Babel.<br/> 
                                Con respecto a la base de datos, he utilizado tanto relacionales como no relacionales, y mis preferencias son MySQL y MongoDB.<br/> 
                                Para pruebas unitarias de mi código, utilizo PostMan.<br/> 
                                Si bien aun no domino completamente React, estoy en proceso de aprenderlo para poder usarlo profesionalmente.<br/> 

                             
                                </p>
                            </div>
                            
                        </div>
                    
                    </div>
               </section>
         
        
    }
}