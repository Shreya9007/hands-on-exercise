import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello");
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const onPress = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>{count}</h3>

      <button onClick={increment}>Increment</button>
      <br /><br />

      <button onClick={decrement}>Decrement</button>
      <br /><br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>
      <br /><br />

      <button onClick={onPress}>
        Click on me
      </button>

      <br /><br />

      <CurrencyConvertor />
    </div>
  );
}

export default App;