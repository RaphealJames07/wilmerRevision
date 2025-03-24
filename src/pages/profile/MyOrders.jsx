import Jordans from "../../assets/sneakers/Air-Jordan-4-Retro-Military-Blue.webp";

import {NavLink} from "react-router-dom";
import {Collapse, Pagination} from "antd";

const items = [
    {
        key: "1",
        label: (
            <div className="w-full h-12 flex  items-center cursor-pointer text-black justify-between px-4 rounded border border-gray-400 text-sm">
                <p className="flex flex-col">
                    Order No: <span>12345678</span>
                </p>
                <p className="phone:hidden">Date ordered: 02-10-2022</p>
                <div className="w-max flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 hidden phone:flex"></div>
                    <p className="px-2 phone:hidden text-white rounded h-max bg-green-500 w-max">
                        Delivered
                    </p>
                    <span className="phone:hidden">02-10-2022</span>
                </div>
                <p className="phone:hidden">Items (2)</p>
                <NavLink to={"/my-order/123"}>
                    <div className="px-3 py-1 bg-yellow-500 rounded text-white">
                        See Details
                    </div>
                </NavLink>
            </div>
        ),
        children: (
            <>
                <div className="w-full h-max flex flex-col gap-2 ">
                    <div className="w-full h-32 border border-gray-400 flex gap-4 rounded p-2">
                        <div className="w-36 phone:w-28 rounded h-full bg-sky-100">
                            <img
                                src={Jordans}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-[calc(100%-9rem)] h-full flex flex-col justify-center gap-1 phone:text-sm">
                            <p className="text-xl phone:text-sm truncate">
                                Air Jordans 4 Retro Military
                            </p>
                            <p className="phone:text-xs text-sm">
                                Order 1455642142
                            </p>
                            <p className="px-2 text-white rounded text-sm phone:text-xs h-max bg-green-500 w-max">
                                Delivered
                            </p>
                            <p className="phone:text-xs text-sm">12-02-2022</p>
                        </div>
                    </div>
                    <div className="w-full h-32 border border-gray-400 flex gap-4 rounded p-2">
                        <div className="w-36 phone:w-28 rounded h-full bg-sky-100">
                            <img
                                src={Jordans}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-[calc(100%-9rem)] h-full flex flex-col justify-center gap-1 phone:text-sm">
                            <p className="text-xl phone:text-sm truncate">
                                Air Jordans 4 Retro Military
                            </p>
                            <p className="phone:text-xs text-sm">
                                Order 1455642142
                            </p>
                            <p className="px-2 text-white rounded text-sm phone:text-xs h-max bg-red-500 w-max">
                                Cancelled
                            </p>
                            <p className="phone:text-xs text-sm">12-02-2022</p>
                        </div>
                    </div>
                </div>
            </>
        ),
    },
    {
        key: "2",
        label: (
            <div className="w-full h-12 flex items-center cursor-pointer text-black justify-between px-4 rounded border border-gray-400 text-sm">
                <p className="flex flex-col">
                    Order No: <span>12345678</span>
                </p>
                <p className="phone:hidden">Date ordered: 02-10-2022</p>
                <div className="w-max flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 hidden phone:flex"></div>
                    <p className="px-2 phone:hidden text-white rounded h-max bg-green-500 w-max">
                        Delivered
                    </p>
                    <span className="phone:hidden">02-10-2022</span>
                </div>
                <p className="phone:hidden">Items (2)</p>
                <NavLink to={"/my-order/123"}>
                    <div className="px-3 py-1 bg-yellow-500 rounded text-white">
                        See Details
                    </div>
                </NavLink>
            </div>
        ),
        children: (
            <>
                <div className="w-full h-max flex flex-col gap-2">
                    <div className="w-full h-32 border border-gray-400 flex gap-4 rounded p-2">
                        <div className="w-36 phone:w-28 rounded h-full bg-sky-100">
                            <img
                                src={Jordans}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-[calc(100%-9rem)] h-full flex flex-col justify-center gap-1 phone:text-sm">
                            <p className="text-xl phone:text-sm truncate">
                                Air Jordans 4 Retro Military
                            </p>
                            <p className="phone:text-xs text-sm">
                                Order 1455642142
                            </p>
                            <p className="px-2 text-white rounded text-sm phone:text-xs h-max bg-green-500 w-max">
                                Delivered
                            </p>
                            <p className="phone:text-xs text-sm">12-02-2022</p>
                        </div>
                    </div>
                    <div className="w-full h-32 border border-gray-400 flex gap-4 rounded p-2">
                        <div className="w-36 phone:w-28 rounded h-full bg-sky-100">
                            <img
                                src={Jordans}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-[calc(100%-9rem)] h-full flex flex-col justify-center gap-1 phone:text-sm">
                            <p className="text-xl phone:text-sm truncate">
                                Air Jordans 4 Retro Military
                            </p>
                            <p className="phone:text-xs text-sm">
                                Order 1455642142
                            </p>
                            <p className="px-2 text-white rounded text-sm phone:text-xs h-max bg-red-500 w-max">
                                Cancelled
                            </p>
                            <p className="phone:text-xs text-sm">12-02-2022</p>
                        </div>
                    </div>
                </div>
            </>
        ),
    },
];

const MyOrders = () => {
    const data = [1];

    return (
        <>
            <div className="w-full h-max  flex flex-col pl-8 phone:px-0 phone:py-0 py-5 gap-10 phone:gap-3">
                <p className="text-2xl phone:text-base font-medium9 flex items-center justify-between relative h3textBg w-full">
                    Orders History
                    <span className="text-sm phone:text-xs font-normal">
                        14 items
                    </span>
                </p>
                <div className="w-full h-max flex flex-col gap-3">
                    <div className="w-full phone:hidden h-12 flex gap-5 items-center bg-slate-100">
                        <div className="w-max h-10 px-4 rounded cursor-pointer text-white flex items-center justify-center bg-[#118686]">
                            All Orders
                        </div>
                        <div className="w-max h-10 px-4 rounded cursor-pointer bg-white flex items-center justify-center ">
                            Processing
                        </div>
                        <div className="w-max h-10 px-4 rounded cursor-pointer bg-white flex items-center justify-center ">
                            On Delivery
                        </div>
                        <div className="w-max h-10 px-4 rounded cursor-pointer bg-white flex items-center justify-center ">
                            Delivered
                        </div>
                        <div className="w-max h-10 px-4 rounded cursor-pointer bg-white flex items-center justify-center ">
                            Cancelled
                        </div>
                        <div className="w-max h-10 px-4 rounded cursor-pointer bg-white flex items-center justify-center ">
                            Returned
                        </div>
                    </div>
                    <div className="w-full hidden phone:flex h-12 bg-sky-50  items-center justify-between px-4">
                        <select
                            name=""
                            id=""
                            className="w-44 h-10 rounded border border-gray-300 text-sm "
                        >
                            <option value="allorders">All Orders</option>
                            <option value="allorders">Processing</option>
                            <option value="allorders">On Delivery</option>
                            <option value="allorders">Delivered</option>
                            <option value="allorders">Cancelled</option>
                            <option value="allorders">Returned</option>
                        </select>
                    </div>
                    <div className="w-full h-max flex flex-col bg-gray-100 gap-5 p-3">
                        {data.map((index) => (
                            <div
                                className="w-full h-max flex flex-col gap-2 border p-2 rounded border-gray-400 "
                                key={index}
                            >
                                <Collapse
                                    accordion={false}
                                    items={items}
                                    bordered={false}
                                    ghost
                                    expandIconPosition="end"
                                    className="flex flex-col gap-2"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full h-10 flex items-center justify-center">
                    <Pagination />
                </div>
            </div>
        </>
    );
};

export default MyOrders;
