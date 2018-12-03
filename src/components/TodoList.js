
import React, { Component } from 'react';

class TodoList extends Component{


  addTodo(){


  }

  updateInputValue: function(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render(){
    return (
    <div>
      <input  onClick={this.addTodo} 
              value={this.state.inputValue} 
              onChange={this.updateInputValue}></input>
      <button>add</button>
    </div>
    )
  }
}

export default TodoList;