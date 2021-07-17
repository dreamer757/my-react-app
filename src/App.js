import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <p>
        <Weather />
      </p>
      <a
        className="App-link"
        href="https://github.com/dreamer757/my-react-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open source code
      </a>
      by Courtney Jones
    </div>
  );
}

export default App;
