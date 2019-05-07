export default (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: action.payload.todos
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: action.payload.todos
      }
    default:
      return state
  }
}