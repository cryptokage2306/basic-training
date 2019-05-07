import React, { Component } from 'react'
import { Todos } from './todo'
import AddForm from './AddForm'
import store from './store'
import { addTodo, deleteTodo } from './action'
class App extends Component {
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })
    store.dispatch(deleteTodo(todos))
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...store.getState().todos, todo]
    console.dir(todos)
    console.dir(addTodo(todos))
    store.dispatch(addTodo(todos))
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={store.getState().todos} deleteTodo={this.deleteTodo} />
        <AddForm addTodo={this.addTodo} />
      </div>
    )
  }
}
export default App;
