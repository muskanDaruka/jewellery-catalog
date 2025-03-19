"use client";
import React, { useState } from "react";
import { IoClose, IoReorderThree } from "react-icons/io5";
import { useRouter } from "next/navigation";

function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const route = [
    { id: 2, label: "Rings", path: "/engagement" },
    { id: 1, label: "Necklace", path: "#" },
    { id: 3, label: "Bracelets", path: "#" },
    { id: 4, label: "Earrings", path: "#" },
    { id: 5, label: "Pendants", path: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4 font-montserrat">
      <div className=" max-w-7xl mx-auto">
        <IoReorderThree
          className="lg:hidden cursor-pointer"
          size={25}
          onClick={() => setOpen(!open)}
        />
        <div
          className="font-semibold text-md lg:text-3xl uppercase text-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          Diamond Forest
        </div>
        <div className="hidden lg:block text-center mt-2 space-x-24">
          {route.map((item) => (
            <button
              key={item.id}
              onClick={() => router.push(item.path)}
              className="text-[#332421] hover:text-[#FF5F15] text-xl"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      {open && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white shadow-md p-4">
          <IoClose
            className="text-[#332421] cursor-pointer float-right"
            size={25}
            onClick={() => setOpen(false)}
          />
          <div className="mt-8">
            {route.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  router.push(item.path);
                  setOpen(false); 
                }}
                className="block w-full p-4 text-left text-gray-700 hover:text-black"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
