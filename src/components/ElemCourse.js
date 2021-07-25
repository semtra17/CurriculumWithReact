import React,{Component} from 'react';


export default function Course(props){

  

    
        return  ( <li>
                    <div className="subtitle"><p  >{props.courseTitle}</p></div>
                    <div className="subInfo"><p>{props.courseInfo}</p></div>
                    <div className="certificate"><a href="#Certificate" onClick={ () => props.courseFunction(props.url)}><img src="../desplazarse.png" alt={props.courseAlt} ></img></a></div>
                </li>)
     

    
    

    

}