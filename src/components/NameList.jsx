import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName, editName, deleteName } from "../features/names/namesSlice";
import NameListItem from "./NameListItem";
import "./NameList.css"; // Import CSS file for styling

const NameList = () => {
  const [newName, setNewName] = useState("");
  const nameList = useSelector((state) => state.names);
  const dispatch = useDispatch();

  const handleCreateName = () => {
    dispatch(addName(newName));
    setNewName(""); // Clear newName after adding
  };

  return (
    <div className="name-list-container">
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
              editName={(newName) => dispatch(editName({ index, newName }))}
              deleteName={() => dispatch(deleteName(index))}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NameList;
