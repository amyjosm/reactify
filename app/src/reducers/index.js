import { combineReducers, createStore } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import count from "./count";

const rootReducer = combineReducers({
  burritos: todos,
  visibilityFilter,
  count
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
