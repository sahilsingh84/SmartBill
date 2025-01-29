import React from "react";
import Dashboard from "./Pages/Dashboard";
import ShowBills from "./Components/Showbills";
import Showbillinchartform from "./Components/Showbillsinchartform";
import { useSelector } from "react-redux";
import "./App.css";
import MonthlyBills from "./Components/Showbillsinchartform";
import BillsPage from "./Components/BillsPage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";

const App = () => {
  const bills = useSelector((state) => state.managebills.bills || []);
  console.log(bills);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/showbills" element={<ShowBills />} />
        <Route
          path="/dashboard/monthlybills"
          element={<MonthlyBills bills={bills} />}
        />
        <Route path="/dashboard/bills" element={<BillsPage bills={bills} />} />
      </Routes>
      {/* <ShowBills /> */}
      {/* <MonthlyBills bills={bills} />
      <BillsPage bills={bills} /> */}
    </div>
  );
};

export default App;
