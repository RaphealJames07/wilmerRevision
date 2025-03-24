import {Input, Modal, Select} from "antd";
import {useState} from "react";
import {CiEdit, CiTrash} from "react-icons/ci";

const DeliveryAddress = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="w-full h-max flex flex-col gap-4 pl-8 phone:pl-0 ">
            <p className="text-lg">My Delivery Address</p>
            <div className="w-full h-max flex phone:flex-col gap-4">
                <div className="w-1/3 phone:w-full h-40 flex flex-col border border-gray-300 rounded p-2">
                    <div className="w-full h-10 flex justify-between items-center">
                        <p>Address 1</p>
                        <span className="flex items-center gap-4">
                            <CiTrash size={20} className="text-red-700 cursor-pointer" />
                            <CiEdit size={20} className="text-blue-600 cursor-pointer" />
                        </span>
                    </div>
                    <div className="w-full h-[calc(100%-2.5rem)] overflow-y-auto">
                        <p className="w-full h-full text-sm">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quae, dignissimos odio? Repudiandae
                            repellendus accusamus rem ad animi esse ipsam
                            expedita cumque. Accusantium voluptas at nam illo
                            dicta repudiandae eum velit.
                        </p>
                    </div>
                </div>
                <div className="w-1/3 phone:w-full h-40 flex flex-col border border-gray-300 rounded p-2">
                    <div className="w-full h-10 flex justify-between items-center">
                        <p>Address 2</p>
                        <span className="flex items-center gap-4">
                            <CiTrash size={20} className="text-red-700 cursor-pointer" />
                            <CiEdit size={20} className="text-blue-600 cursor-pointer" />
                        </span>
                    </div>
                    <div className="w-full h-[calc(100%-2.5rem)] overflow-y-auto">
                        <p className="w-full h-full text-sm">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quae, dignissimos odio? Repudiandae
                            repellendus accusamus rem ad animi esse ipsam
                            expedita cumque. Accusantium voluptas at nam illo
                            dicta repudiandae eum velit.
                        </p>
                    </div>
                </div>
                <div className="w-1/3 phone:w-full h-40 flex flex-col border border-gray-300 rounded p-2">
                    <div className="w-full h-10 flex justify-between items-center">
                        <p>Address 3</p>
                        <span className="flex items-center gap-4">
                            <CiTrash size={20} className="text-red-700 cursor-pointer" />
                            <CiEdit size={20} className="text-blue-600 cursor-pointer" />
                        </span>
                    </div>
                    <div className="w-full h-[calc(100%-2.5rem)] overflow-y-auto">
                        <p className="w-full h-full text-sm">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quae, dignissimos odio? Repudiandae
                            repellendus accusamus rem ad animi esse ipsam
                            expedita cumque. Accusantium voluptas at nam illo
                            dicta repudiandae eum velit.
                        </p>
                    </div>
                </div>
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
                onOk={() => {
                    console.log("Added");
                    setOpenModal(false);
                }}
                okText="Add address"
            >
                <div className="w-full h-max flex flex-col gap-3">
                    <p>Add new address</p>
                    <Input
                        placeholder="First name"
                        className="w-full h-10 rounded border border-gray-400 placeholder:text-gray-400"
                    />
                    <Input
                        placeholder="Last name"
                        className="w-full h-10 rounded border border-gray-400 placeholder:text-gray-400"
                    />
                    <Input
                        placeholder="Address name"
                        className="w-full h-10 rounded border border-gray-400 placeholder:text-gray-400"
                    />
                    <Input
                        placeholder="Apartment, suite, etc"
                        className="w-full h-10 rounded border border-gray-400 placeholder:text-gray-400"
                    />
                    <Input
                        placeholder="City"
                        className="w-full h-10 rounded border border-gray-400 placeholder:text-gray-400"
                    />
                    <Input
                        placeholder="State"
                        className="w-full h-10 rounded border border-gray-400 placeholder:text-gray-400"
                    />
                    <Input
                        placeholder="Zip"
                        className="w-full h-10 rounded border border-gray-400 placeholder:text-gray-400"
                    />
                    <Select
                        placeholder="Select country"
                        options={[
                            {
                                value: "canada",
                                label: "Canada",
                            },
                            {
                                value: "usa",
                                label: "United states",
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
                        className="w-full h-10 rounded border border-gray-400 placeholder:text-gray-400"
                    />
                </div>
            </Modal>
        </div>
    );
};

export default DeliveryAddress;
