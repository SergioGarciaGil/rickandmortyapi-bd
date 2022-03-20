import axios from "axios";
// import CHARACTER_URL from "../../constantes";
import { GET_CHARACTERS } from "./constantes";

export const getCharacters = () => {
  return (dispatch) => {
    axios.get("http://localhost:3001/api/characters/").then((character) => {
      dispatch({
        type: GET_CHARACTERS,
        payload: character.data,
      });
    });
  };
};
