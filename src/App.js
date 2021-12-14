import React from "react";
import Map from "./Components/Map/Map";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Shop } from './Pages/Shop';
import { MapManage } from './Pages/MapManager';
import { Inv } from './Pages/Inventory';
import { Evt } from './Pages/Events';
import { Records } from './Pages/GameWin';
import { GameLoss } from './Pages/GameLose';
import { Par } from './Components/Parent.js';
import { MockFight } from './Pages/Mock_fight';

function App() {
  return (
    <div className="App">
      <Map />
      <Router>
        <Routes>
          <Route path="/" element={<MapManage />} />
          <Route path="/test_data" element={<Par />} />          
          <Route path="/map_manage" element={<MapManage />} />          
          <Route path="/test_fight" element={<MockFight />} /> 
          <Route path="/inventory" element={<Inv/>} />          
          <Route path="/event" element={<Evt/>} />          
          <Route path="/shop" element={<Shop/>} />          
          <Route path="/records" element={<Records/>} />     
          <Route path="/lose" element={<GameLoss />} />     
        </Routes>
      </Router>
    </div>
  );
}

export default App;
