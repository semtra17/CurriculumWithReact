import './App.css';
import React, { Component } from 'react';

// componentes

import Top  from './components/Top';
import Middle  from './components/Middle';
import Bottom  from './components/Bottom';
import Contact from './components/Contact';



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            // Component WhoAmI
            //  Properties WhoAmI
            whoAmIProfileText:` Soy Luciano Aizar Assefh, tengo 24 años, soy programador, desarrollador web y actualmente estudiante de 3er año en la carrera Licenciatura en Sistemas en la Universidad Nacional de Lanús. 
            Actualmente me enfoco en el desarrollo web y estoy comenzando a introducirme lentamente en la creación de aplicaciones móviles con React-Native. 
            Mis lenguajes de preferencia en este momento, es JavaScript y JAVA, tanto para desarrollo web como para el desarrollo de aplicaciones. 
            Complemento mi construcción frontend con software de diseño como Adobe Photoshop y Adobe XD 
            Me considero una persona entusiasta, creativa, trabajadora y perseverante, siempre intento estar actualizado y perfeccionar mis habilidades. 
            En este momento me encuentro conformando un equipo y trabajando en mi propia startup de desarrollo web y diseño gráfico.`,
            whoAmIClassName:"WhoAmI",
            // Component SoftwareSkills
            //  Properties SoftwareSkills
            softwareSkills:"softwareSkills",
            softwareSkillsText: `Mis herramientas y lenguajes principales son Java y Javascript, he utilizado ambos tanto para el frontend como para el backend en mis proyectos.
            En mis trabajos tambien utilizo ORMs como Hibernate con Java aplicandolo mediante Spring, y Sequelize con Javascript,.
            Con respecto a la base de datos, he utilizado tanto relacionales como no relacionales, y mis preferencias son MySQL y MongoDB.
            Para pruebas unitarias de mi código, utilizo PostMan.
            Actualmente formo parte de la Academia de Ayi Group donde me perfecciono en PWA, React, Java y Spring.`,

             // Component Software
            //  Properties
            software:"Software",

            sticky:"menu",
            title:"title animation",
            linesPicture:"linesPicture",
            myPicture:"myPicture",
            
            Certifications:"Certifications",
            Works:"Works",
            Contact:"Contact",
        }
    }
   

    keyEscape = () =>{
        let certificate = document.getElementById("certificado");
        document.addEventListener("keyup", (e =>{
            if(e.key === "Escape"){
                certificate.className = "Certificate";
            }
        }))
    }
    
    onWheelFunctions = e =>{
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
        

        
    }

    outClick = (e) =>{
        let certificado = document.getElementById("certificado");
        if(e.target.className !=  "Certificate active" && certificado.className === "Certificate active"){
            certificado.className = "Certificate";
        }
    }

    onloadFunction = () => {
        this.keyEscape();
        //============================= Funciones ONLOAD PARA ESCRITORIO =============================
        //============================= Funciones ONLOAD PARA ESCRITORIO =============================
        if(window.innerWidth > 900){
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
        }
    }

  
    
    render() {
        
                return <div className="container" 
                onClickCapture={this.outClick} 
                onWheel={this.onWheelFunctions} 
                onLoad={this.onloadFunction} 
                onTouchMove={this.onWheelFunctions}
                >
                    <Top sticky={this.state.sticky} linesPicture={this.state.linesPicture} myPicture={this.state.myPicture}  />
                    <Middle 
                    //  Properties whoAmIClass
                     whoAmIClassName={this.state.whoAmIClassName} 
                     whoAmIProfileText={this.state.whoAmIProfileText}
                    //  Properties SoftwareSkills
                     softwareSkills={this.state.softwareSkills}
                     softwareSkillsText= {this.state.softwareSkillsText} 
                     
                     software={this.state.software} 
                     Certifications={this.state.Certifications} 
                     Works={this.state.Works}  />
                    <Contact Contact={this.state.Contact}/>
                   
                </div>
            }
}





export default App;