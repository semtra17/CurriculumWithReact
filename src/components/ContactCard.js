import React from 'react'


export default function ContactCard(props){


    return(
        <a href={props.hrefPorpuse} className="box">
                        <div className="imgBx">
                            <img alt={props.altText} src={props.srcImg}></img>
                        </div>
                        
                        <div className="content">
                            <div>
                                <h2>{props.title}</h2>
                                <p>{props.info}</p>
                            </div>
                        </div>
        </a>
    )

}