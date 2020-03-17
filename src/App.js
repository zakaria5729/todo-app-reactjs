import React, { Component } from 'react'; 
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {

  state = {
    todos: [
      {id: 1, content: 'Click on the todo to delete'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todos
    })
  }

  insertTodo = (todo) => {
    todo.id = Math.random()
    const newTodos = [...this.state.todos, todo]

    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h2 className="center blue-text">Todo's</h2>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo insertTodo={this.insertTodo}/>
      </div>
    );
  }
} 

export default App;
