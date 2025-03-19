import Link from "next/link";
import React from "react";
// import MenuList from "./menu-list";

function Menu({ route }) {

  return (
    <ul className="lg:flex flex-col lg:flex-row lg:text-black text-[#d9d1bc] justify-around lg:mt-0 mt-5 lg:text-xl w-full cursor-pointer relative">
      {route.map((item) => (
        <li key={item.id} className="group my-2 text-center m-2 p-2 lg:border-none border border-[#d9d1bc] rounded-md text-[#332421]">
          <Link href={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
