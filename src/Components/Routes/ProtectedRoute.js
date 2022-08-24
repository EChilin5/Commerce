import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ auth }) => {
  return auth === true ? <Outlet /> : <Navigate to="/" replace />;
};
