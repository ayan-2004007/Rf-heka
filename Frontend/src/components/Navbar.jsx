import React from "react";
import user from "../assets/nav_user.png"
import alarm from "../assets/Alarm.png"
import search from "../assets/Search.png"
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate=useNavigate()
  return (
    <div className="bg-gradient-to-b from-[#FEC163] to-[#DE4313] px-8 pb-8 pt-6">
      {/* Top Section */}
      <div className="font-dmsans flex items-center justify-between">
        <div>
          <h1 className="font-literata text-white text-4xl font-bold">HEKA</h1>
        </div>
        <div className="flex items-center space-x-2 text-white">
          <button onClick={()=>{navigate("/register")}} className="border-1 border-white text-white px-3 py-2 text-sm font-bold tracking-tighter rounded-lg" >Sign Up</button>
          <img src={alarm} alt="" className="w-8 h-8 cursor-pointer" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-4 ">
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