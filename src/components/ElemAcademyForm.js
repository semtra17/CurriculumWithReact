import React, { memo } from 'react';


function AcademyFormElem(props){
    return(
        <li>
            <div className="subtitle"><p > {props.title}</p></div>
            <div className="subInfo"><p>{props.description}</p></div>
        </li>

    )
}

export default memo(AcademyFormElem)