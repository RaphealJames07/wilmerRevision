import { CiTrash} from "react-icons/ci";
import CartMenu from "./CartMenu";

const Cart = () => {
    return (
        <div className="w-full h-max phone:mt-5 mt-16  px-32 phone:px-4 pt-10">
            <div className="w-full h-12 flex justify-between gap-6 phone:text-sm phone:h-8">
                <div className="w-1/4 h-full flex items-center justify-center border-b-2 border-b-gray-600">
                    Cart
                </div>
                <div className="w-1/4 h-full flex items-center justify-center border-b-2 border-b-gray-300 text-gray-500">
                    Informations
                </div>
                <div className="w-1/4 h-full flex items-center justify-center border-b-2 border-b-gray-300 text-gray-500">
                    Delivery
                </div>
                <div className="w-1/4 h-full flex items-center justify-center border-b-2 border-b-gray-300 text-gray-500">
                    Payment
                </div>
            </div>
            <div className="w-full h-max flex phone:flex-col mt-10 ">
                <div className="w-[60%] phone:w-full h-max flex flex-col gap-6">
                    <div className="w-full h-40 phone:h-32 flex gap-3">
                        <div className="w-40 phone:w-32 h-full bg-orange-200"></div>
                        <div className="w-[calc(100%-10rem)] phone:w-[calc(100%-8rem)] h-full flex flex-col justify-between">
                            <div className="w-full h-max flex justify-between">
                                <div className="w-[85%] h-max flex flex-col">
                                    <p className="font-semibold phone:text-sm phone:font-normal phone:truncate">
                                        Adidas Handball Spezial Earth Strata
                                    </p>
                                    <p className="text-sm phone:text-xs">
                                        Size: 37 1/3 EU
                                    </p>
                                </div>
                                <div className="w-[15%] h-max flex items-end flex-col gap-3 phone:gap-5">
                                    <CiTrash
                                        className="text-red-700 cursor-pointer phone:hidden flex"
                                        size={22}
                                    />
                                    <CartMenu />
                                </div>
                            </div>
                            <div className="w-full h-max flex flex-col gap-1 text-sm phone:text-xs">
                                <p className="font-semibold flex gap-2 items-center">
                                    SKU:
                                    <span className="font-normal text-gray-600 text-xs">
                                        FV5029-141
                                    </span>
                                </p>
                                <div className="w-full h-max flex justify-between">
                                    <p className="font-semibold flex gap-2 items-center">
                                        Color:
                                        <span className="font-normal text-gray-600 text-xs">
                                            Green
                                        </span>
                                    </p>
                                    <p className="hidden phone:flex text-sm">
                                        N100,000
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-max flex justify-between items-end">
                                <p className="flex phone:hidden">N100,000</p>
                                <div className="w-max h-max flex items-center border rounded border-gray-300 p-1 gap-3">
                                    <div className="w-max h-max px-3 py-[2px] flex items-center justify-center border rounded border-gray-300 cursor-pointer">
                                        -
                                    </div>
                                    <div className="w-max h-max ">2</div>
                                    <div className="w-max h-max px-3 py-[2px] flex items-center justify-center border rounded border-gray-300 cursor-pointer">
                                        +
                                    </div>
                                </div>
                                <p>N200,000</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className=""></div> */}
                </div>
                <div className="w-[40%] phone:w-full h-max pl-20 phone:pl-0 phone:mt-10 phone:border-t phone: border-t-gray-300 phone:pt-2">
                    <div className="w-full h-max flex flex-col gap-6">
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className=" text-sm">
                                Do you have a promotional code?
                            </p>
                            <p className=" text-xs">
                                To use a gift card, that's the next step.
                            </p>
                            <div className="w-full h-12 rounded border border-gray-200 p-1">
                                <input
                                    type="text"
                                    className="w-[80%] h-full border-none outline-none pl-2"
                                />
                                <button className="w-[20%] h-full rounded bg-black text-white">
                                    Apply
                                </button>
                            </div>
                        </div>
                        <div className="w-full h-max border-y border-y-gray-200 py-2 flex justify-between">
                            <p className="w-max h-max flex flex-col font-semibold">
                                Total{" "}
                                <span className=" text-xs font-normal">
                                    (Excluding delivery cost)
                                </span>
                            </p>
                            <p>N200,000</p>
                        </div>
                        <div className="w-full h-max flex flex-col items-center gap-1">
                            <button className="w-full h-12 text-sm rounded bg-black text-white mt-10 phone:mt-2">
                                Validate cart
                            </button>
                            <p className="text-sm text-gray-500">
                                Secure payment in instalments by Paypal
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
