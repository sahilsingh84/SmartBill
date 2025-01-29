import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <div className="herosection">
        <div className="textpartcontainer">
          <div className="heading">
            Simplify, Track, and Optimize Your Expenses:
            <span className="typeanimationcontainer">
              <TypeAnimation
                sequence={[" SmartBills", 3000, ""]}
                repeat={Infinity}
                // omitDeletionAnimation={true}
              ></TypeAnimation>
            </span>
          </div>
          <div className="para">
            Take control of your finances with SmartBills! Easily manage your
            bills, visualize spending trends, and optimize payments based on
            your budget. Stay organized, make informed decisions, and achieve
            financial freedom—all in one place!{" "}
          </div>
          <button
            className="dashboardbutton"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>
        </div>
        <div className="imageContainter">
          <img src="https://www.bookipay.com/wp-content/uploads/2023/12/Bookipay-Bills-Management-Hero-Image-V2-.webp" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
