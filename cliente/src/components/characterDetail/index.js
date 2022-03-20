import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Characters from "../characters";
import Character from "../character";

export default function CharacterDetail() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  function getCharactersById(id) {
    axios
      .get("http://localhost:3001/api/characters/" + id)
      .then((character) => {
        setCharacter(character.data);
      });
  }
  useEffect(() => {
    getCharactersById(id);
  }, []);
  return (
    <div>
      <div>{character.name}</div>
    </div>
  );
}
