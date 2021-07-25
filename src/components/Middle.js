import React,{Component} from 'react';




import '../styleFiles/Middle.css';

import WhoAmI from './WhoAmI';
import SoftwareSkills from './SoftwareSkills';
import Certifications from './Certifications';
import Software from './Software';
import Works from './Works';





export default function Middle(props) {
  
          
        return( <div className="middle">
            
           <WhoAmI whoAmIClassName={props.whoAmIClassName} whoAmIProfileText={props.whoAmIProfileText} />
           <SoftwareSkills softwareSkills={props.softwareSkills} 
           softwareSkillsText={props.softwareSkillsText} 
           />
           <Software software={props.software} /> 
           <Certifications 
           image={props.image}
           certificate={props.certificate}
           Certifications={props.Certifications}/>
           <Works Works={props.Works}/>
           
        </div>)
    
}