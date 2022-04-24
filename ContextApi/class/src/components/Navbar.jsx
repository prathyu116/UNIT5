import React, { useContext } from 'react'
import { CartContext } from '../contexts/Cartcontext'
import { langContext } from '../contexts/LanguageContext';

const Navbar = () => {
    const { cart } = useContext(CartContext);//consumer
    const {lang}=useContext(langContext)
   return (
    <nav style={{ border: "1px solid red", display: "flex", justifyContent: "end", padding: "20px" }}>
      <h2> {lang ==="en" ? "Cart" : "BAG"}:{cart}</h2>
    </nav>
  );
}

export default Navbar