import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Banner from '../components/Banner';
import ShippingAddress from '../sections/Checkout/ShippingAddress';
import CheckoutSummary from '../sections/Checkout/CheckoutSummary';
import PaymentMethod from '../sections/Checkout/PaymentMethod';
import { CheckoutData } from '../utils/CheckoutData'; // Ensure this is the correct path

export default function Checkout() {
  const navigate = useNavigate();

  // Destructure paymentMethods from CheckoutData
  const { paymentMethods } = CheckoutData;

  const [userId, setUserId] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    streetAddress: '',
    city: '',
    postcode: '',
  });
  const [error, setError] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [isCashOnDelivery, setIsCashOnDelivery] = useState(false);

  useEffect(() => {
    try {
      const storedUserId = localStorage.getItem('userId');
      console.log('Fetched userId from local storage:', storedUserId);

      const fetchedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
      console.log('Fetched Cart Items:', fetchedCartItems);

      const fetchedUserId = storedUserId || (fetchedCartItems.length > 0 ? fetchedCartItems[0].userId : null);

      if (fetchedUserId) {
        setUserId(fetchedUserId);
        setCartItems(fetchedCartItems);
      } else {
        console.error('User ID is missing from cart items or local storage.');
        setError('User ID is missing. Please log in to place an order.');
      }
    } catch (error) {
      console.error('Error fetching data from local storage:', error);
      setError('Failed to load cart or user data. Please try again.');
    }
  }, []);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const shippingCost = 50;
  const payableTotal = cartTotal + shippingCost;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (e) => {
    const value = e.target.value;
    if (value === 'Cash on delivery') {
      setIsCashOnDelivery(!isCashOnDelivery);
      setSelectedPaymentMethod(!isCashOnDelivery ? value : '');
    } else {
      setIsCashOnDelivery(false);
      setSelectedPaymentMethod(value);
    }
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!userId) {
      setError('User ID is missing. Please log in to place an order.');
      return;
    }

    if (cartItems.length === 0) {
      setError('Your cart is empty. Add items to the cart before placing an order.');
      return;
    }

    if (!selectedPaymentMethod) {
      setError('Please select a payment method.');
      return;
    }

    const orderDetails = {
      products: cartItems.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        thumbnail: item.thumbnail 
      })),
      userId,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      contact: userDetails.phone,
      Country: userDetails.country,
      StreetAddress: userDetails.streetAddress,
      townCity: userDetails.city,
      Postcode: userDetails.postcode,
      paymentMethod: selectedPaymentMethod === 'Cash on delivery' ? 'Cash On Delivery' : selectedPaymentMethod,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/v1/order', orderDetails);
      console.log('Order placed successfully:', response.data);

      navigate(`/order/${userId}`);
    } catch (error) {
      console.error('Error placing order:', error);
      setError('Failed to place the order. Please try again later.');
    }
  };

  return (
    <>
      <Banner />
      <section className="checkout-section">
        <div className="container shadow-sm p-3 mb-5 bg-white rounded">
          {error && <p className="alert alert-danger">{error}</p>}
          <form onSubmit={handlePlaceOrder} method="post" encType="multipart/form-data">
            <input type="hidden" name="_token" value="rd7l6sN7tCanHaan3qaIrxGfuZq8eHvPt2cdM5UX" />
            <div className="row">
              <div className="col">
                <h3 className="text-left mb-3">Shipping Address</h3>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-8">
                <ShippingAddress
                  firstName={userDetails.firstName}
                  lastName={userDetails.lastName}
                  phone={userDetails.phone}
                  email={userDetails.email}
                  country={userDetails.country}
                  streetAddress={userDetails.streetAddress}
                  city={userDetails.city}
                  postcode={userDetails.postcode}
                  handleInputChange={handleInputChange}
                />
              </div>
              <div className="col-lg-4">
                <CheckoutSummary
                  subtotal={cartTotal.toFixed(2)}
                  shipping={shippingCost.toFixed(2)}
                  payableTotal={payableTotal.toFixed(2)}
                />
                {/* Displaying Cart Items */}
                <div className="cart-items mt-4">
                  <h4 className="mt-4 mb-3">Cart Items:</h4>
                  {cartItems.map((item, index) => (
                    <div key={index} className="cart-item d-flex align-items-center mb-3 p-2 border rounded">
                      <img
                        src={item.thumbnail}
                        alt={item.productName}
                        className="rounded"
                        style={{ width: '50px', height: '50px', marginRight: '15px', objectFit: 'cover' }}
                        onError={(e) => e.target.src = "https://via.placeholder.com/50"} // Fallback for broken images
                      />
                      <div>
                        <p className="mb-1"><strong>{item.productName}</strong></p>
                        <p className="mb-1">Price: ${item.price}</p>
                        <p className="mb-1">Quantity: {item.quantity}</p>
                        <p className="mb-1">Color: {item.color}</p>
                        <p className="mb-1">Category: {item.category}</p>
                        <p className="mb-1">Attribute: {item.attributes?.name}</p> {/* Display only attribute name */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <PaymentMethod
              paymentMethods={paymentMethods}
              selectedPaymentMethod={selectedPaymentMethod}
              handlePaymentMethodChange={handlePaymentMethodChange}
              isCashOnDelivery={isCashOnDelivery}
            />
            <div className="input-box col-12 mt-4 text-left">
              <button type="submit" className="btn-custom place-order btn-primary btn-block" disabled={!selectedPaymentMethod}>
                Place Order
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
