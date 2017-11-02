import React, { Component } from "react";
import { Link } from 'react-keeper'

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let subjects = this.props.title;
    return (
      <div className="Listbox">
        {subjects.map((item, index) => {
          return (
            <Link to={'/sub/'+item.id} key={index}>
              <div className="list" >
                <div className="left">
                  <img src={item.images.small} alt="" />
                </div>
                <div className="right">
                  <div className="title">{item.title}</div>
                  <p>导演 {item.directors[0].name}</p>
                  <p>评分 {item.rating.average || "暂无评分"}</p>
                  <p>
                    主演{" "}
                    {item.casts.map((res, index) => {
                      return <span key={index}>{res.name + "  "}</span>;
                    })}
                  </p>
                  <p>{item.collect_count + "人看过"}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default List;
