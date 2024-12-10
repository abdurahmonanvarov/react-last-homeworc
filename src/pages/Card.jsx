import { useContext } from "react";
import { GlobolContext } from "../context/GlobolContext";
import TableRow from "../components/TableRow";
import { formetPrice } from "../utils";
import { Link } from "react-router-dom";

function Card() {
  const { selektPtoducts, totelPrice, totelAmount } = useContext(GlobolContext);
  if (selektPtoducts.length == 0) {
    return (
      <div className="continer flex flex-col items-center mt-32 gap-5">
        <h1 className="text-center text-3xl font-bold">
          You dont have any product right now !
        </h1>
        <Link className="btn btn-primary" to="/">
          Buy something
        </Link>
      </div>
    );
  }
  return (
    <div className="continer mt-20">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Amount:</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {selektPtoducts &&
              selektPtoducts.map((prod) => {
                return (
                  <TableRow
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    amount={prod.amount}
                    thumbnail={prod.thumbnail}
                    brand={prod.brand}
                    price={prod.price}
                  />
                );
              })}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-10 px-10">
          <h1 className="font-semibold">Totalamount{totelAmount}</h1>
          <h1 className="font-semibold">
            Totalprice:{formetPrice(totelPrice)}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
