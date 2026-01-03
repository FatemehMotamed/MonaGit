import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../featurs/counter/CounterSlice"
import numberReducer from "../featurs/number/NumberSlice"
import userReducer from "../featurs/users/UsersSlice"
import logger from "redux-logger"
const store = configureStore({
    reducer:{
        counter:  CounterReducer,
        number: numberReducer,
        users : userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store