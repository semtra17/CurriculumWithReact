import React,{Component} from 'react';
import {useStore} from '../store/StoreProviders';


import '../styleFiles/Middle.css';

import WhoAmI from './WhoAmI';
import SoftwareSkills from './SoftwareSkills';
import Certifications from './Certifications';
import Software from './Software';
import Works from './Works';





export default function Middle(props) {
        const {middle_component} = useStore();
          
        return( <div className={middle_component.enable ? middle_component.className_component : "desactivated"}>
            
           <WhoAmI  />
           <SoftwareSkills/>
           <Software /> 
           <Certifications/>
           <Works />
           
        </div>)
    
}