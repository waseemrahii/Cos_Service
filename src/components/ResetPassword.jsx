import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Banner from './Banner';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { token } = useParams(); // Extract the token from the URL parameters
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmedPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Correct Axios POST request to reset the password
      const response = await axios.post(`http://localhost:3000/api/v1/user/reset-password/${token}`, {
        password, // Send new password in the request body
        confirmedPassword,
      });

      if (response.status === 200) {
        alert('Password has been reset successfully.');
        navigate('/signin'); // Redirect to the sign-in page after success
      } else {
        setError('Failed to reset password.');
      }
    } catch (error) {
      console.error('Error during password update:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Banner />
      <div>
        <section className="about-page secbg-3 login-section" style={{ padding: '120px 0' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="form-block py-5">
                  <form className="login-form" onSubmit={handleSubmit}>
                    <h3 className="title mb-30">Update Password</h3>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <input
                      className="form-control input-box"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter New Password"
                      required
                      disabled={loading}
                    />
                    <input
                      className="form-control input-box mt-3"
                      type="password"
                      value={confirmedPassword}
                      onChange={(e) => setConfirmedPassword(e.target.value)}
                      placeholder="Confirm New Password"
                      required
                      disabled={loading}
                    />
                    <button className="btn-custom w-100 mt-4" type="submit" disabled={loading}>
                      {loading ? 'Resetting...' : 'Reset Password'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
