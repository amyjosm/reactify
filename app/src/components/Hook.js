import React from "react";
import { useRedux } from "../hooks/redux";

function Hook(props) {
  const [
    count, 
    setState
  ] = useRedux("count", "INCREASE_COUNT");

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => setState(count + 1)}
      >
        Increase
      </button>
    </div>
  );
}

export default Hook;
