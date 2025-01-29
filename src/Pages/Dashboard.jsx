import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <h1 className="welcome-text">Welcome, Adithya!</h1>

      <div className="card-container">
        {/* Card 1 - Manage Bills */}
        <div className="dashboard-card">
          <img
            src="https://img.freepik.com/free-vector/pay-balance-owed-abstract-concept-vector-illustration-making-credit-payment-pay-owed-money-bank-irs-balance-due-debt-consolidation-management-taxpayer-bill-abstract-metaphor_335657-4342.jpg?t=st=1738135464~exp=1738139064~hmac=cc87baac3844388fba55ca791963aec7a88081e55d0eadd9f926e76df5bbb966&w=740"
            alt="Manage Bills"
            className="card-image"
          />
          <h2 className="card-title">Manage Bills</h2>
          <p className="card-description">
            Keep track of your expenses and manage bills effectively.
          </p>
          <button
            className="card-button"
            onClick={() => navigate("/dashboard/showbills")}
          >
            View Details
          </button>
        </div>

        {/* Card 2 - Chart Visualization */}
        <div className="dashboard-card">
          <img
            src="https://img.freepik.com/free-vector/bill-analysis-concept-illustration_114360-19348.jpg?t=st=1738135638~exp=1738139238~hmac=acc1cc75ffc003209b0c295b05bd7cd3d879e029eb466095fcb7a50800d2562d&w=740"
            alt="Chart Visualization"
            className="card-image"
          />
          <h2 className="card-title">Chart Visualization</h2>
          <p className="card-description">
            Get insights into your spending with beautiful charts.
          </p>
          <button
            className="card-button"
            onClick={() => navigate("/dashboard/monthlybills")}
          >
            View Charts
          </button>
        </div>

        {/* Card 3 - Optimal Bill Management */}
        <div className="dashboard-card">
          <img
            src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-bill_516790-2300.jpg?w=740"
            alt="Optimal Bill Management"
            className="card-image"
          />
          <h2 className="card-title">Optimal Bill Management</h2>
          <p className="card-description">
            Prioritize your payments efficiently to stay within budget.
          </p>
          <button
            className="card-button"
            onClick={() => navigate("/dashboard/bills")}
          >
            Optimize Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
