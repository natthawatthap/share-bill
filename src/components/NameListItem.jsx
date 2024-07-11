import React, { useState } from "react";

const NameListItem = ({ index, name, nameList, setNameList }) => {
  const [editName, setEditName] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleEditName = (index) => {
    setEditIndex(index); // Set editIndex to current index for editing
    setEditName(nameList[index]); // Set editName to current name for editing
  };

  const handleSaveEditName = () => {
    if (editName.trim() && editIndex !== null) {
      const updatedNames = [...nameList];
      updatedNames[editIndex] = editName.trim();
      setNameList(updatedNames);
      setEditIndex(null); // Clear editIndex after update
      setEditName(""); // Clear editName after updating
    }
  };

  const handleCancelEditName = () => {
    setEditIndex(null); // Clear editIndex to cancel edit mode
    setEditName(""); // Clear editName state
  };

  const handleDeleteName = (index) => {
    const updatedNames = [...nameList];
    updatedNames.splice(index, 1);
    setNameList(updatedNames);
    setEditIndex(null); // Clear editIndex if deleting
  };

  const handleInputChange = (e) => {
    setEditName(e.target.value); // Update editName state
  };

  return (
    <tr>
      <td>
        {editIndex === index ? (
          <input
            type="text"
            value={editName}
            onChange={handleInputChange}
          />
        ) : (
          name
        )}
      </td>
      <td>
        {editIndex === index ? (
          <>
            <button onClick={handleSaveEditName}>Save</button>
            <button onClick={handleCancelEditName}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => handleEditName(index)}>Edit</button>
            <button onClick={() => handleDeleteName(index)}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default NameListItem;
