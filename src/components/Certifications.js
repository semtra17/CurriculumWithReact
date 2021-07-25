import React,{Component} from 'react';
import "../styleFiles/Certifications.css"
import Certificate from "./ElemCertificate"
import Course from "./ElemCourse"
import CoursesList from "../DataBase/CoursesList"
import academyFormationList from "../DataBase/AcademyFormList"
import AcademyFormElem from "./ElemAcademyForm"
export default class Certifications extends Component{
    constructor(props){
        super(props);
        this.state ={
            certificate: "Certificate",
            image: "",
        }
    }
    
    showCertificate = (certificateName) => {
        let certificado = document.getElementById("certificado");
        certificado.className = "Certificate active";
        this.setState({image: certificateName});
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
                                      {
                                        academyFormationList.map((a,i) =>(
                                          a.language ?  null :  <AcademyFormElem key={i} title={a.title} description={a.description}/>
                                        ))
                                    }           
                                </ul>
                            </div>
                        </div>
                        <div className="languages">
                            <h3>Idiomas</h3>
                            <div className="infoLanguages">
                                  <ul>
                                    {
                                            academyFormationList.map((a,i) =>(
                                            a.language ?  <AcademyFormElem key={i} title={a.title} description={a.description}/> : null
                                            ))
                                        }
                                  </ul>
                               
                             
                            </div>
                        </div>
                        <div className="courses">
                            <h3>Cursos</h3>
                            <div className="infoCourses">
                                <ul>
                                {CoursesList.map((c,i)=>(

                                    <Course courseTitle={c.title} courseFunction={this.showCertificate} url={c.url} courseAlt={c.alt} courseInfo={c.info} key={i}/>

                                    ))}               
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