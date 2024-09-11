import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({element, isAuthentication}) => {
  if (isAuthentication) return element;
  alert("Ruta protegida. Tienes que iniciar sesión");
  return (
    <Navigate to={"/login"} />
  );
};
