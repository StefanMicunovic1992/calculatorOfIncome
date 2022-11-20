import { createSlice } from "@reduxjs/toolkit";



const initialState = {income:0}



export const incomeSlice=createSlice({
    name:'income_name',
    initialState,
    reducers:{
        setIncome:(state,action)=>{
            state.income=action.payload
        }
    }
})


export const {setIncome} = incomeSlice.actions;
export default incomeSlice.reducer;