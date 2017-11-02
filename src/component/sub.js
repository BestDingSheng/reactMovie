import React, { Component } from "react";
import http from "../common/http.js";
class Sub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      flag:false
    };
  }
  componentWillMount() {
    let id = this.props.params.num;
    let me = this;
    let url = "https://api.douban.com/v2/movie/subject/" + id;
    http(url).then(res => {
      console.log(res);
      me.setState({
        data: res,
        flag:true
      });
    });
  }
  render() {
    let data = this.state.data;
    let img = data.images || "";
    let moiveType = data.genres || []
    let casts = data.casts || []
    return (
      <div className="box">
        {this.state.flag?<div></div>:<div className='mask'></div>}
        <h2>{data.title}</h2>
        <div className="imgbox">
          <img src={img.large || ''} alt="" />
        </div>
        <p className='casts'>{
          moiveType.map(item=>{
            return(
              <span key={item}>{item+'/'}</span>
            )
          })
        }
        {
          casts.map(item=>{
            return(
              <span key={item.name}>{item.name+' / '}</span>
            )
          })
        }
        </p>
        <div className='divBtn'>
          <button>看过{data.wish_count}</button>
          <button>想看</button>
        </div>
        <h3>{data.original_title+'的剧情'}</h3>
        <div className='juqing'>
          {data.summary}
        </div>
      </div>
    );
  }
}
export default Sub;
