import './App.css';
import React, { Component, useEffect,useRef,useState } from 'react';
import Top  from './components/Top';
import Middle  from './components/Middle';
import Bottom  from './components/Bottom';
import Contact from './components/Contact';
import StoreProvider,{ useDispatch, useStore }  from './store/StoreProviders';
import { types } from "./store/StoreReducer";
// componentes


import {Utils} from './DataBase/Utils';



 const {profileText, softwareSkillsText} = Utils;

function App(props) {

  
    const keyEscape = () =>{
        let certificate = document.getElementById("certificado");
        document.addEventListener("keyup", (e =>{
            if(e.key === "Escape"){
                certificate.className = "Certificate";
            }
        }))
    }
    const outClick = (e) =>{
        let certificado = document.getElementById("certificado");
        if(e.target.className !=  "Certificate active" && certificado.className === "Certificate active"){
            certificado.className = "Certificate";
            
        }
        
    }
    const dispatch = useDispatch();
    
  
    const onWheelFunctions = e =>{
            //============================= FUNCIONES RUEDA RATON WEB ESCRITORIO=================
            //============================= FUNCIONES RUEDA RATON WEB ESCRITORIO=================
            //============================= FUNCIONES RUEDA RATON WEB ESCRITORIO=================
          
            if(window.innerWidth > 900){
                if(window.scrollY > 0 )
                    dispatch({type: types.ADD_ANIMATION_COMPONENT,payload:0});
                else  dispatch({type: types.REMOVE_ANIMATION_COMPONENT,payload:0});
                
                if(window.scrollY > 80){
                    dispatch({type: types.ADD_ANIMATION_COMPONENT,payload:1});
                    dispatch({type: types.ADD_ANIMATION_COMPONENT,payload:2});
                }
                else if(window.scrollY < 10){
                    dispatch({type: types.REMOVE_ANIMATION_COMPONENT,payload:1});
                    dispatch({type: types.REMOVE_ANIMATION_COMPONENT,payload:2});
                }
                if(window.scrollY > document.documentElement.scrollHeight * 0.08)
                    dispatch({type: types.ADD_ANIMATION_COMPONENT,payload:3});
                else
                    dispatch({type: types.REMOVE_ANIMATION_COMPONENT,payload:3});
                    
                
                if(window.scrollY > document.documentElement.scrollHeight * 0.16)
                    dispatch({type: types.ADD_ANIMATION_COMPONENT,payload:4});
                else
                    dispatch({type: types.REMOVE_ANIMATION_COMPONENT,payload:4});
            
                if(window.scrollY > document.documentElement.scrollHeight * 0.30) 
                    dispatch({type: types.ADD_ANIMATION_COMPONENT,payload:5});
                else 
                    dispatch({type: types.REMOVE_ANIMATION_COMPONENT,payload:5});    
                
        
                if(window.scrollY > document.documentElement.scrollHeight * 0.40)
                    dispatch({type: types.ADD_ANIMATION_COMPONENT,payload:6});
                else
                    dispatch({type: types.REMOVE_ANIMATION_COMPONENT,payload:6});
                
                if(window.scrollY > document.documentElement.scrollHeight * 0.55)
                    dispatch({type: types.ADD_ANIMATION_COMPONENT,payload:7});
                else
                    dispatch({type: types.REMOVE_ANIMATION_COMPONENT,payload:7});    
                
                if(window.scrollY > document.documentElement.scrollHeight * 0.80)
                    dispatch({type: types.ADD_ANIMATION_COMPONENT,payload:8});
                else
                    dispatch({type: types.REMOVE_ANIMATION_COMPONENT,payload:8});    
                
 

                
            }


             //============================= Dispositivo MOVIL FUNCIONES RUEDA RATON =============================
            //============================= Dispositivo MOVIL FUNCIONES RUEDA RATON =============================
            //============================= Dispositivo MOVIL FUNCIONES RUEDA RATON =============================
            if(window.innerWidth <= 900){
                if(window.scrollY > 50){
                    dispatch({type: types.ADD_ANIMATION_COMPONENT,payload:1});
                    dispatch({type: types.ADD_ANIMATION_COMPONENT,payload:2});
                }
                else if(window.scrollY < 20){
                    dispatch({type: types.REMOVE_ANIMATION_COMPONENT,payload:1});
                    dispatch({type: types.REMOVE_ANIMATION_COMPONENT,payload:2});
                }
                if(window.scrollY > document.documentElement.scrollHeight * 0.05)
                    dispatch({type: types.ADD_ANIMATION_COMPONENT,payload:3});
                else
                    dispatch({type: types.REMOVE_ANIMATION_COMPONENT,payload:3});
                
                if(window.scrollY > document.documentElement.scrollHeight * 0.15)
                    dispatch({type: types.ADD_ANIMATION_COMPONENT,payload:4});         
                else
                    dispatch({type: types.REMOVE_ANIMATION_COMPONENT,payload:4});
                             
                console.log(document.documentElement.scrollHeight * 0.50)
                console.log(window.scrollY);
                if(window.scrollY > document.documentElement.scrollHeight * 0.29)
                    dispatch({type: types.ADD_ANIMATION_COMPONENT,payload:5});   
                else
                    dispatch({type: types.REMOVE_ANIMATION_COMPONENT,payload:5});           
                
                if(window.scrollY > document.documentElement.scrollHeight * 0.375)
                    dispatch({type: types.ADD_ANIMATION_COMPONENT,payload:6});   
                else
                    dispatch({type: types.REMOVE_ANIMATION_COMPONENT,payload:6});   
                             
        
                if(window.scrollY > document.documentElement.scrollHeight * 0.58)
                    dispatch({type: types.ADD_ANIMATION_COMPONENT,payload:7});   
                else
                    dispatch({type: types.REMOVE_ANIMATION_COMPONENT,payload:7});   

                if(window.scrollY > document.documentElement.scrollHeight * 0.74)
                    dispatch({type: types.ADD_ANIMATION_COMPONENT,payload:8});   
                else
                    dispatch({type: types.REMOVE_ANIMATION_COMPONENT,payload:8});            
            }   

        }
        

    return (<div 
    onLoad={keyEscape, onWheelFunctions}
    onTouchMoveCapture={(e) => onWheelFunctions()}
    onClickCapture={outClick}
    onWheel={(e) => onWheelFunctions()}
    >
 
        <Top/>
        <Middle/>
        <Contact/>
        <Bottom/> 
        
    </div>)

        
    
            
}





export default App;