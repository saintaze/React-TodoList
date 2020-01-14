import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

import './TodoList.css'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: []}
  }

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  deleteTodo = (id) => {
    this.setState({ 
      todos: this.state.todos.filter(t => t.id !== id) 
    });
  }

  editTodo = (id, todo) => {
   const updatedTodos = this.state.todos.map(t => {
    if(t.id === id){
      return {...t, ...todo}
    }else{
      return t
    }
   });
   this.setState({todos: updatedTodos});
  }

  createTodoListItems = () => {
    return this.state.todos.map(t => {
      return <Todo
        key={t.id}
        id={t.id}
        title={t.title}
        deleteTodo={this.deleteTodo}
        editTodo={this.editTodo}
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