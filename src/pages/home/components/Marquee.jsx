import React from "react";
import {CiChat1, CiStar, CiDiscount1} from "react-icons/ci";
import Marquee from "react-fast-marquee";

// type IconKey = "CiChat1" | "CiStar" | "CiDiscount1";

const iconMap = {
    CiChat1: CiChat1,
    CiStar: CiStar,
    CiDiscount1: CiDiscount1,
};

const MarqueeTexts = () => {
    const marqueeDataset = [
        {
            icon: "CiChat1",
            text: "Dedicated and available customer service",
        },
        {
            icon: "CiStar",
            text: "Payment in 4 installments with Paypal",
        },
        {
            icon: "CiDiscount1",
            text: "Authentic unworn products",
        },
    ];

    return (
        <Marquee
            speed={20}
            autoFill
            style={{display: "flex", gap: "30px"}}
            className="border-b border-b-gray-300 h-10"
        >
            <div className="w-max h-max flex gap-8 pl-2">
                {marqueeDataset.map((item, key) => {
                    const IconComponent = iconMap[item.icon];
                    return (
                        <div
                            className="w-max h-full flex items-center gap-4 border-l border-l-gray-400 pl-2"
                            key={key}
                        >
                            <div>
                                {" "}
                                {IconComponent && (
                                    <IconComponent className="" size={20} />
                                )}
                            </div>
                            <p>{item.text}</p>
                        </div>
                    );
                })}
            </div>
        </Marquee>
    );
};

export default MarqueeTexts;
