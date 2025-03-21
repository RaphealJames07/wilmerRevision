import React from "react";
import Header from "../components/Header";
import {CountContext} from "../context/CounterContext";
import {useContext} from "react";

const Home = () => {
    const {
        count,
        increase,
        decrease,
        setCount,
        updatedState,
        initialState,
        dispatch,
    } = useContext(CountContext);
    console.log("Initial State is", initialState);
    console.log("Updated State is", updatedState);

    const simulatedData = Array.from({length: 30}, (_, index) => ({
        userId: `USER${index + 1}`,
        merchant_name: `John Doe ${index + 1}`,
    }));

    return (
        <>
            <div className="w-full h-max py-20 p-10">
                <div className="w-full h-20 flex justify-center items-center gap-4">
                    <button
                        onClick={() =>
                            dispatch({
                                type: "addToCart",
                                payload: updatedState.cart.length,
                            })
                        }
                        className="w-max h-max p-4 rounded bg-amber-600"
                    >
                        +
                    </button>
                    <span>{count}</span>
                    <button
                        onClick={() => dispatch({type: "reduceCount"})}
                        className="w-max h-max p-4 rounded bg-amber-600"
                    >
                        -
                    </button>
                </div>

                <div className="w-full h-max flex gap-6 flex-wrap">
                    <>
                        {simulatedData.map((item, index) => (
                            <div
                                className="w-72 h-80 rounded flex flex-col border shadow border-gray-200 p-2"
                                key={index}
                            >
                                <div className="w-full h-1/2">
                                    <img
                                        src=""
                                        className="w-full h-full"
                                        alt=""
                                    />
                                </div>
                                <div className="w-full h-1/2 flex flex-col gap-2">
                                    <p className="w-full h-max flex justify-between items-center">
                                        Name:{" "}
                                        <span className="font-medium text-lg">
                                            Versace Fit Bag
                                        </span>
                                    </p>
                                    <p className="w-full h-max flex justify-between items-center">
                                        Brand:{" "}
                                        <span className="font-medium text-lg">
                                            {item?.merchant_name}
                                        </span>
                                    </p>
                                    <p className="w-full h-max flex justify-between items-center">
                                        Price:{" "}
                                        <span className="font-medium text-lg">
                                            $200{" "}
                                        </span>
                                    </p>
                                    <button className="w-full h-12 rounded bg-purple-500">
                                        Add To cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </>
                </div>
            </div>
        </>
    );
};

export default Home;
