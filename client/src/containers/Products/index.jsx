import ProductsCard from "~/components/ProductsCard";

const Products = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          shopping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          voluptatem veritatis dignissimos ratione culpa sit quod vero non
          facere! At accusantium sunt quae quam voluptatibus reprehenderit dicta
          magnam ea dolore tempore totam animi consectetur, voluptatum in fuga,
          beatae adipisci quod a quasi nam atque mollitia ut cumque! Voluptates,
          hic iure.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
