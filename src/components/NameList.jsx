import React, { useState } from "react";
import NameListItem from "./NameListItem";

const NameList = ({ nameList, setNameList }) => {
  const [newName, setNewName] = useState("");

  const handleCreateName = () => {
    if (newName.trim()) {
      setNameList([...nameList, newName.trim()]);
      setNewName(""); // Clear newName after adding
    }
  };

  return (
    <div>
      <h1>Names List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Enter name"
              />
            </td>
            <td>
              <button onClick={handleCreateName}>Add Name</button>
            </td>
          </tr>
          {nameList.map((name, index) => (
            <NameListItem
              key={index}
              index={index}
              name={name}
              nameList={nameList}
              setNameList={setNameList}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NameList;
