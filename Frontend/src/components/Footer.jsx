import React from "react";
import home from "../assets/home.png"
import report from "../assets/reports.png"
import seting from "../assets/settings.png"
import question from "../assets/question.png"

export default function Footer() {
  return (
    <footer className="bg-[#c04d00] text-white py-3 fixed bottom-0 w-full z-50">
      <div className="flex justify-around items-center text-center">
        {/* Home */}
        <div className="flex flex-col items-center">
          <img src={home} alt="" className="w-6 h-6 mb-1" />
          <span className="font-dmsans text-xs">Home</span>
        </div>

        {/* Reports */}
        <div className="flex flex-col items-center">
          <img src={report} className="w-6 h-6 mb-1" />
          <span className="font-dmsans text-xs">Reports</span>
        </div>

        {/* Settings */}
        <div className="flex flex-col items-center">
          <img src={seting} className="w-6 h-6 mb-1" />
          <span className="font-dmsans text-xs">Settings</span>
        </div>

        {/* Help */}
        <div className="flex flex-col items-center">
          <img src={question} className="w-6 h-6 mb-1" />
          <span className="font-dmsans text-xs">Help</span>
        </div>
      </div>
    </footer>
  );
}