import React, { useState } from "react";
import { List, Typography } from "antd";
import AddFriendForm from "./components/AddFriendForm";
import AddFoodOrderForm from "./components/AddFoodOrderForm";
import FriendsList from "./components/FriendsList";
import FoodOrdersList from "./components/FoodOrdersList";
import TotalAmountPerPersonList from "./components/FoodOrdersList";

import "./App.css";

const { Text } = Typography;

const App = () => {
  const [friends, setFriends] = useState([]);
  const [foodOrders, setFoodOrders] = useState([]);

  const handleAddFriend = (name) => {
    setFriends([...friends, name]);
  };

  const handleDeleteFriend = (nameToDelete) => {
    setFriends(friends.filter((name) => name !== nameToDelete));
  };

  const handleAddFoodOrder = (foodOrder) => {
    setFoodOrders([...foodOrders, foodOrder]);
  };

  // Calculate total price of all food orders
  const totalPrice = foodOrders.reduce(
    (total, foodOrder) => total + parseFloat(foodOrder.price),
    0
  );

  // Calculate amount per person and price per person for each food order
  const foodOrdersWithAmount = foodOrders.map((foodOrder) => ({
    ...foodOrder,
    amountPerPerson:
      foodOrder.tags.length > 0
        ? (foodOrder.price / foodOrder.tags.length).toFixed(2)
        : 0,
  }));

  // Calculate total amount per person
  const totalAmountPerPerson = {};
  friends.forEach((friend) => {
    totalAmountPerPerson[friend] = foodOrdersWithAmount.reduce(
      (total, foodOrder) => {
        if (foodOrder.tags.includes(friend)) {
          return total + parseFloat(foodOrder.amountPerPerson);
        }
        return total;
      },
      0
    );
  });

  return (
    <div className="App">
      <h1>Friends List ({friends.length})</h1>
      <AddFriendForm onAddFriend={handleAddFriend} />
      <FriendsList friends={friends} onDeleteFriend={handleDeleteFriend} />
      <h1>Food Orders ({foodOrders.length})</h1>
      <AddFoodOrderForm friends={friends} onAddFoodOrder={handleAddFoodOrder} />
      <FoodOrdersList foodOrdersWithAmount={foodOrdersWithAmount} />
      <h1>Total Amount per Person</h1>
      <TotalAmountPerPersonList friends={friends} totalAmountPerPerson={totalAmountPerPerson} />
      <div className="total-section">
        <Text strong>Total Price:</Text> ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default App;
