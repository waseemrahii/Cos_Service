import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/auth-context';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Access the login function from AuthContext

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  const validateForm = () => {
    if (!email) {
      setError('Email is required.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format.');
      return false;
    }
    if (!password) {
      setError('Password is required.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    try {
      const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
        email,
        password,
      });

      if (response.status === 200) {
        const { token, user } = response.data;
        login(token, user._id); // Use login from AuthContext
        navigate('/home');
      }
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <section className="login-section">
      <div className="overlay h-100">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-12">
              <div className="form-wrapper d-flex align-items-center h-100">
                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-12" style={{ textAlign: 'left' }}>
                      <h4>Sign In</h4>
                    </div>
                    {error && <div className="col-12"><p style={{ color: 'red' }}>{error}</p></div>}
                    <div className="input-box col-12" style={{ textAlign: 'left' }}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        autoComplete="off"
                      />
                    </div>
                    <div className="input-box col-12" style={{ textAlign: 'left' }}>
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="form-control"
                        placeholder="Enter your password"
                        autoComplete="off"
                      />
                    </div>
                    <div className="col-12">
                      <div className="links">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                          />
                          <label className="form-check-label" htmlFor="rememberMe">
                            Remember Me
                          </label>
                        </div>
                        <Link to="/forgetpassword">Forgot Password?</Link>
                      </div>
                    </div>
                  </div>
                  <button className="btn-custom w-100" type="submit">Sign In</button>
                  <div className="bottom">
                    Don't have an account?{' '}
                    <span
                      onClick={() => navigate('/register')}
                      style={{ cursor: 'pointer', color: '#E20613', textDecoration: 'underline' }}
                    >
                      Register
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
