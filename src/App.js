import './App.css';
import React, { Component } from 'react';

// componentes

import Top  from './components/Top';
import Middle  from './components/Middle';



class App extends Component {
    render() {
                return <div className="container">
                    <Top/>
                    <Middle/>
                </div>
            }
}
// class App extends Component {
//     state = {
//         tasks:tasks
//     }

//     addTask = (title,description) =>{
//         const newTask = {
//             title,
//             description,
//             id:this.state.tasks.length,
//         }
//         this.setState({
//             tasks:[...this.state.tasks,newTask],
//         })
//     }
//     render() {
//         return <div>
//             <TaskForm addTask={this.addTask}/>
//             <Tasks tasks={this.state.tasks}/>
//         </div>
//     }
// }





export default App;