import React from "react";

interface SidebarProps {
  currentStep: number;
}

const Sidebar: React.FC<SidebarProps> = ({ currentStep }) => {
  return (
    <div className="w-1/4 bg-white p-6">
      <ul className="space-y-4">
        <li
          className={`flex items-center space-x-2 ${
            currentStep === 1 ? "text-black" : "text-gray-400"
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full ${
              currentStep === 1
                ? "bg-blue-500 text-white"
                : "border border-gray-300"
            } flex items-center justify-center`}
          >
            1
          </div>
          <span>Business structure</span>
        </li>
        <li
          className={`ml-8 ${currentStep > 1 ? "text-black" : "text-gray-400"}`}
        >
          Business representative
        </li>
        <li
          className={`ml-8 ${currentStep > 1 ? "text-black" : "text-gray-400"}`}
        >
          Business details
        </li>
        {/* Similar for other steps */}
      </ul>
    </div>
  );
};

export default Sidebar;
