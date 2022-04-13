import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    listSanPham : []
}
export const getAllSanPham = createAsyncThunk('/AllDanhMuc',
    // Declare the type your function argument here:
    async () => {
        try {
            const res = await axios.get("https://6232e62e6de3467dbac2a7d6.mockapi.io/SanPham");
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
  )

  export const AllSanPhamSlice = createSlice(
    {
        name:"Loai",
        initialState,
        reducers:{

        },
        extraReducers:builder=>{
            builder
            // get all danh muc
            .addCase(getAllSanPham.pending,(state,action)=>{
                state.listSanPham = [];
            })
            .addCase(getAllSanPham.fulfilled,(state,action)=>{
                state.listSanPham = action.payload;
            })
            .addCase(getAllSanPham.rejected,(state,action)=>{
                state.listSanPham = []
            })
        }
    }
)
export default AllSanPhamSlice.reducer;