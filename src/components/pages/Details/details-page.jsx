"use client";
import { EmblaOptionsType } from "embla-carousel";
import React, {useState} from "react";
import img1 from "../../../../public/images/ring1.jpg";
// import img2 from "@/../public/images/engagement/ring12.jpg";
// import img3 from "@/../public/images/categories/ring.jpg";
import ProductDetailSlider from "./ProductDetailSlider";
import round from '@/../public/images/DiamondShapes/Round.png';
import asscher from '@/../public/images/DiamondShapes/Asscher.png';
import radiant from '@/../public/images/DiamondShapes/Radiant.png';
import pear from '@/../public/images/DiamondShapes/Pear.png';
import oval from '@/../public/images/DiamondShapes/Oval.png';
import cushionS from '@/../public/images/DiamondShapes/cushion Square.png';
import emerald from '@/../public/images/DiamondShapes/Emerald.png';
import princess from '@/../public/images/DiamondShapes/Princess.png';
import marquise from '@/../public/images/DiamondShapes/Marquise.png';
import heart from '@/../public/images/DiamondShapes/Heart.png';
import cushionL from '@/../public/images/DiamondShapes/cushion Long.png';
import radiantSq from '@/../public/images/DiamondShapes/Radiant Square.png';
// import SizeSelectors from "./SizeSelectors";
// import Selector from "./Selector";
import Image from "next/image";
import MetalType from "./MetalType";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Selector from "./Selector";

const OPTIONS = {};

const ProductDetail = () => {
  const { back } = useRouter();
  const [selectedShape, setSelectedShape] = useState([""]);
  const [selectedCarat, setSelectedCarat] = useState([""]);
  const [selectedQuality, setSelectedQuality] = useState([""]);

  const sliderImages = [
    { id: 1, img: img1 },
    // { id: 2, img: img2 },
    // { id: 3, img: img3 },
  ];

  const metalTypes = [
    { id: 1, colorCode: "#ffffff", text: "14K", title: "White Gold" },
    { id: 2, colorCode: "#e5ce83", text: "", title: "Yellow Gold" },
    { id: 3, colorCode: "#e7ba9a", text: "", title: "Rose Gold" },
  ];

  const shapes = [
    { id: "round", img: round, alt: "Round" },
    { id: "asscher", img: asscher, alt: "Asscher" },
    { id: "cushionS", img: cushionS, alt: "Cushion Square" },
    { id: "radiant", img: radiant, alt: "Radiant" },
    { id: "marquise", img: marquise, alt: "Marquise" },
    { id: "oval", img: oval, alt: "Oval" },
    { id: "pear", img: pear, alt: "Pear" },
    { id: "emerald", img: emerald, alt: "Emerald" },
    { id: "cushionL", img: cushionL, alt: "cushionL" },
    { id: "heart", img: heart, alt: "heart" },
    { id: "princess", img: princess, alt: "princess" },
    { id: "radiantSq", img: radiantSq, alt: "radiantSq" },
  ];
  const caratWeights = ["1", "1 ½", "2", "2 ½", "3", "3 ½", "4", "4 ½","5"];
  const diamondQuality = ["Best - D, VVS", "Better - E, VS1", "Good - FG, VS2"];

  const colors = [
    { value: "DEF", title: "DEF" },
    { value: "GHI", title: "GHI" },
    { value: "JKL", title: "JKL" },
    { value: "MNO", title: "MNO" },
  ];

  const toggleShape = (shapeId) => {
    setSelectedShape((prev) =>
      prev.includes(shapeId) ? prev.filter((id) => id !== shapeId) : [...prev, shapeId]
    );
  };

  const toggleCarat = (carat) => {
    setSelectedCarat((prev) =>
      prev.includes(carat) ? prev.filter((c) => c !== carat) : [...prev, carat]
    );
  };

  const toggleQuality = (quality) => {
    setSelectedQuality((prev) =>
      prev.includes(quality) ? prev.filter((q) => q !== quality) : [...prev, quality]
    );
  };

  return (
    <>
      <div className="xl:pt-32 pt-24 xl:px-8 px-4 cursor-pointer">
        <button
          onClick={() => back()}
          className="m-2 text-xl border-0 bg-white flex items-center font-serif text-[#332421]"
        >
          <FaArrowLeft size={22} />
        </button>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-8 gap-2 font-montserrat px-6 mb-6 cursor-pointer">
        <div className="flex flex-col items-center justify-center">
          <ProductDetailSlider slides={sliderImages} options={OPTIONS} />
        </div>
        <div className="space-y-4">
          <h1 className="xl:text-2xl text-xl font-semibold text-[#332421] hover:text-[#FF5F15]">
            Emerald Eternity Ring
          </h1>
          <p className="text-sm text-gray-600">
            14K White Gold, FG, VS2+ | IGI Certified, 14 Emerald stone
          </p>
          <h2 className="xl:text-xl text-lg font-semibold">$2,350.00</h2>
          <button className="bg-[#707C48] text-white xl:text-lg text-md font-medium px-6 py-2 rounded-md shadow-md hover:bg-[#3b562c] transition">
            Add to cart
          </button>
          <div className="">
            <h1 className="font-bold mb-1 text-[#332421]">Metal Type:</h1>
            <div className="flex gap-4">
              <MetalType metalType={metalTypes} />
            </div>
          </div>
          <div className="">
            <h1 className="font-bold mb-1 text-[#332421]">Shape:</h1>
            <div className="flex flex-wrap gap-2">
              {shapes.map((shape) => (
                <label key={shape.id} className="relative">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={selectedShape.includes(shape.id)}
                  onChange={() => toggleShape(shape.id)}
                />
                <div className={`xl:w-10 xl:h-10 w-8 h-8 rounded-md p-1 flex items-center justify-center transition ${
                  selectedShape.includes(shape.id) ? "border " : "border-[#332421]"
                }`}>
                  <Image src={shape.img.src} alt={shape.alt} width={200} height={400} className="w-full h-full object-contain" />
                </div>
              </label>
              ))}
            </div>
          </div>
          <div className="w-full">
                  <h1 className="font-bold mb-1 text-[#332421]">Color:</h1>
                  <Selector options={colors} customClass=""/>
               </div>
          <div className="">
            <h1 className="font-bold mb-1 text-[#332421]">Carat Weight:</h1>
            <div className="flex gap-2">
            {caratWeights.map((carat) => (
                <label key={carat} className="relative">
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={selectedCarat.includes(carat)}
                    onChange={() => toggleCarat(carat)}
                  />
                  <div className={`px-3 py-1 rounded-md transition ${
                    selectedCarat.includes(carat) ? "border " : "border-[#332421]"
                  }`}>
                    {carat}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h1 className="font-bold mb-1 text-[#332421]">Diamond Quality:</h1>
            <div className="grid grid-cols-3 gap-2">
            {diamondQuality.map((quality) => (
                <label key={quality} className="relative">
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={selectedQuality.includes(quality)}
                    onChange={() => toggleQuality(quality)}
                  />
                  <div className={`px-3 py-1 border rounded-md transition ${
                    selectedQuality.includes(quality) ? "border bg-gray-300" : "border-[#332421] "
                  }`}>
                    {quality}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h1 className="font-bold mb-1 text-[#332421]">Ring Size (In Inches)</h1>
            <select className="w-full p-2 border rounded-md">
              <option>Select</option>
              {["4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8"].map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
            <button className="mt-2 text-sm text-blue-600 underline">Size Guide</button>
          </div>
          <div className="mt-6">
            <h1 className="font-bold mb-1 text-[#332421]">+ Add Engraving</h1>
            <input type="text" placeholder="Type your message" className="w-full p-2 border rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
