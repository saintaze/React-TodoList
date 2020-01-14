import React, { Component } from 'react';
import uuid from 'react-uuid'

import './NewTodoForm.css';

class NewTodoForm extends Component {

  constructor(props) {
    super(props);
    this.state = { title: '' }
  }

  handleChange = (e) => {
    this.setState({title: e.target.value});
  }

  handleClick = (e) => {
    e.preventDefault();
    const newTodo = { ...this.state, id: uuid()}
    this.props.addTodo(newTodo)
    this.setState({title: ''});
  }

  render() { 
    return ( 
      <div className="NewTodoForm">
        <h2>New Todo</h2>
        <form className="NewTodoForm-form">
          <input type="text" value={this.state.title} onChange={this.handleChange} placeholder='New Todo' />
          <button className="todo-add-btn" onClick={this.handleClick}>add todo</button>
        </form>
      </div>
     );
  }
}
 
export default NewTodoForm;