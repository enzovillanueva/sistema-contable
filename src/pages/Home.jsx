import React, { useState } from "react";
import { Head } from "../components/Header";
import { Dashboard } from "./Dashboard";
import { Aside } from "../components/Aside";
import { useUser } from "../context/UserProvider";
import "../styles/Home.css";

export const Home = ( {onLogout} ) => {

  const { user } = useUser();
  
  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <>
      <div className={`view-layout`}>
        <Aside />
        <div className="main-content">
          <Head login={true} logout={onLogout} rol={user?.roles} />
          {user?.roles == "SUPERUSER" ? (
            <Dashboard />
          ) : (
            <div>Bienvenido! Agregar Contenido</div>
          )}
          {/* Todo el contenido */}
        </div>
      </div>
    </>
  );
};
