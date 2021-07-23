import React,{Component} from  'react';


import '../styleFiles/SoftwareSkills.css'

export default function SoftwareSkills(props) {
   
    return(
         <section className={props.softwareSkills} id="softwareSkills">
                    
                        <div className="titleSkillsSoftware">
                            <h2>Habilidades y Tecnologías</h2>
                        </div>
                        <span></span>
                        <div className="infoSkillsSoftware">
                            <div><img alt="skills" src="../habilidades.png" ></img></div>
                            <div >
                                <p>
                                {props.softwareSkillsText}
                            
                                </p>
                            </div>
                            
                        </div>
                    
                    
               </section>
         
        
         )
}