import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/es/integration/react";
import {persistStore} from "redux-persist";
import store from "./global/store.js";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {ToastContainer} from "react-toastify";

const persistor = persistStore(store);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ToastContainer />
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </StrictMode>
);
