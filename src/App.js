import "./App.css";
import Card from "./components/card/Card";
import { languages } from "./helper/data";
import logo from "./assets/react.svg";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="" />
      <div className="container">
        {languages.map((items, i) => {
          return <Card key={i} items={items} />;
        })}
      </div>
    </div>
  );
}

export default App;
