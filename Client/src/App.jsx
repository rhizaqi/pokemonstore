// import './App.css'
import { RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import router from "./routes/Index";
import Login from "./pages/Login";
import SidePage from "./pages/SidePage";
import AddToSell from "./pages/AddToSell";
import routes from "./routes/Index.jsx";

function App() {
  return (
    <>

      <RouterProvider router={routes} />
    </>
  );
}

export default App;
