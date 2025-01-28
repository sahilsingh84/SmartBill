import { createSlice } from "@reduxjs/toolkit";

// Initialize the state with bills from local storage or default values
const initialState = {
  bills: JSON.parse(localStorage.getItem("bills")) || [
    {
      id: 1,
      description: "Dominoes",
      category: "FoodNDining",
      amount: "430",
      date: "01-02-2020",
    },
    {
      id: 2,
      description: "Car wash",
      category: "Utility",
      amount: "500",
      date: "01-06-2020",
    },
    {
      id: 3,
      description: "Amazon",
      category: "Shopping",
      amount: "2030",
      date: "01-07-2020",
    },
    {
      id: 4,
      description: "House rent",
      category: "Food & Dining",
      amount: "35900",
      date: "01-03-2020",
    },
    {
      id: 5,
      description: "Tuition",
      category: "Education",
      amount: "2200",
      date: "01-12-2020",
    },
    {
      id: 6,
      description: "Laundry",
      category: "Personal Care",
      amount: "320",
      date: "01-14-2020",
    },
    {
      id: 7,
      description: "Vacation",
      category: "Travel",
      amount: "3430",
      date: "01-18-2020",
    },
  ],
};

export const Billsmanagement = createSlice({
  name: "managebills",
  initialState,
  reducers: {
    // Add a new bill item
    addNewItem: (state, action) => {
      const newBill = [...state.bills, action.payload];
      state.bills = newBill; // Update the bills array
      localStorage.setItem("bills", JSON.stringify(newBill)); // Update localStorage
    },

    // Delete a bill item by id
    deleteItem: (state, action) => {
      const filteredBills = state.bills.filter(
        (bill) => bill.id !== action.payload
      );
      state.bills = filteredBills;
      localStorage.setItem("bills", JSON.stringify(filteredBills));
    },

    // Update an existing bill item
    updateExisting: (state, action) => {
      const updatedBills = state.bills.map((bill) =>
        bill.id === action.payload.id ? action.payload : bill
      );
      state.bills = updatedBills;
      localStorage.setItem("bills", JSON.stringify(updatedBills));
    },
  },
});

// Export actions and reducer
export const { addNewItem, deleteItem, updateExisting } =
  Billsmanagement.actions;
export default Billsmanagement.reducer;
