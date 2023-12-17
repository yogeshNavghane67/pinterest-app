import Image from "next/image";
import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

function Header() {
  return (
    <div className="flex gap-3 md:gap-2 items-center p-6" >
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      />
      <button className="bg-black text-white p-2 px-4 rounded-full hidden md:block">
        Home
      </button>
      <button className="font-semibold p-2 px-4 rounded-full text-[25px]">Create</button>
      <div className='bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full hidden md:flex'>
        <IoSearchSharp className="text-[25px] text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full text-[25px] "
        />
      </div>
      <IoSearchSharp className="text-[25px] text-gray-500 md:hidden" />
      <FaBell className="text-[25px] md:text-[40px] text-gray-500 cursor-pointer" />
      <AiFillMessage className="text-[25px] md:text-[40px] text-gray-500 cursor-pointer" />
      <Image
        src="/man.png"
        alt="user-image"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      />
    </div>
  );
}

export default Header;
