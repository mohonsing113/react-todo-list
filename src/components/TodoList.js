
import React, { Component } from 'react';
import Todo from './Todo.js'

class TodoList extends Component{

  state = { inputValue: "",todos:[]}

  addTodo = () =>{
    this.setState({ 
      todos: this.state.todos.concat([this.state.inputValue]),
      inputValue: ''
    });
  }

  updateInputValue = (evt)=> {
    this.setState({
      inputValue: evt.target.value
    });
  }


  render(){
    return (
    <div>
      <input
              value={this.state.inputValue} 
              onChange={this.updateInputValue}></input>
      <button onClick={this.addTodo} >add</button>
      {this.state.todos.map((taskName) => <Todo task={taskName}/>)}
    </div>
    )
  }
}

export default TodoList;