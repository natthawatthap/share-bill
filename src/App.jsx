import React, { useState } from "react";
import { Button, List } from "antd";
import AddFriendForm from "./components/AddFriendForm";
import FriendListItem from "./components/FriendListItem";
import "./App.css";

const App = () => {
  const [friends, setFriends] = useState([]);

  const handleAddFriend = (name) => {
    setFriends([...friends, name]);
  };

  const handleDeleteFriend = (nameToDelete) => {
    setFriends(friends.filter((name) => name !== nameToDelete));
  };

  return (
    <div className="App">
      <h1>Friends List</h1>
      <AddFriendForm onAddFriend={handleAddFriend} />
      <List
        className="friends-list"
        dataSource={friends}
        renderItem={(friend) => (
          <FriendListItem
            name={friend}
            onDelete={() => handleDeleteFriend(friend)}
          />
        )}
        bordered
      />
    </div>
  );
};

export default App;
