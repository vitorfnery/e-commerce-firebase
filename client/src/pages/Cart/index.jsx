import {
  CART_BACKGROUND,
  CART_INFO,
  CART_EMPTY,
  TOAST_ERROR,
  PAYMENT_POST,
} from "~/constants";
import { useSelector } from "react-redux";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import CartItem from "~/components/CartItem";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
  const { url, description } = CART_BACKGROUND;
  const { title, info1, info2, shipping, total, checkout } = CART_INFO;
  const { main, btn } = CART_EMPTY;
  const toastErrorMsg = TOAST_ERROR;
  const paymentPost = PAYMENT_POST;
  const productData = useSelector((state) => state.shop.productData);
  const userInfo = useSelector((state) => state.shop.userInfo);
  const [payNow, setPayNow] = useState(false);
  const [totalAmt, setTotalAmt] = useState("");
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);
  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error(toastErrorMsg);
    }
  };
  const payment = async (token) => {
    await axios.post(paymentPost, {
      amount: totalAmt * 100,
      token: token,
    });
  };

  return (
    <div>
      <img className="w-full h-60 object-cover" src={url} alt={description} />
      {productData.length > 0 ? (
        <div className="max-w-screen-xl mx-auto py-20 flex flex-col items-center lg:flex-row">
          <CartItem />
          <div className="w-[80%] lg:w-1/3 bg-[#fafafa] py-6 px-4">
            <div className=" flex flex-col gap-4 md:gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-xl lg:text-2xl font-medium ">{title}</h2>
              <p className="flex items-center gap-2 md:gap-4 text-sm md:text-base">
                {info1}
                <span className="font-titleFont font-bold text-base md:text-lg">
                  ${totalAmt}
                </span>
              </p>
              <div className="flex items-start gap-2 md:gap-4">
                <p className="text-sm md:text-base">{info2}</p>
                <span className="text-xs w-1/2 xs:w-[60%] sm:w-[70%]">
                  {shipping}
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-6 w-[80%]">
              <p className="font-titleFont font-semibold text-base">{total}</p>
              <span className="text-lg md:text-xl font-bold">${totalAmt}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="text-base bg-black text-white w-[200px] xs:w-[250px] lg:w-full py-3 mt-6 hover:bg-gray-800 duration-300"
            >
              {checkout}
            </button>
            {payNow && (
              <div className="w-full mt-6 flex items-center justify-center">
                <StripeCheckout
                  stripeKey="pk_test_51NRGdxGrdqL82WOJiMdxQFIWyJ9nIr1ol7MNyMarI9WJCj2n1fRPXtAe3JbY3S7sUjJrN7fActKJGaYlnOlVaSjV00qXwqzFMT"
                  name="Online Shopping"
                  amount={totalAmt * 100}
                  label="Pay to shop"
                  description={`Your Payment amount is $${totalAmt}`}
                  token={payment}
                  email={userInfo.email}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-screen-xl mx-auto py-10 flex flex-col items-center gap-2 justify-center">
          <p className="text-xl text-orange-600 font-titleFont font-semibold">
            {main}
          </p>
          <Link to="/">
            <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-300">
              <span>
                <HiOutlineArrowLeft />
              </span>
              {btn}
            </button>
          </Link>
        </div>
      )}
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

export default Cart;
