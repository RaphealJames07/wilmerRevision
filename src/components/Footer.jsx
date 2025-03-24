import {
    CiFacebook,
    CiInstagram,
    CiLinkedin,
    CiMail,
    CiTwitter,
} from "react-icons/ci";
import visa from "../assets/logo-visa.svg";
import mastercard from "../assets/mastercard.svg";
import amex from "../assets/amex-icon.svg";
import dhl from "../assets/dhl-1.svg";
import chartequa from "../assets/chartequa.webp";
import {Collapse} from "antd";
import {FaMinus} from "react-icons/fa6";

const items = [
    {
        key: "1",
        label: "Contact us",
        children: (
            <div className="flex gap-3 justify-between">
                <CiMail size={28} />
                <p className="w-full h-max flex flex-col gap-2 text-[#e6e6e6]">
                    Contact portal{" "}
                    <span>
                        Our team is committed to responding within 24 working
                        hours
                    </span>
                </p>
            </div>
        ),
    },
    {
        key: "2",
        label: "About ElvisScott",
        children: (
            <div className="text-[#e6e6e6]">
                Our mission is to give sneaker and streetwear fans, enthusiasts
                and the curious the chance to buy their favourite products with
                complete confidence. Whether you're looking for a limited
                edition product, the hottest pair at the moment or the perfect
                piece of streetwear, you've come to the right place.
            </div>
        ),
    },
    {
        key: "3",
        label: "More information",
        children: (
            <div className="w-full h-max flex flex-col gap-4 text-[#e6e6e6]">
                <p>Our concepts</p>
                <p>Conditions of our offer</p>
                <p>ElvisScott Galleries</p>
            </div>
        ),
    },
    {
        key: "4",
        label: "Our services",
        children: (
            <div className="w-full h-max flex flex-col gap-4 text-[#e6e6e6]">
                <p>E-gift card</p>
                <p>FAQ</p>
                <p>Programme ElvisScott family</p>
                <p>Sell your product</p>
                <p>Shipping and delivery</p>
                <p>Exchange and returns</p>
                <p>ElvisScott application</p>
                <p>Our promotional codes</p>
            </div>
        ),
    },
    {
        key: "5",
        label: "Collections",
        children: (
            <div className="w-full h-max flex flex-col gap-4 text-[#e6e6e6]">
                <p>Women's Sneakers</p>
                <p>Men's Sneakers</p>
                <p>Eco-responsible sneakers</p>
                <p>Less than 200$</p>
            </div>
        ),
    },
];

const Footer = () => {
    return (
        <footer className="w-full h-max mt-10 bg-[#333333] px-32 phone:px-0 py-10 flex flex-col gap-6">
            <div className="w-full phone:hidden max flex gap-8 justify-between phone:px-0 text-white text-sm">
                <div className="w-1/6 h-max flex flex-col gap-5">
                    <p className="font-semibold">Contact Us</p>
                    <div className="flex gap-3 justify-between">
                        <CiMail size={28} />
                        <p className="w-full h-max flex flex-col gap-2 text-[#e6e6e6]">
                            Contact portal{" "}
                            <span>
                                Our team is committed to responding within 24
                                working hours
                            </span>
                        </p>
                    </div>
                </div>
                <div className="w-1/6 h-max flex flex-col gap-5">
                    <p className="font-semibold">About ElvisScott</p>
                    <div className="text-[#e6e6e6]">
                        Our mission is to give sneaker and streetwear fans,
                        enthusiasts and the curious the chance to buy their
                        favourite products with complete confidence. Whether
                        you're looking for a limited edition product, the
                        hottest pair at the moment or the perfect piece of
                        streetwear, you've come to the right place.
                    </div>
                </div>
                <div className="w-1/6 h-max flex flex-col gap-5">
                    <p className="font-semibold">More informations</p>
                    <div className="w-full h-max flex flex-col gap-4 text-[#e6e6e6]">
                        <p>Our concepts</p>
                        <p>Conditions of our offer</p>
                        <p>ElvisScott Galleries</p>
                    </div>
                </div>
                <div className="w-1/6 h-max flex flex-col gap-5">
                    <p className="font-semibold">Our services</p>
                    <div className="w-full h-max flex flex-col gap-4 text-[#e6e6e6]">
                        <p>E-gift card</p>
                        <p>FAQ</p>
                        <p>Programme ElvisScott family</p>
                        <p>Sell your product</p>
                        <p>Shipping and delivery</p>
                        <p>Exchange and returns</p>
                        <p>ElvisScott application</p>
                        <p>Our promotional codes</p>
                    </div>
                </div>
                <div className="w-1/6 h-max flex flex-col gap-5">
                    <p className="font-semibold">Collections</p>
                    <div className="w-full h-max flex flex-col gap-4 text-[#e6e6e6]">
                        <p>Women's Sneakers</p>
                        <p>Men's Sneakers</p>
                        <p>Eco-responsible sneakers</p>
                        <p>Less than 200$</p>
                    </div>
                </div>
                <div className="w-1/6 h-max flex flex-col gap-5">
                    <p className="font-semibold">Find us on</p>
                    <div className="w-full h-max flex gap-2">
                        <CiInstagram size={20} />
                        <CiLinkedin size={20} />
                        <CiFacebook size={20} />
                        <CiTwitter size={20} />
                    </div>
                </div>
            </div>
            <div className="hidden phone:flex flex-col gap-4">
                <Collapse
                    accordion
                    items={items}
                    bordered={false}
                    ghost
                    expandIconPosition="end"
                    expandIcon={() => <FaMinus color="#fff" />}
                />
                <div className="w-full h-max flex flex-col gap-5 phone:px-4 text-white">
                    <p className="font-semibold">Find us on</p>
                    <div className="w-full h-max flex gap-2">
                        <CiInstagram size={20} />
                        <CiLinkedin size={20} />
                        <CiFacebook size={20} />
                        <CiTwitter size={20} />
                    </div>
                </div>
            </div>
            <hr className="phone:hidden" />
            <div className="w-full h-max flex phone:flex-col gap-8 justify-between px-10 phone:px-4 phone:pb-10 text-sm">
                <div className="w-max h-max flex gap-4 text-[#e6e6e6]">
                    <p className="border-r pr-3 border-r-white">
                        Legal information
                    </p>
                    <p className="border-r pr-3 border-r-white">
                        Privacy Policy{" "}
                    </p>
                    <p className="border-r pr-3 border-r-white">CGU </p>
                    <p className="">CGV </p>
                </div>
                <div className="w-max h-max flex flex-col gap-5">
                    <p className="font-semibold text-white">Payment Method</p>
                    <div className="w-full h-max flex gap-2 text-[#e6e6e6]">
                        <img src={visa} alt="" className="w-12 h-12" />
                        <img src={mastercard} alt="" className="w-12 h-12" />
                        <img src={amex} alt="" className="w-12 h-12" />
                    </div>
                </div>
                <div className="w-max h-max flex flex-col gap-5">
                    <p className="font-semibold text-white">Carriers</p>
                    <div className="w-full h-max flex gap-2 text-[#e6e6e6]">
                        <img src={dhl} alt="" className="w-12 h-12" />
                    </div>
                </div>
                <div className="w-max h-max flex flex-col gap-5">
                    <p className="font-semibold text-white">Contact Us</p>
                    <div className="flex gap-3 justify-between">
                        <img src={chartequa} alt="" className="w-12 h-12" />
                        <p className="w-32 h-max flex flex-col gap-2 text-[#e6e6e6]">
                            ElvisScott joins the FEVAD and it's quality charter
                        </p>
                    </div>
                </div>
                <div className="w-max h-max">
                    <select
                        name=""
                        id=""
                        className="w-44 h-10 rounded border border-gray-400 bg-transparent text-sm text-white"
                    >
                        <option value="">English</option>
                        <option value="">English</option>
                        <option value="">English</option>
                        <option value="">English</option>
                        <option value="">English</option>
                    </select>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
