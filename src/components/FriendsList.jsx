// FriendsList.js
import React from "react";
import { List } from "antd";
import FriendListItem from "./FriendListItem";

const FriendsList = ({ friends, onDeleteFriend }) => {
  return (
    <List
      className="friends-list"
      dataSource={friends}
      renderItem={(friend) => (
        <FriendListItem
          key={friend}
          name={friend}
          onDelete={() => onDeleteFriend(friend)}
        />
      )}
      bordered
    />
  );
};

export default FriendsList;
