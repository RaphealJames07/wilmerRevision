import {NavLink} from "react-router";

const GiftCards = () => {
    return (
        <div className="w-full h-[40vh] flex items-center justify-center flex-col gap-4">
            <p className="text-lg">Coming soon...</p>
            <div className="w-full h-max flex items-center justify-center">
                <button className="w-max h-max px-4 py-2 rounded bg-black text-white">
                    <NavLink to={"/"}>Back Home</NavLink>
                </button>
            </div>
        </div>
    );
};

export default GiftCards;
