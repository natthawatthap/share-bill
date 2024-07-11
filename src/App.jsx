import React, { useState } from "react";
import "./App.css";
import NameList from "./components/NameList";
import ItemList from "./components/ItemList";

function App() {
  const [nameList, setNameList] = useState([]);
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <NameList nameList={nameList} setNameList={setNameList} />
      <ItemList items={items} setItems={setItems} nameList={nameList} />
    </div>
  );
}

export default App;
