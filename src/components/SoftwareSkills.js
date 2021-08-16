import React,{Component} from  'react';
import { Utils } from '../DataBase/Utils';
import { useStore } from '../store/StoreProviders';
import '../styleFiles/SoftwareSkills.css'

export default function SoftwareSkills(props) {
    
   const{ softwareSkillsText} = Utils;
   const { components} = useStore();
   const { className, enable} = components[4]; 
   
   return(
         <section className={enable ? className : "desactivated"} id="softwareSkills">
                    
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