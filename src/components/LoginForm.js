import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/auth/login', { username, password });
      const token = response.data.token;

      localStorage.setItem('token', token);

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className="neomorph">
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="neobutton" onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default LoginForm;
