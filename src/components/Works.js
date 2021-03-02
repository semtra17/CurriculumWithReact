import React,{Component} from 'react';
import "../styleFiles/Works.css"

export default class Works extends Component{

    render(){
        return <section className="Works" id="Works">
            <div>
                <div className="titleWorks">
                    <h2>Trabajos</h2>
                </div>

                <div className="infoWorks">
                        <h3>Repositorio de mis trabajos</h3>
                    <a href="#">
                        <img src="../github.png" alt="whoIcon"></img>
                         <span>GitHub : https://github.com/semtra17</span>
                         </a>
                    <h3>Instagram de mi empresa de desarrollo web y diseño gráfico</h3>
                    <a href="#"><img src="../instagram.png" alt="whoIcon"></img>
                    <span>@intipixel</span> 
                    </a>
                </div>
                
            </div>

        </section>

    }


}