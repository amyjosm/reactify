import React, { useState } from "react";
import { connect } from "react-redux";
import {addTodo} from "../actions";


function TodoForm(props) {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <p>Adding a todo for {props.name}</p>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text" />
      <button onClick={() => { props.createTodo(todo) }}>Add Todo</button>
      <hr/>
    </div>
  );
}

function mapStateToProps(state){
  return {
    name: state.name
  }
}

function mapDispatchToProps(dispatch){
  return {
    createTodo(todo){
      dispatch(addTodo(todo))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
