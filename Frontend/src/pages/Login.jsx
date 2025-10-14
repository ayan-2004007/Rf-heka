import React from "react";
import bg from "../assets/login.png";
import arrow from "../assets/arrow.png"


export default function Login() {
    return (
        <div
            className="min-h-[90vh] font-dmsans pb-6 flex flex-col items-center justify-center bg-white px-4"
        >
            <div className="bg-transparent flex justify-center items-center relative z-10" >
                <img src={bg} alt="" className="w-[336px] h-auto object-contain"/>
            </div>

            {/* card */}
            <div className="relative z-20 bottom-24 rounded-2xl overflow-hidden shadow-lg mx-auto w-full max-w-sm">
                <div className="p-8 bg-gradient-to-b from-[#FEC163] to-[#DE4313] text-white py-20">
                    <h1 className="text-center font-dmsans text-[44px] font-semibold tracking-wide">LOGIN</h1>

                    <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
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
                                className="mt-5 font-dmsans flex items-center justify-center gap-3 px-8 py-3 rounded-full bg-white text-orange-600 font-semibold shadow-md hover:shadow-lg transition w-2/3"
                            >
                                <span>Login</span>
                                <img src={arrow} alt="arrow" className="h-6" />
                            </button>
                        </div>
                    </form>
                </div>


            </div>


        </div>
    );
}
