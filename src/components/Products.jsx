import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { GlobolContext } from "../context/GlobolContext";
import { toast } from "react-toastify";

function Products() {
  const { products } = useLoaderData();
  const { addProduct, selektPtoducts } = useContext(GlobolContext);
  const buyProduct = (e, product) => {
    e.preventDefault();
    const prodm = selektPtoducts.find((e) => product.id == e.id);

    if (prodm) {
      toast.warn("Already added !");
      return;
    }
    addProduct({ ...product, amount: 1 });
  };
  return (
    <div className="">
      {products ? (
        <div>
          <ul className="grid grid-clos-2 md:grid-cols-3 gap-5">
            {products.map((product) => {
              return (
                <Link
                  to={`/singleproducts/${product.id}`}
                  key={product.id}
                  className="card bg-base-100 shadow-xl"
                >
                  <figure>
                    <img src={product.thumbnail} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{product.title}</h2>
                    <p>${product.price}</p>
                    <div className="card-actions justify-end">
                      <button
                        onClick={(e) => buyProduct(e, product)}
                        className="btn btn-primary"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}

export default Products;
