import React, { useState } from "react";
import ReactDOM from "react-dom";
import Name from "./Name";
import "./styles.css";

function App() {
  const [a] = useState("vijay");
  return (
    <div>
      <Name name={a} />
    </div>
  );
}
export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <App />
  </div>,
  rootElement
);
