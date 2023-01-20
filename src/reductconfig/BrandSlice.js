import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebApi from "./WebApi";
import WebService from "./WebService";

export const fetchBrand = createAsyncThunk("brand/fetchBrand",async()=>{
    let response = await WebService.getApi(WebApi.LOAD_BRAND);

    // let response = await axios.get("http://localhost:3000/product/list")
    if(response.data.status)
    return response.data.BrandList;
});

const slice = createSlice({
    name: 'brand',
    initialState: {
       value:{
        brandList:[],
        isLoading:false
       }
    },
    reducers: {
        
    },
    extraReducers:(builder)=>{
        
        builder.addCase(fetchBrand.pending,(state)=>{
            state.value.isLoading=true;
        })
        builder.addCase(fetchBrand.fulfilled,(state,action)=>{
            state.value.brandList=action.payload;
            state.value.isLoading=false;
        })
        builder.addCase(fetchBrand.rejected,(state,action)=>{
            state.value.brandList=[];
            state.value.error="Oops! something went wrong";
        })
    }
});
export default slice.reducer;