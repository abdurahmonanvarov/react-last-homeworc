import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";

export const loader = async ({ params }) => {
  const req = await axiosInstance.get("/products/" + params.id);
  const product = req.data;
  return { product };
};

function SinglePage() {
  const { product } = useLoaderData();

  return (
    <div className="continer mx-auto mt-36 ml-10">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="max-w-28">
          <img src={product.thumbnail} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
