import React from "react";
import Dashboard from "./Pages/Dashboard";
import ShowBills from "./Components/Showbills";
import Showbillinchartform from "./Components/Showbillsinchartform";
import { useSelector } from "react-redux";
import "./App.css";
import MonthlyBills from "./Components/Showbillsinchartform";
import BillsPage from "./Components/BillsPage";

const App = () => {
  const bills = useSelector((state) => state.managebills.bills || []);
  console.log(bills);
  return (
    <div>
      {/* <Dashboard /> */}
      <ShowBills />
      {/* <Showbillinchartform bills={bills} /> */}
      <MonthlyBills bills={bills} />
      <BillsPage bills={bills} />
    </div>
  );
};

export default App;
