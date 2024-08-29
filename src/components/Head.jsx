import { Badge, Button, NavbarCollapse, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import logo from '../assets/logo-sistema.png'
import '../styles/Head.css'
import { useState } from 'react';

export const Head = ({ login = false, rol }) => {

    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };
    const navigate = useNavigate();

    return (
        <>
            {/* <header className='cabecera'>
                <div onClick={() => navigate("/")} className="logo">
                    <img src={logo} alt="" />
                </div>

                <button className="menu-toggle" onClick={toggleMenu}>
                    &#9776;
                </button>

                <nav className={`links ${isMenuOpen ? "open" : ""}`}>
                    {login && (
                        rol === 'SUPERUSER'
                            ? <div className='roles a'>Administrador</div>
                            : <div className='roles b'><a href="">Usuario</a></div>
                    )}
                    <ul>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Servicios</a></li>
                    </ul>
                </nav>

                {login ?
                    <button onClick={() => navigate("/")} className='log-button out'>
                        <IoIosLogOut size={24} />
                    </button>
                    :
                    <button onClick={() => navigate("/login")} className='log-button in'>
                        Iniciar sesión
                    </button>
                }
            </header> */}


            <header className='cabecera'>
                <div onClick={() => navigate("/")} className="logo">
                    <img src={logo} alt="" />
                </div>

                <nav className='links'>
                { login && (rol == 'SUPERUSER' ? <div className='roles a'>Administrador</div>
                            : <div className='roles b'><a href="">Usuario</a></div> )}
                    <ul>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Servicios</a></li>
                    </ul>
                </nav>
                {login ? <button onClick={() => navigate("/")} className='log-button out'><IoIosLogOut size={24}/></button> 
                : <button onClick={() => navigate("/login")} className='log-button in'>Iniciar sesión</button> }
            </header>
        </>
    );
}