import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPokemon() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    stat: "",
    ability: "",
    type: "",
    imageUrl: "",
    price: "",
  });

  const changeHandler = async (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const addHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/pokemon",
        data: data,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      navigate("/sell")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <div className="flex bg-gray-100  justify-center items-center h-screen">
          <div className="w-1/2 h-screen">
            <img src="/Pokeballs.png" className="object-cover w-full h-full" />
          </div>

          <div className="m-10 p-8 w-full lg:w-1/2 bg-blue-200 rounded-3xl ">
            <h1 className="flex text-2xl font-semibold mb-4 justify-center items-center">
              Add Pokemon
            </h1>
            <form
              onSubmit={addHandler}
              className="flex flex-col justify-center items-center"
            >
              <div className="mb-4">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={changeHandler}
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label>Ability</label>
                <input
                  type="text"
                  name="ability"
                  value={data.ability}
                  onChange={changeHandler}
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label>Type</label>
                <input
                  type="text"
                  name="type"
                  value={data.type}
                  onChange={changeHandler}
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label>Image url</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={data.imageUrl}
                  onChange={changeHandler}
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  value={data.price}
                  onChange={changeHandler}
                  className="w-full border rounded-md p-2"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 font-semibold rounded-md p-3 w-40 justify-center items-center"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
