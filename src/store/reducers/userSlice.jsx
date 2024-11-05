import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info:null,
    
}


const studentSlice =  createSlice({
    name:"user",
    initialState,
    reducers:{
        loadUser:(state,action)=>{state.info = action.payload}
    }
})


export default studentSlice.reducer
export const {loadUser } = studentSlice.actions