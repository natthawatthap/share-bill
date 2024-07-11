import React, { useState } from "react";

const ItemListItem = ({ index, item, editItem, deleteItem, nameList, handleTagClick }) => {
  const [editItemValue, setEditItemValue] = useState(item);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editItem(index, editItemValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditItemValue(item);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteItem(index);
  };

  const handleEditItemChange = (e) => {
    const { name, value } = e.target;
    setEditItemValue({
      ...editItemValue,
      [name]: value,
    });
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={editItemValue.name}
            onChange={handleEditItemChange}
            placeholder="Enter item name"
          />
        ) : (
          item.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="price"
            value={editItemValue.price}
            onChange={handleEditItemChange}
            placeholder="Enter item price"
          />
        ) : (
          item.price
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="amount"
            value={editItemValue.amount}
            onChange={handleEditItemChange}
            placeholder="Enter item amount"
          />
        ) : (
          item.amount
        )}
      </td>
      <td>
        {isEditing ? (
          nameList.map((name, idx) => (
            <button
              key={idx}
              className={
                editItemValue.tags.includes(name) ? "tag selected" : "tag"
              }
              onClick={() => handleTagClick(name, true, setEditItemValue, editItemValue)}
            >
              {name}
            </button>
          ))
        ) : (
          item.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="tag">
              {tag}
            </span>
          ))
        )}
      </td>
      <td>
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default ItemListItem;
