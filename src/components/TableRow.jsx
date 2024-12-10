import React, { useContext } from "react";
import { GlobolContext } from "../context/GlobolContext";

function TableRow({ id, price, amount, title, brand, thumbnail }) {
  const { changeAmount, deletProduct } = useContext(GlobolContext);
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={thumbnail} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">Brend:{brand}</div>
          </div>
        </div>
      </td>
      <td>
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => changeAmount(id, "increase")}
            className="btn btn-sm"
          >
            +
          </button>
          <span className="text-xl">{amount}</span>
          <button
            onClick={() => {
              if (amount == 1) {
                deletProduct(id);
              } else {
                changeAmount(id, "decrease");
              }
            }}
            className="btn btn-sm"
          >
            -
          </button>
        </div>
      </td>
      <th>
        <button
          onClick={() => deletProduct(id)}
          className="btn btn-primary btn-xs"
        >
          Delet
        </button>
      </th>
    </tr>
  );
}

export default TableRow;
