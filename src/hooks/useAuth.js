import { useState, useEffect } from "react";

// Hook para manejar la autenticación con localStorage
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Al usar el hook, se verifica si ya está autenticado
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Función para iniciar sesión
  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  // Función para cerrar sesión
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return { isAuthenticated, login, logout };
};
