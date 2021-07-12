import React from 'react';
import './App.css';
import DetailPage from './pages/DetailPage';
import { history } from "./redux/configureStore";
import {BrowserRouter, Route} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
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
      <ConnectedRouter history={history}>
        <Route path="/" exact component={MainPage}/>
        <Route path="/detail/:id" exact component={DetailPage}/>
        <Route path="/ads/:id" exact component={PostWrite}/>
        <Route path="/ads" exact component={PostWrite}/>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
