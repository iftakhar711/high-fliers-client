import {
  AiOutlineFacebook,
  // AiOutlineInstagram,
  // AiOutlineLinkedin,
} from "react-icons/ai";
import { PiPhoneCallLight } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { CiTimer, CiLocationOn } from "react-icons/ci";
import { BsGlobe2 } from "react-icons/bs";
import { IoLocateSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="bg-sky-700  relative py-2 text-white mt-10  ">
        {/* about company */}
        <div className="px-5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between mt-16 ">
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold ">HIGH-FLYERS GLOBAL EDUCATION</h1>

            <div className="flex flex-col space-y-4 text-sm  ">
              <div className=" flex gap-3">
                <CiLocationOn className=" h-6 w-6 "></CiLocationOn>
                <h1 className="">
                  Road no-4, House no-9, Nikunjo-2, Khilkhet, Dhaka
                </h1>
              </div>

              <div className=" flex gap-3">
                <PiPhoneCallLight></PiPhoneCallLight>
                <h1> +880 1869653084 (BD)</h1>
              </div>

              <div className=" flex gap-3">
                <PiPhoneCallLight></PiPhoneCallLight>
                <h1>+880 1332310516 (BD)</h1>
              </div>

              <div className=" flex gap-3">
                <PiPhoneCallLight></PiPhoneCallLight>
                <h1>+351 920 230 028 (Portugal)</h1>
              </div>

              <div className=" flex gap-3">
                <PiPhoneCallLight></PiPhoneCallLight>
                <h1>+45 71 69 33 47 (Denmark)</h1>
              </div>

              <div className=" flex gap-3">
                <PiPhoneCallLight></PiPhoneCallLight>
                <h1>+358 41 7265969 (Finland)</h1>
              </div>

              <div className=" flex gap-3">
                <HiOutlineMail></HiOutlineMail>
                <h1> info@hfge.global </h1>
              </div>

              <div className=" flex gap-3">
                <CiTimer></CiTimer>
                <h1>
                  Thursday - Tuesday: 9:00 - 5:00
                  <br /> Wednesday : Closed
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3 lg:px-20">
            <h2 className="font-bold">LINK</h2>
            <div className="flex flex-col space-y-3 text-sm text-slate-300">
              <Link onClick={top} to="/soon" className="hover:text-slate-600 ">
                Apply Now
              </Link>
              <Link
                onClick={top}
                to="/contuctus"
                className="hover:text-slate-600 "
              >
                Contact Us
              </Link>
              <Link onClick={top} to="/about" className="hover:text-slate-600">
                About Us
              </Link>
              <Link
                onClick={top}
                to="/service"
                className="hover:text-slate-600"
              >
                Service
              </Link>
              <Link onClick={top} to="/soon" className="hover:text-slate-600">
                Article
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-3 ">
            <h2 className="font-bold">SUPPORT</h2>
            <div className="flex flex-col space-y-3 text-sm text-slate-300">
              <Link href="#" className="hover:text-slate-600">
                Report a Bug
              </Link>
              <Link href="#" className="hover:text-slate-600">
                FAQS
              </Link>
            </div>
          </div>
        </div>
        {/* social Link */}
        <div className="px-3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
          <div className=" flex gap-10 mt-14">
            <Link
              target="blank"
              to="https://www.facebook.com/profile.php?id=61552573325783&mibextid=LQQJ4d"
            >
              <AiOutlineFacebook></AiOutlineFacebook>
            </Link>

            {/* <AiOutlineInstagram></AiOutlineInstagram>
            <AiOutlineLinkedin></AiOutlineLinkedin> */}
          </div>
          <div className=" flex gap-10">
            <span className="flex items-center mt-[52px] gap-2">
              <BsGlobe2></BsGlobe2>
              <span>English</span>
            </span>

            <span className=" flex items-center mt-[52px] gap-2">
              <IoLocateSharp></IoLocateSharp>
              <span>Dhaka,Bangladesh</span>
            </span>
          </div>
        </div>
        {/* Rights */}
        <div className="px-3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-6xl mx-auto flex flex-wrap items-center justify-center space-y-4 sm:justify-between sm:space-y-0 mt-16 mb-16 text-xs">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <h1>©2023 All Rights Reserved to HFGE Team.</h1>
          </div>
          {/* <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
            <li>
              <Link href="#">Privacy</Link>
            </li>
            <li>
              <Link href="#">Accessibility</Link>
            </li>
            <li>
              <Link href="#">Terms</Link>
            </li>
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
