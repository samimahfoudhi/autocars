import "./App.css";
import { useState } from "react";
import Brands from "./components/Brands";
import Home from "./components/Home";
import Mercedes from "./components/Mercedes";
import Audi from "./components/Audi";
import Update from "./components/Update";
import AddCar from "./components/AddCar";
function App() {
  const [view, setView] = useState("Home");
  const [elementUpdated, setElementUpdated] = useState({});
  const [model, setModel] = useState("");
  console.log(elementUpdated);
  return (
    <div className="App">
      {view === "Home" && <Home setView={setView} />}
      {view === "Brands" && <Brands setView={setView} setModel={setModel} />}
      {view === "mercedes" && (
        <Mercedes
          setView={setView}
          setElementUpdated={setElementUpdated}
          model={model}
        />
      )}
      {view === "audi" && (
        <Audi
          setView={setView}
          setElementUpdated={setElementUpdated}
          model={model}
        />
      )}
      {view === "update" && (
        <Update
          elementUpdated={elementUpdated}
          model={model}
          setView={setView}
        />
      )}
      {view === "AddCar" && <AddCar model={model} setView={setView} />}
    </div>
  );
}

export default App;
