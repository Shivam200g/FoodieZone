// Cart.js
import React from 'react';

export default function Cart({ items, onClose, onClear }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <button onClick={onClose}>Close</button>
      {items.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button onClick={onClear}>Clear Cart</button>
        </>
      )}
    </div>
  );
}
