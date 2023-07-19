import { PRODUCTS_INFO } from "~/constants";
import ProductsCard from "~/components/ProductsCard";

const Products = ({ products }) => {
  const { title, main } = PRODUCTS_INFO;
  return (
    <div className="py-10 overflow-hidden">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-xl md:text-2xl bg-gray-300 text-black py-2 px-4 mx-6 max-w-60 md:w-80 text-center">
          {title}
        </h1>
        <span className="w-14 md:w-20 h-[3px] bg-black"></span>
        <div className="px-2 sm:px-5 flex justify-center">
          <p className="w-[80%] md:max-w-[700px] lg:max-w-[900px] text-gray-600 text-center">
            {main}
          </p>
        </div>
      </div>
      <div
        className="
                  max-w-screen-xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                  gap-10 justify-items-center
                  "
      >
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
