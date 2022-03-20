import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCharacters } from "./Redux/actions";
import { Route } from "react-router-dom";
// import character from "./components/character";
import characters from "./components/characters";
import Nav from "./components/nav";

import CharacterDetail from "./components/characterDetail";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <>
      <Nav />
      <Route path="/" component={characters} />
      <Route exact path="/character/:id" component={CharacterDetail} />
    </>
  );
}

export default App;
