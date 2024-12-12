import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLoyOut from "./loyout/MainLoyOut";

//pages
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SinglePage from "./pages/SinglePage";
import Card from "./pages/Card";
import Register from "./pages/Register";
import Login from "./pages/Login";

//loader
import { loader as HomLoader } from "./pages/Home";
import { loader as SinglePageLoder } from "./pages/SinglePage";
import ProtectedRood from "./components/ProtectedRood";
import { useContext } from "react";
import { GlobolContext } from "./context/GlobolContext";

function App() {
  const { user, authReady } = useContext(GlobolContext);
  const routers = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRood user={user}>
          <MainLoyOut />
        </ProtectedRood>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomLoader,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/card",
          element: <Card />,
        },
        {
          path: "/singleproducts/:id",
          element: <SinglePage />,
          loader: SinglePageLoder,
        },
      ],
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
  ]);
  return <>{authReady && <RouterProvider router={routers} />}</>;
}

export default App;
