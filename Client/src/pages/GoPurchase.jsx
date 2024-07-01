import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";
import { detailPokemonServer } from "../Features/PokemonSlice";
import Swal from "sweetalert2";

export default function GoPurchase() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const handlePurchase = async () => {
    // console.log(`mau bayar pakkkk`);

    const { data } = await axios({
      method: "get",
      url: `http://localhost:3000/order/${id}/payment/midtrans/initiate`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });

    console.log(data, `ini mau bayar`);

    window.snap.pay(data.transactionToken, {
      onSuccess: async function (result) {
        /* You may add your own implementation here */
        Swal.fire({
          title: "Payment success!",
          text: "Thanks for your purchase",
          icon: "success",
          confirmButtonText: "Ok",
        });
        console.log(result);

        await axios({
          method: "patch",
          url: "http://localhost:3000/order/payment/success",
          data: { orderId: data.idOrder },
          headers: {
            Authorization: `Bearer ` + localStorage.getItem("access_token"),
          },
        });
      },
    });
    navigate("/sell");
  };

  const pokemon = useSelector((state) => state.pokemon.detail);

  //   console.log(pokemon, `<<<<<<< `);
  useEffect(() => {
    dispatch(detailPokemonServer(id));
  }, []);
  return (
    <div className="flex justify-center">
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
          <button
            onClick={handlePurchase}
            className="w-full rounded-lg bg-blue-900 py-3 px-7 text-center align-middle font-sans text-lg font-bold text-white shadow-md shadow-blue-900"
            type="button"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
}
