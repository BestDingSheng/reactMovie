import React, { Component } from "react";
import http from "../common/http.js";
import List from "./list";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      listData: "",
      ready:'block',
    };
  }

  componentDidMount() {
    let me = this;
    let url = "https://api.douban.com/v2/movie/in_theaters";
    http(url).then(res => {
      console.log(res);
      me.setState({
        listData: res,
        ready:'none'
      });
    });
  }
  componentWillReceiveProps() {}

  date() {
    let now = new Date();
    const week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    let currentWeek = week[now.getDay()]; // 获取当天星期
    let year = now.getFullYear(); // 当前年
    let month = now.getMonth() + 1; // 月
    let day = now.getDate(); // 日
    return `${year}年${month}月${day}日，${currentWeek}`;
  }

  render() {
    //
    let subjects = this.state.listData.subjects || [];
    return (
      <div className="contianer">
        <div className="loading" style={{display:this.state.ready}}>
          <div className="welcome">
            <div className="welcome-wrapper">
              <div className="smile">^_^</div>
              <div className="date">{this.date()}</div>
              <div className="test">遇见你，真美好</div>
            </div>
          </div>
        </div>

        <List title={subjects} />
      </div>
    );
  }
}

export default Home;
