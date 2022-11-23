import { createSlice } from "@reduxjs/toolkit";



const initialState = {dataFromCalculateFnc:{}}



export const dataFromCalculateFncSlice=createSlice({
    name:'dataFromCalculateFnc_name',
    initialState,
    reducers:{
        setData:(state,action)=>{
            state.dataFromCalculateFnc=action.payload
        }
    }
})


export const {setData} = dataFromCalculateFncSlice.actions;
export default dataFromCalculateFncSlice.reducer;