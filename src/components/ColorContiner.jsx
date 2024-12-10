const colors = ["yellow", "#D3F1DF", "#EBEAFF", "#FFF3E2", "black"];
import { useContext } from "react";
import { GlobolContext } from "../context/GlobolContext";

function ColorContiner() {
  const { changeColor } = useContext(GlobolContext);
  return (
    <div className="container mx-auto w-full mb-5 mt-3">
      <ul className="flex float-end gap-5">
        {colors.map((color) => {
          return (
            <li
              onClick={() => changeColor(color)}
              key={color}
              className="h-7 w-7 border rounded-full cursor-pointer hover:border-red-300"
              style={{ background: color }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}

export default ColorContiner;
