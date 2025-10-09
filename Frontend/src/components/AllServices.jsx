import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import allopathy from "../assets/Allopathy.png";
import homeopathy from "../assets/Homeopathy.png";
import ayurvedic from "../assets/Ayurvedic.png";
import ic1 from "../assets/ic1.png";
import ic2 from "../assets/ic2.png";
import ic3 from "../assets/ic3.png";
import ic4 from "../assets/ic4.png";
import ic5 from "../assets/ic5.png";
import ic6 from "../assets/ic6.png";
import ic7 from "../assets/ic7.png";
import ic8 from "../assets/ic8.png";
import ic9 from "../assets/ic9.png";
import ic10 from "../assets/ic10.png";
import phone from "../assets/phone.png";
import wp from "../assets/wp.png";

const services = [
    { title: "Find Hospitals", icon: ic1, route: "/choose-city/hospitals" },
    { title: "Find Hotels", icon: ic2, route: "/choose-city/hotels" },
    { title: "Find Rooms", icon: ic3, route: "/choose-city/rooms" },
    { title: "Book Ambulance", icon: ic4, route: "/choose-city/ambulance" },
    { title: "Emergency Services", icon: ic5, route: "/choose-city/services" },
    { title: "Doctor Consultation", icon: ic6, route: "/consultation" },
    { title: "Home Care Services", icon: ic7, route: "/choose-city/home-care" },
    { title: "Hospital Admission", icon: ic8, route: "/admission", isPopup: true },
    { title: "Lab Test", icon: ic9, route: "/test" },
    { title: "Add Patient Details", icon: ic10, route: "/patient-details" },
];

const categories = [
    { title: "Allopathy", icon: allopathy },
    { title: "Homeopathy", icon: homeopathy },
    { title: "Ayurvedic", icon: ayurvedic },
];

const AllServices = () => {
    const [selectedCategory, setSelectedCategory] = useState("Allopathy");
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleCardClick = (c) => {
        if (c.isPopup) {
            setShowPopup(true);
        } else {
            navigate(c.route);
        }
    };

    return (
        <div className="font-dmsans w-full bg-white flex flex-col items-center p-4">

            <div className="mb-10 flex flex-wrap justify-center gap-3 w-full max-w-xs sm:max-w-sm">
                {categories.map((cat) => (
                    <button
                        key={cat.title}
                        onClick={() => setSelectedCategory(cat.title)}
                        className={`flex flex-col items-center justify-center w-24 sm:w-28 rounded-lg py-2 sm:py-3 transition-all duration-200 ${selectedCategory === cat.title ? "bg-[#212121] text-white scale-110" : "bg-[#212121] text-white"}`} > 
                    <img src={cat.icon} alt={cat.title} className="w-6 h-6 sm:w-7 sm:h-7 mb-1" /> 
                    <span className="text-xs sm:text-sm font-medium"> {cat.title} </span> 
                    </button> 
                ))} 
                </div>

            <div className="mx-auto grid grid-cols-3 grid-rows-4 gap-4 w-full px-2">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-4 py-4 px-2 bg-white rounded-lg border border-[#CFCFCF] active:scale-90 duration-200 transition-transform"
                        onClick={() => handleCardClick(item)}
                    >
                        <img src={item.icon} alt={item.title} className="h-14 w-14 object-contain" />
                        <p className="text-base text-center text-[#565656] tracking-tighter leading-[16px] font-semibold">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* --- Popup for Hospital Admission --- */}
            {showPopup && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-[4px] flex items-center justify-center z-50 px-6">
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm text-center">
                        <h1 className="text-4xl py-10 tracking-tighter text-center text-[#2F3B59] font-medium capitalize">
                            Hospital Admission
                        </h1>
                        <div className="space-y-4">
                            <a
                                href="tel:6289924753"
                                className="flex items-center justify-center gap-3 w-full py-3 bg-[#4052D6] hover:bg-indigo-700 text-white font-medium rounded-xl tracking-tight"
                            >
                                <img src={phone} alt="" className="w-6 h-6" /> Call Now
                            </a>
                            <a
                                href="https://wa.me/6289924753"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full py-3 bg-green-600 text-white font-medium rounded-xl tracking-tight"
                            >
                                <img src={wp} alt="" className="w-6 h-6" /> WhatsApp
                            </a>
                        </div>
                        <button onClick={() => setShowPopup(false)} className="mt-6 text-sm text-gray-500 underline">
                            Cancel
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AllServices;
