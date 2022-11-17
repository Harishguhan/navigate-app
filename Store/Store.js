import { configureStore } from '@reduxjs/toolkit';
import NameSlice from "./CustomerName";
export const Store = configureStore({
    reducer:{
        names:NameSlice
    }
})