import React from  'react';

export default function SoftwareIcons (props){


    return(
        <li>
        <img alt={props.altText} src={props.srcImg} ></img>
    </li>
    )
}