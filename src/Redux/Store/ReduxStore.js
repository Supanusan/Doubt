import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../ReduxSlice"

const Store = configureStore({
    reducer: {
        Productreducer: ProductReducer
    }

})

export default Store;