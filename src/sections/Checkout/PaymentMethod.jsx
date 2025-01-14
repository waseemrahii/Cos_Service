import React from 'react';

export default function PaymentMethod({ paymentMethods, selectedPaymentMethod, handlePaymentMethodChange, isCashOnDelivery }) {
  return (
    <div className="checkout-payment rounded">
      <div className="payment_method form-check">
        <input 
          id="cashon_delivery" 
          type="checkbox" 
          className="form-check-input" 
          name="payment_method" 
          value="Cash on delivery" 
          onChange={handlePaymentMethodChange} 
          checked={isCashOnDelivery} 
        />
        <label htmlFor="cashon_delivery" style={{ textAlign: 'left', display: 'block' }}>
          Cash On Delivery
        </label>
      </div>
      <div className="main row g-4" id="payment-gateway-section">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <h4 style={{ textAlign: 'left', display: 'block' }} className="mb-0 text-center mt-3">Choose How Do You Want To Pay</h4>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="payment-methods">
            <div className="row gy-4 gx-3">
              {paymentMethods.map((method, index) => (
                <div className="col-4 col-md-3 col-xl-2" key={method.id}>
                  <input 
                    type="radio" 
                    className="btn-check" 
                    name="payment_method" 
                    id={`option${method.id}`} 
                    value={method.gateway} 
                    onChange={handlePaymentMethodChange}
                    autoComplete="off" 
                    disabled={isCashOnDelivery} 
                    checked={!isCashOnDelivery && selectedPaymentMethod === method.gateway}
                  />
                  <input type="hidden" name="gateway" value={method.gateway} />
                  <label className="btn btn-outline-primary paymentCheck" htmlFor={`option${method.id}`}>
                    <img className="img-fluid custom___img" src={method.image} alt={method.gateway} />
                    <img src="https://construm.bugfinder.net/assets/themes/deepblue/img/check.png" alt="" className="check custom___check tag d-none" id={`circle${index}`} />
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
