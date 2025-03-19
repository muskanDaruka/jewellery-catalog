"use client";
import React, { useState } from 'react';
import style1 from '../../../public/images/Mixed_Metal_v2.webp';
import { Icon } from "@iconify/react";
import Image from 'next/image';

function Filters() {
    const [toggleMetal, setToggleMetal] = useState(true);
    const [toggleStyle, setToggleStyle] = useState(true);
    const [toggleWidth, setToggleWidth] = useState(true);
    const [toggleGemstone, setToggleGemstone] = useState(true);
    const [toggleEngravable, setToggleEngravable] = useState(true);
    const [selectedMetals, setSelectedMetals] = useState([]);
    const [selectedStyles, setSelectedStyles] = useState([]);

    const metal = [
        { id: 1, colorCode: "#ffffff", text: "14K", title: "White gold" },
        { id: 2, colorCode: "#e5ce83", text: "14K", title: "Yellow gold" },
        { id: 3, colorCode: "#e7ba9a", text: "14K", title: "Rose gold" },
        { id: 4, colorCode: "#ffffff", text: "14K", title: "Platinum" },
    ];
    const style = [
        { id: 1, img: style1, alt: "Mixed Metal", title: "Mixed Metal" },
        { id: 2, img: style1, alt: "Comfort fit", title: "Comfort fit" },
        { id: 3, img: style1, alt: "Unique", title: "Unique" },
        { id: 4, img: style1, alt: "Beveled", title: "Beveled" },
    ];
    const width = [
        { id: 1, title: "under 5mm" },
        { id: 2, title: "5-6mm" },
        { id: 3, title: "6-7mm" },
        { id: 4, title: "Over 7mm" },
    ];
    const gemstone = [
        { id: 1, title: "Natural Diamond" },
        { id: 2, title: "Lab Diamond" },
        { id: 3, title: "Black Diamond" },
        { id: 4, title: "Sapphire" },
        { id: 5, title: "Other Gemstones" }
    ];
    const engravable = [
        { id: 1, title: "Engravable Only" }
    ];

    const handleMetalSelection = (id) => {
        setSelectedMetals((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const handleStyleSelection = (id) => {
        setSelectedStyles((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };
    return (
        <>
            <div className='grid xl:grid-cols-4 gap-6 m-4 font-montserrat'>
                <div>
                    <div className='xl:mt-0 mt-6'>
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setToggleMetal(!toggleMetal)}>
                            <p className="xl:text-xl text-md font-semibold text-[#332421] hover:text-[#FF5F15]">Metal</p>
                            <Icon icon={toggleMetal ? "mdi:chevron-up" : "mdi:chevron-down"} className="text-xl text-[#332421]" />
                        </div>
                        {toggleMetal && (
                            <div className='flex mt-4 xl:mt-0 gap-3 flex-wrap'>
                                {metal.map(item => (
                                    <label key={item.id} className='flex flex-col items-center cursor-pointer'>
                                        <input
                                            type="checkbox"
                                            checked={selectedMetals.includes(item.id)}
                                            onChange={() => handleMetalSelection(item.id)}
                                            className="hidden"
                                        />
                                        <div
                                            className={`rounded-full border h-14 w-14 flex items-center justify-center ${selectedMetals.includes(item.id) ? 'border-black border-2' : 'border-gray-300'}`}
                                            style={{ backgroundColor: item.colorCode }}
                                        ></div>
                                        <div className="xl:text-md text-sm text-[#332421] text-center mt-1 hover:text-[#FF5F15]">{item.title}</div>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className='xl:mt-0 mt-6'>
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => setToggleStyle(!toggleStyle)}>
                        <p className="xl:text-xl text-md font-semibold text-[#332421] hover:text-[#FF5F15]">Style</p>
                        <Icon icon={toggleStyle ? "mdi:chevron-up" : "mdi:chevron-down"} className="text-xl text-[#332421]" />
                    </div>
                    {toggleStyle && (
                        <div className='flex gap-4 xl:mt-0 mt-4 flex-wrap'>
                            {style.map(item => (
                                <label key={item.id} className='flex flex-col items-center cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        checked={selectedStyles.includes(item.id)}
                                        onChange={() => handleStyleSelection(item.id)}
                                        className="hidden"
                                    />
                                    <div className={`p-1 rounded-full ${selectedStyles.includes(item.id) ? 'border-black border-2' : 'border-transparent border'}`}>
                                        <Image src={item.img} alt={item.alt} className="xl:w-10 xl:h-10 w-8 h-8 rounded-full" height={24} width={24} />
                                    </div>
                                    <div className="xl:text-md text-sm text-[#332421] text-center mt-1 hover:text-[#FF5F15]">{item.title}</div>
                                </label>
                            ))}
                        </div>
                    )}
                </div>
                <div className='xl:mt-0 mt-6'>
                    <div className="space-y-4">
                        <h3 className="text-xl font-medium text-[#332421] hover:text-[#FF5F15]">Price</h3>
                        <input type="range" className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-black" />
                        <div className="flex justify-between text-sm text-gray-700">
                            <div className="flex items-center gap-2 xl:mt-0 mt-2">
                                <div className="relative flex items-center">
                                    <span className="absolute left-2 text-[#332421] hover:text-[#FF5F15]">₹</span>
                                    <input
                                        type="number"
                                        className="pl-6 pr-2 py-1 border border-gray-300 rounded-md w-20 text-center"
                                    />
                                </div>

                                <span className="text-sm text-[#332421] hover:text-[#FF5F15]">to</span>

                                <div className="relative flex items-center">
                                    <span className="absolute left-2 text-[#332421] hover:text-[#FF5F15]">₹</span>
                                    <input
                                        type="number"
                                        className="pl-6 pr-2 py-1 border border-gray-300 rounded-md w-20 text-center"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='xl:mt-0 mt-6'>
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => setToggleWidth(!toggleWidth)}>
                        <p className="xl:text-xl text-md font-semibold font-montserrat text-[#332421] hover:text-[#FF5F15]">Width</p>
                        <Icon icon={toggleWidth ? "mdi:chevron-up" : "mdi:chevron-down"} className="text-xl text-black" />
                    </div>
                    {toggleWidth && (
                        width.map(item => (
                            <div key={item.id} className="flex gap-3 items-center">
                                <input type="checkbox" className="h-5 w-5" />
                                <div className="text-base xl:text-lg text-[#332421] font-montserrat font-normal hover:text-[#FF5F15]">
                                    {item.title}
                                </div>
                            </div>

                        ))
                    )}
                </div>
                <div className='xl:mt-0 mt-6'>
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => setToggleGemstone(!toggleGemstone)}>
                        <p className="xl:text-xl text-md font-semibold font-montserrat text-[#332421] hover:text-[#FF5F15]">Gemstone</p>
                        <Icon icon={toggleGemstone ? "mdi:chevron-up" : "mdi:chevron-down"} className="text-xl text-black" />
                    </div>
                    {toggleGemstone && (
                        gemstone.map(item => (
                            <div key={item.id} className="flex gap-3 items-center">
                                <input type="checkbox" className="h-5 w-5" />
                                <div className="text-base xl:text-lg text-[#332421] hover:text-[#FF5F15] font-montserrat font-normal">
                                    {item.title}
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className='xl:mt-0 mt-6'>
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => setToggleEngravable(!toggleEngravable)}>
                        <p className="xl:text-xl text-md font-semibold font-montserrat text-[#332421] hover:text-[#FF5F15]">Engravable</p>
                        <Icon icon={toggleEngravable ? "mdi:chevron-up" : "mdi:chevron-down"} className="text-xl text-[#332421] hover:text-[#FF5F15]" />
                    </div>
                    {toggleEngravable && (
                        engravable.map(item => (
                            <div key={item.id} className="flex gap-3 items-center">
                                <input type="checkbox" className="h-5 w-5" />
                                <div className="text-base xl:text-lg text-[#332421] hover:text-[#FF5F15] font-montserrat font-normal">
                                    {item.title}
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="text-center mt-6 lg:hidden">
                    <button type="submit" className="bg-[#707C48] px-6 py-2 xl:text-xl text-md font-[200px] text-white font-montserrat ">View Result</button>
                </div>
            </div>
            <div className="text-center m-6  hidden lg:block">
                <button type="submit" className="bg-[#707C48] px-6 py-2 xl:text-xl text-md font-[200px] text-white font-montserrat ">View Result</button>
            </div>
        </>
    );
}

export default Filters;