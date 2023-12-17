import React,{useState} from "react";

const Navbar = ({isClicked, toggleBtn, setUserInput }) => {
  const userInput = (e) => {
    console.log(e.target.value)
    setUserInput(e.target.value)
  }
  return (
    <div className={`w-[94%] h-[80px] shadow-lg m-auto relative top-4 flex items-center gap-14 rounded-[20px] p-10 z-10 mb-12 ${isClicked ? 'bg-slate-400' : 'bg-red-400 '}`}>
      <div className="relative w-[400px] bg-white h-12 rounded-[20px]">
        <input
          type="text"
          placeholder="Search..."
          class="w-full h-full pl-8 pr-4 rounded-[20px] bg-transparent outline-none"
          onChange={userInput}
        />
        <i class="fa-solid fa-magnifying-glass absolute right-6 top-4 text-[18px] cursor-pointer"></i>
      </div>
      <div className="flex items-center justify-center relative cursor-pointer">
        <a className='font-semibold text-lg'>Relevence</a>
        <i class="fa-solid fa-angle-down absolute right-[-14px] top-2 -mr-2"></i>
      </div>
      <div className="flex items-center justify-center relative cursor-pointer">
        <a className='font-semibold text-lg'>All Brands</a>
        <i class="fa-solid fa-angle-down absolute right-[-14px] top-2 -mr-2"></i>
      </div>
      <div className="flex items-center justify-center relative cursor-pointer">
      <i class={`fa-solid fa-toggle-${isClicked ? 'on': 'off'} text-4xl ${isClicked ? 'text-blue-600': ''}`} onClick={toggleBtn}></i>

      </div>
    </div>
  );
};

export default Navbar;
