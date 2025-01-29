import React, { useState } from "react";
import "./BillsPage.css";

const BillsPage = ({ bills }) => {
  const [budget, setBudget] = useState(""); // Budget entered by the user
  const [highlightedBills, setHighlightedBills] = useState([]);

  // Handle the change in the budget input
  const handleBudgetChange = (e) => {
    setBudget(e.target.value); // Update the budget state
  };

  // Function to highlight the bills based on the budget
  const highlightBills = () => {
    let total = 0;
    const selectedBills = [];
    const enteredBudget = Number(budget); // Ensure the budget is a number

    if (!isNaN(enteredBudget) && enteredBudget > 0) {
      // Sort bills by amount (ascending order)
      const sortedBills = [...bills].sort((a, b) => a.amount - b.amount);

      // Go through the sorted bills and add them to selectedBills until the total exceeds the budget
      for (let i = 0; i < sortedBills.length; i++) {
        if (Number(total) + Number(sortedBills[i].amount) <= enteredBudget) {
          selectedBills.push(sortedBills[i].id); // Add bill ID to selected bills
          total += Number(sortedBills[i].amount); // Add bill amount to total
        } else {
          break; // Stop if adding another bill would exceed the budget
        }
      }
    }
    console.log("Total Selected Bills:", selectedBills);
    setHighlightedBills(selectedBills); // Set the bills that can be paid
  };

  return (
    <div className="bills-page">
      <h1 className="page-heading">Bills and Monthly Budget</h1>

      <div className="budget-input">
        <label htmlFor="budget">Enter Your Budget: </label>
        <input
          type="number"
          id="budget"
          value={budget}
          onChange={handleBudgetChange}
          placeholder="Enter your budget for the month"
        />
        <button onClick={highlightBills} className="show-button">
          Show
        </button>
      </div>

      <div className="bills-list">
        {bills.map((bill) => (
          <div
            key={bill.id}
            className={`bill-item ${
              highlightedBills.includes(bill.id) ? "highlight" : ""
            }`}
          >
            <div className="bill-description">
              <strong>{bill.name}</strong>
              <p>{bill.description}</p>
            </div>
            <div className="bill-amount">
              <p>${bill.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillsPage;
