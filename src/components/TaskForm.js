import React,{Component} from 'react';

export default class TaskForm extends Component{

    state = {
        title:'',
        description:'',
    }


    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.title,this.state.description);
    }
    onChange = (e) =>{
        this.setState({
            [e.target.name] :e.target.value, //debe ir entre corchetes para que se interprete el valor
        })
    }

    render(){
         return(
             <form onSubmit={this.onSubmit}>
                 <input name="title"  type="text" placeholder="Write a Task" onChange={this.onChange} 
                 value={this.state.title}/>
                 <br/>      
                 <br/>      
                 <textarea name="description" placeholder="Write a Description" onChange={this.onChange} 
                 value={this.state.description}>
                 </textarea>
                 <button type="submit">
                     Save Task
                 </button>
             </form>
         )
    }

}