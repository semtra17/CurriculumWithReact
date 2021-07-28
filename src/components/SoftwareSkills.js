import React,{Component} from  'react';
import { Utils } from '../DataBase/Utils';
import { useStore } from '../store/StoreProviders';
import '../styleFiles/SoftwareSkills.css'

export default function SoftwareSkills(props) {
    
   const{ softwareSkillsText} = Utils;
   const { softwareSkills_component} = useStore();
   const { className_component, enable} = softwareSkills_component; 
   return(
         <section className={enable ? className_component : "desactivated"} id="softwareSkills">
                    
                        <div className="titleSkillsSoftware">
                            <h2>Habilidades y Tecnologías</h2>
                        </div>
                        <span></span>
                        <div className="infoSkillsSoftware">
                            <div><img alt="skills" src="../habilidades.png" ></img></div>
                            <div >
                                <p>
                                {softwareSkillsText}
                            
                                </p>
                            </div>
                            
                        </div>
                    
                    
               </section>
         
        
         )
}