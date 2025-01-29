import React from "react";
import Dashboard from "./Pages/Dashboard";
import ShowBills from "./Components/Showbills";
import Showbillinchartform from "./Components/Showbillsinchartform";
import { useSelector } from "react-redux";
import "./App.css";
import MonthlyBills from "./Components/Showbillsinchartform";
import BillsPage from "./Components/BillsPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const bills = useSelector((state) => state.managebills.bills || []);
  console.log(bills);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/showbills" element={<ShowBills />} />
        <Route path="/monthlybills" element={<MonthlyBills bills={bills} />} />
        <Route path="/bills" element={<BillsPage bills={bills} />} />
      </Routes>
      {/* <ShowBills /> */}
      {/* <MonthlyBills bills={bills} />
      <BillsPage bills={bills} /> */}
    </div>
  );
};

export default App;
