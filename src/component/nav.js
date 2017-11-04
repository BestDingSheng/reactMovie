import React from "react";
// import { Link } from 'react-router-dom'
import { Control, Link } from "react-keeper";
function Nav(props) {

let path = Control.path;
let text;
if(path.indexOf('sub')>0){
	text='none';
}else{
	text='flex';
}

  return (
			<ul className="nav" style={{display:text}}>
					<Link type="li" to="/" activeClassName="active">
						正在热映
					</Link>
					<Link type="li" to="/roster" activeClassName="active">
						即将上映
					</Link>
			</ul>
  );
}

export default Nav;
