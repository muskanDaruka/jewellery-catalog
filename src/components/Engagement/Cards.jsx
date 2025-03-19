'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import ImageCarousel from '@/components/Engagement/CardCarousel';
import round from '../../../public/images/DiamondShapes/Round.png';
import asscher from '../../../public/images/DiamondShapes/Asscher.png';
import radiant from '../../../public/images/DiamondShapes/Radiant.png';
import pear from '../../../public/images/DiamondShapes/Pear.png';
import oval from '../../../public/images/DiamondShapes/Oval.png';
import cushionS from '../../../public/images/DiamondShapes/cushion Square.png';
import emerald from '../../../public/images/DiamondShapes/Emerald.png';
import princess from '../../../public/images/DiamondShapes/Princess.png';
import marquise from '../../../public/images/DiamondShapes/Marquise.png';
import heart from '../../../public/images/DiamondShapes/Heart.png';
import cushionL from '../../../public/images/DiamondShapes/cushion Long.png';
import radiantSq from '../../../public/images/DiamondShapes/Radiant Square.png';
// import Link from 'next/link';
import CardFilters from './CardFilters';

const Cards = () => {
    const pathname = usePathname();

    const cardList = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        title: 'Oval Petite Solitaire Engagement Ring',
    }));

        const metalType = [
            { id: 1, colorCode: "#ffffff", text: "14K", title: "White gold" },
            { id: 2, colorCode: "#e5ce83", text: "14K", title: "Yellow gold" },
            { id: 3, colorCode: "#e7ba9a", text: "14K", title: "Rose gold" },
            { id: 4, colorCode: "#ffffff", text: "PL", title: "Platinum" },
        ];
    
        const shape = [
            {
                id: 1,
                img: round,
                alt: 'round',
            },
            {
                id: 2,
                img: asscher,
                alt: 'asscher',
            },
            {
                id: 3,
                img: radiant,
                alt: 'radiant',
            },
            {
                id: 4,
                img: pear,
                alt: 'pear',
            },
            {
                id: 5,
                img: oval,
                alt: 'oval',
            },
            {
                id: 6,
                img: cushionS,
                alt: 'cushion square',
            },
            {
                id: 7,
                img: emerald,
                alt: 'emerald',
            },
            {
                id: 8,
                img: princess,
                alt: 'pricess',
            },
            {
                id: 9,
                img: marquise,
                alt: 'marquise',
            },
            {
                id: 10,
                img: heart,
                alt: 'heart',
            },
            {
                id: 11,
                img: cushionL,
                alt: 'cushion long',
            },
            {
                id: 12,
                img: radiantSq,
                alt: 'radiant Square',
            },
    ];
    
        const carat = [
            { id: 1, text: "1" },
            { id: 2, text: "1.5" },
            { id: 3, text: "2" },
            { id: 4, text: "2.5" },
            { id: 5, text: "3" },
            { id: 6, text: "3.5" },
            { id: 7, text: "4" },
            { id: 8, text: "4.5" },
            { id: 9, text: "5" },
        ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5">
            {cardList.map((item) => (
                <div
                    key={item.id}
                    className="p-3 flex flex-col items-center w-full max-w-xs mx-auto"
                >
                    <div className="w-full flex justify-center items-center">
                        <ImageCarousel
                            link={`${pathname}/${item.id}`}
                            className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                    </div>
                    <div className="w-full font-bold mt-2 text-sm md:text-md text-[#332421] hover:text-[#FF5F15] cursor-pointer">
                        {item.title}
                    </div>
                    <CardFilters metalType={metalType} shape={shape} carat={carat} />
                    <div className="w-full text-md mt-5 cursor-pointer">
                        ★★★★☆ <span className="text-[#332421] ml-1 cursor-pointer">(4.0)</span>
                    </div>
                    <div className="w-full mt-5">
                        <span className="font-semibold text-lg text-[#332421] hover:text-[#FF5F15] cursor-pointer">₹1,424</span>
                        <span className="text-gray-400 text-sm line-through ml-2 hover:text-[#FF5F15] cursor-pointer">₹1,499</span>
                    </div>
                    {/* <Link href={`${pathname}/${item.id}`} className="w-full">
                        <button
                            type="button"
                            className="w-full bg-[#707C48] text-white font-semibold py-2 px-6 mt-3 text-md md:text-lg"
                        >
                            Add To Cart
                        </button>
                    </Link> */}
                </div>
            ))}
        </div>

    );
};

export default Cards;