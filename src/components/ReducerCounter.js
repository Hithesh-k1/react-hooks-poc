import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { count: state.count + action.value };
    case "dec":
      return { count: state.count - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "inc", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "dec", value: 5 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset", value: 0 })}>
        reset
      </button>
    </div>
  );
}

export default ReducerCounter;
