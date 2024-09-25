import React from "react";
import "../styles/components/banner-user.css"

export const Badge = ({ rol }) => {
  return rol === "SUPERUSER" ? (
    <div className="roles a">Administrador</div>
  ) : (
    <div className="roles b">Usuario</div>
  );
};
