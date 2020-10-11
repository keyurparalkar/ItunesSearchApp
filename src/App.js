import React from 'react';

import './App.css';
import SearchBox from "./Components/SearchBox.js";
import TileContainer from "./Components/TileContainer.js";

function App() {
  return (
    <div className="App">
      <SearchBox/>
      <TileContainer/>
    </div>
  );
}

export default App;
