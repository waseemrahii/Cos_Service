import React from 'react';

export default function CheckoutSummary({ subtotal, shipping, payableTotal }) {
    return (
        <div className="side-bar">
            <div className="side-box">
                <h4 style={{ textAlign: 'left', display: 'block' }}>Checkout Summary</h4>
                <ul>
                    <li>
                        <div className="text_area d-flex justify-content-between">
                            <p style={{ textAlign: 'left', display: 'block' }}>Subtotal</p>
                            <div>
                                <small className="currency_symbol">$ </small>
                                <span className="total-cart">{subtotal}</span>
                            </div>
                        </div>
                    </li>
                    <li style={{ textAlign: 'left', display: 'block' }}>Shipping <span className="shipping">${shipping}</span></li>
                    <li>
                        <div className="text_area d-flex justify-content-between">
                            <p style={{ textAlign: 'left', display: 'block' }}>Payable Total</p>
                            <div>
                                <small className="currency_symbol">$ </small>
                                <span className="total-cart">{payableTotal}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
