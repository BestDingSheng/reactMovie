import React from 'react';
import './header.css'
import { Link ,Control} from 'react-keeper'
function Header(props) {

  let path = Control.path;
  let text;
  if(path.indexOf('sub')>0){
  	text='返回';
  }else{
  	text='';
  }



    return (
        <h1>
        <Link to='/' id='blck'> {text} </Link>
        {props.title}
        </h1>
    );
}


export default Header;
