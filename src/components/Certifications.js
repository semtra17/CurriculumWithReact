import React,{Component} from 'react';
import "./Certifications.css"

export default class Certifications extends Component{

    render(){
        return <section className="Certifications" id="Certifications">
            <div>
                <div className="titleCertifications">
                    <h2>¿Quién soy?</h2>
                </div>

                <div className="infoCertifications">
                    <div >
                        <p>
                        Mi herramienta y lenguaje principal de desarrollo es JavaScript, me gusta usarlo tanto del lado del cliente como del servidor. En mis trabajos he aplicado y utilizado por mi mismo JavaScript, CSS y HTML como principales del desarrollo web, librerías y frameworks como Bootstrap (para acelerar el proceso de maquetación estética), Electron Js., Express, JQuery, Webpack y Babel.<br/>
                        Con respecto a la base de datos, he utilizado tanto relacionales como no relacionales, y mis preferencias son MySQL y MongoDB.<br/> 
                        Para pruebas unitarias de mi código, utilizo PostMan.<br/>
                        Si bien aun no domino completamente React, estoy en proceso de aprenderlo para poder usarlo profesionalmente.<br/>

                        </p>
                    </div>
                    <div><img src="../graduado.png" alt="whoIcon"></img></div>
                </div>
                
            </div>

        </section>

    }


}