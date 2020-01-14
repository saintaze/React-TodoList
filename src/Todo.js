import React, { Component } from 'react';

import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false, editTitle: this.props.title }
  }

  handleDeleteTodo = ()=>{
    this.props.deleteTodo(this.props.id)
  }

  handleEditTodo = () => {
    this.setState({editing: !this.state.editing});
  }

  handleChange = (e) => {
    this.setState({editTitle: e.target.value});
  }

  handleClick = (e) => {
    e.preventDefault();
    const updatedTodo = {title: this.state.editTitle}
    this.props.editTodo(this.props.id, updatedTodo);
    this.setState({editing: !this.state.editing});
  }

  handleTitleClick = () => {
    this.props.toggleTodoComplete(this.props.id);
  }

  renderTodo = ()=>{
    const todoTitleClass = "Todo-title" + (this.props.completed ? ' done' : '');
    return (
      <React.Fragment>
        <div className={todoTitleClass} onClick={this.handleTitleClick}>
          &nbsp;&nbsp;{this.props.title}&nbsp;&nbsp;
        </div>
        <div className="Todo-actions">
          <button className="Todo-btns" onClick={this.handleEditTodo}>
            <i className="fas fa-pen"></i>
          </button>
          <button className="Todo-btns" onClick={this.handleDeleteTodo}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </React.Fragment>
    );
  }

  renderEditTodoForm = ()=>{
   return (
      <form className="Todo-edit-form">
        <input type="text" value={this.state.editTitle} onChange={this.handleChange} />
        <button onClick={this.handleClick}>save</button>
      </form>
    )
  }

  render() { 
    return (  
      <div className="Todo">
        {this.state.editing ? this.renderEditTodoForm() : this.renderTodo() }
      </div> 
    )
  }
}
 
export default Todo;