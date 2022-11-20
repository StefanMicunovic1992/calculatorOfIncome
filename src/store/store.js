import { configureStore } from "@reduxjs/toolkit";
import  incomeSlice from "./incomeSlice";
import timeOfIncomeSlice from "./timeOfIncomeSlice";
import typeOfIncomeSlice from "./typeOfIncomeSlice";




export const store= configureStore({
    reducer:{
        incomeValue: incomeSlice,
        typeOfIncomeValue: typeOfIncomeSlice,
        timeOfIncomeValue: timeOfIncomeSlice,
    }
})

