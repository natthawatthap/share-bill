// SummaryTotalPerName.jsx

import React from "react";

const SummaryTotalPerName = ({ nameList, items }) => {
  return (
    <div className="summary-total-container">
      <h2>Summary Total Price per Name</h2>
      <ul>
        {nameList.map((name, index) => {
          // Calculate total price for items with this name
          const totalPrice = items.reduce((acc, item) => {
            if (item.tags.includes(name)) {
              return acc + parseFloat(item.amount); // Assuming price is a string, parse to float
            }
            return acc;
          }, 0);

          return (
            <li key={index}>
              {name}: ${totalPrice.toFixed(2)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SummaryTotalPerName;
