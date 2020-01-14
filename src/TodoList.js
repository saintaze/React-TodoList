import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

import './TodoList.css'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: this.getTodos()}
  }

  getTodos = () => {
    return JSON.parse(localStorage.getItem('todos')) ||  [];
  }

  setTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    }, () => this.setTodos(this.state.todos));
    
  }

  deleteTodo = (id) => {
    this.setState({ 
      todos: this.state.todos.filter(t => t.id !== id) 
    }, () => this.setTodos(this.state.todos));
  }

  editTodo = (id, todo) => {
   const updatedTodos = this.state.todos.map(t => {
    return t.id === id ? {...t, ...todo} : t;
   });
    this.setState({ todos: updatedTodos }, () => this.setTodos(this.state.todos));
  }

  toggleTodoComplete = (id) => {
    const updatedTodos = this.state.todos.map(t => {
      return t.id === id ?  { ...t, completed: !t.completed } : t;
    });
    this.setState({ todos: updatedTodos }, () => this.setTodos(this.state.todos));
  }

  createTodoListItems = () => {
    return this.state.todos.map(t => {
      return <Todo
        key={t.id}
        id={t.id}
        completed={t.completed}
        title={t.title}
        deleteTodo={this.deleteTodo}
        editTodo={this.editTodo}
        toggleTodoComplete={this.toggleTodoComplete}
      />
    });
  }

  render() { 
    return ( 
      <div className="TodoList">
        <header className="TodoList-header">
          <h1 className="TodoList-header-main">Todo List!</h1>
          <h2 className="TodoList-header-tagline">A Simple React Todo List App</h2>
        </header>
        <ul>
          {this.createTodoListItems()}
        </ul>
        <NewTodoForm addTodo={this.addTodo}/>
      </div>
     );
  }
}
 
export default TodoList;