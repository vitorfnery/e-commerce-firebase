import { CART_SHOP } from "~/constants";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "~redux/ShopSlice";
import { ToastContainer, toast } from "react-toastify";

const CartItem = () => {
  const { title, add, reduce, resetBtn, homeBtn } = CART_SHOP;
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.shop.productData);
  return (
    <div className="lg:w-2/3 lg:pr-10 xl:pr-16 2xl:pr-24">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">{title}</h2>
        <div>
          <div>
            {productData.map((item) => (
              <div
                key={item._id}
                className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-6 mt-6"
              >
                <div className="flex flex-col lg:flex-row  items-center gap-1 sm:gap-2">
                  <MdOutlineClose
                    onClick={() =>
                      dispatch(deleteItem(item._id)) &
                      toast.error(`${item.title} is removed`)
                    }
                    className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                  />
                  <img
                    className="w-32 h-16 h-32 object-cover"
                    src={item.image}
                    alt="productImg"
                  />
                </div>
                <h2 className="text-sm">{item.title}</h2>
                <p className="text-sm">${item.price}</p>
                <div className="lg:w-52 flex items-center justify-between text-gray-500 gap-1 lg:gap-4 border p-1 sm:p-3">
                  <p className="text-xs md:text-sm">Quantity</p>
                  <div className="flex items-center gap-1 lg:gap-4 text-xs md:text-sm font-semibold">
                    <span
                      onClick={() =>
                        dispatch(
                          decrementQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                      className="border h-5 font-normal text-lg flex items-center justify-center px-1 sm:px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      {reduce}
                    </span>
                    {item.quantity}
                    <span
                      onClick={() =>
                        dispatch(
                          incrementQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                      className="border h-5 font-normal text-lg flex items-center justify-center px-1 sm:px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      {add}
                    </span>
                  </div>
                </div>
                <p className="text-sm font-medium mb-16 lg:mb-0">
                  ${item.quantity * item.price}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={() =>
                dispatch(resetCart()) & toast.error("Your Cart is Empty!")
              }
              className="bg-red-500 text-white mt-8 lg:ml-7 py-1 px-6 hover:bg-red-800 duration-300"
            >
              {resetBtn}
            </button>
          </div>
        </div>
      </div>
      <Link to="/">
        <div className="flex justify-center lg:justify-start">
          <button className="mt-8 lg:ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
            <span>
              <HiOutlineArrowLeft />
            </span>
            {homeBtn}
          </button>
        </div>
      </Link>
      <ToastContainer
        position="top-left"
        autoClose={3000}
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

export default CartItem;
