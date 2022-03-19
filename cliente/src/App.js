import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/nav";
import Character from "./components/character";
import Characters from "./components/characters";
import CharacterDeatil from "./components/characterDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path="/">
          <Characters />
        </Route>
        <Route exact path="/character/:id">
          <CharacterDeatil />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
