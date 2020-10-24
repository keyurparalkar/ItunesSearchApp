import React from 'react';
import { Provider } from "react-redux";

import './App.css';
import SearchBox from "./Components/SearchBox.js";
import TileContainer from "./Components/TileContainer.js";
// import Filters from "./Components/Filters.js";
import store from "./Store/Store.js";
import { AppContainer } from "./Components/StyledComponents.js";

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <SearchBox />
        {/* <Filters/> */}
        <TileContainer />
      </AppContainer>
    </Provider>
  );
}

export default App;
