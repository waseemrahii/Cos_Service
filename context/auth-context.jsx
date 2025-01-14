// src/context/auth-context.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a Context for Auth
const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    userId: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const userId = localStorage.getItem('userId');

    if (token && userId) {
      setAuthState({
        token,
        userId,
        isAuthenticated: true,
      });
    }
  }, []);

  const login = (token, userId) => {
    setAuthState({ token, userId, isAuthenticated: true });
    localStorage.setItem('accessToken', token);
    localStorage.setItem('userId', userId);
  };

  const logout = () => {
    setAuthState({ token: null, userId: null, isAuthenticated: false });
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('cart');

  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
