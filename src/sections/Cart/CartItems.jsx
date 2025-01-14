import React from 'react';
import '../../App.css'; // Import the CSS file for styling

export default function CartItems({ headers, cartItems, onRemoveItem, onIncreaseQuantity, onDecreaseQuantity }) {
  return (
    <div className="table-wrapper table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <tr key={item.productId}>
                <td>
                  <div className="d-lg-flex d-block align-items-center">
                    <div className="mr-3">
                      <img 
                        src={item.thumbnail} 
                        className="img-fluid" 
                        alt={item.productName} 
                        onError={(e) => e.target.src = '/path/to/fallback-image.png'} // Optional: fallback for broken images
                      />
                    </div>
                    <div>{item.productName}</div>
                  </div>
                </td>
                <td>Available</td>
                <td>${item.price}</td>
                <td>
                  <div className="quantity">
                    <button className="btn-inc-dec" onClick={() => onDecreaseQuantity(item)}>-</button>
                    <input 
                      type="number" 
                      className="form-control counter" 
                      value={item.quantity || 1} 
                      readOnly 
                    />
                    <button 
                      className="btn-inc-dec cartBtnDis" 
                      onClick={() => onIncreaseQuantity(item)}
                    >+</button>
                  </div>
                </td>
                <td>${item.price * (item.quantity || 1)}</td>
                <td>
                  {/* Display only the attribute names */}
                  {item.attributes && item.attributes.name ? (
                    <span>{item.attributes.name}</span>
                  ) : (
                    'No attributes available'
                  )}
                </td>
                <td>
                  <button 
                    type="button" 
                    className="danger delete-item" 
                    onClick={() => onRemoveItem(item)}
                  >
                    <i className="fas fa-times-circle" aria-hidden="true" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length}>No items in your cart.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
