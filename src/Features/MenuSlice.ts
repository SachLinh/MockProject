import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { DanhMucType } from '../TypeState/DanhMucType';
const initialState = {
    listCata : []
}
export const getAllDanhMuc = createAsyncThunk('/AllDanhMuc',
    // Declare the type your function argument here:
    async () => {
        try {
            const res = await axios.get("https://6232e62e6de3467dbac2a7d6.mockapi.io/Loai");
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
  )
export const AddNewLoai = createAsyncThunk('/AddNew',
    // Declare the type your function argument here:
    async (payload:any) => {
        try {
            const res = await axios.post(`https://6232e62e6de3467dbac2a7d6.mockapi.io/Loai`, payload.data);
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
  )

  export const AllDanhMucSlice = createSlice(
    {
        name:"Loai",
        initialState,
        reducers:{

        },
        extraReducers:builder=>{
            builder
            // get all danh muc
            .addCase(getAllDanhMuc.pending,(state,action)=>{
                state.listCata = [];
            })
            .addCase(getAllDanhMuc.fulfilled,(state,action)=>{
                state.listCata = action.payload;
            })
            .addCase(getAllDanhMuc.rejected,(state,action)=>{
                state.listCata = []
            })
         
        }
    }
)
export default AllDanhMucSlice.reducer;