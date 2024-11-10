import React from 'react';
import 'tailwindcss/tailwind.css'; // Make sure you have Tailwind CSS installed and configured

const SmartHomeUI = () => {
  // You would need SVGs and images exported from Figma to use them in img tags.
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-bold">Household</h1>
        <div className="flex space-x-4">
          {/* Icons would be replaced with actual SVGs */}
          <div>User</div>
          <div>Settings</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <span className="text-lg font-semibold">19°C</span>
          <p>Living room</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <span className="text-lg font-semibold">21°C</span>
          <p>Kitchen</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <span className="text-lg font-semibold">19°C</span>
          <p>Bedroom</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <span className="text-lg font-semibold">22°C</span>
          <p>Bathroom</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-center font-semibold mb-4">Current usage</h2>
        {/* Circular progress bar would be an SVG or a custom component */}
        <div className="flex justify-between items-center">
          <div className="text-lg">21°C</div>
          <div className="text-lg">14 kWh</div>
          <div className="text-lg">58%</div>
        </div>
      </div>

      <div>
        <h2 className="text-center font-semibold mb-4">Modes</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Replace div with button if interaction is needed */}
          <div className="bg-green-100 p-4 rounded-lg text-center">Cool air</div>
          <div className="bg-green-100 p-4 rounded-lg text-center">Eco</div>
          <div className="bg-green-100 p-4 rounded-lg text-center">Silent</div>
        </div>
      </div>

      <div className="flex justify-around items-center mt-6">
        {/* Footer icons */}
        <div>Home</div>
        <div>Stats</div>
        <div>Settings</div>
      </div>
    </div>
  );
};

export default SmartHomeUI;
