import { useState } from "react";
import { Link } from "react-router-dom";

import high from "../../../../image/image.png.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" bg-white  md:sticky lg:sticky top-0 z-50 ">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0">
        <div className="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-bold tracking-wide text-black uppercase">
              <img src={high} alt="" className=" h-20 w-20" />
            </span>
          </a>
          <ul className=" items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                onClick={top}
                to="/"
                className="font-bold text-xs tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                HOME
              </Link>
            </li>

            <li>
              <Link
                onClick={top}
                to="/about"
                className="font-bold text-xs tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                onClick={top}
                to="/service"
                className="font-bold text-xs tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                onClick={top}
                to="/contuctus"
                className="font-bold text-xs tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <Link
                onClick={top}
                to="/soon"
                className="font-bold text-xs tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                ARTICLES
              </Link>
            </li>
            <li>
              {/* <Link
                onClick={top}
                to="/soon"
                className="inline-flex items-center justify-center h-12 px-6 font-bold text-xs tracking-wide text-black transition duration-200  shadow-md bg-sky-500 rounded-full  focus:shadow-outline focus:outline-none"
                aria-label="Apply"
              >
                APPLY NOW
              </Link> */}
              <button className="inline-flex items-center justify-center h-12 px-6 font-bold text-xs tracking-wide text-black transition duration-200  shadow-md bg-white rounded-full  focus:shadow-outline focus:outline-none relative py-2  isolation-auto z-10 border-2 border-lime-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-sky-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
                APPLY NOW
              </button>
            </li>
          </ul>
          {/* <ul className="items-center hidden space-x-8 lg:flex"> */}
          <div className=" lg:hidden">
            <h1 className=" text-lg text-sky-600 font-bold hover:transform  hover:tracking-tighter duration-700">
              HIGH FLYERS
            </h1>
          </div>
          {/* </ul> */}
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1  rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>

            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-30">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <span className="ml-2 text-xl  ">
                          <img src={high} className="h-12 w-12 mr-4" alt="" />
                        </span>
                      </a>
                    </div>

                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="  space-y-4">
                      <li>
                        <Link
                          to="/"
                          onClick={() => setIsMenuOpen(false)}
                          className=" font-bold text-xs tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          HOME
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          onClick={() => setIsMenuOpen(false)}
                          className="font-bold text-xs tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          ABOUT US
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/service"
                          onClick={() => setIsMenuOpen(false)}
                          className="font-bold text-xs tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          SERVICES
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contuctus"
                          onClick={() => setIsMenuOpen(false)}
                          className="font-bold text-xs tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          CONTACT US
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/soon"
                          onClick={() => setIsMenuOpen(false)}
                          className="font-bold text-xs tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          ARTICLES
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
