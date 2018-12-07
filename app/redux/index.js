const { createStore, combineReducers  } = require("redux");

function todos(state = [], action){
  switch(action.type){
    case 'ADD_TODO':
      return [...state, {
        text: action.payload
      }]
    default:
      return state;
  }
}

const reducer = combineReducers({todos});

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));
let i = 0;
setInterval(() => {
  store.dispatch({type: "ADD_TODO", payload: "Testing: " + i++})
}, 1000);
