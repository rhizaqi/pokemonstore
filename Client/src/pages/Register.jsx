import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    imageUrl: "",
  })``

  const changeHandler = async (event) => {
    const { name, value } = event.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const register = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/users/register",
        data: user,
      });
      navigate("/login");
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
              Register
            </h1>
            <form
              onSubmit={register}
              className="flex flex-col justify-center items-center"
            >
              <div className="mb-4">
                <label>Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={user.fullName}
                  onChange={changeHandler}
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={changeHandler}
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={changeHandler}
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label>Image url</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={user.imageUrl}
                  onChange={changeHandler}
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label>Phone number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={user.phoneNumber}
                  onChange={changeHandler}
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={user.address}
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
