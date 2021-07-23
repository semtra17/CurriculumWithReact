import React,{Component} from 'react';
import "../styleFiles/Certifications.css"
import Certificate from "./Certificate"
import Course from "./Course"
export default class Certifications extends Component{
    constructor(props){
        super(props);
        this.state ={
            certificate: "Certificate",
            image: "",
        }
    }
    udemyJava= () => {
        let certificado = document.getElementById("certificado");
        certificado.className = "Certificate active";
        this.setState({image: "../Udemy- Certificado Javascript.jpg"});
    }
    udemyCss= () => {
        let certificado = document.getElementById("certificado");
        certificado.className = "Certificate active";
        this.setState({image: "../Certificado Css Avanzado.jpg"});
    }
    udemyNode= () => {
        let certificado = document.getElementById("certificado");
        certificado.className = "Certificate active";
        this.setState({image: "../nodeJs Certificado.jpg"});
        
    }
  
    udemySQLServer= () => {
        let certificado = document.getElementById("certificado");
        certificado.className = "Certificate active";
        this.setState({image: "../SQL Server Certificado Udemy.jpg"});
        
    }
  
    
    render(){
        return <section className={this.props.Certifications} id="Certifications" >
           
                <div className="titleCertifications">
                    <h2>Estudios y Certificaciones</h2>
                </div>
                <span></span>
                <div className="infoCertifications">
                    <div className="infoCertificationsBody" >
                        <div className="academyFormation">
                            <h3>Formación Académica</h3>
                            <div className="infoAcademyFormation">
                                <ul>
                                    <li>
                                        <div className="subtitle"><p > Universidad <br/> Nacional de Lanús</p></div>
                                        <div className="subInfo"><p>Actualmente estudiante de 3er año de la carrera Licenciatura en Sistemas en la misma </p></div>
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
                                <Course courseTitle="Javascript (Es5)" courseFunction={this.udemyJava} courseAlt="udemyJavascript" courseInfo="Udemy 16/05/2020"/>
                                <Course courseTitle="Next Lvl Css Creative Hover And Animattion Effects" courseFunction={this.udemyCss} courseAlt="udemyCss" courseInfo="Udemy 02/05/20"/>
                                <Course courseTitle="Node JS( De Cero A Experto)" courseFunction={this.udemyNode} courseAlt="udemyNodeJS" courseInfo="Udemy 06/10/2020"/>
                                <Course courseTitle="SQL Server - Administración de base de datos" courseFunction={this.udemySQLServer} courseAlt="udemySQLServer" courseInfo="Udemy 26/05/2021"/>                 
                                </ul>
                                <Certificate image={this.state.image}/>       
                            </div>
                        </div>
                      
                    </div>
                    <div className="imgCertifications"><img  src="../medalla.png" alt="medal"></img></div>
                </div>
                
            

        </section>

    }


}