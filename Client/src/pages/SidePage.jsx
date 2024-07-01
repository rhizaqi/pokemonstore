import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { dataPokemon, detailPokemon } from "../Features/PokemonSlice";
// import axios from "../config/instance"

export default function SidePage() {
  //   const [data, setData] = useState([]);
  //   const [pokemon, setPokemon] = useState(null); //karena ada sesuatu jadi kebaca a+YT^&R(TO*^FC&GLVTK) di inspect
  //   const [sell, setSell] = useState();

  //   const fetchData = async () => {
  //     try {
  //       const { data } = await axios({
  //         method: "get",
  //         url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
  //       });

  //       console.log(data.results, `<<<`);
  //       setData(data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   const fetchOne = async () => {
  //     try {
  //       const { data } = await axios({
  //         method: "get",
  //         url: pokemon,
  //       });

  //       console.log(data, " <<<<< ini data", `${data.name}`); //mweeheehe
  //       setSell(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData();
  //     if (pokemon) {
  //       fetchOne();
  //     }
  //   }, [pokemon]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = (url) => {
    // console.log(url, "Check 1 url yg di pake");
    dispatch(detailPokemon(url));
    const idApi = url.split("https://pokeapi.co/api/v2/pokemon/")[1];
    const idPokemon = idApi.split("/")[0];
    // console.log(idPokemon,`<<<<< id`);

    navigate(`/check/${idPokemon}`);
  };

  useEffect(() => {
    dispatch(dataPokemon());
  }, []);

  const pokemon = useSelector((state) => state.pokemon.list);
  return (
    <div className=" flex flex-col bg-gray-900">
      <div className="flex justify-center items-center gap-4 mt-4">
        <Link to={"/add-pokemon"}>
          <button className="text-white"> Add </button>
        </Link>
        <button className="text-white"> Edit </button>
      </div>
      <div className="flex justify-center p-4 ">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-blue-900 rounded-lg">
          <table className="w-full text-sm text-center text-gray-500 text-gray-400  ">
            <thead className="text-L text-gray-700 uppercase bg-gray-50 bg-gray-700 text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Url
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {pokemon.map((el, i) => {
                return (
                  <tr
                    key={i}
                    className=" even:bg-gray-50 even:bg-gray-800 border-b border-gray-700"
                  >
                    <td className="px-6 py-4"> {i + 1}</td>
                    <td className="px-6 py-4"> {el.name}</td>
                    <td className="px-6 py-4"> {el.url}</td>
                    <td>
                      <button onClick={() => handleButtonClick(el.url)}>
                        Get Pokemon
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
