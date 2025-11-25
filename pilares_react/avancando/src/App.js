import "./App.css";
import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        <img src="/img1.jpg" alt="Borboleta" height={"300px"} />
      </div>
      <div>
        <img src={City} alt="Cidade" height={"300px"} />
      </div>
      <ManageData />
    </div>
  );
}

export default App;
