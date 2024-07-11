import React, { useState } from "react";
import "./App.css";
import NameList from "./components/NameList";
import ItemList from "./components/ItemList";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [activeTab, setActiveTab] = useState("names");

  return (
    <Provider store={store}>
      <div className="App">
        <div className="tabs">
          <button
            className={activeTab === "names" ? "active" : ""}
            onClick={() => setActiveTab("names")}
          >
            Names
          </button>
          <button
            className={activeTab === "items" ? "active" : ""}
            onClick={() => setActiveTab("items")}
          >
            Items
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "names" && <NameList />}
          {activeTab === "items" && <ItemList />}
        </div>

        {/* <NameList />
        <ItemList /> */}
      </div>
    </Provider>
  );
}

export default App;
