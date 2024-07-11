import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, editItem, deleteItem } from "../features/items/itemsSlice";
import ItemListItem from "./ItemListItem";
import "./ItemList.css"; // Import CSS file for styling

const ItemList = () => {
  const [newItem, setNewItem] = useState({
    name: "",
    price: 0,
    amount: 0,
    tags: [],
  });
  const items = useSelector((state) => state.items);
  const nameList = useSelector((state) => state.names);
  const dispatch = useDispatch();

  const handleNewItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  const handleAddItem = () => {
    dispatch(addItem(newItem));
    setNewItem({ name: "", price: 0, amount: 0, tags: [] });
  };

  const handleTagClick = (tagName) => {
    let updatedTags = [];
    if (newItem.tags.includes(tagName)) {
      updatedTags = newItem.tags.filter((tag) => tag !== tagName);
    } else {
      updatedTags = [...newItem.tags, tagName];
    }

    // Calculate amount based on price and number of tags selected
    const itemAmount = newItem.price / updatedTags.length;

    setNewItem({
      ...newItem,
      tags: updatedTags,
      amount: itemAmount.toFixed(2), // Ensuring amount is formatted to two decimal places
    });
  };

  return (
    <div className="item-list-container">
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
                readOnly // Prevent manual input, calculated automatically
              />
            </td>
            <td>
              {nameList.map((name, index) => (
                <button
                  key={index}
                  className={
                    newItem.tags.includes(name) ? "tag selected" : "tag"
                  }
                  onClick={() => handleTagClick(name)}
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
              editItem={(index, updatedItem) =>
                dispatch(editItem({ index, updatedItem }))
              }
              deleteItem={() => dispatch(deleteItem(index))}
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
