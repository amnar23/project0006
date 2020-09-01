import React from 'react';
import FirstChild from './FirstChild'
import SecondChild from './SecondChild'

function Parent() {
  return (
    <div>I am Parent
        <br/>
        <FirstChild/>
        <SecondChild/>
    </div>

  );
}

export default Parent;
