import React, { useState } from "react";
import ItemListItem from "./ItemListItem";

const ItemList = ({ items, setItems, nameList }) => {
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    amount: "",
    tags: [],
  });

  const handleNewItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  const handleAddItem = () => {
    if (newItem.name.trim() && newItem.price.trim() && newItem.amount.trim()) {
      setItems([...items, { ...newItem, tags: [...newItem.tags] }]);
      setNewItem({ name: "", price: "", amount: "", tags: [] });
    }
  };

  const handleTagClick = (tagName, isEditMode, setEditItem, editItem) => {
    if (isEditMode) {
      if (editItem.tags.includes(tagName)) {
        setEditItem({
          ...editItem,
          tags: editItem.tags.filter((tag) => tag !== tagName),
        });
      } else {
        setEditItem({
          ...editItem,
          tags: [...editItem.tags, tagName],
        });
      }
    } else {
      if (newItem.tags.includes(tagName)) {
        setNewItem({
          ...newItem,
          tags: newItem.tags.filter((tag) => tag !== tagName),
        });
      } else {
        setNewItem({
          ...newItem,
          tags: [...newItem.tags, tagName],
        });
      }
    }
  };

  return (
    <div>
      <h1>Items List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Tags</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                value={newItem.name}
                onChange={handleNewItemChange}
                placeholder="Enter item name"
              />
            </td>
            <td>
              <input
                type="text"
                name="price"
                value={newItem.price}
                onChange={handleNewItemChange}
                placeholder="Enter item price"
              />
            </td>
            <td>
              <input
                type="text"
                name="amount"
                value={newItem.amount}
                onChange={handleNewItemChange}
                placeholder="Enter item amount"
              />
            </td>
            <td>
              {nameList.map((name, index) => (
                <button
                  key={index}
                  className={
                    newItem.tags.includes(name) ? "tag selected" : "tag"
                  }
                  onClick={() => handleTagClick(name, false)}
                >
                  {name}
                </button>
              ))}
            </td>
            <td>
              <button onClick={handleAddItem}>Add Item</button>
            </td>
          </tr>
          {items.map((item, index) => (
            <ItemListItem
              key={index}
              index={index}
              item={item}
              items={items}
              setItems={setItems}
              nameList={nameList}
              handleTagClick={handleTagClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
