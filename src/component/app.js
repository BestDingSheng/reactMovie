import React, { Component } from "react";
import { Route } from "react-keeper";
import "../common/rest.css";
import "../index.less";
import Header from "./header.js";
import Home from "./home.js";
import Nav from "./nav";
import Roster from "./roster.js";
import Sub from "./sub.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      navshow: true
    };
  }

  render() {
    return (
      <div>
        <Header title="简易豆瓣电影" />
        <Nav />
        <main>
          <Route cache miss index path="/>" component={Home} />
          <Route cache path="/roster" title={"hello"} component={Roster} />
          <Route path="/sub/:num" component={Sub} />
        </main>
      </div>
    );
  }
}

export default App;
