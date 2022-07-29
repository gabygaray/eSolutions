import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-title-container">
        <h1 className="home-title">CREA TU BLOG GRATIS, ¡ES MUY FÁCIL!</h1>
      </div>
      <div className="home-btn-wrapper">
        <Link className="home-btn" to="/register">
          Registrarse
        </Link>
      </div>
    </div>
  );
}
