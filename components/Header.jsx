import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center gap-10 w-[370px] bg-sky-400 h-[70px] rounded-t-[50px]">
      <div className="flex w-[15px] h-[15px] bg-slate-700 rounded-full"></div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <div className="flex gap-1 items-center justify-center w-[60px] h-[10px] bg-slate-700 rounded-full">
        <div className='flex w-[5px] h-[5px] bg-white rounded-full'></div>
        <div className='flex w-[5px] h-[5px] bg-white rounded-full'></div>
        <div className='flex w-[5px] h-[5px] bg-white rounded-full'></div>
        <div className='flex w-[5px] h-[5px] bg-white rounded-full'></div>
        <div className='flex w-[5px] h-[5px] bg-white rounded-full'></div>
        </div>
        <h1 className="font-extrabold text-white mt-[-4px]">SAMSUNG</h1>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex w-[23px] h-[23px] bg-black rounded-full"></div>
        <div className="flex w-[15px] h-[15px] bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default Header;
