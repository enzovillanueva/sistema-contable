import { Link, useNavigate } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import logo from '../assets/icono-sistema.png'
import '../styles/Header.css'
import { useState } from 'react';

export const Head = ({ login = false, rol }) => {

    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate();
    
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            <header className='cabecera'>
                <Link className='logo-system' style={ {textDecoration: 'none'} } to={"/"}>
                    <img src={logo} alt="" />
                    <span>Sistema contable</span>
                </Link>

                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <Link style={ {textDecoration: 'none'} } className='link active'>INICIO</Link>
                    <Link style={ {textDecoration: 'none'} } className='link'>SERVICIOS</Link>
                    <Link style={ {textDecoration: 'none'} } className='link'>CONTACTOS</Link>
                </nav>
                
                <div className='div-nav'>
                    { login && (rol == 'SUPERUSER' ? <div className='roles a'>Administrador</div>
                            : <div className='roles b'>Usuario</div> )}

                    {login ? <button onClick={() => navigate("/")} className='log-button out'><IoIosLogOut size={24}/></button> 
                    : <button onClick={() => navigate("/login")} className='log-button in'>Iniciar sesión</button> }
                    <div className='menu-links' onClick={toggleMenu}><CiMenuFries color='white' size={36}/></div>
                </div>
            </header>
        </>
    );
}