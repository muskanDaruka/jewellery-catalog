import CheckBoxButton from "@/components/common/CheckBoxButton";
import React from "react";

function SizeSelectors({ sizes }) {
  return (
    <div className="mt-5">
      <h1 className="font-bold text-[#332421]  hover:text-[#FF5F15]">Size (in)</h1>
      <div className="xl:mb-4">
        {sizes.map((size, index) => (
          <CheckBoxButton key={index} title={size.title} value={size.value} id={size.id}/>
        ))}
      </div>
    </div>
  );
}

export default SizeSelectors;
