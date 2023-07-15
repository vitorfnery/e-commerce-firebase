import { creditCards, logo } from "~assets/index";
import { FOOTER_INTRO } from "~/constants";
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

const Footer = () => {
  const { copyright } = FOOTER_INTRO;
  return (
    <div className="bg-black text-primary py-20 font-titleFont">
      <div className="px-16 py-4 sm:py-7 2xl:max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-14">
        <div className="flex flex-col gap-7">
          <img className="w-12" src={logo} alt="logo" />
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
          <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Curitiba, PR, Brasil</p>
            <p>Mobile: +55 41 997668680</p>
            <p>E-mail: vitorfelipenery@gmail.com</p>
            <p>Phone: +55 41 32345678</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              {" "}
              <span>
                <BsPersonFill />{" "}
              </span>{" "}
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              {" "}
              <span>
                <BsPaypal />{" "}
              </span>{" "}
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              {" "}
              <span>
                <FaHome />{" "}
              </span>{" "}
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              {" "}
              <span>
                <MdLocationOn />{" "}
              </span>{" "}
              help & support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 text-sm"
            placeholder="e-mail"
            type="text"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
