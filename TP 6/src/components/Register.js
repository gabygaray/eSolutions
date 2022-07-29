import React, { useState } from "react";
import "../styles/Register.css";
import { setUser } from "../services/UserService";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    let { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const saveAccount = async (user) => {
    try {
      await setUser(user);
    } catch (error) {}
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { ...values };

    if (saveAccount(user)) {
      setRegistered(true);

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
      console.log("El usuario no ha podido registrarse");
    }

    console.log(user);
  };

  return (
    <div className="register-wrapper">
      <h1 className="register-title">Registrese aquí</h1>
      <div
        className={
          !registered ? "register-toast-no-hidden" : "register-toast-hidden"
        }
      >
        TE HAS REGISTRADO CORRECTAMENTE
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="register-label">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          placeholder="Ingrese su nombre"
          className="register-input"
          autoComplete="off"
          onChange={handleChange}
          required
        />

        <label htmlFor="email" className="register-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Ingrese su email"
          className="register-input"
          autoComplete="off"
          required
          onChange={handleChange}
        />

        <label htmlFor="password" className="register-label">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          placeholder="Ingrese su contraseña"
          className="register-input"
          autoComplete="off"
          required
          onChange={handleChange}
        />

        <div className="register-btn-wrapper">
          <button className="register-btn" type="submit">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
}
