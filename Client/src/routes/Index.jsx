import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "./MainLayout";
import MainPage from "../pages/MainPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SidePage from "../pages/SidePage";
import AddToSell from "../pages/AddToSell";
import SellingPage from "../pages/SellingPage";
import GoPurchase from "../pages/GoPurchase";
import AddPokemon from "../pages/AddPokemon";

const routes = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    loader: () => {
      if(!localStorage.getItem("access_token")){
        return redirect("/login")
      }
      return null
    },
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/side-page",
        element: <SidePage />,
      },
      {
        path: "/check/:id",
        element: <AddToSell />,
      },
      {
        path: "/sell",
        element: <SellingPage />,
      },
      {
        path: "/sell/:id",
        element: <GoPurchase />,
      },
      {
        path: "/add-pokemon",
        element: <AddPokemon />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
