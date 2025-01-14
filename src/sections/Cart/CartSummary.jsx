import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CartSummary({ totalItems, cartTotal, onRemoveAll, cartItems }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Navigate to the checkout page and pass cart details as state
    navigate('/checkout', { state: { cartItems, totalItems, cartTotal } });
  };

  return (
    <div className="row mt-5 bottom">
      <div className="col-6">
        <h5 className="mb-5">Total Items: {totalItems}</h5>
        <button type="button" className="btn-custom clear-btn" onClick={onRemoveAll}>Clear Cart</button>
      </div>
      <div className="col-6 text-end">
        <h5 className="mb-5">Cart Total: ${cartTotal}</h5>
        {/* Change from <a> to <button> to handle navigation */}
        <button className="btn-custom p-3" onClick={handleCheckout}>
          Checkout <i className="fa fa-arrow-right" />
        </button>
      </div>
    </div>
  );
}
