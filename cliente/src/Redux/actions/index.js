import axios from "axios";
import { CHARACTER_URL } from "../../constantes";
import { GET_CHARACTERS } from "./constantes";

export function getCharacters() {
  return function (dispach) {
    return axios.get(CHARACTER_URL).then((characters) => {
      dispach({
        type: GET_CHARACTERS,
        payload: characters,
      });
    });
  };
}
