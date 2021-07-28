import './App.css';
import React, { useEffect,useRef } from 'react';
import StoreProvider,{ StoreContext, }  from './store/StoreProviders';
import { types } from "./store/StoreReducer";
// componentes

import Top  from './components/Top';
import Middle  from './components/Middle';
import Bottom  from './components/Bottom';
import Contact from './components/Contact';
import {Utils} from './DataBase/Utils';

const {profileText, softwareSkillsText} = Utils;

function App() {
  
    const keyEscape = () =>{
        let certificate = document.getElementById("certificado");
        document.addEventListener("keyup", (e =>{
            if(e.key === "Escape"){
                certificate.className = "Certificate";
            }
        }))
    }

    const onWheelFunctions = (e) =>{
        if(window.scrollY > 0)
                    this.setState({sticky:"menu sticky"});
                else
                    this.setState({sticky:"menu"});

    }

    /*const onWheelFunctions = e =>{
            //============================= FUNCIONES RUEDA RATON WEB ESCRITORIO=================
            //============================= FUNCIONES RUEDA RATON WEB ESCRITORIO=================
            //============================= FUNCIONES RUEDA RATON WEB ESCRITORIO=================
        
            if(window.innerWidth > 900){
                    if(window.scrollY > 0)
                    this.setState({sticky:"menu sticky"});
                else
                    this.setState({sticky:"menu"});

                if(window.scrollY > 80){
                    this.setState({linesPicture:"linesPicture animation"});
                    this.setState({myPicture:"myPicture animation"});
                }
                else if(window.scrollY < 20){
                    this.setState({linesPicture:"linesPicture"});
                    this.setState({myPicture:"myPicture"});
                }
        
                if(window.scrollY > document.documentElement.scrollHeight * 0.045){
                    this.setState({whoAmIClassName:"WhoAmI animation"});
                }else{
                    this.setState({whoAmIClassName:"WhoAmI"});
                }
                if(window.scrollY > document.documentElement.scrollHeight * 0.16){
                    this.setState({softwareSkills:"SkillsSoftware animation"});
                }else{
                    this.setState({softwareSkills:"SkillsSoftware"});
                }
                if(window.scrollY > document.documentElement.scrollHeight * 0.30){
                    this.setState({software:"Software animation"});
                }else{
                    this.setState({software:"Software"});
                }
        
                if(window.scrollY > document.documentElement.scrollHeight * 0.40){
                    this.setState({Certifications:"Certifications animation"});
                }else{
                    this.setState({Certifications:"Certifications"});
                }
                if(window.scrollY > document.documentElement.scrollHeight * 0.55){
                    this.setState({Works:"Works animation"});
                }else{
                    this.setState({Works:"Works"});
                }
                if(window.scrollY > document.documentElement.scrollHeight * 0.75){
                    this.setState({Contact:"Contact animation"});
                }else{
                    this.setState({Contact:"Contact"});
                }
            }   
            //============================= Dispositivo MOVIL FUNCIONES RUEDA RATON =============================
            //============================= Dispositivo MOVIL FUNCIONES RUEDA RATON =============================
            //============================= Dispositivo MOVIL FUNCIONES RUEDA RATON =============================
            if(window.innerWidth <= 900){
                if(window.scrollY > 100){
                    this.setState({linesPicture:"linesPicture animation"});
                    this.setState({myPicture:"myPicture animation"});
                }
                else if(window.scrollY < 10){
                    this.setState({linesPicture:"linesPicture"});
                    this.setState({myPicture:"myPicture"});
                }
        
                if(window.scrollY > document.documentElement.scrollHeight * 0.044){
                    this.setState({whoAmIClassName:"WhoAmI animation"});
                }else{
                    this.setState({whoAmIClassName:"WhoAmI"});
                }
                if(window.scrollY > document.documentElement.scrollHeight * 0.19){
                    this.setState({softwareSkills:"SkillsSoftware animation"});
                }else{
                    this.setState({softwareSkills:"SkillsSoftware"});
                }
                if(window.scrollY > document.documentElement.scrollHeight * 0.35){
                    this.setState({software:"Software animation"});
                }else{
                    this.setState({software:"Software"});
                }
        
                if(window.scrollY > document.documentElement.scrollHeight * 0.41){
                    this.setState({Certifications:"Certifications animation"});
                }else{
                    this.setState({Certifications:"Certifications"});
                }
                if(window.scrollY > document.documentElement.scrollHeight * 0.60){
                    this.setState({Works:"Works animation"});
                }else{
                    this.setState({Works:"Works"});
                }
                if(window.scrollY > document.documentElement.scrollHeight * 0.77){
                    this.setState({Contact:"Contact animation"});
                }else{
                    this.setState({Contact:"Contact"});
                }
            }    
        

        
    }*/

    const outClick = (e) =>{
        let certificado = document.getElementById("certificado");
        if(e.target.className !=  "Certificate active" && certificado.className === "Certificate active"){
            certificado.className = "Certificate";
        }
    }

    useEffect(() => {
        keyEscape();
        //============================= Funciones ONLOAD PARA ESCRITORIO =============================
        //============================= Funciones ONLOAD PARA ESCRITORIO =============================
        /*if(window.innerWidth > 900){
            if(window.scrollY <= 0){
                this.setState({sticky:"menu"});
                this.setState({linesPicture:"linesPicture"});
                this.setState({myPicture:"myPicture"});
                
            }
            else if(window.scrollY > 100){
                this.setState({linesPicture:"linesPicture animation"});
                this.setState({myPicture:"myPicture animation"});
                this.setState({sticky:"menu sticky"});
            }
            
            if(window.scrollY > document.documentElement.scrollHeight * 0.045){
                this.setState({whoAmIClassName:"WhoAmI animation"});
            }
            else{
                this.setState({whoAmIClassName:"WhoAmI"});
            }
            if(window.scrollY > document.documentElement.scrollHeight * 0.16){
                this.setState({softwareSkills:"SkillsSoftware animation"});
            }else{
                this.setState({softwareSkills:"SkillsSoftware"});
            }
            
            if(window.scrollY > document.documentElement.scrollHeight * 0.30){
                this.setState({software:"Software animation"});
            }else{
                this.setState({software:"Software"});
            }
            if(window.scrollY > document.documentElement.scrollHeight * 0.40){
             
                this.setState({Certifications:"Certifications animation"});
            }else{
                this.setState({Certifications:"Certifications"});
            }
            if(window.scrollY > document.documentElement.scrollHeight * 0.55){
                this.setState({Works:"Works animation"});
            }else{
                this.setState({Works:"Works"});
            }
    
            if(window.scrollY > document.documentElement.scrollHeight * 0.75){
                this.setState({Contact:"Contact animation"});
            }else{
                this.setState({Contact:"Contact"});
            }
        }
            // Dispositivo MOVIL 
            // Dispositivo MOVIL 
            // Dispositivo MOVIL 
        if(window.innerWidth <= 900){
            if(window.scrollY <= 0){
                this.setState({sticky:"menu"});
                this.setState({linesPicture:"linesPicture"});
                this.setState({myPicture:"myPicture"});
                
            }
            else if(window.scrollY > 100){
                this.setState({linesPicture:"linesPicture animation"});
                this.setState({myPicture:"myPicture animation"});
                
            }
            
           if(window.scrollY > document.documentElement.scrollHeight * 0.045){
                    this.setState({whoAmIClassName:"WhoAmI animation"});
                }else{
                    this.setState({whoAmIClassName:"WhoAmI"});
                }
                if(window.scrollY > document.documentElement.scrollHeight * 0.22){
                    this.setState({softwareSkills:"softwareSkills animation"});
                }else{
                    this.setState({softwareSkills:"softwareSkills"});
                }
                if(window.scrollY > document.documentElement.scrollHeight * 0.36){
                    this.setState({software:"Software animation"});
                }else{
                    this.setState({software:"Software"});
                }
        
                if(window.scrollY > document.documentElement.scrollHeight * 0.44){
                    this.setState({Certifications:"Certifications animation"});
                }else{
                    this.setState({Certifications:"Certifications"});
                }
                if(window.scrollY > document.documentElement.scrollHeight * 0.60){
                    this.setState({Works:"Works animation"});
                }else{
                    this.setState({Works:"Works"});
                }
                if(window.scrollY > document.documentElement.scrollHeight * 0.77){
                    this.setState({Contact:"Contact animation"});
                }else{
                    this.setState({Contact:"Contact"});
                }
        }*/
    })
    
    
    /*onWheel={onWheelFunctions}
    onTouchMove={onWheelFunctions}*/ 
                return (<div className="container" 
                onClickCapture={outClick} 
               
                >
                <StoreProvider>
                    <Top/>
                    <Middle/>
                    <Contact/>
                    <Bottom/>
                </StoreProvider>
                  
                   
                </div>)
            
}





export default App;