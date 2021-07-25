import React from 'react';


export default function AcademyFormElem(props){

    return(
        <li>
            <div className="subtitle"><p > {props.title}</p></div>
            <div className="subInfo"><p>{props.description}</p></div>
        </li>

    )
}

