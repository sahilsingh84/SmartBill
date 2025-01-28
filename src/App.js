import React from "react";
import Dashboard from "./Pages/Dashboard";
import ShowBills from "./Components/Showbills";
import { useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const bills = useSelector((state) => state.managebills.bills || []);
  console.log(bills);
  return (
    <div>
      {/* <Dashboard /> */}
      <ShowBills />
    </div>
  );
};

export default App;
