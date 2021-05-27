import React from 'react';
import Circle from './Circle';
import Cross from './Cross';

export default function Square({position, value, takeTurn}){

  function handleClick(){
    if(value == "Empty") {
      takeTurn(position)
      console.log("Pressed");
    }
  }

  return(
    <div className = "square" onClick ={handleClick}>
      {value == "Circle" && <Circle/>}
      {value == "Cross" && <Cross/>}
    </div>
  )
};
