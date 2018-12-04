
import React, { Component } from 'react';
import Todo from './Todo.js'
import TodoInput from './TodoInput'

class TodoList extends Component{

  state = {todos:[]}

  addTodo = (inputValue) =>{
    this.setState({ 
      todos: this.state.todos.concat([inputValue]),
    });
  }

  render(){
    return (
    <div>
      <TodoInput onAdded = {this.addTodo}/>
      {this.state.todos.map((taskName) => <Todo task={taskName}/>)}
    </div>
    )
  }
}

export default TodoList;