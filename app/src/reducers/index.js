import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import count from "./count";
import name from "./name";

export default combineReducers({
  todos,
  visibilityFilter,
  count,
  name
});
