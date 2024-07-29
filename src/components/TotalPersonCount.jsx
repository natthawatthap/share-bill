// TotalPersonCount.jsx
import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const TotalPersonCount = ({ count }) => {
  return (
    <div className="total-person-count">
      <Text strong>Total Persons: {count}</Text>
    </div>
  );
};

export default TotalPersonCount;
