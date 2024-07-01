import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailPokemon } from "../Features/PokemonSlice";

export default function AddToSell() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const onePokemon = useSelector((state) => state.pokemon.detail);
  // console.log(onePokemon.sprites,`,<<<xxxxxxxxxxxxxxx`);

  useEffect(() => {
    dispatch(detailPokemon(id));
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center mt-4">
        <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg border">
          <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 shadow-blue-gray-500 border">
            <img src={onePokemon.sprites?.other.home.front_default} />
            <div className="absolute inset-0 w-full h-full border"></div>
          </div>
          <div className="p-6">
            <div className="flex flex-col gap-4 items-center justify-between mb-3">
              <h5 className="font-sans text-3xl font-medium text-blue-gray-900 uppercase">
                {onePokemon.name}
              </h5>
              <br />
              <h3>
                <div className="flex justify-around gap-10">
                  <div className="text-2xl uppercase font-semibold">
                    Ability
                    {onePokemon.abilities?.map((el, index) => {
                      return (
                        <div className="text-lg uppercase font-medium" key={index}>
                          - {el.ability.name}
                        </div>
                      );
                    })}
                  </div>
                  <br />
                  <div className="text-2xl uppercase font-semibold">
                    type
                    {onePokemon.types?.map((el, index) => {
                      return <div className="text-lg uppercase font-medium" key={index}> -{el.type.name}</div>;
                    })}
                  </div>
                </div>
                <br />
                <div className="flex justify-around text-xl uppercase font-semibold"> Stat </div>
                <div className="flex justify-around">
                  <div>
                    {onePokemon.stats?.map((el, index) => {
                      return <div className="text-lg uppercase" key={index}>{el.stat.name}</div>;
                    })}
                    <br />
                  </div>
                  <div>
                    {onePokemon.stats?.map((el, index) => {
                      return <div className="text-lg uppercase" key={index}>{el.base_stat}</div>;
                    })}
                    <br />
                  </div>
                </div>
              </h3>
            </div>
          </div>
          <div className="p-6 pt-3">
            <button
              className="w-full rounded-lg bg-blue-900 py-3 px-7 text-center align-middle font-sans text-lg font-bold text-white shadow-md shadow-red-900"
              type="button"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
