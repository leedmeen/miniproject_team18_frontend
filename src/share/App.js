import logo from './logo.svg';
import './App.css';
import React from "react";
import Mainpage from "../pages/MainPage";
import {BrowserRouter, Route} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import Grid from "../element/Grid"
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
