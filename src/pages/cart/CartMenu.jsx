

import {Menu, Dropdown, message} from "antd";
import {CiMenuKebab} from "react-icons/ci";

const {Item} = Menu;



const CartMenu = () => {
    const handleMenuClick = (event) => {
        const key = event.key;
        if (key === "1") {
            message.success("Edit click");
        } else if (key === "2") {
            message.success("Wish click");
        } else if (key === "3") {
            message.success("Delete click");
        }
    };

    return (
        <Dropdown
            overlay={
                <Menu onClick={handleMenuClick}>
                    <>
                        <Item key="1">Edit</Item>
                        <Item key="2">Add to wishlist </Item>
                        <Item key="3" className="hidden phone:flex">Delete</Item>
                    </>
                </Menu>
            }
            trigger={["click"]}
            placement="bottomRight"
        >
            <a onClick={(e) => e.preventDefault()}>
                <CiMenuKebab className="cursor-pointer " size={22} />
            </a>
        </Dropdown>
    );
};

export default CartMenu;
