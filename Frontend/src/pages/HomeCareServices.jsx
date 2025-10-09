import React from "react"
import { useParams } from "react-router-dom"
import DB from "../data/db.js"
import homeCareIcon from "../assets/homeCareIcon.png"

const HomeCareServices = () => {
    const { city } = useParams()
    const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
    const cityHomeCare = DB.homeCareServices[formattedCity] || []
    return (
        <div className="font-dmsans min-h-screen bg-[#fff3eb] px-4 py-8 flex flex-col items-center justify-center pb-28">
            <div className="flex flex-col gap-4 mb-20">
                <h1 className="text-4xl text-center text-[#787c86] tracking-tight font-medium">Home Care Services in</h1>
                <h1 className="text-5xl text-center text-[#2F3B59] tracking-tight font-medium">{formattedCity}</h1>
            </div>
            {cityHomeCare.length === 0 ? (
                <p className="text-center text-gray-600">No home care services found.</p>
            ) : (
                <div className="space-y-5 w-full mx-auto">
                    {cityHomeCare.map((h, i) => (
                        <div key={i} className="w-full bg-white p-4 rounded-2xl shadow-md flex items-start space-x-4">
                            <div className="p-3 rounded-xl bg-[#F9C6A3] flex items-center justify-center">
                                <img src={homeCareIcon} alt={h.name} className="w-8 h-8 opacity-60" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-2xl font-semibold text-[#2F3B59] tracking-tighter">{h.name}</h2>
                                    <p className="text-[#6b6b6b] tracking-tight">{h.address}</p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#005A03] font-bold tracking-tighter">{h.reviews}+ Reviews</p>
                                    <div className="flex flex-wrap gap-1">
                                        {h.services.map((service, idx) => (
                                            <span key={idx} className="bg-gray-200 text-gray-800 text-sm font-medium px-2 py-1 rounded-md tracking-tight">
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-[#6b6b6b] tracking-tight">{h.details}</p>
                                </div>
                                <button className="bg-[#FF6700] hover:bg-[#b94a00] text-white font-semibold py-2 px-3 rounded-lg w-36 tracking-tighter">
                                    Contact Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default HomeCareServices
