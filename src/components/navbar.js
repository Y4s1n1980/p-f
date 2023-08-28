import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; 

export default function NavBar() {
  return (
    <div className="neomorph navbar">

      <Link to="/" className="linkStyle home">
        inicio
      </Link>

      <Link to="/login" className="linkStyle login">
        Iniciar/registrarse
      </Link>

      <Link to="/create" className="linkStyle create">
        Crear
      </Link>

    </div>
  );
}
