import React from 'react';
import ValueContext from './ValueContext'
import { useContext } from 'react';

function FirstChild() {
    let value=useContext(ValueContext);
  return (
    <div>I am FirstChild - The value is {value[0]} <br/>
    Let's Incerement <button onClick={()=>value[1](++value[0])} >Click Here</button></div>

  );
}

export default FirstChild;
