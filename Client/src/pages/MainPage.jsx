import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataPokemon, detailPokemon } from "../Features/PokemonSlice";
// import axios from "../config/instance"

export default function MainPage() {
  // const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const { data } = await axios({
  //       method: "get",
  //       url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=256",
  //     });

  //     console.log(data.results, `<<<`);
  //     setData(data.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getFetchDetail = async () => {
  //   try {
  //     const response = await axios({
  //       method: "get",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataPokemon());
  }, []);

  const pokemon = useSelector((state) => state.pokemon.list);

  return (
    <div>
      <h1 className="text-3xl font-semibold"> POKEMON STORE </h1>
      <div className="flex justify-center items-center">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
      </div>
      <div>
        {pokemon.map((el, index) => {
          return (
            <div className="flex justify-center items-center gap-4" key={index}>
              <div>{el.name}</div>
              <div>{el.url}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
