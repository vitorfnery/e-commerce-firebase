import { PRODUCT_SINGLE_PAGE, PRODUCT_SINGLE_STARS } from "~/constants";
import { v4 } from "uuid";
import { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "~/redux/ShopSlice";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {
  const { sale, quantity, reduce, add, toChart, category, review } =
    PRODUCT_SINGLE_PAGE;
  const stars = PRODUCT_SINGLE_STARS;
  const idGenerator = v4;
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  let [baseQty, setBaseQty] = useState(1);
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-3 xs:px-5 my-10 flex gap-10">
        <div className="w-1/2 md:w-2/5 relative">
          <img
            className="w-full sm:h-[550px] object-cover"
            src={details.image}
            alt="productImg"
          />
          <div className="absolute top-2 md:top-4 right-0">
            {details.isNew && (
              <p
                className="
                        bg-black text-white font-semibold font-titleFont 
                        text-xs md:text-base px-3 md:px-8 py-[2px] md:py-1
                          "
              >
                {sale}
              </p>
            )}
          </div>
        </div>
        <div className="w-1/2 md:w-3/5 flex flex-col justify-center md:gap-12">
          <div>
            <h2 className="text-lg sm:text-xl md:text-4xl font-semibold">
              {details.title}
            </h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through font-base text-gray-500">
                {details.oldPrice}
              </p>
              <p className="text-lg md:text-2xl font-medium text-gray-900">
                {details.price}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-5">
            <div className="flex">
              {stars.map(() => (
                <MdOutlineStar className="text-xs" key={idGenerator()} />
              ))}
            </div>
            <p className="text-[10px] xs:text-xs text-gray-500">{review}</p>
          </div>
          <p className="text-sm md:text-base text-gray-500 -mt-3 pb-3">
            {details.description}
          </p>
          <div className="flex flex-col gap-4 mb-3">
            <div className="md:w-52 flex items-center justify-between text-gray-500 gap-2 md:gap-4 border p-3">
              <p className="text-sm">{quantity}</p>
              <div className="flex items-center gap-1 md:gap-4 text-sm font-semibold">
                <button
                  className="
                            border h-4 md:h-5 font-normal text-lg flex items-center justify-center 
                            px-1 md:px-2 hover:bg-gray-700 hover:text-white cursor-pointer 
                            duration-300 active:bg-black
                            "
                  onClick={() =>
                    setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty--)
                  }
                >
                  {reduce}
                </button>
                <span>{baseQty}</span>
                <button
                  className="
                            border h-4 md:h-5 font-normal text-lg flex items-center justify-center 
                            px-1 md:px-2 hover:bg-gray-700 hover:text-white cursor-pointer 
                            duration-300 active:bg-black
                            "
                  onClick={() => setBaseQty(baseQty++)}
                >
                  {add}
                </button>
              </div>
            </div>
            <button
              className="bg-black text-white py-3 px-6 active:bg-gray-800 lg:text-2xl"
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details.id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQty,
                    description: details.description,
                  })
                ) & toast.success(`${details.title} is added`)
              }
            >
              {toChart}
            </button>
          </div>
          <div className="flex gap-2 text-base text-gray-500">
            <span>{category}</span>
            <span className="font-medium capitalize">{details.category}</span>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
export default Product;
