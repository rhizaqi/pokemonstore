import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = async () => {
    localStorage.clear();

    navigate("/login");
  };
  return (
    <div>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex flex-row">
            <img src="/pokestore.png" className="h-8" />
            <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Pokestore
            </div>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <div className="flex flex-col text-white text-lg font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <div> Sort </div>
              <div> Filter </div>
              <div> Search </div>
            </div>
          </div>
          <div>
            <button
              onClick={logout}
              className="flex flex-col text-white text-lg font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
