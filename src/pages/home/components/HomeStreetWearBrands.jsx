import {GoChevronLeft, GoChevronRight} from "react-icons/go";
import OwlCarousel from "react-owl-carousel";
import {useRef} from "react";
import itemDatas from "../../../assets/json/streetwear.json";
import DickiesImg from "../../../assets/streetwearimgs/dickies.webp";
import NeweraImg from "../../../assets/streetwearimgs/newera.webp";
import BaaraImg from "../../../assets/streetwearimgs/baara.webp";
import SupremeImg from "../../../assets/streetwearimgs/supreme.webp";
import NikexnoctaImg from "../../../assets/streetwearimgs/nikexnocta.webp";
import discover1 from "../../../assets/discoverone.webp";
import discover2 from "../../../assets/discovertwo.webp";
import discover3 from "../../../assets/discoverthree.webp";

const images = {
    DickiesImg,
    NeweraImg,
    BaaraImg,
    SupremeImg,
    NikexnoctaImg,
};

const HomeStreetWearBrands = () => {
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
                <p className="text-3xl font-medium">Our streetwear brands</p>
                <div className="w-max h-max flex items-center gap-8">
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
                            <div className="w-full h-96 phone:h-72 relative bg-[#f5f5f5] flex items-center">
                                <img
                                    src={images[item.brandimg]}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full h-max flex items-center justify-center">
                                <p className="font-medium text-3xl">
                                    {item?.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
            <div className="w-full h-screen flex phone:flex-col gap-5">
                <div className="w-1/2 phone:w-full phone:h-1/2 h-full relative cursor-pointer ">
                    <div className="absolute bottom-0 w-full h-full p-4 styles_MetaCard">
                        <div className="w-max h-full flex flex-col gap-2 justify-end  text-white">
                            <p className="font-semibold text-lg">
                                Blue trainers selection
                            </p>
                            <p className="underline text-sm">Discover</p>
                        </div>
                    </div>
                    <img
                        src={discover1}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-1/2 phone:w-full phone:h-1/2 h-full flex flex-col phone:flex-row gap-5">
                    <div className="w-full phone:w-1/2 phone:h-full h-1/2 relative">
                        <div className="absolute bottom-0 w-full h-full p-4 styles_MetaCard">
                            <div className="w-max h-full flex flex-col gap-2 justify-end  text-white">
                                <p className="font-semibold text-lg">
                                    Arte Antwerp
                                </p>
                                <p className="underline text-sm">Discover</p>
                            </div>
                        </div>
                        <img
                            src={discover2}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full phone:w-1/2 phone:h-full h-1/2 relative">
                        <div className="absolute bottom-0 w-full h-full p-4 styles_MetaCard">
                            <div className="w-max h-full flex flex-col gap-2 justify-end  text-white">
                                <p className="font-semibold text-lg">
                                    Baara
                                </p>
                                <p className="underline text-sm">Discover</p>
                            </div>
                        </div>
                        <img
                            src={discover3}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeStreetWearBrands;
