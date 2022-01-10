import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({children, isAdmin, component: element, ...rest }) => {
  const { isAuthenticated, loading, user } = useSelector((state) => {
    console.log("cs",state)
    return state.auth 
    });
  console.log("CA",isAuthenticated)

  
// children->profile
  return !isAuthenticated ? (
    <Navigate to="/login" />
  ) : isAdmin === true && user.role !== "admin" ? (
    <Navigate to="/" />
  ) : 
    children
  ;
  
};

export default ProtectedRoute;
