import React from 'react';
import Map from './components/map';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;