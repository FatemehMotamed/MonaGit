import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberValue: 0
}

const numberSlice = createSlice({
    name: "number",
    initialState,
    reducers:{
        increamentByamunt : (state, action) =>{
            state.numberValue +=action.payload
        },
        decreamentByamount : (state, action) =>{
            state.numberValue-=action.payload
        }
    }
})

export default numberSlice.reducer
export const {increamentByamunt, decreamentByamount } = numberSlice.actions
export const numberSelector = (store)=>store.number.numberValue
