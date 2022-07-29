import React from "react";
import "../styles/NotFound.css";
import notfound from "../images/404.jpg";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound-wrapper">
      <h1 className="notfound-title">
        LA PAGINA A LA QUE INTENTAS ACCEDER NO ESTÁ DISPONIBLE
      </h1>
      <img src={notfound} alt="notfound" className="notfound-img" />

      <div className="notfound-btn-wrapper">
        <Link className="notfound-btn" to="/login">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
}
