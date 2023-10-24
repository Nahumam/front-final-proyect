import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Agrega la lógica de autenticación aquí
    if (email && password) {
      // Realiza la autenticación, por ejemplo, llamando a una API o validando los datos
      // Redirige al usuario después del inicio de sesión exitoso
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className="login-page">
      <h1>Iniciar Sesión</h1>
      <div className="login-form">
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button onClick={handleLogin}>Iniciar Sesión</button>
      </div>
    </div>
  );
}

export default Login;
