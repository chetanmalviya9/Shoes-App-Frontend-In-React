import { configureStore } from "@reduxjs/toolkit";
import BrandSlice from "./BrandSlice";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";
import UserSlice from "./UserSlice";
const store = configureStore({
    reducer:{
        product:ProductSlice,
        brand:BrandSlice,
        user:UserSlice,
        cart:CartSlice
    }
});
export default store;