import React, {useState} from 'react';
import TitleContext from "./Context/TitleContext";
import './App.css';
import Menu from "./Components/Menu";

import {BrowserRouter} from "react-router-dom";
import SwitchComponent from "./Components/SwitchComponent";

function App() {

  const [title, setTitle] = useState("");

  const contextValue = {
    title: title,
    setTitle: setTitle
  };

  return (
    <div className="App">
      <TitleContext.Provider value={contextValue}>
        <BrowserRouter>
          <SwitchComponent></SwitchComponent>
          <Menu></Menu>
        </BrowserRouter>
      </TitleContext.Provider>
    </div>
  );
}

export default App;
