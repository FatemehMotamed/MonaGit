import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/products/ProductsSlice'
import { createLogger } from "redux-logger";

const logger = createLogger()

const store = configureStore({
    reducer: {
        products: productsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store