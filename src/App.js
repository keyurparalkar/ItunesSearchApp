import React from 'react';
import { Provider } from "react-redux";

import './App.css';
import SearchBox from "./Components/SearchBox.js";
import TileContainer from "./Components/TileContainer.js";
import store from "./Store/Store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchBox />
        <TileContainer />
      </div>
    </Provider>
  );
}

export default App;
