import React,{Component} from 'react';




import '../styleFiles/Middle.css';

import WhoAmI from './WhoAmI';
import SkillsSoftware from './SkillsSoftware';
import Certifications from './Certifications';
import Software from './Software';
import Works from './Works';
import Contact from './Contact';








export default class Middle extends Component {
    render(){
        return <div className="middle">
           <WhoAmI/>
           <SkillsSoftware/>
           <Software/>
           <Certifications/>
           <Works/>
           <Contact/>
        </div>
    }
}