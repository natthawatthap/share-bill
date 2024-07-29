// FoodOrdersList.js
import React from "react";
import { List, Typography } from "antd";

const { Text } = Typography;

const FoodOrdersList = ({ foodOrdersWithAmount }) => {
  return (
    <List
      className="food-orders-list"
      dataSource={foodOrdersWithAmount}
      renderItem={(foodOrder) => (
        <List.Item>
          <div>
            <Text strong>{foodOrder.foodName}</Text> - ${foodOrder.price} - {foodOrder.amountPerPerson} per person - Shared by: {foodOrder.tags.join(", ")}
          </div>
        </List.Item>
      )}
      bordered
    />
  );
};

export default FoodOrdersList;
