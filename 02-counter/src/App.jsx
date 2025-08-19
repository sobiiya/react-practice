import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter >= 20) {
      return;
    } else {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter <= 0) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Counter App</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Increment</button>
      <br />
      <button onClick={removeValue}>Decrement</button>
    </>
  );
}

export default App;
