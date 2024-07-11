import React, { useState } from "react";

const NameListItem = ({ index, name, editName, deleteName }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    editName(editedName);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditedName(name);
    setEditMode(false);
  };

  return (
    <tr>
      <td>
        {editMode ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        ) : (
          name
        )}
      </td>
      <td>
        {editMode ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={deleteName}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default NameListItem;
