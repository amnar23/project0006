import React, {useReducer} from 'react';
import ValueContext from './ValueContext'
import { useContext } from 'react';
import NumberReducer from './NumberReducer';

function GrandChild() {
    let value=useContext(ValueContext);
    let num=value[0];
    let [number,dispatch]=useReducer(NumberReducer,num);
  return (
    <div>I am GrandChild - The value is {number} - I will change my own value only using 'useReducer'<br/>
    Let's Incerement <button onClick={()=>dispatch({type:"INCREMENT"})} >Click Here</button><br/>
    Let's Decrement <button onClick={()=>dispatch({type:'DECREMENT'})} >Click Here</button></div>

  );
}

export default GrandChild;
