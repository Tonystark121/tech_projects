import React from "react";
import building from "./Pages/Vector_1.png";
import window from "./Pages/Vector_2.png";

const Building = () => {
  return (
    <div className="relative bg-red- h-[200px] w-[200px] m-auto ">
      <img src={building} className="w-full" alt="" />

      <img
        src={window}
        className="absolute top-[57%] left-[10%] font-bold"
        alt=""
      />
      <img src={window} className="absolute top-[66%] left-[10%]" alt="" />
      <img src={window} className="absolute top-[75%] left-[10%]" alt="" />

      <img src={window} className="absolute top-[57%] left-[19%]" alt="" />
      <img src={window} className="absolute top-[66%] left-[19%]" alt="" />
      <img src={window} className="absolute top-[75%] left-[19%]" alt="" />

      <img src={window} className="absolute top-[57%] left-[44%]" alt="" />
      <img src={window} className="absolute top-[57%] left-[52.5%]" alt="" />
      <img src={window} className="absolute top-[58%] left-[76%]" alt="" />

      <img src={window} className="absolute top-[66%] left-[76%]" alt="" />
      <img src={window} className="absolute top-[75%] left-[76%]" alt="" />

      <img src={window} className="absolute top-[57%] left-[85%]" alt="" />
      <img src={window} className="absolute top-[66%] left-[85%]" alt="" />
      <img src={window} className="absolute top-[75%] left-[85%]" alt="" />
    </div>

    // <div className="relative bg-red-600 h-[200px] w-[200px] m-auto ">
    //   <img src={building} className="w-full" alt="" />
    //   <img src={window} className="absolute top-[114px] left-5" alt="" />
    //   <img src={window} className="absolute top-[132px] left-5" alt="" />
    //   <img src={window} className="absolute top-[150px] left-5" alt="" />
    //   <img src={window} className="absolute top-[113px] left-[38px]" alt="" />
    //   <img src={window} className="absolute top-[131px] left-[38px]" alt="" />
    //   <img src={window} className="absolute top-[149px] left-[38px]" alt="" />
    //   <img src={window} className="absolute top-[113px] left-[88px]" alt="" />
    //   <img src={window} className="absolute top-[113px] left-[105px]" alt="" />
    //   <img src={window} className="absolute top-[114px] left-[152px]" alt="" />
    //   <img src={window} className="absolute top-[132px] left-[152px]" alt="" />
    //   <img src={window} className="absolute top-[150px] left-[152px]" alt="" />
    //   <img src={window} className="absolute top-[113px] left-[170px]" alt="" />
    //   <img src={window} className="absolute top-[131px] left-[170px]" alt="" />
    //   <img src={window} className="absolute top-[149px] left-[170px]" alt="" />
    // </div>
  );
};

export default Building;
