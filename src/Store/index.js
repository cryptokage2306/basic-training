import { createStore } from 'redux'
import reducer from '../Reducer'
const initialState = {
  todos: []
}
const store = createStore(reducer, initialState)
export default store;