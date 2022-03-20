import { useSelector } from "react-redux";
import Character from "../character";
import { Link } from "react-router-dom";

export default function Characters() {
  var characters = useSelector((state) => state.characters); // Me conecto con  el estore trayendome el estado otra forma con hook
  return (
    <div>
      {/* Aca muestro lo que quiero mostrar en este caso nombre e imagen */}
      {characters.map((character) => {
        return (
          <Link to={`/character/${character?.id}`}>
            <Character name={character?.name} image={character?.image} />;
          </Link>
        );
      })}
    </div>
  );
}
