import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/login.png";
import arrow from "../assets/arrow.png"


export default function Login() {
    const navigate=useNavigate()
    return (
        <div
            className="min-h-[90vh] font-dmsans pb-6 flex flex-col items-center justify-center bg-white px-4"
        >
            <div className="bg-transparent flex justify-center items-center relative z-10" >
                <img src={bg} alt="" className="w-[336px] h-auto object-contain" />
            </div>

            {/* card */}
            <div className="relative z-20 bottom-24 rounded-2xl overflow-hidden shadow-lg mx-auto w-full max-w-sm">
                <div className="p-8 bg-gradient-to-b from-[#FEC163] to-[#DE4313] text-white py-20">
                    <h1 className="text-center font-dmsans text-[44px] font-semibold tracking-tighter">Sign In</h1>

                    <form className="mt-8 space-y-2" onSubmit={(e) => e.preventDefault()}>
                        <label className="block ">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3  rounded-full bg-white text-[#8D8D8D] outline-none focus:ring-2 ring-[#975b00]"
                                required
                            />
                        </label>

                        <label className="block">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 rounded-full bg-white text-[#212121] outline-none focus:ring-2 ring-[#975b00]"
                                required
                            />
                        </label>

                        <div className="pt-2 flex justify-center">
                            <button
                                type="submit"
                                className="mt-5 font-dmsans flex items-center justify-center gap-3 px-8 py-3 rounded-full bg-white text-orange-600 font-bold tracking-tighter "
                            >
                                <span>SIGN IN</span>
                                <img src={arrow} alt="arrow" className="h-6" />
                            </button>
                        </div>
                    </form>
                    <h1 className="mt-8 text-center font-dmsans base font-semibold tracking-tighter">Dont have any account ? <span className="underline" onClick={()=>{navigate("/register")}}>Sign up.</span></h1>
                </div>


            </div>


        </div>
    );
}
