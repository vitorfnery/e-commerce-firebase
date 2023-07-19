import { creditCards, logo } from "~assets/index";
import {
  FOOTER_INTRO,
  FOOTER_LOCATE,
  FOOTER_PROFILE,
  FOOTER_SUBSCRIBE,
} from "~/constants";
import { ImGithub } from "react-icons/im";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const { copyright } = FOOTER_INTRO;
  const footerLocate = FOOTER_LOCATE;
  const footerProfile = FOOTER_PROFILE;
  const { btn } = FOOTER_SUBSCRIBE;
  return (
    <div className="bg-black text-primary py-20 font-titleFont">
      <div className="px-16 lg:px-16 py-4 sm:py-7 2xl:max-w-screen-xl mx-auto grid grid-cols-1  lg:grid-cols-4 gap-x-20 gap-y-14">
        <div className="flex flex-col gap-7">
          <Link to={"/"}>
            <img className="w-12" src={logo} alt="logo" />
          </Link>
          <p className="text-white text-sm tracking-wide">{copyright}</p>
          <img className="w-56" src={creditCards} alt="Credit Cards Payment" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebook className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            {footerLocate.title}
          </h2>
          <div className="text-base flex flex-col gap-2">
            <p>{footerLocate.city}</p>
            <p>{footerLocate.mobile}</p>
            <p>{footerLocate.email}</p>
            <p>{footerLocate.phone}</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            {footerProfile.title}
          </h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              {" "}
              <span>
                <BsPersonFill />{" "}
              </span>{" "}
              {footerProfile.account}
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              {" "}
              <span>
                <BsPaypal />{" "}
              </span>{" "}
              {footerProfile.checkout}
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              {" "}
              <span>
                <FaHome />{" "}
              </span>{" "}
              {footerProfile.track}
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              {" "}
              <span>
                <MdLocationOn />{" "}
              </span>{" "}
              {footerProfile.help}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-[200px] xs:w-[80%] lg:w-full">
          <input
            className="bg-transparent border px-4 text-sm"
            placeholder="e-mail"
            type="text"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
