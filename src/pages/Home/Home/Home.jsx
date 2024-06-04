import { useEffect } from "react";
import About from "../Components/About/About";
import Backtotop from "../Components/Backtotop/Backtotop";
import Carousel from "../Components/Carousel/Carousel";
import Highlights from "../Components/Highlights/Highlights";
// import Review from "../Components/Review/Review";
import Services from "../Components/Services/Services";
import Steps from "../Components/Steps/Steps";
import Whyus from "../Components/WhyUs/Whyus";

const Home = () => {
  useEffect(() => {
    document.title = "HFGE | HOME";
  }, []);

  return (
    <>
      <Carousel></Carousel>
      <About></About>
      <Whyus></Whyus>
      <Services></Services>
      <Steps></Steps>
      <Highlights></Highlights>
      {/* <Review></Review> */}
      <Backtotop></Backtotop>
    </>
  );
};

export default Home;
