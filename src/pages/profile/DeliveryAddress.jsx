import {Input, Modal, Select} from "antd";
import axios from "axios";
import {useEffect, useState} from "react";
import {CiEdit, CiTrash} from "react-icons/ci";
// import {toast} from "react-toastify";
import {BASE_URL} from "../../constants/constants";
import {useDispatch, useSelector} from "react-redux";
import {saveAddress} from "../../global/features";

const DeliveryAddress = () => {
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useDispatch();

    const [addyData, setAddyData] = useState({
        address: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
    });
    const token = useSelector((state) => state?.userToken);

    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const handleAddAddress = async () => {
        // if (!cartData?.sizeId) toast.error("Select size joor!!!");
        try {
            const response = await axios.post(
                `${BASE_URL}/api/v1/address/createNew`,
                addyData,
                {headers}
            );
            // setProduct(response?.data?.data?.product);
            console.log(response);
            // toast.success(response?.data?.message);
        } catch (error) {
            console.log(error);
        }
    };
    const [addy, setAddy] = useState([]);
    const fetchAddy = async () => {
        try {
            const response = await axios.get(
                `${BASE_URL}/api/v1/address/getAll`,
                {
                    headers,
                }
            );
            setAddy(response?.data?.data);
            dispatch(saveAddress(response?.data?.data));
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAddy();
    }, [token]);

    return (
        <div className="w-full h-max flex flex-col gap-4 pl-8 phone:pl-0 ">
            <p className="text-lg" onClick={fetchAddy}>
                My Delivery Address
            </p>
            <div className="w-full h-max flex phone:flex-col gap-4">
                <>
                    {addy.map((item, index) => (
                        <div
                            className="w-1/3 phone:w-full h-40 flex flex-col border border-gray-300 rounded p-2"
                            key={index}
                        >
                            <div className="w-full h-10 flex justify-between items-center">
                                <p>Address {index + 1}</p>
                                <span className="flex items-center gap-4">
                                    <CiTrash
                                        size={20}
                                        className="text-red-700 cursor-pointer"
                                    />
                                    <CiEdit
                                        size={20}
                                        className="text-blue-600 cursor-pointer"
                                    />
                                </span>
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
                </>
            </div>
            <div className="w-full h-max flex items-center justify-center">
                <button
                    className="w-max h-max px-4 py-2 rounded bg-black text-white"
                    onClick={() => setOpenModal(true)}
                >
                    Add new
                </button>
            </div>
            <Modal
                open={openModal}
                closeIcon
                onClose={() => setOpenModal(false)}
                onCancel={() => setOpenModal(false)}
                onOk={handleAddAddress}
                okText="Add address"
            >
                <div className="w-full h-max flex flex-col gap-3">
                    <p>Add new address</p>

                    <Input
                        placeholder="Address name"
                        value={addyData.address}
                        onChange={(e) =>
                            setAddyData((prev) => ({
                                ...prev,
                                address: e.target.value,
                            }))
                        }
                        className="w-full h-10 rounded border border-gray-400 placeholder:text-gray-400"
                    />

                    <Input
                        placeholder="City"
                        value={addyData.city}
                        onChange={(e) =>
                            setAddyData((prev) => ({
                                ...prev,
                                city: e.target.value,
                            }))
                        }
                        className="w-full h-10 rounded border border-gray-400 placeholder:text-gray-400"
                    />
                    <Input
                        placeholder="State"
                        value={addyData.state}
                        onChange={(e) =>
                            setAddyData((prev) => ({
                                ...prev,
                                state: e.target.value,
                            }))
                        }
                        className="w-full h-10 rounded border border-gray-400 placeholder:text-gray-400"
                    />
                    <Input
                        placeholder="Zip"
                        value={addyData.postalCode}
                        onChange={(e) =>
                            setAddyData((prev) => ({
                                ...prev,
                                postalCode: e.target.value,
                            }))
                        }
                        className="w-full h-10 rounded border border-gray-400 placeholder:text-gray-400"
                    />
                    <Select
                        placeholder="Select country"
                        value={addyData.country}
                        options={[
                            {
                                value: "canada",
                                label: "Canada",
                            },
                            {
                                value: "Nigeria",
                                label: "Nigeria",
                            },
                            {
                                value: "italy",
                                label: "Italy",
                            },
                            {
                                value: "france",
                                label: "France",
                            },
                        ]}
                        onChange={(e) => {
                            // console.log(e),
                            setAddyData((prev) => ({
                                ...prev,
                                country: e,
                            }));
                        }}
                        className="w-full h-10 rounded border border-gray-400 placeholder:text-gray-400"
                    />
                </div>
            </Modal>
        </div>
    );
};

export default DeliveryAddress;
