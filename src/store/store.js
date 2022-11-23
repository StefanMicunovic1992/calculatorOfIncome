import { configureStore } from "@reduxjs/toolkit";
import dataFromCalculateFncSlice from "./dataFromCalculateFncSlice";
import incomeSlice from "./incomeSlice";
import timeOfIncomeSlice from "./timeOfIncomeSlice";
import typeOfIncomeSlice from "./typeOfIncomeSlice";




export const store= configureStore({
    reducer:{
        incomeValue: incomeSlice,
        typeOfIncomeValue: typeOfIncomeSlice,
        timeOfIncomeValue: timeOfIncomeSlice,
        dataFromCalculateFncValue: dataFromCalculateFncSlice
    }
})

