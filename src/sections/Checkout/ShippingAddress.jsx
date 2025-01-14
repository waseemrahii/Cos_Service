import React from 'react';

export default function ShippingAddress({ firstName, lastName, phone, email, country, streetAddress, city, postcode, handleInputChange }) {
  return (
    <div className="row g-4">
      <div className="input-box col-md-6">
        <label style={{ textAlign: 'left', display: 'block' }}>First Name</label>
        <input
          className="form-control"
          name="firstName"
          type="text"
          value={firstName}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>
      <div className="input-box col-md-6">
        <label style={{ textAlign: 'left', display: 'block' }}>Last Name</label>
        <input
          className="form-control"
          name="lastName"
          type="text"
          value={lastName}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>
      <div className="input-box col-md-6">
        <label style={{ textAlign: 'left', display: 'block' }}>Phone</label>
        <input
          className="form-control"
          name="phone"
          type="text"
          value={phone}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>
      <div className="input-box col-md-6">
        <label style={{ textAlign: 'left', display: 'block' }}>Email</label>
        <input
          className="form-control"
          name="email"
          type="email"
          value={email}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>
      <div className="input-box col-md-6">
        <label style={{ textAlign: 'left', display: 'block' }}>Country</label>
        <input
          className="form-control"
          name="country"
          type="text"
          value={country}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>
      <div className="input-box col-md-6">
        <label style={{ textAlign: 'left', display: 'block' }}>Street Address</label>
        <input
          className="form-control"
          name="streetAddress"
          type="text"
          value={streetAddress}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>
      <div className="input-box col-md-6">
        <label style={{ textAlign: 'left', display: 'block' }}>City</label>
        <input
          className="form-control"
          name="city"
          type="text"
          value={city}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>
      <div className="input-box col-md-6">
        <label style={{ textAlign: 'left', display: 'block' }}>Postcode</label>
        <input
          className="form-control"
          name="postcode"
          type="text"
          value={postcode}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>
    </div>
  );
}
