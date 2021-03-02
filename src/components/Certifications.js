import React,{Component} from 'react';
import "../styleFiles/Certifications.css"

export default class Certifications extends Component{

    render(){
        return <section className="Certifications" id="Certifications">
            <div>
                <div className="titleCertifications">
                    <h2>Estudios y Certificaciones</h2>
                </div>

                <div className="infoCertifications">
                    <div className="infoCertificationsBody" >
                        <div className="academyFormation">
                            <h3>Formación Académica</h3>
                            <div className="infoAcademyFormation">
                                <ul>
                                    <li>
                                        <div className="subtitle"><p > Universidad <br/> Nacional de Lanús</p></div>
                                        <div className="subInfo"><p>Actualmente estudiante de la misma de 2do/3er año de la carrera Licenciatura en Sistemas.</p></div>
                                    </li>
                                   
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="languages">
                            <h3>Idiomas</h3>
                            <div className="infoLanguages">
                                <ul>
                                    <li>
                                        <div className="subtitle"><p  > Instituto Argentino <br/> de cultura británica</p></div>
                                        <div className="subInfo"><p>Nivel de Ingles FIRST 2017</p></div>
                                    </li>
                                    <li>
                                        <div className="subtitle"><p  >Francés </p></div>
                                        <div className="subInfo"><p>Nivel básico - 2 años de estudios en Escuela Secundaria</p></div>
                                    </li>
                                    
                                </ul>
                             
                            </div>
                        </div>
                        <div className="courses">
                            <h3>Cursos</h3>
                            <div className="infoCourses">
                                <ul>
                                    <li>
                                        <div className="subtitle"><p  >Javascript (Es5)</p></div>
                                        <div className="subInfo"><p>Udemy 16/05/2020</p></div>
                                    </li>
                                    <li>
                                        <div className="subtitle"><p  >Next Lvl Css Creative Hover And Animattion Effects</p></div>
                                        <div className="subInfo"><p>Udemy 02/05/2020</p></div>
                                    </li>
                                    <li>
                                        <div className="subtitle"><p  >Node JS( De Cero A Experto)</p></div>
                                        <div className="subInfo"><p>Udemy 06/10/2020</p></div>
                                    </li>
                                </ul>
                                       
                            </div>
                        </div>
                      
                    </div>
                    <div className="imgCertifications"><img src="../medalla.png" alt="medal"></img></div>
                </div>
                
            </div>

        </section>

    }


}