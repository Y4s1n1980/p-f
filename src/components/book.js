import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; 

export default function Book({ item }) {
  return (
    <div className="neomorph book-container">
      <Link to={`/view/${item.id}`} className="neobutton">
        <img src={item.cover} width="200" alt={item.title} />
        <div>{item.title}</div>
      </Link>
    </div>
  );
}

