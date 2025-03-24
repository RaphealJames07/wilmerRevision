import {GoChevronLeft, GoChevronRight} from "react-icons/go";
import sneaker1 from "../../assets/sneakers/AdidasHandballSpezialGreyBlackGum1.webp";
import fortycard from "../../assets/new-picto-48h.svg";
import OwlCarousel from "react-owl-carousel";
import {useRef} from "react";

const TopSellers = () => {
    const datatest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14];

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
                <p className="text-3xl font-medium">Top Sellers</p>
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
                    {datatest.map((index) => (
                        <div
                            className="item w-full h-max flex flex-col gap-2 rounded cursor-pointer"
                            key={index}
                        >
                            <div className="w-full h-80 phone:h-64 relative bg-[#f5f5f5] flex items-center">
                                <span className="w-max h-max absolute right-3 top-3">
                                    <img src={fortycard} alt="" />
                                </span>
                                <img src={sneaker1} alt="" />
                            </div>
                            <div className="w-full h-max flex flex-col gap-2">
                                <p className="font-medium text-sm">
                                    Adidas Handball Spezial Aluminum Core Black
                                </p>
                                <p className="font-light text-[#4d4d4d] text-sm">
                                    From $170
                                </p>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default TopSellers;
