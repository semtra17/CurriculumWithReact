import React,{Component} from  'react';


import '../styleFiles/Software.css';
import SoftwareIcons from './SoftwareIcons';
export default class Software extends Component {
    render(){
        return <section className={this.props.software} id="Software">
                    <div>
                        <div className="titleSoftware">
                            <h2>Tecnologías, Lenguajes y Librerías</h2>
                        </div>
                        <span></span>
                        <div className="iconsSoftware">
                            <ul>
                                <SoftwareIcons altText="github" srcImg="../github.png" />
                                <SoftwareIcons altText="java" srcImg="../java.png" />
                                <SoftwareIcons altText="js" srcImg="../js.png" />
                                <SoftwareIcons altText="html" srcImg="../html.png" />
                                <SoftwareIcons altText="css3" srcImg="../css-3.png" />
                                <SoftwareIcons altText="njs" srcImg="../njs.png" />
                                <SoftwareIcons altText="react" srcImg="../react.png" />
                                <SoftwareIcons altText="wbp" srcImg="../wbp.png" />
                                <SoftwareIcons altText="mysql" srcImg="../mysql.png"/>
                                <SoftwareIcons altText="mongodb" srcImg="../descarga.png"  />
                                <SoftwareIcons altText="postman" srcImg="../postman.png"/>
                                <SoftwareIcons altText="ps" srcImg="../ps.png" />
                                <SoftwareIcons altText="sd" srcImg="../xd.png" />
                            </ul>
                        </div>
                    
                    </div>
               </section>
         
        
    }
}