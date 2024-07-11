// TotalPriceSum.jsx

import React from "react";

const TotalPriceSum = ({ items }) => {
  // Calculate total price sum
  const totalPriceSum = items.reduce((acc, item) => {
    return acc + parseFloat(item.price); // Assuming price is a string, parse to float
  }, 0);

  return (
    <div className="total-price-sum-container">
      <h2>Total Price Sum</h2>
      <p>Total: ${totalPriceSum.toFixed(2)}</p>
    </div>
  );
};

export default TotalPriceSum;
