import React from "react";

const FormSection: React.FC = () => {
  return (
    <div className="w-3/4 bg-gray-50 p-8">
      <div className="space-y-6">
        {/* Business address section */}
        <div>
          <label className="block text-gray-700">Business address</label>
          <select className="w-full mt-2 p-3 border border-gray-300 rounded-md">
            <option>Registered business address</option>
          </select>
        </div>
        {/* Type of business */}
        <div>
          <label className="block text-gray-700">Type</label>
          <select className="w-full mt-2 p-3 border border-gray-300 rounded-md">
            <option>Type of business</option>
          </select>
        </div>
        {/* Address inputs */}
        <div>
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            placeholder="Address line 1"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md mb-3"
          />
          <input
            type="text"
            placeholder="Address line 2"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md mb-3"
          />
          <input
            type="text"
            placeholder="City"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md mb-3"
          />
          <input
            type="text"
            placeholder="Zip"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md mb-3"
          />
        </div>
        {/* Continue button */}
        <button className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600">
          Continue →
        </button>
      </div>
    </div>
  );
};

export default FormSection;
