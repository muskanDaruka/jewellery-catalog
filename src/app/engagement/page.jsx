"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import Cards from "@/components/Engagement/Cards";
import Filters from "@/components/Engagement/Filters";
// import protrait from "../../../public/images/engagement/portrait.png";
// import protraitPic from "../../../public/images/engagement/portrait-pic.png";
import HorizontalList from "@/components/HorizontalList";
import { FaArrowLeft } from "react-icons/fa";

function Page() {
    const [isOpen, setIsOpen] = useState(false);
    const [inStock, setInStock] = useState(false);
    const list = [
        "Occassional",
        "Forever Design",
        "High"
    ]
    return (
        <>
            <div className="font-montserrat pt-24">
                <div className="xl:pt-8 pt-4 xl:px-8 px-4 cursor-pointer">
                        <button
                          onClick={() => back()}
                          className="m-2 text-xl border-0 bg-white flex items-center font-serif text-[#332421]"
                        >
                          <FaArrowLeft size={22} />
                        </button>
                      </div>
                {/* <div className="absolute hidden lg:block">
                    <Image
                        className="object-cover"
                        src={protrait}
                        alt="Engagement portrait"
                    />
                </div>
                <div className="relative w-full px-6 xl:px-12 xl:py-32 flex items-center hidden lg:block cursor-pointer">
                    <div className="max-w-4xl">
                        <h1 className="xl:text-5xl text-2xl font-semibold font-droid-serif text-[#332421] cursor-pointer">
                            Engagement Rings
                        </h1>
                        <p className="mt-4 italic font-Playwrite_US_Modern text-2xl text-[#332421] cursor-pointer">
                            Because forever deserves nothing less than perfection
                        </p>
                        <p className="mt-4 leading-relaxed text-[#332421] text-xl cursor-pointer">
                            An engagement ring isn’t just jewelry—it’s a promise, a moment frozen in time,
                            and the beginning of a beautiful journey. At Diamond Forest, we craft rings that
                            reflect your unique love story, blending timeless elegance with modern sophistication.
                        </p>
                    </div>
                </div> */}
                {/* <div className="flex flex-col xl:flex-row justify-between items-center mx-auto mt-6 cursor-pointer bg-[#e9e5e2]">
                    <div className="text-center xl:text-left px-8">
                        <h1 className="xl:text-3xl text-[#332421] text-xl font-semibold cursor-pointer font-droid pt-2 xl:pt-0">
                            Engagement Ring
                        </h1>
                        <p className="mt-2 font-playwrite text-[#332421] cursor-pointer xl:text-2xl text-xl">Because forever deserves nothing less than perfection</p>
                        <p className="mt-4 xl:w-2/3 leading-relaxed font-playwrite text-[#332421] xl:text-xl text-md cursor-pointer">
                            An engagement ring isn’t just jewelry—it’s a promise, a moment frozen in time, and the beginning of a beautiful journey.
                            At Diamond Forest, we craft rings that reflect your unique love story,
                            blending timeless elegance with modern sophistication.
                        </p>
                    </div>
                    <div className="mt-6 xl:mt-0 xl:w-1/6 w-1/2">
                        <Image
                            className="rounded-lg object-cover w-full"
                            src={protraitPic}
                            alt="Engagement portrait"
                        />
                    </div>
                </div> */}
                <div className="xl:pt-8 pt-4">
                    <HorizontalList data={list} />
                </div>
                <div className="relative place-items-start mt-4 cursor-pointer hidden lg:block m-8">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 xl:mt-4 mt-4 border">
                            <select className="bg-white text-[#332421]">
                                <option value="" className="xl:text-2xl text-md font-medium" defaultValue="">
                                    Sort By
                                </option>
                                <option value="Best Sellers">Best Sellers</option>
                                <option value="Newest">Newest</option>
                                <option value="Price: Low to High">Price: Low to High</option>
                                <option value="Price: High to Low">Price: High to Low</option>
                            </select>
                        </div>
                        <div className="flex items-center xl:mt-4 mt-4 gap-2">
                            <input
                                type="checkbox"
                                id="inStock"
                                checked={inStock}
                                onChange={() => setInStock(!inStock)}
                                className="cursor-pointer rounded-full w-5 h-5"
                            />
                            <label htmlFor="inStock" className="xl:text-2xl text-[#332421] hover:text-[#FF5F15] text-md font-medium cursor-pointer">
                                InStock
                            </label>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 p-1" onClick={() => setIsOpen(!isOpen)}>
                                <h3 className="xl:text-2xl text-md font-medium text-[#332421] hover:text-[#FF5F15] xl:mt-4 mt-4">
                                    Filter
                                </h3>
                                <TbAdjustmentsHorizontal size={25} className="text-[#332421] hover:text-[#FF5F15] xl:mt-4 mt-4" />
                            </div>
                        </div>
                    </div>
                    <div
                        className={`transition-all duration-300 w-full bg-white shadow-lg overflow-hidden ${isOpen ? "max-h-[500px] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                            }`}
                    >
                        <div className="w-full flex justify-end items-center p-2">
                            <RxCross2
                                onClick={() => setIsOpen(false)}
                                size={25}
                                className="text-[#332421] me-2 cursor-pointer hover:text-[#FF5F15]"
                            />
                        </div>
                        <Filters />
                    </div>
                </div>
                <div className='flex justify-between items-center m-8 mb-0 cursor-pointer lg:hidden'>
                    <div className="flex items-center gap-3 p-1" onClick={() => setIsOpen(true)}>
                        <h3 className="xl:text-2xl text-md font-medium text-[#332421] hover:text-[#FF5F15]">Filter</h3>
                        <TbAdjustmentsHorizontal size={25} className="text-[#332421] hover:text-[#FF5F15]" />
                    </div>
                    <div>
                        <section className={`${isOpen ? "block" : "hidden"} xl:w-1/4 p-2 w-full top-0 left-0 z-50 bg-white h-screen fixed cursor-pointer overflow-y-auto`}>
                            <div className='w-full h-10 rounded-md flex justify-end items-center '>
                                <RxCross2 onClick={() => setIsOpen(false)} size={25} className='text-black me-2' />
                            </div>
                            <Filters />
                        </section>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="inStock"
                            checked={inStock}
                            onChange={() => setInStock(!inStock)}
                            className="cursor-pointer"
                        />
                        <label htmlFor="inStock" className="text-[#332421] font-medium cursor-pointer">InStock</label>
                    </div>
                    <div className="flex items-center gap-3 border">
                        <select className="bg-white text-[#332421]">
                            <option value="" className="xl:text-2xl text-md font-medium" defaultValue="">
                                Sort By
                            </option>
                            <option value="Best Sellers">Best Sellers</option>
                            <option value="Newest">Newest</option>
                            <option value="Price: Low to High">Price: Low to High</option>
                            <option value="Price: High to Low">Price: High to Low</option>
                        </select>
                    </div>
                </div>
                {/* Cards Section */}
                <div className="w-full relative">
                    <Cards />
                </div>
            </div>
        </>
    );
}

export default Page;
