import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContuctUs from "../pages/ContuctUs/ContuctUs";
import Service from "../pages/Service/Service";
import Errorpage from "../pages/Errorpage/Errorpage";
import Comingsoon from "../pages/Comingsoon/Comingsoon";
import AboutChina from "../pages/Home/Components/About/AboutChina";
import AboutFinland from "../pages/Home/Components/About/AboutFinland";
import AboutDenmark from "../pages/Home/Components/About/AboutDenmark";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contuctus",
        element: <ContuctUs></ContuctUs>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "soon",
        element: <Comingsoon></Comingsoon>,
      },
      {
        path: "aboutchina",
        element: <AboutChina></AboutChina>,
      },
      {
        path: "aboutfinland",
        element: <AboutFinland></AboutFinland>,
      },
      {
        path: "aboutdanmark",
        element: <AboutDenmark></AboutDenmark>,
      },
    ],
  },
]);
