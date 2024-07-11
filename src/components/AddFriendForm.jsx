import React, { useState } from 'react';
import { Input, Button } from 'antd';

const AddFriendForm = ({ onAddFriend }) => {
  const [friendName, setFriendName] = useState('');

  const handleAddFriend = () => {
    if (friendName) {
      onAddFriend(friendName);
      setFriendName(''); // Clear the input field
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <Input
        placeholder="Enter friend's name"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
        style={{ width: '200px', marginRight: '10px' }}
      />
      <Button type="primary" onClick={handleAddFriend}>
        Add Friend
      </Button>
    </div>
  );
};

export default AddFriendForm;
