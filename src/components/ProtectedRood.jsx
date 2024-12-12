import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRood({ user, children }) {
  if (user) {
    return children;
  }
  return <Navigate to="/register" />;
}

export default ProtectedRood;
