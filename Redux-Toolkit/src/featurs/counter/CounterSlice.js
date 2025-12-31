import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counterValue: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increament : (state) =>{
            state.counterValue++
        },
        decreament : (state) =>{
            state.counterValue--
        }
    }
})

export default counterSlice.reducer
export const {increament, decreament} = counterSlice.actions
export const counterSelector = (store)=>store.counter.counterValue
