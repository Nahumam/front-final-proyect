import React from 'react';
import '../styles/contact.css'
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-title-and-subtitle">
          <h1>Contacto</h1>
          <p>¡Contáctanos para cualquier pregunta o comentario!</p>
        </div>
        <div className="contact-form">
          <div className="form-group">
            <label className='label-container' htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className="form-group">
            <label className='label-container' htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email-contact" name="email" />
          </div>

          <div className="form-group">
            <label className='label-container' htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" />
          </div>

          <button className='contact-button-send' type="submit">Enviar</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
