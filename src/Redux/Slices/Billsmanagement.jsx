import { createSlice } from "@reduxjs/toolkit";

// Initialize the state with bills from local storage or default values
const initialState = {
  bills: JSON.parse(localStorage.getItem("bills")) || [
    {
      id: 1,
      description: "Dominoes",
      category: "FoodNDining",
      amount: "430",
      date: "2020-02-01", // Use consistent YYYY-MM-DD format
    },
    {
      id: 2,
      description: "Car wash",
      category: "Utility",
      amount: "500",
      date: "2020-06-01",
    },
    {
      id: 3,
      description: "Amazon",
      category: "Shopping",
      amount: "2030",
      date: "2020-07-01",
    },
    {
      id: 4,
      description: "House rent",
      category: "Food & Dining",
      amount: "35900",
      date: "2020-03-01",
    },
    {
      id: 5,
      description: "Tuition",
      category: "Education",
      amount: "2200",
      date: "2020-12-01",
    },
    {
      id: 6,
      description: "Laundry",
      category: "Personal Care",
      amount: "320",
      date: "2020-01-14",
    },
    {
      id: 7,
      description: "Vacation",
      category: "Travel",
      amount: "3430",
      date: "2020-01-18",
    },
  ],
};

export const Billsmanagement = createSlice({
  name: "managebills",
  initialState,
  reducers: {
    // Add a new bill item
    addNewItem: (state, action) => {
      const newBill = {
        ...action.payload,
        date: new Date(action.payload.date).toISOString().split("T")[0], // Convert to YYYY-MM-DD
      };
      const updatedBills = [...state.bills, newBill];
      state.bills = updatedBills;
      localStorage.setItem("bills", JSON.stringify(updatedBills));
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
        bill.id === action.payload.id
          ? {
              ...action.payload,
              date: new Date(action.payload.date).toISOString().split("T")[0], // Ensure consistent format
            }
          : bill
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
