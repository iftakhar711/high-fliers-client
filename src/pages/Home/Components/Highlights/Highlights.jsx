import img from "../../../../image/denmark.png";

const Highlights = () => {
  return (
    <>
      <div className=" grid justify-start  mt-6 mb-6">
        <h1 className=" text-3xl lg:text-4xl ms-8  font-semibold">
          HIGHTLIGHTS
        </h1>
        <span className="  border-b-2 w-12 ms-8 border-sky-400"></span>
      </div>

      <div className=" mb-4 mt-3 grid justify-center">
        <img src={img} className=" h-[400px] p-3" alt="" />
      </div>
    </>
  );
};

export default Highlights;
