import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import "./ChartBill.css";

const MonthlyBills = ({ bills }) => {
  const chartData = [
    { month: "January", amount: 0 },
    { month: "February", amount: 0 },
    { month: "March", amount: 0 },
    { month: "April", amount: 0 },
    { month: "May", amount: 0 },
    { month: "June", amount: 0 },
    { month: "July", amount: 0 },
    { month: "August", amount: 0 },
    { month: "September", amount: 0 },
    { month: "October", amount: 0 },
    { month: "November", amount: 0 },
    { month: "December", amount: 0 },
  ];

  const colors = [
    "#FF6668", // January
    "#3DA114", // February
    "#00BFFF", // March
    "#FFA500", // April
    "#8A2BE2", // May
    "#FF1493", // June
    "#FFD700", // July
    "#32CD32", // August
    "#1E90FF", // September
    "#FF4500", // October
    "#ADFF2F", // November
    "#DA70D6", // December
  ];

  // Utility function to handle mixed date formats
  const parseDate = (dateString) => {
    if (dateString.includes("-")) {
      // Handle MM-DD-YYYY or YYYY-MM-DD formats
      const parts = dateString.split("-");
      if (parts[0].length === 4) {
        // YYYY-MM-DD format
        return new Date(dateString);
      } else {
        // MM-DD-YYYY format, convert to YYYY-MM-DD
        const [month, day, year] = parts;
        return new Date(`${year}-${month}-${day}`);
      }
    }
    return new Date(dateString); // Fallback for other formats
  };

  // Populate the chartData using the bills array
  bills.forEach((bill) => {
    const formattedDate = parseDate(bill.date); // Parse the date
    if (!isNaN(formattedDate)) {
      const billMonth = formattedDate.getMonth(); // Get the month (0-11)
      chartData[billMonth].amount += Number(bill.amount); // Convert amount to number
    } else {
      console.error("Invalid Date:", bill.date);
    }
  });

  return (
    <div className="chart-page">
      <h1 className="chart-heading">Monthly Bills Overview</h1>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="month" tick={{ fontSize: 14 }} />
            <YAxis tick={{ fontSize: 14 }} />
            <Tooltip />
            <Bar dataKey="amount" radius={[10, 10, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyBills;
