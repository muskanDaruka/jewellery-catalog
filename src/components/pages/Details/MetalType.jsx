"use client";
import React, { useState } from "react";

function MetalType({ metalType }) {
  const [selectedMetals, setSelectedMetals] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedMetals((prev) =>
      prev.includes(id) ? prev.filter((metalId) => metalId !== id) : [...prev, id]
    );
  };

  return (
    <div className="mt-5">
      <div className="flex gap-2">
        {metalType.map((item) => (
          <label key={item.id} className="flex flex-col items-center cursor-pointer">
            <input
              type="checkbox"
              checked={selectedMetals.includes(item.id)}
              onChange={() => handleCheckboxChange(item.id)}
              className="hidden"
            />
            <div
              className={`rounded-full text-sm text-[#332421] h-12 w-12 border flex items-center justify-center transition-all ${
                selectedMetals.includes(item.id)
                  ? "border-black border-2"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: item.colorCode }}
            ></div>
            {/* <span className="text-xs mt-1">{item.title}</span> */}
          </label>
        ))}
      </div>
    </div>
  );
}

export default MetalType;
