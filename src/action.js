const addTodo = todos => ({
  type: 'ADD_TODO', payload: {
    todos
  }
})

const deleteTodo = todos => ({
  type: 'DELETE_TODO', payload: {
    todos
  }
})

export { addTodo, deleteTodo }