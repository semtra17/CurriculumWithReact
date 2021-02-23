import './App.css';
import tasks from './samples/task.json';
import React, { Component } from 'react';

// componentes

import Top  from './components/Top';


class App extends Component {
    render() {
                return <div className="container">
                    <Top/>
                    
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