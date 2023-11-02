import React, { useState } from 'react';
import '../styles/register.css'
import Navbar from '../components/Navbar';

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    // Agrega la lógica de registro aquí
    if (fullName && email && password) {
      // Realiza el registro, por ejemplo, llamando a una API o almacenando los datos
      // Redirige al usuario después del registro exitoso
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-page">
        <h1 className='register-title'>Registrarse</h1>
        <div className="register-form">
          <div className="form-group">
            <label htmlFor="fullName">Nombre completo:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email-register"
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
          <button className='register-button-click' onClick={handleRegister}>Registrarse</button>
        </div>
      </div>
    </>
  );
}

export default Register;
