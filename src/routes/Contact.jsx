import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contacto</h1>
      <p>¡Contáctanos para cualquier pregunta o comentario!</p>
      
      <div className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="4" />
        </div>
        
        <button type="submit">Enviar</button>
      </div>
    </div>
  );
}

export default Contact;
