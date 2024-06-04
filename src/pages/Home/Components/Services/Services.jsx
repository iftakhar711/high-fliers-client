import Lottie from "lottie-react";
import hat from "../../../../image/graduate.json";
import visitor from "../../../../image/visitor.json";
import immigrate from "../../../../image/immigrte.json";
import school from "../../../../image/school.json";
import investor from "../../../../image/investor.json";
import spouse from "../../../../image/coupel.json";

const Services = () => {
  return (
    <div className=" mb-32 ">
      <div>
        <h1 className=" grid text-3xl lg:text-4xl font-extrabold justify-center text-center ">
          When it has to be perfect, <br /> call us!
        </h1>
        <h1 className="grid  justify-center text-xs  mt-2">
          Probably we are the best in this country in terms of visa success
          rate.
        </h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-6  mt-10 lg:w-[1150px] mx-auto  ">
        {/* card 1 */}

        <div className=" p-6 space-y-4 ">
          <div className=" grid justify-center">
            <Lottie animationData={hat} className=" h-20 w-20  "></Lottie>
          </div>
          <p className="text-lg font-bold text-slate-800  grid justify-center">
            Student visa
          </p>
          <p className="  text-lg text-slate-500  grid justify-center text-center">
            we have immense collaboration with so many highly reputed
            universities and colleges around the world.
          </p>
        </div>

        {/* card 2 */}

        <div className=" p-6 space-y-4 ">
          <div className=" grid justify-center">
            <Lottie animationData={spouse} className=" h-20 w-20  "></Lottie>
          </div>
          <p className="text-lg font-bold text-slate-800  grid justify-center">
            Spouse visa
          </p>
          <p className="  text-lg text-slate-500 grid justify-center text-center">
            we have immense collaboration with so many highly reputed
            universities and colleges around the world.
          </p>
        </div>

        {/* card 3 */}

        <div className=" p-6 space-y-4 ">
          <div className=" grid justify-center">
            <Lottie animationData={visitor} className=" h-20 w-20  "></Lottie>
          </div>
          <p className="text-lg font-bold text-slate-800  grid justify-center">
            Visitor Visa
          </p>
          <p className="  text-lg text-slate-500 grid justify-center text-center">
            we have immense collaboration with so many highly reputed
            universities and colleges around the world.
          </p>
        </div>

        {/* card 4 */}

        <div className=" p-6 space-y-4 ">
          <div className=" grid justify-center">
            <Lottie animationData={immigrate} className=" h-20 w-20  "></Lottie>
          </div>
          <p className="text-lg font-bold text-slate-800  grid justify-center">
            Permanent Immigration
          </p>
          <p className="  text-lg text-slate-500 grid justify-center text-center">
            we have immense collaboration with so many highly reputed
            universities and colleges around the world.
          </p>
        </div>

        {/* card 5 */}

        <div className=" p-6 space-y-4 ">
          <div className=" grid justify-center">
            <Lottie animationData={investor} className=" h-20 w-20  "></Lottie>
          </div>
          <p className="text-lg font-bold text-slate-800  grid justify-center">
            Investor and/or Entrepreneur visa
          </p>
          <p className="  text-lg text-slate-500 grid justify-center text-center">
            we have immense collaboration with so many highly reputed
            universities and colleges around the world.
          </p>
        </div>

        {/* card 6 */}

        <div className=" p-6 space-y-4 ">
          <div className=" grid justify-center">
            <Lottie animationData={school} className=" h-20 w-20  "></Lottie>
          </div>
          <p className="text-lg font-bold text-slate-800  grid justify-center">
            Schooling Visa
          </p>
          <p className="  text-lg text-slate-500 grid justify-center text-center">
            we have immense collaboration with so many highly reputed
            universities and colleges around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
