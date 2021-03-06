import './App.css';
import React, { Component } from 'react';

// componentes

import Top  from './components/Top';
import Middle  from './components/Middle';



class App extends Component {
    state = {
        sticky:"menu",
        title:"title animation",
        linesPicture:"linesPicture",
        myPicture:"myPicture"
    }
    
    onWheelFunctions = e =>{
        if(window.scrollY > 0)
            this.setState({sticky:"menu sticky"});
        else
            this.setState({sticky:"menu"});


        if(window.scrollY > 100){
            this.setState({linesPicture:"linesPicture animation"});
            this.setState({myPicture:"myPicture animation"});
        }
        else if(window.scrollY < 0){
            this.setState({linesPicture:"linesPicture"});
            this.setState({myPicture:"myPicture"});
        }
    }

    onloadFunction = () => {
        if(window.scrollY > 0){
            this.setState({sticky:"menu sticky"});
            this.setState({linesPicture:"linesPicture"});
            this.setState({myPicture:"myPicture"});
        }
        else if(window.scrollY > 100){
            this.setState({linesPicture:"linesPicture animation"});
            this.setState({myPicture:"myPicture animation"});
        }
    }

    
    render() {
                return <div className="container" onWheel={this.onWheelFunctions} onLoad={this.onloadFunction}>
                    <Top sticky={this.state.sticky} linesPicture={this.state.linesPicture} myPicture={this.state.myPicture} />
                    <Middle />
                </div>
            }
}





export default App;