import { configureStore } from "@reduxjs/toolkit";
import Billsmanagement from "./Slices/Billsmanagement"; // Check path

const store = configureStore({
  reducer: {
    managebills: Billsmanagement,
  },
});

export default store;
