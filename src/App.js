import { useState } from "react";
import "./styles.css";

export default function App() {
  var [input, setInput] = useState();
  var [output, setOutput] = useState();
  function outputHandler(flag) {
    if (flag === 1) {
      setOutput(<h1>{input} I'm h1</h1>);
    } else if (flag === 2) {
      setOutput(<h2>{input} I'm h2</h2>);
    } else if (flag === 3) {
      setOutput(<h3>{input} I'm h3</h3>);
    }
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          outputHandler(1);
        }}
      >
        h1
      </button>
      <button
        onClick={() => {
          outputHandler(2);
        }}
      >
        h2
      </button>
      <button
        onClick={() => {
          outputHandler(3);
        }}
      >
        h3
      </button>
      {output}
    </div>
  );
}
