import { configureStore } from "@reduxjs/toolkit";
import navigateSlice from "./navigateSlice";
import DisplayDataSlice from "./displayData";
 
const store = configureStore({
  reducer: {
    navigate: navigateSlice,
    displayData: DisplayDataSlice,
   },
  
});

export default store;
