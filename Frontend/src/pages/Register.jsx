import React from "react";
import bg from "../assets/Register.png";
import arrow from "../assets/arrow.png";

export default function Register() {
    return (
        <div className="min-h-[90vh] font-dmsans pb-6 flex flex-col items-center justify-center bg-white px-4">
            {/* Illustration at the top */}
            <div className="bg-transparent flex justify-center items-center relative z-10">
                <img src={bg} alt="Register illustration" className="w-[336px] h-auto object-contain" />
            </div>

            {/* Card */}
            <div className="relative z-20 bottom-24 rounded-2xl overflow-hidden shadow-lg mx-auto w-full max-w-sm">
                <div className="p-8 bg-gradient-to-b from-[#FEC163] to-[#DE4313] text-white py-20">
                    <h1 className="text-center font-dmsans text-[44px] font-semibold tracking-wide">REGISTER</h1>

                    <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
                        {/* Name input */}
                        <label className="block">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 bg-white  rounded-full text-[#212121] outline-none focus:ring-2 ring-[#975b00] "
                                required
                            />
                        </label>

                        {/* Email input */}
                        <label className="block">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 bg-white  rounded-full text-[#212121] outline-none focus:ring-2 ring-[#975b00]"
                                required
                            />
                        </label>

                        {/* Password input */}
                        <label className="block">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 bg-white  rounded-full text-[#212121] outline-none focus:ring-2 ring-[#975b00] "
                                required
                            />
                        </label>

                        {/* Submit button */}
                        <div className="pt-2 flex justify-center">
                            <button
                                type="submit"
                                className="mt-5 font-dmsans flex items-center justify-center gap-3 px-8 py-3 rounded-full bg-white text-orange-600 font-semibold  "
                            >
                                <span>REGISTER</span>
                                <img src={arrow} alt="arrow" className="h-6" />
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
