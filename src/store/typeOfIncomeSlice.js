import { createSlice } from "@reduxjs/toolkit";



const initialState = {typeOfIncome:''}



export const typeOdIncomeSlice=createSlice({
    name:'typeOdIncome_name',
    initialState,
    reducers:{
        setTypeOfIncome:(state,action)=>{
            state.typeOfIncome=action.payload
        }
    }
})


export const {setTypeOfIncome} = typeOdIncomeSlice.actions;
export default typeOdIncomeSlice.reducer;