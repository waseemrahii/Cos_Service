import React, { useState } from 'react';
import axios from 'axios';

export default function ForgetPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending a POST request to the backend to trigger the password reset email
      const response = await axios.post('http://localhost:3000/api/v1/user/forgot-password', { email });

      if (response.status === 200) {
        alert('Password reset link has been sent to your email.');
      } else {
        alert('Failed to send reset link.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <section className="about-page secbg-3 login-section" style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="form-block py-5">
                <form className="login-form" onSubmit={handleSubmit}>
                  <h3 className="title mb-30">Reset Password</h3>
                  <input
                    className="form-control input-box"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email Address"
                    required
                  />
                  <button className="btn-custom w-100 mt-4" type="submit">
                    Send Password Reset Link
                  </button>
                  <div className="login-query mt-3 text-center">
                    Haven't any account? <a href="/register">Register</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
