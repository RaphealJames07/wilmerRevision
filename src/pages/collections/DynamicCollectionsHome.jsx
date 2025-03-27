// import { useParams } from "react-router"

import {Collapse, Drawer, Input, Pagination, Select} from "antd";
import {useEffect, useState} from "react";
import "./collection.css";
import MilitaryBlue from "../../assets/sneakers/air-jordan-4-sail-metallic-gold3.webp";
import fortycard from "../../assets/new-picto-48h.svg";
import HomeTopTag1 from "../home/components/HomeTopTag1";
import axios from "axios";
import {BASE_URL} from "../../constants/constants";
import {useNavigate} from "react-router";

const items = [
    {
        key: "1",
        label: <p className="text-black">SORT</p>,
        children: (
            <div className="w-full h-max">
                <Select
                    className="w-full h-12"
                    placeholder={"Select"}
                    options={[
                        {value: "1", label: "Relevance"},
                        {value: "2", label: "The most recent"},
                        {value: "3", label: "Price (-)"},
                        {value: "4", label: "Price (+)"},
                    ]}
                />
            </div>
        ),
    },
    {
        key: "2",
        label: <p className="text-black">In the spotlight</p>,
        children: (
            <div className="w-full h-max flex gap-5">
                <div className="w-1/2 h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    Express 48h
                </div>
                <div className="w-1/2 h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    Promotion
                </div>
            </div>
        ),
    },
    {
        key: "3",
        label: <p className="text-black">Vendor</p>,
        children: (
            <div className="w-full h-max flex gap-5 flex-wrap justify-between">
                <Input
                    placeholder="Search"
                    className="w-full h-10 rounded border-gray-200 border"
                />
                <div className="w-[45%] h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    Adidas
                </div>
                <div className="w-[45%] h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    Air Jordan
                </div>
                <div className="w-[45%] h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    Alexander McQueens
                </div>
                <div className="w-[45%] h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    Asics
                </div>
                <div className="w-[45%] h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    AUTRY
                </div>
            </div>
        ),
    },
    {
        key: "4",
        label: <p className="text-black">Model</p>,
        children: (
            <div className="w-full h-max flex gap-5 flex-wrap justify-between">
                <Input
                    placeholder="Search"
                    className="w-full h-10 rounded border-gray-200 border"
                />
                <div className="w-[45%] h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    Adidas
                </div>
                <div className="w-[45%] h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    Air Jordan
                </div>
                <div className="w-[45%] h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    Alexander McQueens
                </div>
                <div className="w-[45%] h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    Asics
                </div>
                <div className="w-[45%] h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    AUTRY
                </div>
            </div>
        ),
    },
    {
        key: "5",
        label: <p className="text-black">Size</p>,
        children: (
            <div className="w-full h-max flex gap-4 flex-wrap justify-between">
                <div className="w-full h-max">
                    <div className="w-max h-max flex rounded-md p-1 border-gray-300 border">
                        <span className="w-max h-max py-1 px-2 bg-black text-white font-semibold cursor-pointer rounded-md">
                            EU
                        </span>
                        <span className="w-max h-max py-1 px-2 bg-white text-black font-semibold cursor-pointer rounded-md">
                            US
                        </span>
                    </div>
                </div>
                <div className="w-[28%] font-semibold h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    17 EU
                </div>
                <div className="w-[28%] font-semibold h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    17 EU
                </div>
                <div className="w-[28%] font-semibold h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    17 EU
                </div>
                <div className="w-[28%] font-semibold h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    17 EU
                </div>
                <div className="w-[28%] font-semibold h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    17 EU
                </div>
            </div>
        ),
    },
    {
        key: "6",
        label: <p className="text-black">Color</p>,
        children: (
            <div className="w-full h-max flex gap-3 flex-wrap justify-between">
                <div className="w-[28%] p-1 h-max rounded border-gray-200 border flex flex-col items-center gap-1 cursor-pointer">
                    <div className="w-full h-8 bg-[#ff7f00] rounded"></div>
                    <p className="text-xs font-semibold">Orange</p>
                </div>
                <div className="w-[28%] p-1 h-max rounded border-gray-200 border flex flex-col items-center gap-1 cursor-pointer">
                    <div className="w-full h-8 bg-[#ff7f00] rounded"></div>
                    <p className="text-xs font-semibold">Orange</p>
                </div>
                <div className="w-[28%] p-1 h-max rounded border-gray-200 border flex flex-col items-center gap-1 cursor-pointer">
                    <div className="w-full h-8 bg-[#ff7f00] rounded"></div>
                    <p className="text-xs font-semibold">Orange</p>
                </div>
                <div className="w-[28%] p-1 h-max rounded border-gray-200 border flex flex-col items-center gap-1 cursor-pointer">
                    <div className="w-full h-8 bg-[#ff7f00] rounded"></div>
                    <p className="text-xs font-semibold">Orange</p>
                </div>
                <div className="w-[28%] p-1 h-max rounded border-gray-200 border flex flex-col items-center gap-1 cursor-pointer">
                    <div className="w-full h-8 bg-[#ff7f00] rounded"></div>
                    <p className="text-xs font-semibold">Orange</p>
                </div>
                <div className="w-[28%] p-1 h-max rounded border-gray-200 border flex flex-col items-center gap-1 cursor-pointer">
                    <div className="w-full h-8 bg-[#ff7f00] rounded"></div>
                    <p className="text-xs font-semibold">Orange</p>
                </div>
                <div className="w-[28%] p-1 h-max rounded border-gray-200 border flex flex-col items-center gap-1 cursor-pointer">
                    <div className="w-full h-8 bg-[#ff7f00] rounded"></div>
                    <p className="text-xs font-semibold">Orange</p>
                </div>
            </div>
        ),
    },
    {
        key: "7",
        label: <p className="text-black">Price</p>,
        children: (
            <div className="w-full h-max flex gap-2 flex-wrap justify-between items-center">
                <Input
                    placeholder="$"
                    className="w-[45%] h-10 rounded border-gray-200 border"
                />
                <p className="text-xs">to</p>
                <Input
                    placeholder="$"
                    className="w-[45%] h-10 rounded border-gray-200 border"
                />
            </div>
        ),
    },
    {
        key: "8",
        label: <p className="text-black">Gender</p>,
        children: (
            <div className="w-full h-max flex gap-5 flex-wrap justify-between">
                <div className="w-[45%] h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    Baby
                </div>
                <div className="w-[45%] h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    Children
                </div>
                <div className="w-[45%] h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    Woman
                </div>
                <div className="w-[45%] h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    Man
                </div>
                <div className="w-[45%] h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    Unisex
                </div>
            </div>
        ),
    },
    {
        key: "9",
        label: <p className="text-black">Shape</p>,
        children: (
            <div className="w-full h-max flex gap-5 flex-wrap justify-between">
                <div className="w-[45%] h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    High
                </div>
                <div className="w-[45%] h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    Low
                </div>
                <div className="w-[45%] h-10 rounded border-gray-200 border flex items-center justify-center cursor-pointer">
                    Mid
                </div>
            </div>
        ),
    },
];

const DynamicCollectionsHome = () => {
    // const {slug} = useParams()
    const navigate = useNavigate();
    const [openFilter, setOpenFilter] = useState(false);
    const [product, setProduct] = useState([]);

    const handleGetAllProducts = async () => {
        try {
            const response = await axios.get(
                `${BASE_URL}/api/v1/product/getAllProduct`
            );
            setProduct(response?.data?.data?.products);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleGetAllProducts();
    }, []);

    return (
        <>
            <div className="w-full h-max phone:mt-16 px-32 phone:px-4 pt-10 flex flex-col gap-8">
                <div className="w-full h-max flex flex-col ">
                    <p className="text-3xl ">All the Sneakers</p>
                    <HomeTopTag1 />
                </div>
                <div className="w-full h-max py-2 px-2 border-y border-gray-300 flex justify-between items-center">
                    <p className="text-gray-400">
                        <span className="text-gray-800">2727 Results</span>
                    </p>
                    <div
                        className="w-max h-max flex items-center gap-2 text-sm cursor-pointer"
                        onClick={() => setOpenFilter(true)}
                    >
                        <svg
                            viewBox="0 0 14 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4"
                        >
                            <path
                                d="M13 8.667H7M4.333 8.667H1M13 3.333H9.667M7 3.333H1M4.333 10.667v-4M9.667 5.333v-4"
                                stroke="#080808"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        Filter & Sort
                    </div>
                </div>
                <div className="styles_ProductGrid phone:grid-cols-6">
                    <>
                        {product.map((item, index) => (
                            <div
                                className="styles_card__GmAAu"
                                key={index}
                                onClick={() =>
                                    navigate(`/products/${item?._id}`)
                                }
                            >
                                <div>
                                    <div className="w-full h-auto relative bg-[#f5f5f5]  mb-3">
                                        <span className="w-max h-max absolute right-3 top-3">
                                            <img src={fortycard} alt="" />
                                        </span>
                                        <img
                                            src={item.images[0]}
                                            alt=""
                                            className="h-80 object-contain phone:h-44"
                                        />
                                    </div>
                                    <p className="font-medium text-sm">
                                        {item.productName}
                                    </p>
                                    <p className="font-light text-[#4d4d4d] text-sm">
                                        From ₦{item.basePrice}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </>
                    <a
                        href="/collections/adidas"
                        className="styles_LifestyleCard__uWrg_"
                    ></a>
                </div>
                <div className="w-full h-20 flex items-center justify-center">
                    <Pagination />
                </div>
            </div>
            <Drawer
                className=""
                open={openFilter}
                onClose={() => setOpenFilter(false)}
                placement="right"
                maskClosable
                closeIcon={false}
                style={{background: "none"}}
                width={500}
            >
                <div className="w-full h-screen  flex items-center justify-center px-10">
                    <div className="w-full h-[80%] bg-white rounded">
                        <Collapse
                            accordion={false}
                            items={items}
                            bordered={false}
                            ghost
                            expandIconPosition="end"
                            className="p-6 h-[85%] overflow-y-auto"
                            defaultActiveKey={"1"}
                        />
                        <div className="w-full h-[15%] px-10 relative">
                            <button className="bg-black text-white w-full h-10 rounded">
                                Submit 2722
                            </button>
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center text-lg absolute -bottom-6 border right-[40%] text-black bg-white cursor-pointer"
                                onClick={() => setOpenFilter(false)}
                            >
                                x
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default DynamicCollectionsHome;
