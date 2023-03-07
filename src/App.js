import "./App.css";
import Weather from "./Weather.js";
import Title from "./Title";
import React from "react";
function App() {
  return (
    <div className="App">
      <Title />
      <div>
        <p className="city"></p>
        <p className="temp-info"></p>
      </div>
      <Weather />
    </div>
  );
}

export default App;
