import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserProvider";
export const LoginForm = ({ avatarLogin, login, form }) => {
    const navigate = useNavigate();
    const { setUser } = useUser();

    const initialForm = {
        username: "",
        password: "",
    };

    const { formState, onInputChange } = form(initialForm);

    const { username, password } = formState;

    const onSumbit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const userData = await response.json();
            login();
            setUser(userData);
            navigate("/home");
        } else {
            alert("error en el inicio de sesión");
        }
    };

    return (
        <div className="componentForm">
            <form onSubmit={onSumbit}>
                <img src={avatarLogin} alt="" className="avatarLogin" />
                <h2>Bienvenido</h2>

                <div className="form-group focus">
                    <div className="i">
                        <FaUser className="icon" />
                    </div>

                    <div>
                        <label htmlFor="username">Nombre de usuario: </label>

                        <input
                            type="text"
                            className="form-input"
                            name="username"
                            value={username}
                            placeholder=""
                            onChange={onInputChange}
                        />
                    </div>
                </div>

                <div className="form-group focus">
                    <div className="i">
                        <FaLock className="icon" />
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

                <a className="a link" href="#">
                    ¿Olvidaste tu contraseña?
                </a>

                <input
                    type="submit"
                    name="send-form"
                    value={"INICIAR SESIÓN"}
                    className="form-sumbit"
                />

                <p className="form-register" href="#">
                    ¿No tienes cuenta?{" "}
                    <Link className="link" to="/register">
                        <b>Registrate</b>
                    </Link>
                </p>
            </form>
        </div>
    );
};
