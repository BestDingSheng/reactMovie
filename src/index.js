import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from 'react-keeper'
import App from './component/app.js'


ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,

  document.getElementById("root")
);
