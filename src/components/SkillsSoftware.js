import React,{Component} from  'react';


import '../styleFiles/SkillsSoftware.css'

export default class SkillsSoftware extends Component {
    render(){
        return <section className={this.props.SkillsSoftware} id="SkillsSoftware">
                    
                        <div className="titleSkillsSoftware">
                            <h2>Habilidades y Tecnologías</h2>
                        </div>
                        <span></span>
                        <div className="infoSkillsSoftware">
                            <div><img alt="skills" src="../habilidades.png" ></img></div>
                            <div >
                                <p>
                                Mis herramientas y lenguajes principales son Java y Javascript, he utilizado ambos tanto para el frontend como para el backend en mis proyectos.<br/> 
                                En mis trabajos tambien utilizo ORMs como hibernate con Java aplicandolo mediante Spring, y Sequelize con Javascript,.<br/> 
                                Con respecto a la base de datos, he utilizado tanto relacionales como no relacionales, y mis preferencias son MySQL y MongoDB.<br/> 
                                Para pruebas unitarias de mi código, utilizo PostMan.<br/> 
                                Actualmente formo parte de la Academia de Ayi Group donde me perfecciono en PWA, React, Java y Spring.<br/> 
                            
                                </p>
                            </div>
                            
                        </div>
                    
                    
               </section>
         
        
    }
}