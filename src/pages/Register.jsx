import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import { RegisterData } from '../utils/RegisterData';
import axios from 'axios';
import '../App.css'
export default function Register() {
  const { countryCodes } = RegisterData;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phone: '',
    phoneCode: countryCodes[0]?.value || '',
    password: '',
    confirmedPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName || formData.firstName.length < 3) {
      newErrors.firstName = 'First name must be at least 3 characters long';
    }

    if (!formData.lastName || formData.lastName.length < 3) {
      newErrors.lastName = 'Last name must be at least 3 characters long';
    }

    if (!formData.userName || formData.userName.length < 5) {
      newErrors.userName = 'Username must be at least 5 characters long';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (formData.password !== formData.confirmedPassword) {
      newErrors.confirmedPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await axios.post('http://192.168.18.29:3000/api/v1/user/register', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        userName: formData.userName,
        contact: formData.phone,
        password: formData.password,
        confirmedPassword: formData.confirmedPassword,
        email: formData.email,
        role: 'user',
      });

      alert('Registration Successful');
      window.location.href = "http://localhost:5173/signin";
    } catch (error) {
      console.error('Error registering user:', error.response?.data?.message || error.message);
      alert('Error registering user: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <>
      <Banner />
      <section className="login-section">
        <div className="overlay h-100">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-12">
                <div className="form-wrapper d-flex align-items-center h-100">
                  {!registrationSuccess ? (
                    <form onSubmit={handleSubmit}>
                      <div className="row g-4">
                        <div className="col-12">
                          <h4 style={{ textAlign: 'left', display: 'block' }}>Registration</h4>
                        </div>

                        <div className="input-box col-md-6">
                          <label htmlFor="firstName" style={{ textAlign: 'left', display: 'block' }}>First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                          />
                          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                        </div>

                        <div className="input-box col-md-6">
                          <label htmlFor="lastName" style={{ textAlign: 'left', display: 'block' }}>Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                          />
                          {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                        </div>

                        <div className="input-box col-md-6">
                          <label htmlFor="userName" style={{ textAlign: 'left', display: 'block' }}>Username</label>
                          <input
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
                          />
                          {errors.userName && <div className="invalid-feedback">{errors.userName}</div>}
                        </div>

                        <div className="input-box col-md-6">
                          <label htmlFor="email" style={{ textAlign: 'left', display: 'block' }}>Email Address</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          />
                          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>

                        <div className="input-box col-md-12">
                          <div className="form-group mb-30">
                            <div className="input-group">
                              <div className="input-group-prepend w-50">
                                <select
                                  name="phoneCode"
                                  value={formData.phoneCode}
                                  onChange={handleChange}
                                  className="form-control country_code dialCode-change"
                                >
                                  {countryCodes.map((country, index) => (
                                    <option
                                      key={index}
                                      value={country.value}
                                      data-name={country.name}
                                      data-code={country.code}
                                    >
                                      {`${country.name} (${country.value})`}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`form-control dialcode-set ${errors.phone ? 'is-invalid' : ''}`}
                                placeholder="Your Phone Number"
                              />
                            </div>
                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                          </div>
                        </div>

                        <div className="input-box col-md-6">
                          <label htmlFor="password" style={{ textAlign: 'left', display: 'block' }}>Password</label>
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            placeholder="Enter Password"
                          />
                          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>

                        <div className="input-box col-md-6">
                          <label htmlFor="confirmedPassword" style={{ textAlign: 'left', display: 'block' }}>Confirm Password</label>
                          <input
                            type="password"
                            name="confirmedPassword"
                            value={formData.confirmedPassword}
                            onChange={handleChange}
                            className={`form-control ${errors.confirmedPassword ? 'is-invalid' : ''}`}
                          />
                          {errors.confirmedPassword && <div className="invalid-feedback">{errors.confirmedPassword}</div>}
                        </div>
                      </div>
                      <button className="btn-custom w-100 mt-3" type="submit">
                        Register
                      </button>
                      <div className="bottom">
                        Already have an account? <Link to="/signin">Sign In</Link>
                      </div>
                    </form>
                  ) : (
                    <div className="bottom">
                      Registration successful! <Link to="/signin">Click here to Sign In</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
