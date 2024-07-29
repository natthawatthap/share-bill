// TotalAmountPerPersonList.js
import React from "react";
import { List, Typography } from "antd";

const { Text } = Typography;

const TotalAmountPerPersonList = ({ friends, totalAmountPerPerson }) => {
  return (
    <List
      className="total-per-person-list"
      dataSource={friends}
      renderItem={(friend) => (
        <List.Item>
          <Text strong>{friend}:</Text> ${totalAmountPerPerson[friend].toFixed(2)}
        </List.Item>
      )}
      bordered
    />
  );
};

export default TotalAmountPerPersonList;
