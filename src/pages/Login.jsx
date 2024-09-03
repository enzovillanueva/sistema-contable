import { useForm } from "../hooks/useForm";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../styles/FormLoginRegister.css"
import { Head } from "../components/Header";
import avatar from '../assets/avatar.svg'
import website from '../assets/webLogin.svg'

export const Login = ({setIsAuthenticate}) => {

    const navigate = useNavigate();

    const initialForm = {
        username: "",
        password: ""
    };

    const { formState, onInputChange } = useForm(initialForm);

    const { username, password } = formState;

    const onSumbit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:8080/api/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const userData = await response.json();
            setIsAuthenticate(true);
            navigate('/home', {
                state: { user: userData }
            });
        } else {
            alert('error en el inicio de sesión');
        }
    };

    return (
        <>
            <Head />

            <div className="containerLogin">
                <div className="website">
                    <img src={website} alt=""  />
                </div>
                <div className="componentForm">
                    <form onSubmit={onSumbit}>
                        <img src={avatar} alt="" className="avatarLogin" />
                        <h2>Inicia sesión</h2>

                        <div className="form-group focus">
                            <div className="i">
                                <FaUser className="icon"/>
                            </div>

                            <div>
                                <label htmlFor="username">Nombre de usuario: </label>
                                <input
                                    type="text"
                                    className="form-input"
                                    name="username"
                                    value={username}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>

                        <div className="form-group focus">
                            <div className="i">
                                <FaLock className="icon"/>
                            </div>

                            <div>
                                <label htmlFor="password">Contraseña: </label>
                                <input
                                    type="password"
                                    className="form-input"
                                    name="password"
                                    value={password}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>
                        
                        <a className="a link" href="#">¿Olvidaste tu contraseña?</a>
                        

                       
                        <input type="submit" name="send-form" value={"INICIAR SESIÓN"} className="form-sumbit" />
                        

                        <p className="form-register" href="#">
                            ¿No tienes cuenta?{' '}
                            <Link className="link" to="/register"><b>Registrate</b></Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};
