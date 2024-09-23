import React from "react";

const FormSection: React.FC = () => {
  return (
    <main className="container ">
      <div className="flex items-center gap-6">
        <div className="mt-20 flex gap-4 flex-col items-center justify-center h-[282px] w-12 bg-[#EEE] rounded-[109px]">
          <div className="flex items-center justify-center mt-1 w-[26px] h-[26px] text-[#000] bg-[#fff]  hover:bg-[#4A3AFF] hover:text-[#fff] rounded-2xl cursor-pointer">
            1
          </div>
          <div className="flex items-center justify-center mt-1 w-[26px] h-[26px] text-[#000] bg-[#fff]  hover:bg-[#4A3AFF] hover:text-[#fff] rounded-2xl cursor-pointer">
            2
          </div>
          <div className="flex items-center justify-center mt-1 w-[26px] h-[26px] text-[#000] bg-[#fff]  hover:bg-[#4A3AFF] hover:text-[#fff] rounded-2xl cursor-pointer">
            3
          </div>
          <div className="flex items-center justify-center mt-1 w-[26px] h-[26px] text-[#000] bg-[#fff]  hover:bg-[#4A3AFF] hover:text-[#fff] rounded-2xl cursor-pointer">
            4
          </div>
          <div className="flex items-center justify-center mt-1 w-[26px] h-[26px] text-[#000] bg-[#fff]  hover:bg-[#4A3AFF] hover:text-[#fff] rounded-2xl cursor-pointer">
            5
          </div>
          <div className="flex items-center justify-center mt-1 w-[26px] h-[26px] text-[#000] bg-[#fff]  hover:bg-[#4A3AFF] hover:text-[#fff] rounded-2xl cursor-pointer">
            6
          </div>
        </div>
        <div>
          <div className="mt-20 flex gap-4 flex-col items-center justify-center h-[282px] w-12rounded-[109px]">
            <div className="flex items-center justify-center mt-1  h-[26px] text-[#000] cursor-pointer">
              Business structure
            </div>
            <div className="flex items-center justify-center mt-1  h-[26px] text-[#000] cursor-pointer">
              Business representative
            </div>
            <div className="flex items-center justify-center mt-1  h-[26px] text-[#000] cursor-pointer">
              Business details
            </div>
            <div className="flex items-center justify-center mt-1  h-[26px] text-[#000] cursor-pointer">
              Bank details
            </div>
            <div className="flex items-center justify-center mt-1  h-[26px] text-[#000] cursor-pointer">
              2 step authentication
            </div>
            <div className="flex items-center justify-center mt-1  h-[26px] text-[#000] cursor-pointer">
              Overview
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FormSection;
