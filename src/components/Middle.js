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
            
           <WhoAmI whoAmIText={this.props.whoAmIText} />
           <SkillsSoftware SkillsSoftware={this.props.SkillsSoftware} />
           <Software software={this.props.software} /> 
           <Certifications/>
           <Works/>
           <Contact/>
        </div>
    }
}