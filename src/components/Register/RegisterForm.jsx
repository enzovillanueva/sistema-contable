import React from "react";
import { TbSelector } from "react-icons/tb";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const RegisterForm = ({ avatarRegister, form }) => {
    const navigate = useNavigate();
    const initialForm = {
        username: "",
        password: "",
        roles: "USER"
    };

    const { formState, setFormState, onInputChange } = form(initialForm);

    const { username, password, roles } = formState;

    const onClean = () => {
        setFormState(initialForm);
    };

    const onSumbit = async (event) => {
        event.preventDefault();
        console.log(formState);
        const response = await fetch("http://localhost:8080/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password, roles }),
        });

        if (response.ok) {
            navigate("/login");
        } else {
            alert("Error en la registración");
            onClean();
        }
    };

    return (
        <div className="componentForm">
            <form onSubmit={onSumbit}>
                <img src={avatarRegister} alt="" className="avatarLogin" />
                <h2>Registrate</h2>

                <div className="form-group focus sign">
                    <div className="i">
                        <FaUser className="iconSing" />
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

                <div className="form-group focus sign">
                    <div className="i">
                        <FaLock className="iconSing" />
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

                <div className="register-selection">
                    <div>
                        <TbSelector className="iconSing" size={20} />
                        Tipo de usuario:{" "}
                    </div>
                    <select
                        className="selection"
                        name="roles"
                        value={roles}
                        onChange={onInputChange}
                    >
                        <option value="USER">Usuario</option>
                        <option value="SUPERUSER">Administrador</option>
                    </select>
                </div>

                <input
                    type="submit"
                    name="send-form"
                    value={"REGISTRARSE"}
                    className="form-sumbit sign"
                />
            </form>
        </div>
    );
};
