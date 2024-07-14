// src/components/Appointment.js
import React, { useState } from 'react';
import './Appointment.css';
import './Home.css';

function Appointment() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', service: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSuccess(true);
    setForm({ name: '', email: '', phone: '', date: '', service: '' }); // Limpa o formulário após o envio
  };

  return (
    <div>
      <div className="banner"></div>
      <div className="appointment-container">
        <h1>Agendar Consulta</h1>
        {success && <p className="success-message">Consulta agendada com sucesso!</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefone:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Data:</label>
            <input
              type="date"
              name="date"
              id="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="service">Serviço:</label>
            <select
              name="service"
              id="service"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="">Selecione</option>
              <option value="Consulta Geral">Consulta Geral</option>
              <option value="Pediatria">Pediatria</option>
              <option value="Cardiologia">Cardiologia</option>
            </select>
          </div>
          <button type="submit" className="submit-button">Agendar</button>
        </form>
      </div>
    </div>
  );
}

export default Appointment;
