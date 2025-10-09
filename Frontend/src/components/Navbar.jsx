import React from "react";
import user from "../assets/nav_user.png"
import alarm from "../assets/Alarm.png"
import search from "../assets/Search.png"

export default function Navbar() {
  return (
    <div className="bg-[#FF6700] p-8">
      {/* Top Section */}
      <div className="font-dmsans flex items-center justify-between">
        {/* Left Side - User Info */}
        <div>
          <h1 className="font-dmsans text-white font-semibold text-lg leading-tight">
            Ujjal Dey Sarkar
          </h1>
          <p className="font-dmsans text-white text-xs opacity-90">
            Pioneer Tower Premises No.<br/> 20-084, Street No. 85
          </p>
        </div>

        {/* Right Side - Icons */}
        <div className="flex items-center space-x-4 text-white">
          <img src={user} alt="" className="w-8 h-8 cursor-pointer" />
          <img src={alarm} alt="" className="w-8 h-8 cursor-pointer" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-4">
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
          <img 
            src={search}
            alt=""
            className="w-5 h-5 text-gray-400"
          />
            
          <input
            type="text"
            placeholder="Search"
            className="ml-2  font-dmsans  bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full text-sm"
          />
        </div>
      </div>
    </div>
  );
}