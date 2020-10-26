import React from 'react';


function Button() {
    const handleClick = () => {
        console.log(" Button Clicked! ")
    }
  return (
    <>
    <button onClick={handleClick} >test button</button> 
    </>
    
  );
}

export default Button;
