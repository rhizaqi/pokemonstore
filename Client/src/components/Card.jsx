import { Link } from "react-router-dom";

export default function Card({ pokemon }) {
  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-gray-900 bg-clip-border text-gray-700 shadow-lg border gap-4">
      <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-white shadow-blue-gray-500 border">
        <img src={pokemon.imageUrl} />
      </div>
      <div className="p-6">
        <div className="flex flex-col gap-4 items-center justify-between mb-3">
          <h5 className="font-sans text-xl font-medium text-blue-gray-900 uppercase">
            <div className="text-white">{pokemon.name}</div>
          </h5>
          <br />
          <h3>
            <div className="text-white">Stat: {pokemon.stat}</div>
            <div className="text-white">Ability: {pokemon.ability}</div>
            <div className="text-white">Type: {pokemon.type}</div>
          </h3>
          <div className="text-white">Rp: {pokemon.price}</div>
        </div>
      </div>
      <div className="p-6 pt-3">
        <Link to={`/sell/${pokemon.id}`}>
          <button
            className="w-full rounded-lg bg-blue-900 py-3 px-7 text-center align-middle font-sans text-lg font-bold text-white shadow-md shadow-blue-900"
            type="button"
          >
            Order
          </button>
        </Link>
      </div>
    </div>
  );
}
