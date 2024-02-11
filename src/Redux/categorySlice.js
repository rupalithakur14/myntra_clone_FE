import { baseURL } from "@/network/axios";
import { endPoints } from "@/network/endPoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategoryData = createAsyncThunk(
  "category/categoryData",
  async (id) => {
    console.log(id, "idd");
    let response = await axios.get(baseURL + endPoints.categoryPage(id));
    // if(response.data.status)
    // console.log(response.data,"cvbnm")
    return response.data;
  }
);

const masterSlice = createSlice({
  name: "product",
  initialState: {
    value: {
      categoryData: [],
      isLoading: false,
    },
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCategoryData.pending, (state) => {
      state.value.isLoading = true;
      // console.log("hii")
      // debugger;
    });
    builder.addCase(fetchCategoryData.fulfilled, (state, action) => {
      state.value.categoryData = action.payload;
      state.value.isLoading = false;
    });
    builder.addCase(fetchCategoryData.rejected, (state, action) => {
      state.value.categoryData = [];
      state.value.error = "Oops! something went wrong";
    });
  },
});

export default masterSlice.reducer;
