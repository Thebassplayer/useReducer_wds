import { useState, useReducer } from "react";
import "./styles.css";

const reducer = (state, action) => {
  return {count: state.count + 1};
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
