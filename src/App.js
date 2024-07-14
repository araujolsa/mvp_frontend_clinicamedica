  // src/App.js
  import React from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Home from './components/Home';
  import Services from './components/Services';
  import Appointment from './components/Appointment';

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </Router>
    );
  }

  export default App;
