import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from 'react-keeper'
import Hah from './component/app.js'


ReactDOM.render(
  <HashRouter>
    <Hah />
  </HashRouter>,

  document.getElementById("root")
);
