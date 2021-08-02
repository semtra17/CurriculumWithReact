import React,{Component} from 'react';



import '../styleFiles/Middle.css';

import WhoAmI from './WhoAmI';
import SoftwareSkills from './SoftwareSkills';
import Certifications from './Certifications';
import Software from './Software';
import Works from './Works';
import { types } from "../store/StoreReducer";
import StoreProvider,{ useDispatch }  from '../store/StoreProviders';




export default function Middle(props) {
  
    
    
          
        return( <div className="middle">
            
           <WhoAmI  />
           <SoftwareSkills/>
           <Software /> 
           <Certifications/>
           <Works />
           
        </div>)
    
}