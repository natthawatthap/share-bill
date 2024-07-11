import React, { useState } from "react";

const ItemListItem = ({ index, item, items, setItems, nameList, handleTagClick }) => {
  const [editItem, setEditItem] = useState({
    name: "",
    price: "",
    amount: "",
    tags: [],
  });
  const [editItemIndex, setEditItemIndex] = useState(null);

  const handleEditItem = (index) => {
    setEditItemIndex(index); // Set the index of the item being edited
    setEditItem(items[index]); // Set editItem to current item being edited
  };

  const handleSaveEditItem = () => {
    if (
      editItem.name.trim() &&
      editItem.price.trim() &&
      editItem.amount.trim()
    ) {
      const updatedItems = [...items];
      updatedItems[editItemIndex] = { ...editItem, tags: [...editItem.tags] };
      setItems(updatedItems);
      setEditItemIndex(null); // Clear editItemIndex after save
      setEditItem({ name: "", price: "", amount: "", tags: [] }); // Clear editItem state after save
    }
  };

  const handleCancelEditItem = () => {
    setEditItemIndex(null); // Clear editItemIndex to cancel edit mode
    setEditItem({ name: "", price: "", amount: "", tags: [] }); // Clear editItem state
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleEditItemChange = (e) => {
    const { name, value } = e.target;
    setEditItem({
      ...editItem,
      [name]: value,
    });
  };

  return (
    <tr>
      <td>
        {editItemIndex === index ? (
          <input
            type="text"
            name="name"
            value={editItem.name}
            onChange={handleEditItemChange}
            placeholder="Enter item name"
          />
        ) : (
          item.name
        )}
      </td>
      <td>
        {editItemIndex === index ? (
          <input
            type="text"
            name="price"
            value={editItem.price}
            onChange={handleEditItemChange}
            placeholder="Enter item price"
          />
        ) : (
          item.price
        )}
      </td>
      <td>
        {editItemIndex === index ? (
          <input
            type="text"
            name="amount"
            value={editItem.amount}
            onChange={handleEditItemChange}
            placeholder="Enter item amount"
          />
        ) : (
          item.amount
        )}
      </td>
      <td>
        {editItemIndex === index ? (
          nameList.map((name, idx) => (
            <button
              key={idx}
              className={
                editItem.tags.includes(name) ? "tag selected" : "tag"
              }
              onClick={() => handleTagClick(name, true, setEditItem, editItem)}
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
        {editItemIndex === index ? (
          <>
            <button onClick={handleSaveEditItem}>Save</button>
            <button onClick={handleCancelEditItem}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => handleEditItem(index)}>Edit</button>
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default ItemListItem;
