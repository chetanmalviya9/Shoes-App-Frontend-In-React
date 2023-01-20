import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebApi from "./WebApi";
import WebService from "./WebService";

export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId) => {

    let response = await WebService.postApi(WebApi.LOAD_CART, { userId: userId });
    console.log(response.data)
    return response.data.items;
});
const slice = createSlice({
    name: 'cart',
    initialState: {
        value: {
            cartList: [],
            isLoading: false,
            error: "",
            totalBill: 0
        }
    },
    reducers: {
        updateCart: (state, action) => {
            //state.value.cartList = [...state.value.cartList, action.payload];

            state.value.cartList.push(action.payload);
        },
        updateQuantity: (state, action) => {
            let index = action.payload.index
            let sum = 0;
            state.value.cartList.splice(index, 1, action.payload.product);
            state.value.cartList.forEach(element => {
                state.value.totalBill = sum += element.total
            });
        },
        emptyCart: (state, action) => {
            state.value.cartList = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.pending, (state, action) => {
            state.value.isLoading = true;
        });
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            let cartItems = action.payload
            let sum = 0;
            cartItems.forEach(element => {
                element.quantity = 1;
                element.total = element.quantity * element.productPrice;
            });
            console.log(cartItems)
            state.value.cartList = cartItems;
            state.value.isLoading = false;
            state.value.cartList.forEach(element => {
                state.value.totalBill = sum += element.total*1;
            });
        });
        builder.addCase(fetchCart.rejected, (state, action) => {
            state.value.cartList = [];
            state.value.isLoading = false;
            state.value.error = "Oops! something went wrong";
        })
    }
})
export const { updateCart, updateQuantity, emptyCart } = slice.actions;
export default slice.reducer;