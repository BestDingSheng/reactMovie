import React, { Component } from "react";
import http from "../common/http.js";
import List from "./list";

class Roster extends Component {
  constructor() {
    super();
    this.state = {
      listData: "",
    };
  }

  componentDidMount() {
    let me = this;
    let url = "https://api.douban.com/v2/movie/coming_soon";
    http(url).then(res => {
      console.log(res);
      me.setState({
        listData: res,
      });
    });
  }
  render() {
    //
    let subjects = this.state.listData.subjects || [];
    return (
      <div className="contianer">
        <List title={subjects} />
      </div>
    );
  }
}

export default Roster;
