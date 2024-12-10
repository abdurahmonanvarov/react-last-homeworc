import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Foter from "../components/Foter";
import ColorContiner from "../components/ColorContiner";

function MainLoyOut() {
  return (
    <div>
      <Navbar />
      <ColorContiner />
      <main>
        <Outlet />
      </main>
      <Foter />
    </div>
  );
}

export default MainLoyOut;
