import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {ToastContainer} from "react-toastify";
import CounterContext from "./context/CounterContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <CounterContext>
            <ToastContainer />
            <App />
        </CounterContext>
    </StrictMode>
);
