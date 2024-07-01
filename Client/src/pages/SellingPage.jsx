import { useDispatch, useSelector } from "react-redux";
import { pokemonServer } from "../Features/PokemonSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Card from "../components/Card";

export default function SellingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(pokemonServer());
  }, []);

  const pokemon = useSelector((state) => state.pokemon.list);

  return (
    <div className="flex flex-wrap p-2 m-2 gap-8 justify-center">
      {pokemon.map((el) => {
        return <Card pokemon={el} key={el.id} />;
      })}
    </div>
  );
}
