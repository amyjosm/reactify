import React from "react";
import { connect } from "react-redux";

function Home(props) {
  return (
    <div>
      Welcome to the Home Page!
    </div>
  )
}

function increaseCount() {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch({count: 10});
    }, 1000);
  };
}

export default connect(null, null)(Home);
