import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import UserContext from "../services/UserContext";

export default function Navbar() {
  const { user, isLogin, setIsLogin } = useContext(UserContext);
  const userName = user.name;

  const handleClick = () => {
    setIsLogin(false);
  };

  return (
    <div className="navbar-wrapper">
      <Link className="myblog" to="/" onClick={handleClick}>
        Mi Blog
      </Link>
      <div>
        <ul>
          {isLogin && <h1 className="navbar-name">{userName}</h1>}
          {!isLogin && (
            <li>
              <Link className="link" to="/Login">
                Iniciar Sesión
              </Link>
            </li>
          )}

          {isLogin && (
            <li>
              <Link onClick={handleClick} className="link" to="/">
                Cerrar Sesión
              </Link>
            </li>
          )}

          {isLogin && (
            <li>
              <Link className="link" to="/AllPost">
                Publicaciones
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
