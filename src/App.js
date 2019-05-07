import React, { Component } from 'react'
import  {Todos}  from './component/Todo'
import AddForm from './component/AddForm'
import store from './Store'
import { addTodo, deleteTodo } from './Action'
class App extends Component {
  deleteTodo = (id) => {
    const todos = store.getState().todos.filter(todo => {
      return todo.id !== id;
    })
    console.dir()
    store.dispatch(deleteTodo(todos))
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...store.getState().todos, todo]
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
