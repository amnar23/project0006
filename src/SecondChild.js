import React from 'react';
import ValueContext from './ValueContext'
import { useContext } from 'react';
import GrandChild from './GrandChild'

function SecondChild() {
    let value=useContext(ValueContext);
  return (
    <div>I am SecondChild - The value is {value[0]}<br/>
     Let's Decrement <button onClick={()=>value[1](--value[0])} >Click Here</button><br/><br/>
     <GrandChild/>
     </div>
    
  );
}

export default SecondChild;
