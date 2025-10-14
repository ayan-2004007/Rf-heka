import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import allopathy from "../assets/Allopathy.png";
import homeopathy from "../assets/Homeopathy.png";
import ayurvedic from "../assets/Ayurvedic.png";
import moreThan from "../assets/moreThan.png"

import ic1 from "../assets/hospital.webp";
import ic2 from "../assets/hotel.jpg";
import ic3 from "../assets/room.jpg";
import ic4 from "../assets/ambulance.png";
import ic5 from "../assets/emergency.jfif";
import ic6 from "../assets/doctor.jfif";
import ic7 from "../assets/homecare.webp";
import ic8 from "../assets/hospitaladmission.webp";
import ic9 from "../assets/labtest.jpg";
import ic10 from "../assets/addpatient.jpg";

import phone from "../assets/phone.png";
import wp from "../assets/wp.png";

const services = [
    { title: "Find", sub: "Hospitals", image: ic1, route: "/choose-city/hospitals" },
    { title: "Find", sub: "Hotels", image: ic2, route: "/choose-city/hotels" },
    { title: "Find", sub: "Rooms", image: ic3, route: "/choose-city/rooms" },
    { title: "Emergency", sub: "Services", image: ic5, route: "/choose-city/services" },
    { title: "Home Care", sub: "Services", image: ic7, route: "/choose-city/home-care" },
    { title: "Doctor", sub: "Consultations", image: ic6, route: "/consultation" },
    { title: "Hospital", sub: "Admission", image: ic8, route: "/admission", isPopup: true },
    { title: "Add Patient", sub: "Details", image: ic10, route: "/patient/add" },
    { title: "Book", sub: "Ambulance", image: ic4, route: "/choose-city/ambulance" },
    { title: "Lab", sub: "Tests", image: ic9, route: "/test" },

];

const categories = [
    { title: "Allopathy", icon: allopathy },
    { title: "Homeopathy", icon: homeopathy },
    { title: "Ayurvedic", icon: ayurvedic },
];



export default function AllServices() {
    const [selectedCategory, setSelectedCategory] = useState("Allopathy");
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const filteredServices = services;

    const handleCardClick = (c) => {
        if (c.isPopup) {
            setShowPopup(true);
        } else {
            navigate(c.route);
        }
    };

    useEffect(() => {
        AOS.init({})
        AOS.refresh()
    }, [])

    return (
        <div className="font-dmsans w-full bg-white flex flex-col gap-20 items-center p-4">
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-sm sm:max-w-sm">
                {categories.map((cat) => (
                    <button
                        key={cat.title}
                        onClick={() => setSelectedCategory(cat.title)}
                        className={`flex flex-col items-center justify-center w-24 sm:w-28 rounded-lg py-2 sm:py-3 transition-all duration-200 ${selectedCategory === cat.title ? "bg-gradient-to-b from-[#00DDC5] to-[#00695E] text-white scale-125" : "bg-gradient-to-b from-[#00DDC5] to-[#00695E] text-white"}`} >
                        <img src={cat.icon} alt={cat.title} className="w-6 h-6 sm:w-7 sm:h-7 mb-1" />
                        <span className="text-xs sm:text-sm font-medium"> {cat.title} </span>
                    </button>
                ))}
            </div>

            {/* Services Grid */}
            <div className="mx-auto w-full max-w-4xl px-2">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredServices.map((item, index) => (
                        <button
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-anchor-placement="center-bottom"
                            key={index}
                            onClick={() => handleCardClick(item)}
                            className="relative text-left rounded-[16px] overflow-hidden border-2 border-[#E6E6E6] bg-white focus:outline-none focus:ring-2 focus:ring-orange-300 transform transition duration-150 active:scale-95"
                            aria-label={item.title.replace("\n", " ")}
                        >
                            <div
                                className="h-36 sm:h-40 bg-center bg-cover relative rounded-[16px]"
                                style={{ backgroundImage: `url(${item.image})` }}
                                aria-hidden="true"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 rounded-[16px]" />
                                <div className="absolute text-center bottom-4 left-4 flex flex-col -space-y-1">
                                    <h1 className="text-white text-3xl whitespace-pre-line tracking-tighter">
                                        {item.title}
                                    </h1>
                                    <h1 className="text-white text-lg whitespace-pre-line tracking-tighter">
                                        {item.sub}
                                    </h1>
                                </div>
                            </div>

                            <div className="px-4 py-4 bg-white">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-[#8B8B8B] leading-[16px] font-medium">Lorem Ipsum Dolor Sit Amet,</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div className="h-8 w-8  flex items-center justify-center ">
                                            <img src={moreThan} alt="" className="h-4 w-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* --- Popup for Hospital Admission --- */}
            {showPopup && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-6">
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm text-center">
                        <h1 className="text-2xl sm:text-3xl py-6 tracking-tighter text-[#2F3B59] font-medium capitalize">
                            Hospital Admission
                        </h1>

                        <div className="space-y-4">
                            <a
                                href="tel:6289924753"
                                className="flex items-center justify-center gap-3 w-full py-3 bg-[#4052D6] hover:bg-indigo-700 text-white font-medium rounded-xl tracking-tight"
                            >
                                <img src={phone} alt="phone" className="w-6 h-6" /> Call Now
                            </a>

                            <a
                                href="https://wa.me/6289924753"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl tracking-tight"
                            >
                                <img src={wp} alt="whatsapp" className="w-6 h-6" /> WhatsApp
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
}

