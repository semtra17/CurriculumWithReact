import React,{Component} from 'react';




import '../styleFiles/Middle.css';

import WhoAmI from './WhoAmI';
import SoftwareSkills from './SoftwareSkills';
import Certifications from './Certifications';
import Software from './Software';
import Works from './Works';









export default class Middle extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
          
        return <div className="middle">
            
           <WhoAmI whoAmIClassName={this.props.whoAmIClassName} whoAmIProfileText={this.props.whoAmIProfileText} />
           <SoftwareSkills softwareSkills={this.props.softwareSkills} 
           softwareSkillsText={this.props.softwareSkillsText} 
           />
           <Software software={this.props.software} /> 
           <Certifications 
           image={this.props.image}
           certificate={this.props.certificate}
           Certifications={this.props.Certifications}/>
           <Works Works={this.props.Works}/>
           
        </div>
    }
}