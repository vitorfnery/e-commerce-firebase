import { logo } from "~assets/index";
import { HEADER_ITEMS } from "~/constants";
import { v4 } from "uuid";
import { PiHandbagSimple } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const items = HEADER_ITEMS;
  const idGenerator = v4;
  const productData = useSelector((state) => state.shop.productData);
  const userInfo = useSelector((state) => state.shop.userInfo);
  return (
    <div className="w-full h-20 bg-white border-b border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="px-10 2xl:max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <div>
            <img className="w-10" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {items.map((item) => (
              <Link to={"/"} key={idGenerator()}>
                <li
                  className="
                        text-base text-black font-bold 
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
              <PiHandbagSimple className="text-5xl" />
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
              src={
                userInfo
                  ? userInfo.image
                  : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="userLogo"
            />
          </Link>
          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
