// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

const PrivateRoute = ({ element, ...rest }) => {
  const loginToken = Cookies.get("loginToken")
  console.log(loginToken,"token")
  // If the user is authenticated, render the given element (protected route).
  // Otherwise, redirect them to the login page.
  return loginToken ? (
    element // Render the protected route element if authenticated
  ) : (
    <Navigate to="/login" /> // Redirect to login if not authenticated
  );
};

export default PrivateRoute;
