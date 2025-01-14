import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';

export default function Order() {
  const { userId } = useParams(); // Get the userId from the URL
  const [orderData, setOrderData] = useState(null); // State to hold order data
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch order details using the userId
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/order/user/${userId}`);
        console.log('Fetched Order Data:', response.data); // Debug: Check fetched data
        if (response.data.orders && response.data.orders.length > 0) {
          setOrderData(response.data.orders[0]); // Set the first order from the array
        } else {
          setError('No order data found.');
        }
      } catch (err) {
        console.error('Error fetching order data:', err);
        setError('Failed to load order data. Please try again later.');
      }
    };

    if (userId) {
      fetchOrderData();
    }
  }, [userId]);

  // Check if orderData is available before rendering
  if (error) {
    return <p className="alert alert-danger">{error}</p>;
  }

  if (!orderData) {
    return <p>Loading...</p>;
  }

  // Destructure data safely from the order
  const { orderNo, orderDate, shippingDetails, orderDetails, orderTotal, shippingCost, paymentMethod } = orderData;

  // Function to handle image loading errors and provide a fallback
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/50'; // Provide a path to a default placeholder image
  };

  return (
    <>
      <Banner />
      <section id="order_confirmation">
        <div className="container mt-5 mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <p className="order-success-text">Thank you. Your order has been received.</p>
              <div className="payment-order mt-3 mb-3 table-responsive card">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <div className="py-2">
                          <strong className="d-block">Order No</strong> <span>{orderNo || 'N/A'}</span>
                        </div>
                      </td>
                      <td>
                        <div className="py-2">
                          <strong className="d-block">Order Date</strong> <span>{new Date(orderDate).toLocaleDateString() || 'N/A'}</span>
                        </div>
                      </td>
                      <td>
                        <div className="py-2">
                          <strong className="d-block">Payment Method</strong> <span>{paymentMethod || 'N/A'}</span>
                        </div>
                      </td>
                      <td>
                        <div className="py-2">
                          <strong className="d-block">Shipping Address</strong>
                          <span>
                            {shippingDetails?.StreetAddress || 'N/A'}, {shippingDetails?.townCity || 'N/A'}, {shippingDetails?.Country || 'N/A'}
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card">
                <div className="invoice p-5 mt">
                  <h4>Your order Confirmed!</h4>
                  <span className="font-weight-bold d-block mt-4">Hello, {shippingDetails?.firstName || 'Customer'}</span>
                  <span>Your order has been confirmed and will be shipped in the next two days!</span>
                  <div className="product border-bottom border-top table-responsive mt-5">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderDetails?.map((item, index) => (
                          <tr key={index}>
                            <td width="40%">
                              <div className="d-flex align-items-center">
                                <img
                                  src={item.image} // Use the complete image URL
                                  alt={item.name}
                                  className="rounded-circle"
                                  width={45}
                                  height={45}
                                  style={{ marginRight: '10px', objectFit: 'cover' }}
                                  onError={handleImageError} // Handle image loading errors
                                />
                                <span className="font-weight-bold">{item.name}</span>
                              </div>
                            </td>
                            <td width="30%">
                              <span className="d-block">Quantity: {item.quantity}</span>
                            </td>
                            <td width="30%">
                              <div className="text-right">
                                <span className="font-weight-bold">${(item.price * item.quantity).toFixed(2)}</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="row d-flex justify-content-end">
                    <div className="col-md-5">
                      <table className="table table-borderless">
                        <tbody className="totals">
                          <tr>
                            <td>
                              <div className="text-left">
                                <span>Subtotal</span>
                              </div>
                            </td>
                            <td>
                              <div className="text-right">
                                <span>${orderTotal || '0.00'}</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="text-left">
                                <span>Shipping</span>
                              </div>
                            </td>
                            <td>
                              <div className="text-right">
                                <span>${shippingCost || '0.00'}</span>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-top border-bottom">
                            <td>
                              <div className="text-left">
                                <strong>Total</strong>
                              </div>
                            </td>
                            <td>
                              <div className="text-right">
                                <strong>${(parseFloat(orderTotal) + parseFloat(shippingCost)).toFixed(2)}</strong>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <p>We will be sending a shipping confirmation email when the item ships successfully!</p>
                  <p className="font-weight-bold mb-0">Thanks for shopping with us!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
