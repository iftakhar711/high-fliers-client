import { BiLogoFacebook } from "react-icons/bi";
// import { AiFillLinkedin } from "react-icons/ai";
// import { AiFillInstagram } from "react-icons/ai";
// import { BiLogoWhatsappSquare } from "react-icons/bi";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className=" flex  justify-between h-6 mt-2 invisible md:visible lg:visible  ">
      <div className=" flex gap-6 ml-6 ">
        <span className=" text-xs font-semibold text-[#0EA5E9]">
          Phone: +880 1869-653084
        </span>
        <span className="text-xs font-semibold text-[#0EA5E9]">
          Email: info@hfge.global
        </span>
      </div>
      <div className=" flex gap-6  mr-10  ">
        <Link
          to="https://www.facebook.com/profile.php?id=61552573325783&mibextid=LQQJ4d"
          target="blank"
        >
          <BiLogoFacebook className="  hover:animate-pulse text-2xl bg-slate-200 p-1 text-[#0866ff]"></BiLogoFacebook>
        </Link>
        {/* <AiFillLinkedin className="  hover:animate-pulse text-lg text-[#317daf]"></AiFillLinkedin>
        <AiFillInstagram className=" text-lg text-[#eb01de]"></AiFillInstagram>
        <BiLogoWhatsappSquare className=" text-lg text-[#00e676]"></BiLogoWhatsappSquare> */}
      </div>
    </div>
  );
};

export default Social;
