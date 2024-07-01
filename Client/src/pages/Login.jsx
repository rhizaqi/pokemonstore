import axios from "../config/instance";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeHandler = async (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "/users/login",
        data: user,
      });

      console.log(response);

      localStorage.setItem("access_token", response.data.access_token)
      navigate("/side-page")
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };

  async function handleCredentialResponse(response) {
    try {
      console.log("handle credential");
      console.log(response);
      let tokenGoogle = await axios({
        method: "post",
        url: "/users/googleLogin",
        headers: {
          [`google-token`]: response.credential,
        },
      });

      console.log(response);

      localStorage.setItem("access_token", tokenGoogle.data.access_token);

      navigate("/sell");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    window.onload = function () {
      google.accounts.id.initialize({
        client_id:
          "928577377664-2dkpv75ij6legacnhkfgbb07qo3ddfcd.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
        theme: "outline",
        size: "large",
      });
    };
  }, []);

  return (
    <div>
      <div className="flex bg-gray-100  justify-center items-center h-screen">
        <div className="w-1/2 h-screen">
          <img src="/pokestore.png" className="object-cover w-full h-full" />
        </div>

        <div className="m-10 p-8 w-full lg:w-1/2 bg-blue-200 rounded-3xl ">
          <h1 className="flex text-2xl font-semibold mb-4 justify-center items-center">
            Login
          </h1>
          <form
            onSubmit={loginHandler}
            className="flex flex-col justify-center items-center"
          >
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
            <button
              type="submit"
              className="bg-blue-500 font-semibold rounded-md p-3 w-40 justify-center items-center"
            >
              Login
            </button>
          </form>

          <div className="mt-6 justify-center text-center gap-4">
            don't have account ?
            <a href="/register" className="hover:underline text-blue-500">
              Create an account
            </a>
            <div> or </div>
            <div className="flex justify-center" id="buttonDiv" />
          </div>
        </div>
      </div>
    </div>
  );
}
