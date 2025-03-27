import {Collapse, Drawer} from "antd";
import TopSellers from "./TopSellers";
import HomeNewsLetter from "../home/components/HomeNewsLetter";
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../../constants/constants";
import {useParams} from "react-router";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";

const Products = () => {
    const [size, setSize] = useState(false);
    const [product, setProduct] = useState(null);
    const {slug} = useParams();
    // console.log(slug);

    const getOneProduct = async () => {
        try {
            const response = await axios.get(
                `${BASE_URL}/api/v1/product/getProduct/${slug}`
            );
            setProduct(response?.data?.data?.product);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getOneProduct();
    }, [slug]);

    const items = [
        {
            key: "1",
            label: (
                <p className="text-black border-b h-10">PRODUCT DESCRIPTION</p>
            ),
            children: (
                <div className="w-full h-max flex flex-col gap-4">
                    <p>{product?.shortDescription}</p>
                    <p>{product?.fullDescription}</p>
                    <div className="w-max h-max flex flex-col gap-1">
                        <p className="font-semibold">
                            SKU{" "}
                            <span className="font-normal text-gray-600">
                                {product?.sku}
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
                                {product?.variants[0]?.colors[0]?.name}
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
                        All products sold on Wethenew are authentic. Before
                        arriving in your hands, they have been checked by our
                        experts to ensure their quality and authenticity, which
                        sometimes explains the longer delivery times... And yes,
                        good things do take time.
                    </p>
                    <p>
                        Before arriving in your hands, all products undergo a
                        quality and authenticity check: every detail, from the
                        labels to the stitching, is meticulously examined to
                        ensure that the product you receive is genuine and
                        flawless. A seal is attached to the product and an
                        authenticity card is also in the box, certifying that
                        the necessary checks have been carried out (with some
                        exceptions).
                    </p>
                    <p>
                        Please note: you must not remove the seal until you are
                        absolutely sure that you are not going to return the
                        product to us, otherwise your returns request will be
                        refused.
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
            label: (
                <p className="text-black border-b h-10">DELIVERY AND RETURNS</p>
            ),
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
                            - 🎄 Your returns are extended until January 2,
                            2024.
                        </span>
                        <span className="font-normal text-gray-600">
                            - 2 working days for “48h Express Delivery”
                            products.
                        </span>
                        <span className="font-normal text-gray-600">
                            - Between 5 to 10 working days for “Standard
                            Delivery” products.
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
                        We accept payment by credit card (Visa, MasterCard,
                        American Express or debit card for foreign payments).
                    </p>
                </div>
            ),
        },
    ];

    // const cartData = {
    //     productId: "67e0cadaf5ae95a5b9a12d10",
    //     quantity: 1,
    //     sizeId: "67e0cadaf5ae95a5b9a12d11",
    // };

    const [cartData, setCartData] = useState({
        productId: "",
        quantity: 1,
        sizeId: "",
    });

    // console.log(cartData);
    const token = useSelector((state) => state?.userToken);

    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const handleAddToCart = async () => {
        if (!cartData?.sizeId) toast.error("Select size joor!!!");
        try {
            const response = await axios.post(
                `${BASE_URL}/api/v1/carts/add`,
                cartData,
                {headers}
            );
            // setProduct(response?.data?.data?.product);
            console.log(response);
            toast.success(response?.data?.message)
        } catch (error) {
            console.log(error);
        }
    };

    // {console.log(product?.images)}
    return (
        <div className="w-full h-max phone:mt-0 mt-16 flex flex-col ">
            <div className="w-full h-max flex phone:flex-col">
                <div className="w-1/2 phone:w-full h-[55rem] phone:h-[35rem] flex flex-col gap-4">
                    <div className="w-full h-[60%] bg-sky-100">
                        <img
                            src={product?.images[0]}
                            alt=""
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="w-full h-[40%] flex gap-4">
                        {product?.images.slice(1).map((item, index) => (
                            <div
                                className="w-1/2 h-full bg-slate-200 flex items-center justify-center"
                                key={index}
                            >
                                <img src={item} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/2 phone:w-full h-max flex flex-col p-20 phone:p-5 pb-0 gap-4">
                    <div className="w-full h-max flex flex-col gap-6 pr-48 phone:pr-0">
                        <div className="w-full h-8 bg-black"></div>
                        <div className="w-full h-max mt-12 phone:mt-0 flex flex-col gap-2">
                            <p className="text-3xl ">{product?.productName}</p>
                            <p className="font-extralight text-2xl">
                                From ₦{product?.basePrice}
                            </p>
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
                            <p className="text-lg">{product?.productName}</p>
                            <div className="w-full h-max flex gap-4 flex-wrap ">
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
                                <>
                                    {product?.sizes.map((item, index) => (
                                        <div
                                            className="w-[28%] font-semibold h-max py-2 rounded border-gray-200 border flex items-center justify-center cursor-pointer flex-col relative"
                                            key={index}
                                            onClick={() =>
                                                // setCartData((prev) => ({
                                                //     // console.log(prev)
                                                // }))
                                                setCartData({
                                                    productId: product?._id,
                                                    quantity: 1,
                                                    sizeId: item?._id,
                                                })
                                            }
                                        >
                                            <input
                                                type="radio"
                                                name=""
                                                id=""
                                                className="absolute top-0 right-0 w-4 h-4"
                                                checked={
                                                    item._id === cartData.sizeId
                                                }
                                                // onChange={}
                                            />
                                            <div className="w-max h-max flex gap-2">
                                                <span>{item?.size?.uk}-EU</span>
                                                |
                                                <span>{item?.size?.us}-US</span>
                                            </div>
                                            <p>
                                                ₦{item?.price?.toLocaleString()}
                                            </p>
                                        </div>
                                    ))}
                                </>
                            </div>
                        </div>
                        <div className="w-full h-[15%] px-10 relative">
                            <button
                                className="bg-black text-white w-full h-10 rounded cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400"
                                onClick={handleAddToCart}
                                disabled={!cartData?.sizeId}
                            >
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
