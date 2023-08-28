import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; 

export default function NavBar() {
  return (
    <div className="neomorph navbar"> {}
      <Link to="/" className="linkStyle home"> {}
        Home
      </Link>

      <Link to="/create" className="linkStyle create"> {}
        Create
      </Link>
    </div>
  );
}
