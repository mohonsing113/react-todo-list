
import React, { Component } from 'react';

class TodoList extends Component{


  addTodo(){

  }

  render(){
    return (
    <div>
      <input onClick={this.addTodo} type="text"></input>
      <button>add</button>
    </div>
    )
  }
}

export default TodoList;