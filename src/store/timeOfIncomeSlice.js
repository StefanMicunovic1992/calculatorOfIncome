import { createSlice } from "@reduxjs/toolkit";



const initialState = {timeOfIncome:'Weekly'}



export const timeOdIncomeSlice=createSlice({
    name:'timeOdIncome_name',
    initialState,
    reducers:{
        setTimeOfIncome:(state,action)=>{
            state.timeOfIncome=action.payload
        }
    }
})


export const {setTimeOfIncome} = timeOdIncomeSlice.actions;
export default timeOdIncomeSlice.reducer;