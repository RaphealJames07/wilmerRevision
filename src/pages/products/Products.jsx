import {Collapse, Drawer} from "antd";
import TopSellers from "./TopSellers";
import HomeNewsLetter from "../home/components/HomeNewsLetter";
import {useState} from "react";

const items = [
    {
        key: "1",
        label: <p className="text-black border-b h-10">PRODUCT DESCRIPTION</p>,
        children: (
            <div className="w-full h-max flex flex-col gap-4">
                <p>
                    At the dawn of sound 35th birthday and with a desire to
                    celebrate, brings up to date Air Jordan 4 Military Blue.
                </p>
                <p>
                    There Air Jordan 4 Retro Military Blue (2024) is dressed in
                    a base in white leather. The silhouette is punctuated by
                    touches of blue and of gray, faithfully reproducing the
                    Original color appreciated by fans. TPU cage offers optimal
                    breathability, while the famous eyelets in blue plastic
                    accentuate his design characteristic. With a unit Air Sole
                    Visible in the heel, it provides legendary cushioning
                    comfort.
                </p>
                <div className="w-max h-max flex flex-col gap-1">
                    <p className="font-semibold">
                        SKU{" "}
                        <span className="font-normal text-gray-600">
                            FV5029-141
                        </span>
                    </p>
                    <p className="font-semibold">
                        Release date{" "}
                        <span className="font-normal text-gray-600">
                            FV5029-141
                        </span>
                    </p>
                    <p className="font-semibold">
                        Color{" "}
                        <span className="font-normal text-gray-600">
                            FV5029-141
                        </span>
                    </p>
                </div>
            </div>
        ),
    },
    {
        key: "2",
        label: <p className="text-black border-b h-10">AUTHENTICITY</p>,
        children: (
            <div className="w-full h-max flex flex-col gap-4">
                <p>
                    All products sold on Wethenew are authentic. Before arriving
                    in your hands, they have been checked by our experts to
                    ensure their quality and authenticity, which sometimes
                    explains the longer delivery times... And yes, good things
                    do take time.
                </p>
                <p>
                    Before arriving in your hands, all products undergo a
                    quality and authenticity check: every detail, from the
                    labels to the stitching, is meticulously examined to ensure
                    that the product you receive is genuine and flawless. A seal
                    is attached to the product and an authenticity card is also
                    in the box, certifying that the necessary checks have been
                    carried out (with some exceptions).
                </p>
                <p>
                    Please note: you must not remove the seal until you are
                    absolutely sure that you are not going to return the product
                    to us, otherwise your returns request will be refused.
                </p>
                <div className="w-full h-max">
                    <img
                        src=""
                        alt="imageauth"
                        className="w-full h-80 bg-orange-100"
                    />
                </div>
            </div>
        ),
    },
    {
        key: "3",
        label: <p className="text-black border-b h-10">DELIVERY AND RETURNS</p>,
        children: (
            <div className="w-full h-max flex flex-col gap-4">
                <p className="font-semibold">
                    Carriers:{" "}
                    <span className="font-normal text-gray-600">DHL</span>
                </p>
                <p className="font-semibold">
                    Deliveru methods:
                    <span className="font-normal text-gray-600">
                        Home delivery
                    </span>
                </p>
                <p className="font-semibold">
                    Shipping cost:
                    <span className="font-normal text-gray-600">
                        Home delivery
                    </span>
                </p>
                <p className="font-semibold flex flex-col gap-1">
                    Delivery time:
                    <span className="font-normal text-gray-600">
                        - 🎄 Order before December 10 to guarantee delivery
                        before Christmas ( excluding 48h Express orders).
                    </span>
                    <span className="font-normal text-gray-600">
                        - 🎄 Your returns are extended until January 2, 2024.
                    </span>
                    <span className="font-normal text-gray-600">
                        - 2 working days for “48h Express Delivery” products.
                    </span>
                    <span className="font-normal text-gray-600">
                        - Between 5 to 10 working days for “Standard Delivery”
                        products.
                    </span>
                </p>
                <p className="font-semibold flex flex-col gap-1">
                    Delivery time:
                    <span className="font-normal text-gray-600">
                        You must make your return request via our within 14
                        calendar days of receiving your order.
                    </span>
                </p>
            </div>
        ),
    },
    {
        key: "4",
        label: <p className="text-black border-b h-10">PAYMENT METHODS</p>,
        children: (
            <div className="w-full h-max flex flex-col gap-4">
                <p>
                    We accept payment by credit card (Visa, MasterCard, American
                    Express or debit card for foreign payments).
                </p>
            </div>
        ),
    },
];

const Products = () => {
    const [size, setSize] = useState(false);
    return (
        <div className="w-full h-max phone:mt-0 mt-16 flex flex-col ">
            <div className="w-full h-max flex phone:flex-col">
                <div className="w-1/2 phone:w-full h-[55rem] phone:h-[35rem] flex flex-col gap-4">
                    <div className="w-full h-[60%] bg-sky-100"></div>
                    <div className="w-full h-[40%] flex gap-4">
                        <div className="w-1/2 h-full bg-slate-200"></div>
                        <div className="w-1/2 h-full bg-red-100"></div>
                    </div>
                </div>
                <div className="w-1/2 phone:w-full h-max flex flex-col p-20 phone:p-5 pb-0 gap-4">
                    <div className="w-full h-max flex flex-col gap-6 pr-48 phone:pr-0">
                        <div className="w-full h-8 bg-black"></div>
                        <div className="w-full h-max mt-12 phone:mt-0 flex flex-col gap-2">
                            <p className="text-3xl ">
                                New Balance 2002R Protection Pack Navy
                            </p>
                            <p className="font-extralight text-sm">From $300</p>
                        </div>
                        <button
                            className="w-max h-max bg-black px-8 py-3 rounded text-white font-semibold text-sm"
                            onClick={() => setSize(true)}
                        >
                            Select your size
                        </button>
                    </div>
                    <div className="w-full h-max">
                        <Collapse
                            accordion={false}
                            expandIconPosition="end"
                            defaultActiveKey={"1"}
                            bordered={false}
                            ghost
                            items={items}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full h-max">
                <TopSellers />
            </div>
            <div className="w-full h-max px-20 phone:px-4 flex justify-between mt-10 text-sm">
                <div className="bg-gray-300 w-full h-max flex phone:flex-col phone:items-start phone:gap-4 justify-between py-5 px-4">
                    <div className="flex items-center justify-center gap-4">
                        <span className="w-5 h-5 rounded-full bg-black"></span>
                        <span>Payment in 4 instalments with Paypal</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <span className="w-5 h-5 rounded-full bg-black"></span>
                        <span>Free delivery for all orders over 200€</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <span className="w-5 h-5 rounded-full bg-black"></span>
                        <span>Authentic products</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <span className="w-5 h-5 rounded-full bg-black"></span>
                        <span>Responsive customer service</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-max">
                <HomeNewsLetter />
            </div>
            <Drawer
                className=""
                open={size}
                onClose={() => setSize(false)}
                placement="right"
                maskClosable
                closeIcon={false}
                style={{background: "none"}}
                width={500}
            >
                <div className="w-full h-screen  flex items-center justify-center px-10">
                    <div className="w-full h-[80%] bg-white rounded">
                        <div className="w-full h-[85%] p-4">
                            <p className="text-lg">
                                Air Jordan 4 Retro Military Blue (2024) -
                                Standard shipping 5 to 10 working days
                            </p>
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
                        </div>
                        <div className="w-full h-[15%] px-10 relative">
                            <button className="bg-black text-white w-full h-10 rounded">
                                Add to cart
                            </button>
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center text-lg absolute -bottom-6 border right-[40%] text-black bg-white cursor-pointer"
                                onClick={() => setSize(false)}
                            >
                                x
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default Products;
