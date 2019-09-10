import React from 'react';
import './Main.css';
import cartItems from '../Cart/cart-items.json';
import Cart from '../Cart/Cart';

const Main = () => {
  return (
    <main className="main">
      {/* <h1>Here is the Main section</h1> */}
      <Cart cartitems={cartItems} />
    </main>
  );
};

export default Main;
