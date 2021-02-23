import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Task extends Component {
  

    
    StyleCompleted(){
        return {
                fontSize:"20px",
                color: this.props.task.done ? "blue" : "red",
                textDecoration: this.props.task.done ? 'line-through' : 'none',
                }
    }
    render() {
        const {task} = this.props;
        
        return <p style={this.StyleCompleted()}> 
        {task.title} - 
        {task.descripcion} - 
        {task.done} - 
        {task.id}
        <input type="checkbox"/>
        <button>
            x
        </button>
    </p>
       
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
} 
export default Task;
