import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContuctUs from "../pages/ContuctUs/ContuctUs";
import Service from "../pages/Service/Service";
import Errorpage from "../pages/Errorpage/Errorpage";
import Comingsoon from "../pages/Comingsoon/Comingsoon";

export const router = createBrowserRouter (
    [
    
    { 
        path: '/',
        element: <Main></Main>,
        errorElement:<Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:"/about",
                element: <AboutUs></AboutUs>
            },
            {
                path:"/contuctus",
                element: <ContuctUs></ContuctUs>
            },
            {
                path:"/service",
                element: <Service></Service>
            },
            {
                path:"soon",
                element: <Comingsoon></Comingsoon>
            }
        ]
    }

    ]
)