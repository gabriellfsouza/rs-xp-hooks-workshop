import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import useHook from "./hooks/useHook";
import useCounter from "./hooks/useCounter";

import AppContext from "./context";

function App() {
  // const [value, setValue] = useState(0);
  const [teste, setTeste] = useState(0);
  const [value, increment, decrement] = useCounter();
  const [workshop] = useHook();
  const { title } = useContext(AppContext);

  // useEffect(() => {
  //   setValue(1);
  //   console.log(teste);
  // }, [teste]);

  return (
    <div>
      <h1>
        {title} - {value} - {workshop}
      </h1>
      <AppContext.Provider value={{ title: "Workshop" }}></AppContext.Provider>
      <button
        type='button'
        onClick={() => {
          // setValue(value + 1);
          increment();
        }}
      >
        Increment
      </button>
      <button
        type='button'
        onClick={() => {
          setTeste(teste + 1);
        }}
      >
        Teste
      </button>
    </div>
  );
}

export default App;
