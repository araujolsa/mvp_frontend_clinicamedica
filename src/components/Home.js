// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="banner">
        {/* A imagem de fundo é definida no CSS */}
      </div>
      <h1>Bem-vindo à Clínica Médica da Família</h1>
      <nav>
        <ul>
          <li><Link to="/services">Serviços</Link></li>
          <li><Link to="/appointment">Agendar Consulta</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
