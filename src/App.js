import React from 'react';
import './App.css';
import Mainpage from "./pages/MainPage";
import DetailPage from './pages/DetailPage';
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
        <Route path="/detail" exact component={DetailPage}/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
