import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {createGlobalStyle} from "styled-components";

import MainPage from "./pages/MainPage";
import PostWrite from "./pages/PostWrite";

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <BrowserRouter>
        <Route path="/" exact component={MainPage}/>
        <Route path="/ads" exact component={PostWrite}/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
