import React, { Component } from 'react';

class TodoInput extends Component{

  state = { inputValue: ""}

  updateInputValue = (evt)=> {
    this.setState({
      inputValue: evt.target.value
    });
  }

  dispatch = ()=>{
    this.props.onAdded(this.state.inputValue);
    this.state.inputValue= '';
  }

  render(){
    return (
        <div>
            <input value={this.state.inputValue} 
            onChange={this.updateInputValue}>
            </input>
            <button onClick={this.dispatch} >add</button>
        </div>
    )
  }
}

export default TodoInput;