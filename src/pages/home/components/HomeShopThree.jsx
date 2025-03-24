import {GoChevronLeft, GoChevronRight} from "react-icons/go";
import fortycard from "../../../assets/new-picto-48h.svg";
import OwlCarousel from "react-owl-carousel";
import {useRef} from "react";
import itemDatas from "../../../assets/json/homeshoptwo.json";
import MilitaryBlue from "../../../assets/sneakers/Air-Jordan-4-Retro-Military-Blue.webp";
import SailMetallicGold from "../../../assets/sneakers/air-jordan-4-sail-metallic-gold3.webp";
import MidnightNavy from "../../../assets/sneakers/AirJordan4MidnightNavy.webp";
import RedCement from "../../../assets/sneakers/air-jordan-4-red-cement-1.webp";
import VividSulfur from "../../../assets/sneakers/air-jordan-4-vivid-sulfur3.webp";
import RetroBredReimagined from "../../../assets/sneakers/Air-Jordan-4-Retro-Bred-Reimagined.webp";

const images = {
    MilitaryBlue,
    SailMetallicGold,
    MidnightNavy,
    RedCement,
    VividSulfur,
    RetroBredReimagined,
};

const HomeShopThree = () => {

    const carouselRef = useRef(null); // Reference for OwlCarousel instance

    const carouselOptions = {
        loop: false,
        autoWidth: false,
        items: 1,
        margin: 20,
        mergeFit: true,
        navSpeed: 1000,
        dots: true,
        nav: false, // Hide default navigation
        responsive: {
            0: {
                items: 1, // Show 2 items
                stagePadding: 70, // Partially reveal the next item
                dots: true,
            },
            600: {
                items: 3,
                dots: true,
            },
            1000: {
                items: 4,
                dots: true,
            },
        },
    };

    const handlePrev = () => {
        carouselRef.current.prev(); // Move to the previous slide
    };

    const handleNext = () => {
        carouselRef.current.next(); // Move to the next slide
    };

    return (
        <div className="w-full h-max px-20 phone:px-4 flex flex-col gap-6 mt-20">
            <div className="w-full h-max flex justify-between">
                <p className="text-3xl font-medium">Adidas Campus</p>
                <div className="w-max h-max flex items-center gap-8">
                    <p className="underline cursor-pointer">See more</p>
                    <div className="w-max h-max flex items-center gap-4 phone:hidden">
                        <span
                            className="w-max h-max p-3 cursor-pointer rounded border border-gray-300"
                            onClick={handlePrev} // Trigger previous
                        >
                            <GoChevronLeft size={20} />
                        </span>
                        <span
                            className="w-max h-max p-3 cursor-pointer rounded border border-gray-300"
                            onClick={handleNext} // Trigger next
                        >
                            <GoChevronRight size={20} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full h-max">
                <OwlCarousel
                    ref={carouselRef} // Attach ref to access instance methods
                    {...carouselOptions}
                    className="w-full h-max flex gap-4"
                >
                    {itemDatas.map((item, index) => (
                        <div
                            className="item w-full h-max flex flex-col gap-2 rounded cursor-pointer"
                            key={index}
                        >
                            <div className="w-full h-80 phone:h-64 relative bg-[#f5f5f5] flex items-center">
                                <span className="w-max h-max absolute right-3 top-3">
                                    <img src={fortycard} alt="" />
                                </span>
                                <img src={images[item.image]} alt={item.name} />
                            </div>
                            <div className="w-full h-max flex flex-col gap-2">
                                <p className="font-medium text-sm">
                                    {item?.name}
                                </p>
                                <p className="font-light text-[#4d4d4d] text-sm">
                                    From ${item?.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default HomeShopThree;
