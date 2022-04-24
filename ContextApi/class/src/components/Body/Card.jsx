import React, { useContext } from 'react'
import { CartContext } from "../../contexts/Cartcontext";

const Card = () => {
      const { handleChange } = useContext(CartContext);
  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        backgroundColor: "teal",
      }}
    >
      <button onClick={()=>{
        handleChange(1)
      }}>addtocart</button>
    </div>
  );
}

export default Card