import React,{Component} from  'react';
import SoftwareIconsList from '../DataBase/Softwares'
import {map} from 'lodash';
import '../styleFiles/Software.css';
import SoftwareIcons from './ElemSoftwareIcons';
import { useStore } from '../store/StoreProviders';

export default function Software(props) {
   const {software_component} = useStore();
  
      
        return (<section className={software_component.enable? software_component.className_component : "desactivated" } id="Software">
                    <div>
                        <div className="titleSoftware">
                            <h2>Tecnologías, Lenguajes y Librerías</h2>
                        </div>
                        <span></span>
                        <div className="iconsSoftware">
                            <ul>
                                {   SoftwareIconsList.map((u,i) =>(
                                    <SoftwareIcons altText={u.nombre} srcImg={u.srcImg} key={i} />
                            ))   }                              
                            </ul>
                        </div>
                    
                    </div>
               </section>
         )
        
    
}