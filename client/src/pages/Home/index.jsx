import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "~/containers/Banner";
import Products from "~/containers/Products";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};
