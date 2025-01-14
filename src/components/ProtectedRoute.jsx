import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('accessToken');
  const isAuthenticated = Boolean(token); 

  console.log('ProtectedRoute: isAuthenticated =', isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
