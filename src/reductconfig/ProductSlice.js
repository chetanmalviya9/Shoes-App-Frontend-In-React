import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebApi from "./WebApi";
import WebService from "./WebService";

export const fetchProduct = createAsyncThunk("product/fetchProduct",async()=>{
    let response = await WebService.getApi(WebApi.LOAD_PRODUCT);
    // console.log(response);
    // let response = await axios.get("http://localhost:3000/product/list")
    if(response.data.status)
    return response.data.productList;
});

const masterSlice = createSlice({
    name: 'product',
    initialState: {
       value:{
        productList:[],
        isLoading:false
       }
    },
    reducers: {
        
    },
    extraReducers:(builder)=>{
        
        builder.addCase(fetchProduct.pending,(state)=>{
            state.value.isLoading=true;
            // console.log("hii")
            // debugger;
        })
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.value.productList=action.payload;
            state.value.isLoading=false;
        })
        builder.addCase(fetchProduct.rejected,(state,action)=>{
            state.value.productList=[];
            state.value.error="Oops! something went wrong";
        })
    }
});
export default masterSlice.reducer;