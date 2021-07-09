import React from 'react';
import './App.css';
import Mainpage from "./pages/MainPage";
import {BrowserRouter, Route} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
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
        <Route path="/" exact component={Mainpage}/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
