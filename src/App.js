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
        whoAmIText:"WhoAmI"
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
        // document.documentElement.scrollHeight
        if(window.scrollY > window.scrollY * 0.065){
            this.setState({whoAmIText:"WhoAmI animation"});
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
        
        if(window.scrollY > window.scrollY * 0.065){
            this.setState({whoAmIText:"WhoAmI animation"});
        }
        else{
            this.setState({whoAmIText:"WhoAmI"});
        }

    }

    
    render() {
                return <div className="container" onWheel={this.onWheelFunctions} onLoad={this.onloadFunction}>
                    <Top sticky={this.state.sticky} linesPicture={this.state.linesPicture} myPicture={this.state.myPicture} />
                    <Middle whoAmIText={this.state.whoAmIText} />
                    <Bottom/>
                </div>
            }
}





export default App;