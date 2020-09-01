import React, { useState } from 'react';
import ValueContext from './ValueContext'
import { useContext } from 'react';

function GrandChild() {
    let value=useContext(ValueContext);
    let num=value[0];
    let [number,setNumber]=useState(num);
  return (
    <div>I am GrandChild - The value is {number} - I will change my own value only<br/>
    Let's Incerement <button onClick={()=>setNumber(++number)} >Click Here</button><br/>
    Let's Decrement <button onClick={()=>setNumber(--number)} >Click Here</button></div>

  );
}

export default GrandChild;
