import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-photo/closeup-muslim-father-passing-his-son-lafah-bread-during-dinner-dining-table-ramadan-ai-generative_337384-4780.jpg?w=740") `,
        backgroundSize: "cover",
        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="hero-text d-flex align-items-center justify-content-center">
        <h1 className="text-white ">Arabian Cuisine</h1>
      </div>
    </div>
  );
};

export default Banner;
