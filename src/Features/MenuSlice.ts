import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { DanhMucType } from '../TypeState/DanhMucType';
const initialState = {
    listCata: null,
    loading:false
}
const getAllDanhMuc = createAsyncThunk('/AllDanhMuc',
    // Declare the type your function argument here:
    async () => {
        try {
            const res = await axios.get("https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc");
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
  )

  export const AllDanhMucSlice = createSlice(
    {
        name:"Danhmuc",
        initialState,
        reducers:{

        },
        extraReducers:builder=>{
            builder
            // get all profile
            .addCase(getAllDanhMuc.pending,(state,action)=>{
                state.loading = true;
            })
            .addCase(getAllDanhMuc.fulfilled,(state,action)=>{
                state.loading = false;
                state.listCata = action.payload;
            })
            .addCase(getAllDanhMuc.rejected,(state,action)=>{
                state.loading = false;
                state.listCata = null
            })
        }
    }
)
export default AllDanhMucSlice.reducer;