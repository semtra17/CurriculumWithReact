import React,{Component} from 'react';


export default class Course extends Component{

    constructor(props){
        super(props);
        this.state ={}
    }


    render(){
        return   <li>
        <div className="subtitle"><p  >{this.props.courseTitle}</p></div>
        <div className="subInfo"><p>{this.props.courseInfo}</p></div>
        <div className="certificate"><a href="#Certificate" onClick={this.props.courseFunction}><img src="../desplazarse.png" alt={this.props.courseAlt} ></img></a></div>
     </li>
     

    }
    

    

}