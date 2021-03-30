import React,{Component} from 'react';
import "../styleFiles/Works.css"

export default class Works extends Component{

    render(){
        return <section className={this.props.Works} id="Works">
           
                <div className="titleWorks">
                    <h2>Trabajos</h2>
                </div>
                <span className="underLine"></span>
                <div className="infoWorks">
                        <h3>Repositorio de mis trabajos</h3>
                    <a href="/#">
                        <img alt="git" src="../github.png" ></img>
                         <span>https://github.com/semtra17</span>
                         </a>
                    <h3>Instagram de mi empresa de desarrollo web y diseño gráfico</h3>
                    <a href="/#"><img alt="instagram" src="../instagram.png" ></img>
                    <span>@intipixel</span> 
                    </a>
                </div>
                
           

        </section>

    }


}