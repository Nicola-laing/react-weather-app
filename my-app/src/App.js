import "./App.css";
import Weather from "./Weather.js";
import Title  from "./Title";
function App() {
  return (
    <div className="App">
        <Title />
        <div>
          <h1 className="city"></h1>
          <h1 className="temp-info"></h1>
        </div>
      <Weather />
    </div>
  );
}

export default App;
