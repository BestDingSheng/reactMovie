import React, { Component } from "react";
import jsonp from "jsonp";
import { HashRouter, Route } from "react-keeper";
import http from "../common/http";
import "../common/rest.css";
import "../index.less";
import Header from "./header.js";
import Home from "./home.js";
import Nav from "./nav";
import Roster from "./roster.js";
import Sub from "./sub.js";
import { Control, Link } from "react-keeper";

class App extends Component {
  constructor() {
    super();
    this.state = {
      navshow: true
    };
  }

  componentWillMount() {
    console.log(1111);
  }
  componentDidMount() {
    console.log(2222);
  }
  componentWillReceiveProps() {
    console.log(3333)


  }
  componentWillReceiveProps(){

  }

  componentWillUpdata(){
    let path = Control.path;
    console.log(path.indexOf("sub"));
  }

  shouldComponentUpdate() {
    return true;
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
