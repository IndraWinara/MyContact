import Link from "next/link";
import React from "react";


const Hero = () => {
  return (
    <div className="border-b-[1px] p-2 flex  border-l-[1px] border-r-[1px] shadow-2xl border-black h-full">
      <Link href="/contact" className="w-fit h-fit">
        <img
          src="https://purepng.com/public/uploads/large/purepng.com-contacts-icon-galaxy-s6symbolsiconssamsungapp-iconsgalaxy-s6-icons-721522597448sudp9.png"
          alt="whatapp"
          className="w-[50px] h-[50px] hover:scale-105 duration-300 cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Hero;
