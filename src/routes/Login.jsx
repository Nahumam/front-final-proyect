import React, { useState } from 'react';
import '../styles/login.css'
import Navbar from '../components/Navbar';
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
    <>
      <Navbar />
      <div className="login-page">
        <h1 className='login-title'>Iniciar Sesión</h1>
        <div className="login-form">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              className='input-container'
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
              className='input-container'
              id='password'
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className='login-button-click' onClick={handleLogin}>Iniciar Sesión</button>
        </div>
      </div>
    </>
  );
}

export default Login;
