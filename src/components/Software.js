import React,{Component} from  'react';


import '../styleFiles/Software.css'

export default class Software extends Component {
    render(){
        return <section className="Software" id="Software">
                    <div>
                        <div className="titleSoftware">
                            <span><img src="../web-browser.png" alt="codeIcon"></img></span><h2>Tecnologías, Lenguajes y Librerías</h2>
                        </div>

                        <div className="iconsSoftware">
                            <ul>
                                <li>
                                    <img alt="github"  src="../github.png" ></img>
                                </li>
                                <li>
                                    <img alt="java"  src="../java.png" ></img>
                                </li>
                                <li>
                                    <img  alt="js" src="../js.png" ></img>
                                </li>
                                <li>
                                    <img alt="html"  src="../html.png" ></img>
                                </li>
                                <li>
                                    <img alt="css3"  src="../css-3.png" ></img>
                                </li>
                                <li>
                                    <img alt="njs"  src="../njs.png" ></img>
                                </li>
                                <li>
                                    <img alt="react"  src="../react.png" ></img>
                                </li>
                                <li>
                                    <img alt="wbp"  src="../wbp.png" ></img>
                                </li>
                                <li>
                                    <img alt="mysql"  src="../mysql.png" ></img>
                                </li>
                                <li>
                                    <img alt="mongodb"  src="../descarga.png" ></img>
                                </li>
                                <li>
                                    <img alt="postman"  src="../postman.png" ></img>
                                </li>
                                <li>
                                    <img alt="ps"  src="../ps.png" ></img>
                                </li>
                                <li>
                                    <img alt="sd"  src="../xd.png" ></img>
                                 </li>
                            </ul>
                        </div>
                    
                    </div>
               </section>
         
        
    }
}