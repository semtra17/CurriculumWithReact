import './App.css';
import React, { Component } from 'react';

// componentes

import Top  from './components/Top';
import Middle  from './components/Middle';
import Bottom  from './components/Bottom';




class App extends Component {
    state = {
        sticky:"menu",
        title:"title animation",
        linesPicture:"linesPicture",
        myPicture:"myPicture",
        whoAmIText:"WhoAmI",
        SkillsSoftware:"SkillsSoftware",
        software:"Software",
        Certifications:"Certifications",
        Works:"Works",
        Contact:"Contact",
    }

    keyEscape = (e)=>{
       let certificate = document.getElementById("Certificate");
        certificate.classList.toggle("active");
    }
    
    onWheelFunctions = e =>{
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
            this.setState({whoAmIText:"WhoAmI animation"});
        }else{
            this.setState({whoAmIText:"WhoAmI"});
        }
        if(window.scrollY > document.documentElement.scrollHeight * 0.16){
            this.setState({SkillsSoftware:"SkillsSoftware animation"});
        }else{
            this.setState({SkillsSoftware:"SkillsSoftware"});
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

    outClick = (e) =>{
       
        let certificado = document.getElementById("certificado");
        if(e.target.className !=  "Certificate active" && certificado.className === "Certificate active"){
            certificado.className = "Certificate";
        }
    }

    onloadFunction = () => {
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
            this.setState({whoAmIText:"WhoAmI animation"});
        }
        else{
            this.setState({whoAmIText:"WhoAmI"});
        }
        if(window.scrollY > document.documentElement.scrollHeight * 0.16){
            this.setState({SkillsSoftware:"SkillsSoftware animation"});
        }else{
            this.setState({SkillsSoftware:"SkillsSoftware"});
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

    
    render() {
        
                return <div className="container" onClickCapture={this.outClick} onWheel={this.onWheelFunctions} onLoad={this.onloadFunction} onKeyDown={this.keyEscape}>
                    <Top sticky={this.state.sticky} linesPicture={this.state.linesPicture} myPicture={this.state.myPicture}  />
                    <Middle 
                     Contact={this.state.Contact} 
                     whoAmIText={this.state.whoAmIText} 
                     SkillsSoftware={this.state.SkillsSoftware} 
                     software={this.state.software} 
                     Certifications={this.state.Certifications} 
                     Works={this.state.Works}/>
                    <Bottom/>
                </div>
            }
}





export default App;