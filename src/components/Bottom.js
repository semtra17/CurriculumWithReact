import React,{Component} from 'react';
import "../styleFiles/Bottom.css"


export default class Bottom extends Component {
    render() {
        return (
            <div className="bottom">
                <p>Muchas gracias por ver mi perfil profesional<br></br>Espero haya sido de su agrado </p>
                <img alt="goodbye" src="../goodbye.png" ></img>
            </div>
        )
    }
}