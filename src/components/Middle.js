import React,{Component} from 'react';




import './Middle.css';

import WhoAmI from './WhoAmI';
import SkillsSoftware from './SkillsSoftware';
import Certifications from './Certifications';








export default class Middle extends Component {
    render(){
        return <div className="middle">
           <WhoAmI/>
           <SkillsSoftware/>
           <Certifications/>
        </div>
    }
}