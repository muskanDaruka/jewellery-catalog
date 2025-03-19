
const HorizontalList = ({ data, setCurrentSlide, currentSlide }) => {
    const handleItemClick = (index) => {
        if (index >= 0 && index < data.length) {
            setCurrentSlide(index);
        }
    };

    return (
        <div className="flex items-center justify-center ">
            <ul className="flex flex-wrap space-x-2 sm:space-x-4 mb-2 xl:gap-10 gap-4">
                {data.map((item, index) => (
                    <li
                        key={item}
                        onClick={() => handleItemClick(index)}
                        className={`mb-2 sm:mb-0 sm:mr-2 text-center text-[#332421] hover:text-[#FF5F15] underline text-md xl:text-2xl cursor-pointer ${index === currentSlide ? "text-[#f2994a] font-bold text-md underline xl:text-2xl" : "text-md xl:text-2xl"}`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HorizontalList;