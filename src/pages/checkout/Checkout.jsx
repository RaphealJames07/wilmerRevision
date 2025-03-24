import {useState} from "react";
import {Input, Select} from "antd";
// import type {RadioChangeEvent} from "antd";
import {Radio} from "antd";
import paystacklogo from "../../assets/paystackimg.png";
import korapaylogo from "../../assets/korapay.png";

const Checkout = () => {
    const [value, setValue] = useState(1);

    const onChange = (e) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };
    return (
        <div className="w-full h-max  phone:px-4 flex phone:flex-col-reverse phone:mt-14 gap-10 border-t border-t-gray-300">
            <div className="w-1/2 phone:w-full h-max flex flex-col gap-6 pl-48 phone:pl-0 pt-5 phone:pt-2">
                <div className="w-full h-max flex flex-col gap-4  py-3">
                    <p>Delivery</p>
                    <div className="w-full h-max flex flex-col gap-3">
                        <Select
                            placeholder="Select a delivery method"
                            options={[
                                {value: "1", label: "Country 1"},
                                {value: "2", label: "Country 2"},
                            ]}
                            className="h-10"
                        />
                        <div className="w-full h-max flex justify-between gap-4">
                            <Input className="h-10" placeholder="First name" />
                            <Input className="h-10" placeholder="First name" />
                        </div>
                        <div className="w-full h-max flex justify-between gap-4">
                            <Input className="h-10" placeholder="Address" />
                        </div>
                        <div className="w-full h-max flex justify-between gap-4">
                            <Input className="h-10" placeholder="Postal code" />
                            <Input className="h-10" placeholder="City" />
                        </div>
                        <div className="w-full h-max flex justify-between gap-4">
                            <Input className="h-10" placeholder="Phone" />
                        </div>
                    </div>
                    <div className="w-full h-max flex flex-col gap-2 mt-4">
                        <p className="text-sm">Shipping method</p>
                        <div className="w-full h-12 border cursor-pointer border-gray-300 bg-gray-100 rounded flex items-center justify-between px-2 text-sm">
                            <p>Home delivery: 2 working days</p>
                            <p>14$</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max flex flex-col gap-4 border-y border-y-gray-300 py-3">
                    <p>Payment</p>
                    <div className="w-full h-max flex flex-col rounded border border-b-0 border-gray-300 ">
                        <Radio.Group onChange={onChange} value={value}>
                            <div className="w-full h-12 border-b border-b-gray-300 flex justify-between items-center px-4">
                                <div className="w-max h-max flex gap-4">
                                    <Radio onChange={onChange} value={1}>
                                        Paystack
                                    </Radio>
                                </div>
                                <div>
                                    <img
                                        src={paystacklogo}
                                        alt=""
                                        className="w-24"
                                    />
                                </div>
                            </div>
                            <div className="w-full h-12 border-b border-b-gray-300 flex justify-between items-center px-4">
                                <div className="w-max h-max flex gap-4">
                                    <Radio onChange={onChange} value={2}>
                                        Korapay
                                    </Radio>
                                </div>
                                <div>
                                    <img
                                        src={korapaylogo}
                                        alt=""
                                        className="w-24"
                                    />
                                </div>
                            </div>
                        </Radio.Group>
                    </div>
                    <div className="w-full h-max mt-5">
                        <button className="w-full h-12 rounded bg-black text-white text-lg font-semibold">
                            Pay now
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-1/2 phone:w-full h-screen phone:h-max phone:py-5 bg-[#f5f5f5] p-10 phone:p-2 border-l border-l-gray-300 pr-48 phone:pr-0 flex flex-col gap-8">
                <div className="w-full h-max flex flex-col gap-4">
                    <div className="w-full h-max flex phone:flex-col phone:items-start justify-between phone:justify-end items-center">
                        <div className="w-[80%] phone:w-full  h-max flex gap-3 items-center">
                            <div className="w-16 h-16 rounded border border-gray-300">
                                <img src="" alt="" />
                            </div>
                            <p className="flex flex-col phone:gap-3 text-sm">
                                Campus 00s Dark Green Cloud White
                                <span className="text-xs text-gray-500">
                                    37 1/3 EU - 5 US - 100€ - EXPRESS 48H
                                </span>
                            </p>
                        </div>
                        <p className="phone:w-full h-max phone:flex phone:justify-end">
                            N200,000
                        </p>
                    </div>
                    <div className="w-full h-max flex phone:flex-col phone:items-start justify-between phone:justify-end items-center">
                        <div className="w-[80%] phone:w-full  h-max flex gap-3 items-center">
                            <div className="w-16 h-16 rounded border border-gray-300">
                                <img src="" alt="" />
                            </div>
                            <p className="flex flex-col phone:gap-3 text-sm">
                                Campus 00s Dark Green Cloud White
                                <span className="text-xs text-gray-500">
                                    37 1/3 EU - 5 US - 100€ - EXPRESS 48H
                                </span>
                            </p>
                        </div>
                        <p className="phone:w-full h-max phone:flex phone:justify-end">
                            N200,000
                        </p>
                    </div>
                </div>
                <div className="w-full h-12 flex gap-3 justify-between">
                    <Input
                        placeholder="Discount code or gift card"
                        className="w-[80%] h-full"
                    />
                    <button className="w-[20%] h-full bg-black text-white rounded">
                        Apply
                    </button>
                </div>
                <div className="w-full h-max flex flex-col gap-2 text-sm">
                    <p className="w-full h-max flex justify-between">
                        Subtotal <span className="">N200,000</span>
                    </p>
                    <p className="w-full h-max flex justify-between">
                        Shipping <span className="">N10,000</span>
                    </p>
                </div>
                <div className="w-full h-max flex flex-col ">
                    <p className="w-full h-max flex justify-between text-xl font-semibold">
                        Total <span className="">N210,000</span>
                    </p>
                    <p className="text-xs">Including 7.5% in taxes</p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
