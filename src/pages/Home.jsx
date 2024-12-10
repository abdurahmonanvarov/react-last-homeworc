import Products from "../components/Products";
import { axiosInstance } from "../utils/axiosInstance";

export const loader = async () => {
  const req = await axiosInstance.get("/products");
  const products = req.data.products;
  return { products };
};

function Home() {
  return (
    <div className="continer w-full mx-auto p-10  mt-10 ">
      <h1 className="text-center from-neutral-400 mb-10 text-3xl">
        Product List
      </h1>
      <Products />
    </div>
  );
}

export default Home;
