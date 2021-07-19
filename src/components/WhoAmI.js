import React,{Component} from 'react';
import "../styleFiles/WhoAmI.css"

export default class WhoAmI extends Component{
    
    render(){
        return <section className={this.props.whoAmIText} id="WhoAmI">
            
            <div className="titleWhoAmI">
                <h2>¿Quién soy?</h2>
            </div>
            <span></span>

            <div className="infoWhoAmI">
                <div >
                    <p>
                    Soy Luciano Aizar Assefh, tengo 24 años, soy programador, desarrollador web y actualmente estudiante de 3er año en la carrera Licenciatura en Sistemas en la Universidad Nacional de Lanús. <br/> 
                    Actualmente me enfoco en el desarrollo web y estoy comenzando a introducirme lentamente en la creación de aplicaciones móviles con React-Native. <br/> 
                    Mis lenguajes de preferencia en este momento, es JavaScript y JAVA, tanto para desarrollo web como para el desarrollo de aplicaciones. 
                    Complemento mi construcción frontend con software de diseño como Adobe Photoshop y Adobe XD <br/> 
                    Me considero una persona entusiasta, creativa, trabajadora y perseverante, siempre intento estar actualizado y perfeccionar mis habilidades. <br/> 
                    En este momento me encuentro conformando un equipo y trabajando en mi propia startup de desarrollo web y diseño gráfico. <br/> 
                    </p>
                </div>
                <div><img alt="personality" src="../personalidad.png" ></img></div>
            </div>
                
           

        </section>

    }


}