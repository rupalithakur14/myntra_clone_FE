import { configureStore } from "@reduxjs/toolkit";
// import BrandSlice from "./BrandSlice";
// import CartSlice from "./CartSlice";
import ProductSlice from "./productSlice";
import CategorySlice from "./categorySlice";
export const store = configureStore({
  reducer: {
    product: ProductSlice,
    categoryData: CategorySlice,
    // brand:BrandSlice,
    // user:UserSlice,
    // cart:CartSlice
  },
});
