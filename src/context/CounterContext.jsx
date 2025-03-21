import {createContext, useReducer, useState} from "react";

export const CountContext = createContext();

const CounterContext = ({children}) => {
    const [count, setCount] = useState(0);
    const increase = () => setCount(count + 1);
    const decrease = () => {
        count < 1 ? 0 : setCount(count - 1);
    };

    // const reducer

    const initialState = {
        cart: [],
        count: 0,
        isActive: false,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "addToCart":
                console.log("I dispatched Add to cart");
                console.log(state);
                return {
                    ...state,
                    cart: [...state.cart, action.payload + 1],
                };
            case "removeFromCart":
                console.log("I dispatched remove to cart");
                return (state.cart = []);
            case "increaseCount":
                console.log("I dispatched increase count");
                return (state.cart = []);
            case "reduceCount":
                console.log("I dispatched reduce count");
                return (state.cart = []);
            default:
                return state;
        }
    };

    const [updatedState, dispatch] = useReducer(reducer, initialState);
    // console.log(updatedState);
    // console.log(initialState);

    const values = {
        count,
        increase,
        decrease,
        setCount,
        updatedState,
        initialState,
        dispatch,
    };
    return (
        <CountContext.Provider value={values}>{children}</CountContext.Provider>
    );
};

export default CounterContext;
