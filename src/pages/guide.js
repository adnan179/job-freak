import React from "react";
import bg from "../assets/guidebg.png";
const Guide = () => {
  return (
    <section className="flex w-full min-h-screen justify-center laptop:p-[100px] tablet:p-[60px] phone:p-3">
      <div className="grid grid-cols-1">
        <div className="flex">
          <h1 className="text-4xl font-bold text-purple-800">
            "Unlock Your Potential: Seek Guidance, Mail Us!"
          </h1>
        </div>
        <div className="flex justify-center items-center text-gray-900 font-medium cursor-pointer">
          guidance@jobfreak.in
        </div>
        <div>
          <img src={bg} alt="bg" />
        </div>
      </div>
    </section>
  );
};

export default Guide;
