"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { usePrevNextButtons } from "@/hooks/usePrevNextButtons";

const ProductDetailSlider = ({ slides, options, optionsThumbs }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel(optionsThumbs);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaMainApi);

  const onThumbClick = (index) => {
    if (!emblaMainApi) return;
    emblaMainApi.scrollTo(index);
    setSelectedIndex(index);
  }; 
  
  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla xl:p-4 p-1 items-center">
      <div className="embla__viewport rounded-md relative" ref={emblaMainRef}>
        <div className="embla__container flex">
          {slides.map((item, index) => (
            <div className="embla__slide flex-1" key={index}>
              <div className="embla__slide__number relative">
                <div
                  className="relative w-full h-auto overflow-hidden cursor-crosshair"
                  onMouseEnter={() => setIsZoomed(true)}
                  onMouseLeave={() => setIsZoomed(false)}
                >
                  <Image
                    className={`object-cover w-full h-auto rounded-md transition-transform duration-300 ${
                      isZoomed ? "scale-150" : "scale-100"
                    }`}
                    alt="Product Image"
                    src={item.img}
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="absolute top-1/2 left-2 z-10 -translate-y-1/2 xl:p-2 disabled:opacity-50"
        >
          <IoIosArrowBack fontSize={22} />
        </button>
        <button
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="absolute top-1/2 right-2 z-10 -translate-y-1/2 xl:p-2 disabled:opacity-50"
        >
          <IoIosArrowForward fontSize={22} />
        </button>
      </div>
      <div className="embla-thumbs mt-4">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container flex md:block md:space-y-4">
            {slides.map((item, index) => (
              <div
                key={index}
                className={`embla-thumbs__slide shadow-2xl relative h-[80px] w-[80px] ${
                  index === selectedIndex ? "border-2 border-blue-500" : ""
                }`}
              >
                <button
                  onClick={() => onThumbClick(index)}
                  type="button"
                  className="embla-thumbs__slide__number h-full w-full"
                >
                  <Image
                    className="object-cover rounded-md w-full h-auto"
                    alt=""
                    src={item.img}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSlider;