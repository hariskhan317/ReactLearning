import { useCounter } from './hook/useCount'
function App() {
  const [state, increment, decrement, reset] = useCounter();

  return (
    <div className="App">
      <button onClick={increment}>
        Increase
      </button>
      <button onClick={decrement}>
        Decrease
      </button>
      <button onClick={reset}>
        Restart
      </button>
      <div>
        Counter :  {state}
      </div>
    </div>
  );
}

export default App;
