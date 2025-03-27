import {useEffect, useState} from "react";
import {Input, Select} from "antd";
// import type {RadioChangeEvent} from "antd";
import {Radio} from "antd";
import paystacklogo from "../../assets/paystackimg.png";
import korapaylogo from "../../assets/korapay.png";
import axios from "axios";
import {BASE_URL} from "../../constants/constants";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";

const Checkout = () => {
    const [value, setValue] = useState(1);
    const [cart, setCart] = useState([]);

    const onChange = (e) => {
        // console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };

    const token = useSelector((state) => state?.userToken);
    const addy = useSelector((state) => state?.address);
    // const user = useSelector((state) => state?.user);
    // const navigate = useNavigate()

    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const fetchCart = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/carts/get`, {
                headers,
            });

            if (response?.data?.data?.length !== 0) {
                setCart(response?.data?.data?.cart);
            }
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCart();
    }, [token]);

    const [selectedAddy, setSelectedAddy] = useState("");

    const orderData = {
        addressId: selectedAddy,
        deliveryMode: value,
    };

    console.log(orderData);

    // const [newOrderId, setNewOrderId] = useState("");
    const createOrder = async () => {
        if (!orderData?.deliveryMode)
            return toast.error("Please select a delivery address");
        const loadingId = toast.loading("Creating your order...");
        try {
            const response = await axios.post(
                `${BASE_URL}/api/v1/orders/initialize`,
                orderData,
                {
                    headers,
                }
            );
            console.log(response);
            if (response?.status === 201) {
                toast.dismiss(loadingId);
                const initializeData = {
                    email: response?.data?.data?.userData?.email,
                    amount: response?.data?.data?.cartData?.totalAmount,
                    method: response?.data?.data?.deliveryMode,
                    orderId: response?.data?.data?._id,
                };
                handleInitializePayment(initializeData);
            }
        } catch (error) {
            toast.dismiss(loadingId);
            console.log(error);
        }
    };

    const handleInitializePayment = async (initializeData) => {
        const loadingId = toast.loading("Initializing payment...");
        try {
            const response = await axios.post(
                `${BASE_URL}/api/v1/payments/initialize`,
                initializeData,
                {
                    headers,
                }
            );
            console.log(response);
            if (response?.status === 200) {
                if (response?.data?.data?.method === 1) {
                    toast.dismiss(loadingId);
                    toast.success("Payment initiated, heading to paystack...");
                    setTimeout(() => {
                        window.location.assign(
                            response?.data?.data?.accessData?.authorization_url
                        );
                    }, 3000);
                } else if (response?.data?.data?.method === 2) {
                    toast.dismiss(loadingId);
                    toast.success("Payment initiated, heading to korapay...");
                    setTimeout(() => {
                        window.location.assign(
                            response?.data?.data?.accessData?.data?.checkout_url
                        );
                    }, 3000);
                }
            } else {
                toast.error("Error initializing payment, please try again");
                return;
            }
            // return response;
        } catch (error) {
            toast.error(error?.response?.data?.message);
            console.log(error);
        }
    };

    return (
        <div className="w-full h-max  phone:px-4 flex phone:flex-col-reverse phone:mt-14 gap-10 border-t border-t-gray-300">
            <div className="w-1/2 phone:w-full h-max flex flex-col gap-6 pl-48 phone:pl-0 pt-5 phone:pt-2">
                {/* <div className="w-full h-max flex flex-col gap-4  py-3">
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
                </div> */}
                <div className="w-full h-max flex gap-4">
                    {addy.map((item, index) => (
                        <div
                            className="w-1/3 phone:w-full h-40 flex flex-col border border-gray-300 rounded p-2 relative"
                            key={index}
                            onClick={() => setSelectedAddy(item?._id)}
                        >
                            <input
                                type="radio"
                                className="w-4 h-4"
                                checked={item?._id === selectedAddy}
                            />
                            <div className="w-full h-10 flex justify-between items-center">
                                <p>Address {index + 1}</p>
                                {/* <span className="flex items-center gap-4">
                                    <CiTrash
                                        size={20}
                                        className="text-red-700 cursor-pointer"
                                    />
                                    <CiEdit
                                        size={20}
                                        className="text-blue-600 cursor-pointer"
                                    />
                                </span> */}
                            </div>
                            <div className="w-full h-[calc(100%-2.5rem)] overflow-y-auto">
                                <p className="w-full h-full text-sm">
                                    {`
                                                            ${item?.address},
                                                            ${item?.city},
                                                            ${item?.state},
                                                            ${item?.country},
                                                            ${item?.postalCode}
                                                            `}
                                </p>
                            </div>
                        </div>
                    ))}
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
                        <button
                            className="w-full h-12 rounded bg-black text-white text-lg font-semibold cursor-pointer"
                            onClick={createOrder}
                        >
                            Pay now
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-1/2 phone:w-full h-screen phone:h-max phone:py-5 bg-[#f5f5f5] p-10 phone:p-2 border-l border-l-gray-300 pr-48 phone:pr-0 flex flex-col gap-8">
                <div className="w-full h-max flex flex-col gap-4">
                    {cart?.items?.map((item, index) => (
                        <div
                            className="w-full h-max flex phone:flex-col phone:items-start justify-between phone:justify-end items-center"
                            key={index}
                        >
                            <div className="w-[80%] phone:w-full  h-max flex gap-3 items-center">
                                <div className="w-16 h-16 rounded border border-gray-300 flex items-center justify-center">
                                    <img src={item?.image[0]} alt="" />
                                </div>
                                <p className="flex flex-col phone:gap-3 text-sm">
                                    {item?.productName}
                                    <span className="text-xs text-gray-500">
                                        Size: {item?.sizeInfo?.size?.uk}
                                        -UK | {item?.sizeInfo?.size?.us}
                                        -US
                                    </span>
                                    <span className="w-max h-max flex gap-8">
                                        {" "}
                                        N{item?.unitPrice}
                                        <span>QTY: {item?.quantity}</span>
                                    </span>
                                </p>
                            </div>
                            <p className="phone:w-full h-max phone:flex phone:justify-end">
                                N{item?.totalPrice}
                            </p>
                        </div>
                    ))}
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
                        Subtotal{" "}
                        <span className="">
                            {" "}
                            N{cart?.total?.toLocaleString()}
                        </span>
                    </p>
                    <p className="w-full h-max flex justify-between">
                        Shipping <span className="">N0.00</span>
                    </p>
                </div>
                <div className="w-full h-max flex flex-col ">
                    <p className="w-full h-max flex justify-between text-xl font-semibold">
                        Total{" "}
                        <span className="">
                            N{cart?.total?.toLocaleString()}
                        </span>
                    </p>
                    <p className="text-xs">Including 7.5% in taxes</p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
