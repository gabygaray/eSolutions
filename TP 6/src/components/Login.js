import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { getUser } from "../services/UserService";
import UserContext from "../services/UserContext";

export default function Login() {
  const { setUser, setIsLogin } = useContext(UserContext);

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState(false);
  let data = [];

  const navigate = useNavigate();

  const handleChange = (event) => {
    let { name, value } = event.target;

    if (name === "email") {
      setUserEmail(value);
    } else {
      setPassword(value);
    }
  };

  const validateUser = async ({ userEmail, password }) => {
    try {
      data = await getUser(userEmail);
      return data[0].email === userEmail && data[0].password === password;
    } catch (error) {}
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let account = { userEmail, password };

    if (await validateUser(account)) {
      setIsLogin(true);
      setUser(data[0]);
      navigate("/AllPost");
    } else {
      setFailedLogin(true);

      setTimeout(() => {
        setFailedLogin(false);
      }, 2500);
    }
  };

  return (
    <div className="login-wrapper">
      <h1 className="login-title">INICIAR SESIÓN</h1>
      <h2 className="login-subtitle">¡Bienvenido!</h2>

      <div className={!failedLogin ? "toast-no-hidden" : "toast-hidden"}>
        EMAIL O CONTRASEÑA INCORRECTOS
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="Ingrese su email"
          className="login-input"
          autoComplete="off"
          required
          onChange={handleChange}
        />

        <label htmlFor="password" className="login-label">
          Contraseña
        </label>
        <input
          name="password"
          type="password"
          placeholder="Ingrese su contraseña"
          className="login-input"
          autoComplete="off"
          required
          onChange={handleChange}
        />
        <div className="login-btn-wrapper">
          <button className="login-btn" type="submit">
            Ingresar
          </button>
        </div>

        <Link className="login-signin" to="/register">
          Registrarse
        </Link>
      </form>
    </div>
  );
}
