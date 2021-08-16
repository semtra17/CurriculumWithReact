import React,{Component, memo, useEffect} from 'react';



import '../styleFiles/Middle.css';

import WhoAmI from './WhoAmI';
import SoftwareSkills from './SoftwareSkills';
import Certifications from './Certifications';
import Software from './Software';
import Works from './Works';





function Middle(props) {
          
        return( <div className="middle">
            
           <WhoAmI  />
           <SoftwareSkills/>
           <Software /> 
           <Certifications/>
           <Works />
           
        </div>)
    
}

export default memo(Middle)