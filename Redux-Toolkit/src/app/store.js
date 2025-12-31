import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../featurs/counter/CounterSlice"
import numberReducer from "../featurs/number/NumberSlice"

const store = configureStore({
    reducer:{
        counter:  CounterReducer,
        number: numberReducer,
    }
})

export default store