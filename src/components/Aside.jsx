import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboard, MdOutlineSupervisorAccount } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { IoAnalytics, IoSettingsOutline } from "react-icons/io5";
import { MdDeveloperMode } from "react-icons/md";
import logo from "../assets/icono-sistema.png";
import "../styles/Aside.css";

export const Aside = ({ isOpen, toggleMenu }) => {

  return (
    <aside className={`side-bar ${isOpen ? "open" : ""}`}>
      <Link
        className="logo-aside"
        style={{ textDecoration: "none" }}
        onClick={toggleMenu}
      >
        <img src={logo} alt="" />
        <h2 className="text-logo">Sistema Contable</h2>
      </Link>

      <ul className="links-aside">
        <h4>Menu principal</h4>
        <li>
          <MdOutlineDashboard size={36} color="white" />
          <Link className="elem-link">Dashboard</Link>
        </li>
        <li>
          <TbReportAnalytics size={36} color="white" />
          <Link className="elem-link">Reportes</Link>
        </li>
        <hr />

        <h4>Avanzado</h4>
        <li>
          <IoAnalytics size={36} color="white" />
          <Link className="elem-link">Analisis</Link>
        </li>
        <li>
          <MdDeveloperMode size={36} color="white" />
          <Link className="elem-link">Desarrollador</Link>
        </li>

        <hr />

        <h4>Cuenta</h4>
        <li>
          <IoSettingsOutline size={36} color="white" />
          <Link className="elem-link">Configuración</Link>
        </li>
        <li>
          <MdOutlineSupervisorAccount size={36} color="white" />
          <Link className="elem-link">Usuario</Link>
        </li>
      </ul>
    </aside>
  );
};
