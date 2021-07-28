import React from 'react';
import "../styleFiles/Bottom.css"
import { useStore } from '../store/StoreProviders';

export default function  Bottom()  {
   const {bottom_component} = useStore();
        return (
            <div className={bottom_component.enable ? bottom_component.className_component : "desactivated"}>
                <p>Muchas gracias por ver mi perfil profesional<br></br>Espero haya sido de su agrado </p>
                <img alt="goodbye" src="../goodbye.png" ></img>
            </div>
        )
    
}