import React from 'react';
import { List, Button } from 'antd';

const FriendListItem = ({ name, onDelete }) => {
  return (
    <List.Item
      actions={[
        <Button type="link" onClick={onDelete} danger>
          Delete
        </Button>
      ]}
    >
      {name}
    </List.Item>
  );
};

export default FriendListItem;
