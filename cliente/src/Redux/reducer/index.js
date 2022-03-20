import { GET_CHARACTERS } from "../actions/constantes";

let initialState = {
  characters: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
