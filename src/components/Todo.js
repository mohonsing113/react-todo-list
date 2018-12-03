
import React, { Component } from 'react';

class Todo extends Component{

  render(){
    return (
    <div>
        <span>{this.props.task}</span><br/>
    </div>
    )
  }
}

export default Todo;