import React,{Component} from 'react';
import "./WhoAmI.css"

export default class WhoAmI extends Component{

    render(){
        return <section className="WhoAmI" id="WhoAmI">
            <div>
                <div className="titleWhoAmI">
                    <h2>¿Quién soy?</h2>
                </div>

                <div className="infoWhoAmI">
                    <div >
                        <p>
                        Soy Luciano Aizar Assefh, tengo 23 años, soy programador, desarrollador web y estudiante en la carrera Licenciatura en Sistemas. <br/> 
                        Actualmente me enfoco en el desarrollo web y estoy comenzando a introducirme lentamente en la creación de aplicaciones móviles con React-Native. <br/> 
                        Mi lenguaje de preferencia, en este momento, es JavaScript, tanto para desarrollo web como para el desarrollo de aplicaciones. 
                        Complemento mi construcción frontend con software de diseño como Adobe Photoshop y Adobe XD <br/> 
                        Me considero una persona entusiasta, creativa, trabajadora y perseverante, siempre intento estar actualizado y perfeccionar mis habilidades. <br/> 
                        En este momento me encuentro trabajando en mi propia startup de desarrollo web y diseño gráfico freelance junto a un colega. <br/> 
                        </p>
                    </div>
                    <div><img src="../personalidad.png" alt="whoIcon"></img></div>
                </div>
                
            </div>

        </section>

    }


}