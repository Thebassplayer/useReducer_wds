import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0)

  function increment() {
setCount(prevCount => prevCount + 1)
  }

  function decrement() {
setCount(prevCount => prevCount - 1)
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
