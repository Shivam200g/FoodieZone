import React, { useState } from 'react';
import burger from './burger.jpg';
import './index.css';
import Navbar from './Navbar';
import Cart from './Cart';
import backimg1 from './backimg.jpg';

export default function Main() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleClearCart = () => {
    setCartItems([]); // Clears all items in the cart
    console.log('Cart cleared!');
  };

  const handleAddClick = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    console.log(`${item} added!`);
  };

  const handleCartClick = () => {
    setIsCartVisible(true);
    console.log('Items in cart:', cartItems);
  };

  const handleCloseCart = () => {
    setIsCartVisible(false);
  };

  return (
    <>
      <Navbar cartItems={cartItems} onCartClick={handleCartClick} />
      {isCartVisible ? (
        <Cart items={cartItems}
         onClose={handleCloseCart}
         onClear={handleClearCart} />
      ) : (
        <div style={{ backgroundImage: `url(${backimg1})` }} id='body21'>
          <div className='main_items'>
            <div className='burg'>
              <div>
                <div className="card" style={{ width: '18rem' }}>
                  <img src={burger} className="card-img-top" alt="burger" id='image211' />
                  <div className="card-body">
                    <h5 className="card-title">Burger</h5>
                    <p className="card-text">
                      Juicy patty, fresh lettuce, tomato, cheese, and bun. Delicious!
                    </p>
                    <button className="btn btn-primary" id='addme' onClick={() => handleAddClick('Burger')}>
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Repeat for other food items */}
            
            <div className='burg2'>
              <div>
                <div className="card" style={{ width: '18rem' }}>
                  <img src={burger} className="card-img-top" alt="pizza" id='image211' />
                  <div className="card-body">
                    <h5 className="card-title">Pizza</h5>
                    <p className="card-text">
                      Cheesy, savory, delicious; toppings galore on a warm crust. Yum!
                    </p>
                    <button className="btn btn-primary" id='addme' onClick={() => handleAddClick('Pizza')}>
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='burg3'>
              <div>
                <div className="card" style={{ width: '18rem' }}>
                  <img src={burger} className="card-img-top" alt="sandwich" id='image211' />
                  <div className="card-body">
                    <h5 className="card-title">Sandwich</h5>
                    <p className="card-text">
                      Layers of flavor between bread; comfort food in every bite.
                    </p>
                    <button className="btn btn-primary" id='addme' onClick={() => handleAddClick('Sandwich')}>
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='burg4'>
              <div>
                <div className="card" style={{ width: '18rem' }}>
                  <img src={burger} className="card-img-top" alt="pasta" id='image211' />
                  <div className="card-body">
                    <h5 className="card-title">Pasta</h5>
                    <p className="card-text">
                      Twisted, saucy, comforting; a world of flavors in every bite.
                    </p>
                    <button className="btn btn-primary" id='addme' onClick={() => handleAddClick('Pasta')}>
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}