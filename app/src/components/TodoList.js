import React from "react";
import {connect} from "react-redux";


function TodoList(props){
    return (
    <ul>
        {props.todos.map(todo => <li>{todo.text}</li>)}
    </ul>);
}

function mapState(state){
    return {
        todos: state.todos
    }
}

export default connect(mapState, null)(TodoList);
