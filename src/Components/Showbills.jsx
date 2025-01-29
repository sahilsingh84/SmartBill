import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewItem,
  updateExisting,
  deleteItem,
} from "../Redux/Slices/Billsmanagement";

const Showbills = () => {
  const bills = useSelector((state) => state.managebills.bills);
  const dispatch = useDispatch();

  // State to manage the form inputs (for both adding and editing)
  const [formData, setFormData] = useState({
    id: null,
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  // State to control the visibility of the form
  const [formVisible, setFormVisible] = useState(false);

  // Filter states
  const [filterCategory, setFilterCategory] = useState("");
  const [filterDate, setFilterDate] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle adding a new bill
  const handleAddNewBill = (e) => {
    e.preventDefault();
    const newBill = {
      id: Date.now(), // Unique ID using current timestamp
      description: formData.description,
      category: formData.category,
      amount: formData.amount,
      date: formData.date,
    };
    dispatch(addNewItem(newBill));
    setFormData({
      id: null,
      description: "",
      category: "",
      amount: "",
      date: "",
    }); // Reset form
    setFormVisible(false); // Hide the form
  };

  // Handle editing a bill
  const handleEditBill = (id) => {
    const billToEdit = bills.find((bill) => bill.id === id);
    if (billToEdit) {
      setFormData(billToEdit);
      setFormVisible(true); // Show form when editing
    }
  };

  // Handle updating an existing bill
  const handleUpdateBill = (e) => {
    e.preventDefault();
    dispatch(updateExisting(formData));
    setFormData({
      id: null,
      description: "",
      category: "",
      amount: "",
      date: "",
    }); // Reset form
    setFormVisible(false); // Hide the form
  };

  // Handle deleting a bill
  const handleDeleteBill = (id) => {
    dispatch(deleteItem(id));
  };

  // Filtered bills
  const filteredBills = bills.filter((bill) => {
    const categoryMatch = filterCategory
      ? bill.category.toLowerCase().includes(filterCategory.toLowerCase())
      : true;

    const dateMatch = filterDate ? bill.date === filterDate : true;

    return categoryMatch && dateMatch;
  });

  return (
    <div className="showBillMaindiv">
      <h1 className="page-heading">Bills Management</h1>

      {/* Filter Section */}
      <div className="filter-section">
        <input
          type="text"
          placeholder="Filter by Category"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        />
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBills.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.description}</td>
              <td>{bill.category}</td>
              <td>{bill.amount}</td>
              <td>{bill.date}</td>
              <td>
                <button
                  className="edit"
                  onClick={() => handleEditBill(bill.id)}
                >
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => handleDeleteBill(bill.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Bill Button */}
      <button className="add-button" onClick={() => setFormVisible(true)}>
        + Add New Bill
      </button>

      {/* Modal Form for Add/Edit Bill */}
      {formVisible && (
        <div className="form-overlay">
          <form
            onSubmit={formData.id ? handleUpdateBill : handleAddNewBill}
            className="bill-form"
          >
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleInputChange}
              required
            />
            <input
              type="date"
              name="date"
              placeholder="Date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
            <button type="submit">
              {formData.id ? "Update Bill" : "Add Bill"}
            </button>
            <button type="button" onClick={() => setFormVisible(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Showbills;
