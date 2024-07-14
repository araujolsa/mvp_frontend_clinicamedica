// src/components/Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const services = [
  { name: 'Consulta Geral', img: require('../assets/consulta.jpg'), path: '/appointment' },
  { name: 'Pediatria', img: require('../assets/pediatria.jpg'), path: '/appointment' },
  { name: 'Cardiologia', img: require('../assets/cardiologia.jpg'), path: '/appointment' },
];

function Services() {
  return (
    <div>
      <div className="banner"></div>
      <h1>Nossos Serviços</h1>
      <h1>Para melhor atendê-los</h1>
      <ul className="services">
        {services.map((service, index) => (
          <li key={index} className="service-item">
            <div className="service-image-container">
              <img src={service.img} alt={service.name} className="service-image" />
              <Link to={service.path} className="service-name">
                {service.name}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
