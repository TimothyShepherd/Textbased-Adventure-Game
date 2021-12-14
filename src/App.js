
import './App.css';
import { Par } from './Components/Parent.js';
import { MockFight } from './Pages/Mock_fight';
import { MapManage } from './Pages/MapManager';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Inv } from './Pages/Inventory';
import { Evt } from './Pages/Events';
import { Shop } from './Pages/Shop';
import { Records } from './Pages/GameWin';
import { GameLoss } from './Pages/GameLose';
function App() {


 return (
  <div className="App">
    {/*<Link className="links" to="/test_data">Test Data</Link>*/}
    {/*<Link className="links" to="/map_manage">Map Screen</Link>*/}
    {/*<Link className="links" to="/test_fight">Test Fight</Link>*/}
    {/*<Link className="links" to="/inventory">Inventory</Link>*/}
    {/*<Link className="links" to="/event">Event</Link>*/}
    {/*<Link className="links" to="/shop">Shop</Link>*/}
    {/*<Link className="links" to="/records">Records</Link>*/}
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