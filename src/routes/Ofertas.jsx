import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/ofertas.css'

const Ofertas = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    // Llamada a la API
    fetch('https://api/ofertas')
      .then(response => response.json())
      .then(data => setOffers(data))
      .catch(error => console.error('Error', error));
  }, []);

  return (
    <div>
      {/* Navbar */}
    <Navbar/>

      {/* Ofertas */}
      <div className="offer-container">
        <h2>Ofertas</h2>
        <ul>
          {offers.map(offer => (
            <li key={offer.id}>
              <div>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <span>Precio: {offer.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Ofertas;
