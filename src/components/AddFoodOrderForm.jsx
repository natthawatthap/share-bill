import React, { useState } from "react";
import { Button, Input, Select } from "antd";

const { Option } = Select;

const AddFoodOrderForm = ({ friends, onAddFoodOrder }) => {
  const [foodOrder, setFoodOrder] = useState({
    foodName: "",
    price: 0,
    amount: 0,
    tags: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFoodOrder({ ...foodOrder, [name]: value });
  };

  const handleTagsChange = (tags) => {
    const amount = tags.length ? (foodOrder.price / tags.length).toFixed(2) : 0;
    setFoodOrder({ ...foodOrder, tags, amount });
  };

  const handleSubmit = () => {
    onAddFoodOrder(foodOrder);
    setFoodOrder({ foodName: "", price: 0, amount: 0, tags: [] });
  };

  return (
    <div className="add-food-order-form">
      <Input
        placeholder="Enter food name"
        name="foodName"
        value={foodOrder.foodName}
        onChange={handleInputChange}
        style={{ marginBottom: "10px" }}
      />
      <Input
        type="number"
        placeholder="Enter price"
        name="price"
        value={foodOrder.price}
        onChange={handleInputChange}
        style={{ marginBottom: "10px" }}
      />
      <Select
        mode="multiple"
        placeholder="Select friends"
        value={foodOrder.tags}
        onChange={handleTagsChange}
        style={{ width: "100%", marginBottom: "10px" }}
      >
        {friends.map((friend) => (
          <Option key={friend} value={friend}>
            {friend}
          </Option>
        ))}
      </Select>
      <Input
        placeholder="Amount"
        value={foodOrder.amount}
        readOnly
        style={{ marginBottom: "10px" }}
      />
      <Button type="primary" onClick={handleSubmit}>
        Add Food Order
      </Button>
    </div>
  );
};

export default AddFoodOrderForm;
