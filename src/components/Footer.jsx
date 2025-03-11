import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaGooglePlusG,
} from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoAt } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="p-13 w-full bg-[#808080] flex flex-col sm:grid grid-cols-4 mt-20">
      <div className="pl-5 flex flex-col items-start gap-5 mb-10">
        <img className="h-15" src="/pratham-logo.png" alt="logo" />
        <p className="text-start text-sm text-white">
          PRATHAM is an educational institute that remains adamant in emerging
          as one of the leading institutes, enhancing the budding youth into
          successful individuals.
        </p>
        <p className="text-sm text-white">We're Social</p>
        <a className="flex gap-3">
          <FaFacebookF size={25} color="white" />
          <FaTwitter size={25} color="white" />
          <FaLinkedin size={25} color="white" />
          <FaGooglePlusG size={25} color="white" />
        </a>
        <p className="underline text-sm text-white">
          Terms of Service & Policies
        </p>
      </div>
      <div className="flex flex-col gap-5 text-white mb-10">
        <div>
          <p className="text-[1.1rem] font-bold ">TOP COURSES</p>
          <div className="h-1 bg-[#f8a120] w-23 mt-2"></div>
        </div>
        <p className="flex">
          <MdKeyboardArrowRight size={20} />
          <span className="ml-3">CUET</span>
        </p>
        <p className="flex">
          <MdKeyboardArrowRight size={20} />
          <span className="ml-3">CLAT</span>
        </p>
        <p className="flex">
          <MdKeyboardArrowRight size={20} />
          <span className="ml-3">IIM Indore, IPM</span>
        </p>
        <p className="flex">
          <MdKeyboardArrowRight size={20} />
          <span className="ml-3">IIM Rohtak, IPM</span>
        </p>
        <p className="flex">
          <MdKeyboardArrowRight size={20} />
          <span className="ml-3">NLU Delhi</span>
        </p>
      </div>
      <div className="flex flex-col gap-5 text-white mb-10">
        <div>
          <p className="text-[1.1rem] font-bold ">PREP MODULE</p>
          <div className="h-1 bg-[#f8a120] w-23 mt-2"></div>
        </div>
        <p className="flex">
          <MdKeyboardArrowRight size={20} />
          <span className="ml-3">2 Year Program</span>
        </p>
        <p className="flex">
          <MdKeyboardArrowRight size={20} />
          <span className="ml-3">1 Year Program</span>
        </p>
        <p className="flex">
          <MdKeyboardArrowRight size={20} />
          <span className="ml-3">Online Program</span>
        </p>
        <p className="flex">
          <MdKeyboardArrowRight size={20} />
          <span className="ml-3">Crash Course</span>
        </p>
        <p className="flex">
          <MdKeyboardArrowRight size={20} />
          <span className="ml-3">International Education</span>
        </p>
        <p className="flex">
          <MdKeyboardArrowRight size={20} />
          <span className="ml-3">Correspondence Course</span>
        </p>
      </div>
      <div className="flex flex-col gap-5 text-white mb-10">
        <div>
          <p className="text-[1.1rem] font-bold ">GET IN TOUCH</p>
          <div className="h-1 bg-[#f8a120] w-23 mt-2"></div>
        </div>
        <p className="flex flex-col">
          <div className="flex">
            <FaLocationDot size={25} />
            <span className="ml-3 text-xl">PRATHAM Head Office</span>
          </div>
          <p className="ml-9">HS-13, 2nd Floor, Kailash Colony</p>
          <p className="ml-9">Main Market</p>
          <p className="ml-9">New Delhi 110048</p>
        </p>
        <p>
          <div className="flex">
            <IoIosPhonePortrait size={25} />
            <p className="ml-3">+91- 99999 75392</p>
          </div>
          <p className="ml-9">011-42 666 000</p>
        </p>
        <p>
          <div className="flex">
            <IoAt size={25} />
            <p className="ml-3">info@prathamonline.com</p>
          </div>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
