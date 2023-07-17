import { logo } from "~assets";
import { HEADER_ITEMS, HEADER_IMG } from "~/constants";
import { v4 } from "uuid";
import { PiHandbagSimple } from "react-icons/pi";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const items = HEADER_ITEMS;
  const chartImg = HEADER_IMG;
  const idGenerator = v4;
  const [open, setOpen] = useState(false);
  const productData = useSelector((state) => state.shop.productData);
  const userInfo = useSelector((state) => state.shop.userInfo);
  return (
    <div className="w-full h-20 bg-white border-b border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="px-10 w-full 2xl:max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <div>
            <img className="w-10" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {items.map((item) => (
              <Link to={"/"} key={idGenerator()}>
                <li
                  className="
                      text-xs md:text-base text-black font-bold 
                      hover:text-orange-900 hover:underline 
                      underline-offset-2 decoration-[1px] cursor-pointer duration-300
                        "
                >
                  {item}
                </li>
              </Link>
            ))}
          </ul>
          <Link to={"/cart"}>
            <div className="relative">
              <PiHandbagSimple className="md:text-5xl" />
              <span
                className="
                        absolute w-6 top-[18px] sm:top-4 left-[11.5px] text-xs sm:text-sm 
                        flex items-center justify-center font-semibold
                        "
              >
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to={"/login"}>
            <img
              className="w-8 h-8 rounded-full"
              src={userInfo ? userInfo.image : chartImg}
              alt="userLogo"
            />
          </Link>
          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
        <div
          className="cursor-pointer block md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <IoClose className="text-2xl" />
          ) : (
            <IoMenu className="text-2xl" />
          )}
        </div>
        <ul
          className={
            open
              ? "fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-gray-100 text-black ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <Link to="/">
            <img className="w-10 ml-4 mt-3" src={logo} alt="logo" />
          </Link>

          {items.map((item) => (
            <li className="p-4 border-b border-gray-600" key={idGenerator()}>
              <Link className="" to={"/"}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
