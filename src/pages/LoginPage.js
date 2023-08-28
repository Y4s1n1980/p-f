import React, { useState } from "react";
import NavBar from "../components/navbar";
import RegistrationForm from "../components/RegistrationForm";
import LoginForm from "../components/LoginForm";
import "../App.css";

function LoginPage() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const toggleForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <div>
      <NavBar />
      <div className="page-container">
        <div className="form-container">
          {showRegisterForm ? (
            <>
              <RegistrationForm />
              <button onClick={toggleForm} className="neobutton">
                Iniciar Sesión
              </button>
            </>
          ) : (
            <>
              <LoginForm />
              <button onClick={toggleForm} className="neobutton">
                Registrarse
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;


